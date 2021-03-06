import {
	Authorized,
	HttpSecured,
	THttpStatusCode,
	HttpStatusCode,
	THttpHeaders,
	HttpRoute,
	THttpRoute,
	HttpHeaders,
	HtmlTagHtml,
	THtmlTagHtml,
	Sent,
	TSent,
	HttpRedirected,
	THttpRedirected,
} from "@xde.labs/aspects";

import { AppAdminRouteAllow, TestHttpRequest, TTestHttpRequest } from "./models";
import { Some } from "../../helpers/lambdas";
import code404HtmlInstance from "./errors/Code404Html";
import httpRoutedInstance from "./http/HttpRouted";
import app404Instance from "./app/App404";
import code401HtmlInstance from "./errors/Code401Html";
import code301RedirectedInstance from "./http/Code301Redirected";
import htmlSenderInstance from "./http/HtmlSender";
import admin401Instance from "./app/admin/Admin401";
import adminPanelHtmlInstance from "./app/admin/AdminPanelHtml";
import appAdminRouteAllowedInstance from "./app/AppAdminRouteAllowed";
import appSecuredRouteRedirectedInstance from "./app/AppSecuredRouteRedirected";
import httpHasAuthInstance from "./security/HttpHasAuth";
import httpSecuredInstance from "./http/HttpSecured";
import { CompositeFunctor } from "../../functor/CompositeFunctor";
import { deepCloneUnsafe } from "../../../../common/src/object/clone";

export class AppRenderer extends CompositeFunctor<
	THttpStatusCode | (THttpHeaders & THttpStatusCode) | THtmlTagHtml,
	TSent | THttpRedirected
> {
	name = "AppRenderer";
	from = [
		{
			aspect: [[HttpStatusCode], [HttpStatusCode, HttpHeaders], [HtmlTagHtml]],
			lambda: Some,
		},
	];
	to = [
		{
			aspect: [Sent, HttpRedirected],
			lambda: Some,
		},
	];
}

const renderer = new AppRenderer();

renderer.addChildren([
	code404HtmlInstance,
	code401HtmlInstance,
	code301RedirectedInstance,
	htmlSenderInstance,
]);

export class AppMain extends CompositeFunctor<
	TTestHttpRequest,
	THttpRoute | (THttpStatusCode & THttpHeaders) | THttpStatusCode | THtmlTagHtml
> {
	name = "AppMain";
	from = [TestHttpRequest];
	to = [
		{
			aspect: [[HttpRoute], [HttpHeaders, HttpStatusCode], [HttpStatusCode], [HtmlTagHtml]],
			lambda: Some,
		},
	];
}

const appMain = new AppMain();

appMain.addChildren([
	admin401Instance,
	adminPanelHtmlInstance,
	appAdminRouteAllowedInstance,
	appSecuredRouteRedirectedInstance,
	httpHasAuthInstance,
	httpRoutedInstance,
	httpSecuredInstance,
]);

export class Root extends CompositeFunctor<TTestHttpRequest, TSent> {
	name = "Root";
	from = [TestHttpRequest];
	to = [Sent];
}

export const root = new Root();
root.addChildren([appMain, app404Instance, renderer]);

const httpRequest: TTestHttpRequest = {
	[TestHttpRequest]: {
		authCookie: "valid",
		host: "www.host",
		path: "/security/adminPanelRoute",
		isTLS: true,
	},
};

it("should return 401 on admin route for non-admin", async () => {
	const res = await root.map(httpRequest);
	expect(res).toEqual(
		expect.objectContaining({
			[Authorized]: true,
			[HttpRoute]: {
				hostname: httpRequest[TestHttpRequest].host,
				originalUrl: httpRequest[TestHttpRequest].path,
				path: httpRequest[TestHttpRequest].path,
				protocol: "https",
			},
			[HttpSecured]: true,
			[AppAdminRouteAllow]: false,
			[HttpStatusCode]: 401,
			[HtmlTagHtml]: expect.any(String),
			[Sent]: true,
		})
	);
	expect(res).not.toHaveProperty(HttpHeaders);
});

it("should return 401 on non-existing security route for non-admin", async () => {
	const req = deepCloneUnsafe(httpRequest);
	req[TestHttpRequest].path = "/security/non-existing";
	const res = await root.map(req);
	expect(res).toEqual(
		expect.objectContaining({
			[Authorized]: true,
			[HttpRoute]: {
				hostname: req[TestHttpRequest].host,
				originalUrl: req[TestHttpRequest].path,
				path: req[TestHttpRequest].path,
				protocol: "https",
			},
			[HttpSecured]: true,
			[AppAdminRouteAllow]: false,
			[HttpStatusCode]: 401,
			[HtmlTagHtml]: expect.any(String),
			[Sent]: true,
		})
	);
	expect(res).not.toHaveProperty(HttpHeaders);
});

