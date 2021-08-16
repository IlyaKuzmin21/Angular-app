# MyApp

Перейдите по ссылке https://ilyakuzmin21.github.io/Angular-app/ чтобы увидеть проект.

1. На главной странице: 
     1.1 Представлен массив смартфонов (для примера), 
     1.2 В верхней части sidebar с ссылками на домашнюю страницу и страницу корзины (в скобках динамический вывод количества купленных товаров),
     1.3 В левом sidebar есть кнопка, которая динамически изменяет количество карточек в линии,
     1.4 При наведении на карточку, она увеличивается. При нажатии происходит переход на страницу с описанием товара и возможностью его приобрести.

2. На странице с описанием товара:
     2.1 Есть возможность прочитать описание и приобрести его.

3. На странице корзины:
     3.1 Если товар не добавлен в корзину, то появляется надпись "Корзина пуста", а также пустой счетчик суммы,
     3.2 Если товар был добавлен в корзину, то в ней отображается карточка с товаром и цена,
     3.3 Если в корзину было добавлено несколько товаров, то цена динамически складывается,
     3.4 Есть работающая кнопка очистки корзины,
     3.5 Есть ссылка на страницу способов доставки (json объект),
     3.6 Есть формы, заполнив которые пользователь сможет получить в консоль данные для базы данных.

Постепенно буду дополнять функционал и анимации. 
Это мой первый проект на angular, поэтому я усиленно изучаю синтаксис, экспериментирую, а также читаю документацию на официальном сайте Angular.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
