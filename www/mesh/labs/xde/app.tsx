import React from "react";
import { Layout } from "../../../templates/layout";

export const XdeApp = () => (
	<Layout>
		<header>
			<h1>XDE.app</h1>
		</header>

		<section>
			<h2>План</h2>
			<p>
				Рассмотреть категории places, resources, activity. Что интересно, эксперименты
				одобрил и Аристотель (введя: субстанция, количество, качество, отношение,
				пространство, время, состояние, обладание, действие, претерпевание).
			</p>

			<p>
				Сделка, например купля-продажа авто - это тоже объект, который может присутствовать
				в разных категориях (меняется владение, требуются финансовые ресурсы, связано с
				дополнительными действиями по предпродажной подготовке и т.п.). Или пропробовать
				рассмотреть как категориальный workflow (подготовленная машина, купленная машина и
				т.п.).
			</p>
		</section>

		<section>
			<h2>InBox</h2>
			<p>
				Руководствуясь концепцией <a href="#TODO:">Mesh</a>, <a href="#TODO:">Cx</a>,{" "}
				<a href="#TODO:">CODEx</a>, представляющими экосистему XDE, XDE.app предназначен,
				чтобы вобрать в себя и смоделировать всё, что нас окружает. В некотором смысле это
				рантайм для CODEx, написанного на Cx.
			</p>
		</section>
	</Layout>
);

export default XdeApp;
