import { Functor } from "../../core/Functor";
import { PartialObject } from "../../core/helpers/lambdas";
import { Aspect } from "../../core/models";

export class Code404Html extends Functor {
	name = "Code404Html";
	from = [
		{
			aspect: Aspect.ResponseCode,
			lambda: (obj: PartialObject<Aspect.ResponseCode, { [Aspect.ResponseCode]?: number }>) =>
				obj[Aspect.ResponseCode] === 404,
		},
	];
	to = [Aspect.GeneratedHtml];

	move(obj: {}): {} {
		return {
			...obj,
			[Aspect.GeneratedHtml]: "<div>404 page</div>",
		};
	}
}

const code404HtmlInstance = new Code404Html();
export default code404HtmlInstance;
