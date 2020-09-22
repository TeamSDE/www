import { Functor } from "../../core/Functor";
import { Aspect } from "../../core/models";

export class App404Error extends Functor {
	requires = [
		{ undef: Aspect.GeneratedHtml },
		{ undef: Aspect.Redirected },
		// Two below - to ensure we are not adding 404 handling for something that doesn't need it.
		Aspect.Routed,
		Aspect.HttpRequest,
	];
	produces = [Aspect.ResponseCode];

	move(obj: {}): {} {
		return {
			...obj,
			[Aspect.ResponseCode]: 404,
		};
	}
}

const app404ErrorInstance = new App404Error();
export default app404ErrorInstance;
