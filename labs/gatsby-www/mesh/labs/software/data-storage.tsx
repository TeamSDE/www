import React from "react";
import { Layout } from "../../../templates/layout";

export const DataStorage = () => (
	<Layout>
		<header>
			<h1>Хранилища данных</h1>
		</header>

		<section>
			<h2>InBox</h2>
			<p>
				Интересно провести анализ различных способов хранения данных. От низкоуровневых
				(массивы, списки и т.п.) до более (B-Tree, LSM) и более комплексных (columnar).
				Особенно интересует columnar. Не исключено, что если сбалансировать между row- и
				columnar- (aspect-oriented), то может получиться переспективно.
			</p>
		</section>

		<section>
			<h2>Aspect-oriented</h2>

			<p>
				Рассмотреть aspect-oriented подход в рамках работы с памятью. Изменение парадигмы
				того, что мы храним, может повлиять на то, как мы храним. Если большинство структур
				станет одинакового размера (аспекты), то механизмы (де)аллокации могут существенно
				измениться.
			</p>
			<p>
				Какие базовые хранилища (ссылка на соответствующую секцию с RocksDB, LevelDB и
				похожими KV) можно будет использовать в качестве основы?
			</p>
			<p>Исследовать существующие columnar-решения.</p>
			<p>
				Возможно, все объекты будут прошиты одним инкрементным идентификатором (в идеале
				timestamp-based, но он может создать проблемы).
			</p>
		</section>
	</Layout>
);

export default DataStorage;
