import React from "react";
import { Layout } from "../../../templates/layout";

export const SignInQuest = () => (
	<Layout>
		<header>
			<h1>Приключения Sign-In</h1>
		</header>

		<section>
			<h2>Преамбула</h2>

			<p>
				Практически всем известна операция "Sign In", когда мы идентифицируемся на
				каком-нибудь сайте. Несмотря на кажущуюся простоту, у этого запроса непростая
				история и он может стать хорошим экспонатом для исследования подхода в дизайне
				приложений в экосистеме .NET.
			</p>
		</section>

		<section>
			<h2>Теории</h2>

			<p>
				Есть несколько теорий, которые интересно рассмотреть в контексте этого исследования:
			</p>

			<ol>
				<li>
					<a href="#TODO:">Теория категорий.</a>
				</li>
				<li>
					<a href="#TODO:">
						Теория типов, унивалентная теория типов, гомотопическая теория типов (HoTT).
					</a>
				</li>
				<li>
					<a href="#TODO:">Конструктивное программирование.</a>
				</li>
				<li>
					<a href="#TODO:">
						Функциональное программирование, dependently typed programming (во многом
						как реальные практики использования теории типов, теории категорий и т.п.).
					</a>
				</li>
			</ol>
		</section>

		<section>
			<h2>Участники</h2>

			<h3>HTML-форма</h3>
			<a id="html-form"></a>
			<p>
				Артефакт, генерируемый как статически, так и динамически. Может состоять из двух
				независимых блоков, отвечающих за ввод и отправку, а также за валидацию. Последнюю
				функциональность имеет смысл выделить, поскольку её реализация может отличаться.
				Например, сообщения об ошибках могут выводиться не непосредственно в форме, а в виде
				нотификаций.
			</p>
		</section>

		<section>
			<h2>Тесты</h2>

			<p>
				Проверка классическими функциями кэширования/мемоизации, журналирования, валидации.
				Когда мы модернизируем существующий процесс и в случае с кэшированием "заворачиваем"
				существующий функционал в кэширующий. В случае журналирования добавляем отдельную
				"ветку" процесса. А валидация становится чем-то вроде "вентиля" или скорее семафора.
			</p>

			<p>
				TODO:Исследование с кэшированием интересно рассмотреть и на более приземлённом
				примере. Скажем, есть приложение, которое использует функцию факториала. Я хочу
				заменить это функцию факториала на <a href="#TODO:">Higher Order Functions</a>{" "}
				мемоизации. У функциональных языков либо может быть предусмотрена такая возможность,
				либо они недооценивают и недопонимают DIP/service-container.
			</p>
		</section>

		<section>
			<h2>Workflow</h2>

			<h3>Cases</h3>
			<p>
				Alerting. Были ситуаций, когда возникала необходимость анализировать параметры
				запроса и при его аномальных значениях формировать уведомление. При этом
				существующий workflow не менялся. Эта задача похожа на тонкий тюнинг журналирования.
				Не исключено, что он может и менять Workflow. Можно добавить соответствующий кейс
				для главного действующего лица (SignIn).
			</p>

			<h3>InBox</h3>
			<p>
				Исследовать railway-концепции и маршрутизацию в целом. В широком смысле этого слова
				(от транспортных артерий то цифровых сетей).
			</p>
			<p>
				Эксплуатировать шаблон <a href="#TODO:">State</a>. Просто его инстанцирование может
				быть более замысловатым, а сам он может участвовать в формировании класса запроса
				(или категорией-обобщением запроса).
			</p>
			<p>
				Обычный бытовой task management часто требует выполнения рутинных операций.
				Например, отметить результат в collaboration tool (например, JIRA), внести в
				биллинг, удалить временные файлы и т.п. Подобные ситуации могут быть очень похожи с
				категориями Valid, Unsafe, Db и т.п. для SignIn. Будет интересно рассмотреть и их,
				может даже окажутся близкие аналогии.
			</p>
		</section>

		<section>
			<h2>Тестирование</h2>

			<p>
				Размышления об аспектном хранении объектов могут помочь в сэмплинге. То имя и
				описание тестируемого объекта, которое я использовал в некоторых проектах для
				интеграции с Gherkin явно претендуют на звание такого аспекта.
			</p>
			<p>
				Скорее всего речь должна идти о более широком круге задач - спецификации.
				Объединяющем тестирование с ubiquitous language, документацией и служащей в целом
				для оценка качества итогового продукта. Спецификация - то, как видит конечный
				продукт пользователь, заказчик.
			</p>

			<p>
				Sample-классы могли бы генерироваться полу-автоматически (некоторые из
				partial-части).
			</p>
		</section>

		<section>
			<h2>Aspect-oriented approach</h2>

			<p>
				Исследовать нечто похожее на <a href="#TODO:">columnar-storage</a>, но применительно
				к дизайну аспектов (интерфейсов) класса-запроса. Вместо того, чтобы создавать
				композитный класс, их реализующий, можно хранить его аспекты отдельно (с кодом
				запроса). А workflow может определяться через населённость алгебраических классов.
				Например, некий обработчик может ожидать Valid+Authenticated. Интуитивно, очень
				интересно бы выглядели типичные конструкции CRUD-запросов, где львиная доля полей в
				части INSERT/UPDATE/SELECT пересекается. Для этой цели можно расширить немного
				судьбу SignIn-запроса механизмами добавления, обновления, блокировки пользователя.
			</p>

			<p>
				За хранение аспектов может отвечать некоторый интерфейс IAspectProvider&lt;T&gt;,
				реализация которого в зависимости от аспектов может отличаться. Скажем, аспекты
				Lifetime могут храниться в виде массива структур, булевы аспекты как битовые карты и
				т.п. За основу в качестве кода запроса можно взять простой числовой счётчик. Тогда
				даже простой массив аспектов может легко адаптироваться под бинарный поиск.
			</p>
		</section>

		<section>
			<h2>Flow / Pipeline</h2>

			<ul>
				<li>
					GET-запрос к /security/sign-in.
					<ul>
						<li>Частью исследования может быть и ошибка 404.</li>
					</ul>
				</li>
				<li>
					HTTPS-guard.
					<ul>
						<li>
							Если запрос был осуществлён по протоколу HTTP, то перенаправить на тот
							же роут через HTTPS. На этом обработка запроса закончится.
						</li>
					</ul>
				</li>
				<li>
					Генерация и возврат HTML-формы.
					<ul>
						<li>
							Генерируем HTML-артефакт формы/страницы, который содержит
							login/password/rememeber-поля, каким-то образом сформированный контейнер
							для ошибок, а также надо обеспечить клиента информацией об ошибках,
							поскольку передаваться они будут в виде кода.
						</li>
					</ul>
					<ul>
						<li>
							Ошибки (валидации, идентификации, аутентификации) являются частью формы.
						</li>
					</ul>
				</li>
				<li>
					Пользовательский ввод.
					<ul>
						<li>
							Может выступать в роли некоторой абстракции, которую будет реализовывать
							Selenium-тесты.
						</li>
					</ul>
				</li>
				<li>
					Кодирование формы в JSON на клиенте и отправка на "/api/v1/security/sign-in".
				</li>
				<li>
					HTTPS-guard.
					<ul>
						<li>Если запрос был осуществлён по протоколу HTTP, то вернуть ошибку.</li>
					</ul>
				</li>
				<li>Получение JSON запроса HTTP-сервером.</li>
				<li>
					Журналирование. Просто проходит через фильтр. Пишет в некий IEventLog.
					<ul>
						<li>
							Http&lt;SignInRequest&gt; &rarr; Http&lt;SignInRequest&gt; сам в себя?
						</li>
						<li>
							Может быть несколько команд для журналирования в разные провайдеры,
							выполнять параллельно.
						</li>
						<li>Может быть полностью асинхронным.</li>
					</ul>
				</li>
				<li>
					Аутентификация. Проверяет на IP, JWT. Расширяет/создаёт context. Потенциально
					генерирует ошибки 401/
					<ul>
						<li>Может понадобиться доступ к хранилищу.</li>
						<li>Может быть несколько команд.</li>
					</ul>
				</li>
				<li>Интеллектуальный load balancer.</li>
				<li>
					JSON декодирование. Потенциально генерирует ошибку 400. Может понадобиться
					доступ к настройкам (де)сериализации.
					<ul>
						<li>Json&lt;SignInRequest&gt; &rarr; NotValidated&lt;SignInRequest&gt;</li>
						<li>
							Декодирование в JsonObject может вообще не иметь смысла, даже в
							SignIn-класс сомнительно. Можно интегрировать в парсер property-based
							валидаторы и отправить span-параметры сразу в SP.
						</li>
					</ul>
				</li>
				<li>
					Валидация. Потенциально генерирует ошибку 422.
					<ul>
						<li>Json&lt;SignInRequest&gt; &rarr; Valid&lt;SignInRequest&gt;</li>
						<li>Json&lt;SignInRequest&gt; &rarr; Invalid&lt;SignInRequest&gt;</li>
						<li>
							Может быть цепочка валидаций для различных интерфейсов. В том числе
							параллельных.
						</li>
					</ul>
				</li>
				<li>
					Может быть какой-то дополнительный препроцессинг запроса
					(Preprocessed&lt;SignInRequest&gt;).
					<ul>
						<li>
							Проставить дату запроса, чтобы проконтролировать хаммеринг.
							Pass-through.
						</li>
						<li>Подсолить Password. GDPR hashing. Pass-through.</li>
						<li>
							Теоретически все процессы, которые могут быть распараллелены и мы
							ожидаем Task.WaitAll.
						</li>
					</ul>
				</li>
				<li>
					Alerting. Генерация дополнительной асинхронной ветви обработки с отправкой
					уведомлений.
					<ul>
						<li>
							В процессинге запросов выглядит не очень, поскольку в нём ожидается
							выполнение всех ветвей, а alerting может быть полностью автономным.
							Плюс, ему может понадобиться уже сформированный SignInRequest.
						</li>
					</ul>
				</li>
				<li>
					Отправка запроса в базу
					<ul>
						<li>А если REST? И куда девать остальное "мясо" бизнес-команды?</li>
						<li>
							Автоматический роутинг в базу (Preprocessed&lt;&gt; &rarr;
							DbRequest&lt;&gt;) для определённых категорий запросов?
						</li>
						<li>Есть такой пользователь</li>
						<li>Ошибка базы (SomeDbException)</li>
						<li>Нет такого пользователя (UserNotFoundException)</li>
						<li>
							Хаммеринг (следующие попытки будут доступны через...)
							(UserHammeringException)
						</li>
					</ul>
				</li>
				<li>
					Обработка ошибок (Exception &rarr; FormattedException&lt;TException&gt;)
					<ul>
						<li>Журналирование</li>
						<li>Уведомления</li>
						<li>Редирект на сконфигурированную страницу для ошибки</li>
						<li>Форматирование и перевод ошибок</li>
					</ul>
				</li>
				<li>
					Рендеринг JSON-ответа. По аналогии с декодированием можно сразу писать в HTTP
					Response с использованием некоторого JsonWriter для класса SignIn.
					<ul>
						<li>
							Надо учесть, что JsonReader/JsonWriter работают с разными структурами.
							Если первый - (string login, string passwordm, bool Remember), то второй
							- с UserEntity, Exception.
						</li>
					</ul>
				</li>
				<li>
					Отправка HTTP-ответа.
					<ul>
						<li>
							Одним из продуктов может быть генерация Cookie. Причём, если в начальной
							форме была включена опция "Remember", то она повлияет на значение
							Expires куки.
						</li>
						<li>
							Если в изначальном запросе была опция ReferrerUrl, то мы можем
							перенаправить на указанную страницу (если она не относится к разряду
							системных) или на страницу по умолчанию в случае отсутствия.
						</li>
					</ul>
				</li>
				<li>
					Декодирование JSON-ответа и модернизация DOM/State. Скажем, вывод информации об
					ошибке.
				</li>
			</ul>
		</section>

		<section>
			<h2>InBox</h2>

			<p>
				Одна из причин выбора платформы .NET заключается в том, что помимо гаммы языков,
				которые дают почти максимум возможностей для самых разносторонних экспериментов (C#,
				F#, F*), она также предлагает и мощные средства рефлексии, динамической компиляции и
				управляемой компиляции. Это очень важно, поскольку есть мнение, что не обязательно
				все возможности по валидации программы должны быть возложены на compile-time. И
				некоторые фазы, которые, скажем, Haskell реализует при весьма медлительной
				компиляции или возможности вроде dependent types, которые в самом C# отсутствуют,
				могут стать частью его runtime-ядра, который используя рефлексию и динамическую
				компиляцию может достраивать приложение на лету. По сути, классический переход
				compile &rarr; runtime может дополниться ещё одним этапом compile &rarr;
				meta-runtime &rarr; runtime. В качестве альтернативы может выступить управляемая
				компиляция, где рефлексию заменит анализ AST а динамическую компиляцию -
				кодогенерация.
			</p>

			<p>
				Dependent-types программирование может быть реализовано в рантайме. Для workflow
				можно давать определение, что в этом направлении идут (в эту категорию попадают) те
				запросы, где login и пароль не пустой, что есть некоторый Valid&lt;TRequest&gt;.
			</p>

			<p>
				Json&lt;TRequest&gt; может реализовывать парсинг именно заданного запроса TRequest.
				Скорее всего, сама категория JSON может исчезнуть и выродиться в морфизм. Вместо
				разбора JSON как универсальной структуры данных, создавая ещё одну сложную
				конструкцию в памяти, можно линейно читать входящий HTTP-поток и тут же формировать
				TRequest, без посредников и практически с встроенной валидацией поскольку по сути
				ориентируется на схему заданную TRequest. На примере SignIn он может прочитать
				первый символ и если квадратная скобка а не фигурная, то сразу выдать исключение.
				Если за фигурной скобкой не идёт имя "login" или "password", то также выдать
				исключение и т.п. Аналогичную ситуацию можно наблюдать при чтении из базы данных и
				записи в неё, когда (де)сериализация может производиться непосредственно из
				транспортного протокола базы данных и именно для заданного формата данных. Без
				использования дополнительных посредников вроде DataSet, SqlDataRecord, которые
				дублируют ещё и метаинформацию. Если попробовать подвести индуктивный итог
				рассуждению, то ни JSON, ни SqlDataRecord не являются продуктами, которые нас
				интересуют, что ставит под сомнение рациональность их существования.
			</p>

			<p>
				Важно не забыть рассмотреть и то, как данные для SignIn будут представлены в базе,
				предполагая, что мы не знаем, кто именно идентифицируется - пользователь или внешняя
				система. Не знаем как - логином и паролем или через социальную сеть и т.п.
			</p>

			<p>
				Исследуя реализации очень важно анализировать, как сложно даются те или иные
				изменения. Они, по возможности, должны выглядеть итеративно. И добавлять новый
				функционал без стресса.
			</p>

			<ol>
				<li>
					<a href="https://habr.com/ru/post/182340/">
						F* – новый язык с зависимыми типами для .Net
					</a>
				</li>
			</ol>
		</section>
	</Layout>
);

export default SignInQuest;
