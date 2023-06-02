# Грейдирование «Счётчик калорий»

* Студент: [Елисей Плещев](https://up.htmlacademy.ru/univer-js1/2/user/2242857).

# Что нужно сделать

Ваша задача —  выполнить проект в соответствии с техническим заданием и критериями.

При выполнении грейдирования необходимо считать количество часов, потраченных на реализацию проекта. Перед отправкой проекта на проверку обязательно внесите количество часов, затраченных на проект, в файл Readme.md.

Когда работа над проектом будет закончена, вы можете отправить результат своей работы на проверку.

# Техническое задание

## О проекте

В этом проекте вы будете программировать одностраничное приложение, которое работает в браузере — счётчик калорий. Приложение позволяет рассчитать индивидуальную суточную норму калорий. Интерфейс состоит из формы с полями ввода и блока для вывода результата. В эталонной реализации используются нативные браузерные API.

## Состояние по умолчанию

* Выбран мужской пол.
* В полях ввода стоит 0.
* Выбрана «минимальная» физическая активность.
* Кнопка «Рассчитать» неактивна.
* Кнопка сброса данных из полей ввода неактивна.
* Блок с выводом информации о калориях скрыт.

## Кнопка «Рассчитать»

* Становится активна только когда заполнены все поля ввода.
* По клику на кнопку появляется блок с информацией о калориях, если до этого он не был показан. Если блок уже находится на странице, клик по кнопке обновляет расчёты, выводится актуальная информация.

## Кнопка «Очистить поля и расчёт»

* Становится активна, когда хотя бы одно числовое поле заполнено.
* При клике все элементы приложения сбрасываются до состояния по умолчанию: числовые поля очищаются (плейсхолдер 0), пол становится мужской, физическая активность «минимальная», блок с информацией о калориях скрывается.

## Формулы

### Поддержание веса

#### Для женщин:

N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) − 161

#### Для мужчин:

N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) + 5

### Коэффициент активности

Полученное значение (N) умножаем на коэффициент активности. Результат и будет нормой калорий для поддержания веса.

* Минимальная: 1.2.
* Низкая: 1.375.
* Средняя: 1.55.
* Высокая: 1.725.
* Очень высокая: 1.9.

### Формулы для набора и сброса веса

* Набор веса: прибавляем 15% от нормы к этой норме.
* Сброс веса: вычитаем 15% от нормы из этой нормы.

## Стартовый шаблон

Вы можете начинать работу со стартового шаблона. В него включена готовая вёрстка проекта. Для начала работы вам нужно установить на компьютер удобный редактор кода и открыть в нём стартовый шаблон. У проекта такая структура:

* в файле index.html находится разметка проекта, её можно разбивать на отдельные компоненты;
* в папках css, fonts и img находятся необходимые для оформления статические ресурсы;
* в папке js есть заготовка для будущих скриптов — файл script.js — начинать работу можно в нём.

# Результаты

Затраченое время: 2 часа