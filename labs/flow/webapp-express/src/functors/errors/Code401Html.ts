import {
	THttpStatusCode,
	HttpStatusCode,
	TEndpointType,
	EndpointType,
	Endpoint,
	THtmlHtmlTagged,
	HtmlHtmlTagged,
} from "@xde.labs/aspects";
import { PrimitiveFunctor } from "@xde.labs/flow-manager";

export class Code401Html extends PrimitiveFunctor<
	THttpStatusCode<401> & TEndpointType,
	THtmlHtmlTagged
> {
	name = "Code401Html";
	from = [
		{
			aspect: HttpStatusCode,
			lambda: (obj: THttpStatusCode<401>) => obj[HttpStatusCode] === 401,
		},
		{
			aspect: EndpointType,
			lambda: (obj: TEndpointType) => obj[EndpointType] === Endpoint.Html,
		},
	];
	to = [HtmlHtmlTagged];

	distinct() {
		return {
			[HtmlHtmlTagged]: "<div>401 page</div>",
		};
	}
}

const code401HtmlInstance = new Code401Html();
export default code401HtmlInstance;
