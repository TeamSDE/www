import { PrimitiveFunctor, Some } from "@xde.labs/flow-manager";
import {
	GeneratedApiBody,
	HttpStatusCode,
	TGeneratedApiBody,
	THttpStatusCode,
	HttpRouted,
	THttpRouted,
	TNodejsExpressRequest,
	NodejsExpressRequest,
} from "@xde.labs/aspects";
import { EndpointErrorCode } from "@xde.labs/endpoint";

import { SingUpRequest, TSignUpRequest } from "../../../../models/user/SignUpRequest";

export const ApiValidSignUpRequest = "ApiValidSignUpRequest" as const;
export type TApiValidSignUpRequest = {
	[ApiValidSignUpRequest]: TSignUpRequest;
};

export class ApiValidSignUpRequested extends PrimitiveFunctor<
	TNodejsExpressRequest & THttpRouted,
	TApiValidSignUpRequest | (TGeneratedApiBody & THttpStatusCode<422>)
> {
	name = "ApiValidSignUpRequested";
	from = [
		NodejsExpressRequest,
		{
			aspect: HttpRouted,
			lambda: (obj: THttpRouted) =>
				!!obj[HttpRouted]?.path.startsWith("/api/sign-up") &&
				obj[HttpRouted].method === "POST",
		},
	];
	to = [
		{
			aspect: [[ApiValidSignUpRequest], [GeneratedApiBody, HttpStatusCode]],
			lambda: Some,
		},
	];

	async distinct(obj: TNodejsExpressRequest) {
		const request = new SingUpRequest(obj[NodejsExpressRequest].body);
		const validation = await request.validate();

		if (!Array.isArray(validation)) {
			return {
				[ApiValidSignUpRequest]: validation,
			};
		} else {
			return {
				[GeneratedApiBody]: {
					result: false,
					code: EndpointErrorCode.UnprocessableEntity,
					details: validation,
				},
				[HttpStatusCode]: 422 as const,
			};
		}
	}
}

const apiValidSignUpRequestedInstance = new ApiValidSignUpRequested();
export default apiValidSignUpRequestedInstance;
