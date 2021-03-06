## TODO:Краткое описание и примеры Gherkin

## TODO: Bad way

Gherkin - это один очень большой компромис. Вводится дополнительный диалект,
который условно понимается обеими сторонами. Но из-за этой его природы "меж двух
миров" он не очень удобен для использования также обеими сторонами.

Теоретически на нём могли бы писать заказчики. Но практически этого не
происходит. Дело не в языке, а в формализации требований, чего заказчик зачастую
реализовать не может и с Gherkin работает преимущественно в "режиме для чтения".

Gherkin рудиментарен и практически не расширяем. Нет возможности описывать типы
(а ADT в функциональных языках могут определять логику валидации), слабая
возможность структурирования, повторного использования. Всё это приводит к тому,
что база спецификаций сильно раздувается или существенно урезается.

Всё сводится к тому, что разработчик "терпит" его использование, тратя время на
всевозожные "хаки" и поддержку дополнительного слоя в коде (Cucumber, SpecFlow,
etc), который нередко конфликтует с фреймворками, используемыми для юнит-тестов
и доставляющим иные хлопоты (старая история BoDi-контейнера для SpecFlow).

Как результат мы видим очень много вводных статей из серии "как это могло бы
быть здорово" и очень мало проектов, реально использующих. Даже беглый взгляд
на статистику https://github.com/cucumber/cucumber-js/network/dependents - 10K
использованиё (у того же Jest в 100 раз больше) из которых 99% - просто
эксперименты, примеры или интеграция.

TODO:Можно будет добавить примеры наших спецификаций и ubiquitous language,
чтобы продемонстрировать ситуации, когда Gherkin не работает. Например, те же
сэмплы.

## TODO: Good way

Предположим, что есть надстройка над языком, который используется в экосистеме
разработки, создающая максимум удобств для интервьюера и создающая артефакты
непосредственно на используемом языке программирования. Это могут быть
натуральные языковые возможности (особенно DSL на функциональных или
конкантенативных языках, макросы Rust), специализированные DSL, вспомогательные
CLI. Она функциональная, гибкая, расширяемая, всё как ожидается в инженерной
среде.

Эта надстройка таким образом описывает данные и сценарии, что не составляет
труда сгенерировать из них документацию для заказчика. Учитывая, что в Gherkin
"очеловеченность" достигается простой конверсией регулярными выражениями строк
во внутренние структуры, обратная операция - это ещё более простое
форматирование. Таким образом результат будет, как минимум, не хуже.

Таким образом, в процессе сбора требований интервьюер обладает инструментом,
который не только предоставляет удобный способ для регистрации требований, но
может сразу осуществлять предварительную проверку на согласованность, генерацию
вспомогательных артефактов, скажем, наброски пользовательских интерфейсов,
документацию и даже MVP.

В таком процессе культивация Agile-принципов не то, чтобы теряет смысл, а
становится органичным результатом. Интервьюер записывает, среда тут же даёт либо
TDD Red, если состояния не достаточно для MVP или сам MVP в результате TDD
Green.

## TODO:Примеры из SDD

## TODO:InBox

-   Есть некоторая похожесть на CQRS. Нет спецификации как единого "расшаренного"
    состояния. Есть команды (C) для формирования спецификации и запросы (Q) для
    просмотра документации.