it("should return 301 on security route without tls for non-admin", async () => {
	const req = deepCloneUnsafe(httpRequest);
	req[TestHttpRequest].isTLS = false;
	const res = await root.map(req);
	expect(res).toEqual(
		expect.objectContaining({
			[Authorized]: true,
			[HttpRoute]: {
				hostname: req[TestHttpRequest].host,
				originalUrl: req[TestHttpRequest].path,
				path: req[TestHttpRequest].path,
				protocol: "http",
			},
			[HttpSecured]: false,
			[HttpHeaders]: { Location: "https://www.host/security/adminPanelRoute" },
			[HttpStatusCode]: 301,
			[HttpRedirected]: true,
		})
	);
	expect(res).not.toHaveProperty(AppAdminRouteAllow);
	expect(res).not.toHaveProperty(HtmlTagHtml);
	expect(res).not.toHaveProperty(Sent);
});

it("should return 301 on security route without tls for admin", async () => {
	const req = deepCloneUnsafe(httpRequest);
	req[TestHttpRequest].isTLS = false;
	req[TestHttpRequest].path = "/security/non-existing";
	(req as any).AdminFlag = true;

	const res = await root.map(req);

	expect(res).toEqual(
		expect.objectContaining({
			[Authorized]: true,
			[HttpRoute]: {
				hostname: req[TestHttpRequest].host,
				originalUrl: req[TestHttpRequest].path,
				path: req[TestHttpRequest].path,
				protocol: "http",
			},
			[HttpSecured]: false,
			[HttpHeaders]: { Location: "https://www.host/security/non-existing" },
			[HttpStatusCode]: 301,
			[HttpRedirected]: true,
		})
	);
	expect(res).not.toHaveProperty(AppAdminRouteAllow);
	expect(res).not.toHaveProperty(HtmlTagHtml);
	expect(res).not.toHaveProperty(Sent);
});

it("should show admin panel for valid admin request", async () => {
	const req = deepCloneUnsafe(httpRequest);
	(req as any).AdminFlag = true;

	const res = await root.map(req);

	expect(res).toEqual(
		expect.objectContaining({
			[Authorized]: true,
			[HttpRoute]: {
				hostname: req[TestHttpRequest].host,
				originalUrl: req[TestHttpRequest].path,
				path: req[TestHttpRequest].path,
				protocol: "https",
			},
			[HttpSecured]: true,
			[AppAdminRouteAllow]: true,
			[HtmlTagHtml]: "<div>secret dashboard</div>",
			[Sent]: true,
		})
	);
	expect(res).not.toHaveProperty(HttpRedirected);
	expect(res).not.toHaveProperty(HttpHeaders);
});

it("should return 404 for non-existing admin route for admin user", async () => {
	const req = deepCloneUnsafe(httpRequest);
	req[TestHttpRequest].path = "/security/non-existing";
	(req as any).AdminFlag = true;
	const res = await root.map(req);

	expect(res).toEqual(
		expect.objectContaining({
			[Authorized]: true,
			[HttpRoute]: {
				hostname: req[TestHttpRequest].host,
				originalUrl: req[TestHttpRequest].path,
				path: req[TestHttpRequest].path,
				protocol: "https",
			},
			[HttpSecured]: true,
			[AppAdminRouteAllow]: true,
			[HttpStatusCode]: 404,
			[HtmlTagHtml]: expect.any(String),
			[Sent]: true,
		})
	);
	expect(res).not.toHaveProperty(HttpRedirected);
});

it("should return 404 on any non-existing route for any user", async () => {
	const req = deepCloneUnsafe(httpRequest);
	req[TestHttpRequest].path = "/non-existing/adminPanelRoute";
	req[TestHttpRequest].authCookie = "";
	const res = await root.map(req);

	expect(res).toEqual(
		expect.objectContaining({
			[Authorized]: false,
			[HttpRoute]: {
				hostname: req[TestHttpRequest].host,
				originalUrl: req[TestHttpRequest].path,
				path: req[TestHttpRequest].path,
				protocol: "https",
			},
			[HttpSecured]: true,
			[HttpStatusCode]: 404,
			[HtmlTagHtml]: "<div>404 page</div>",
			[Sent]: true,
		})
	);
	expect(res).not.toHaveProperty(AppAdminRouteAllow);
	expect(res).not.toHaveProperty(HttpRedirected);
});
