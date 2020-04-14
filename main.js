let button = document.querySelector(".button");
button.onclick = function () {
  document.write("<p>ЦЁМИКИ</p>");
  // console.log(" Кнопка сработала");
};

// //переменные и условия
// var x = "Владик";
// var y = " пулька";
// var result;
// result = document.write(x + y);
// //
// var a = 15;
// if (a < 18 || a > 60) {
//   document.write("<p>вам меньше 18ти или больше 60ти</p>");
// }
// //
// document.write("<br>");

// // конструкция switch.case
// var z;
// z = 5;
// switch (z) {
//   case 0:
//     document.write("<p>Значение = 0</p> ");
//     break;
//   case 5:
//     document.write(" <p>Значение = 5 </p>");
//     break;
//   case 95:
//     document.write("<p>Значение = 95</p> ");
//     break;
//   default:
//     document.write(" <p>не верное значение</p>");
//     document.write(" <p>не верное значение</p>");
// }
// document.write("<br>");

// // создание массива и его вывод в консоль методом  cobsole.log
// var countries = [" russia "," USA "," italy "," farnce "];
// document.write(countries[0]);
// document.write(countries[1]);
// document.write(countries[2]);
// document.write(countries[3]);
// // console.log(countries.length);
// document.write("<br>")
// for (var i = 0; i < countries.length; i++) {
//   document.write(countries[i]);
// }

// //Создание цикла и вывод массива в консоль  методом  forEach
// var cars = ["VOLVO", "MAZDA", "KAMAZ", "FIAT"];
// cars.forEach = function (brands) {
//   document.write(brands);
//   document.write(brands);
// };

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

// // массив

// for(var i = 0;i< cars.length;i++){
//   console.log(cars[i]);
// }

// for (var i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// var cars = ["VOLVO", "MAZDA", "KAMAZ", "FIAT"];

// button.onclick = function () {
//   for (var i = 0; i < cars.length; i++) {
//     document.write(cars[i]);
//     console.log("На кнопку нажали");
//   }
// };

var greeting = function (name = "гость", day) {
  document.write(
    "<p>Привет!</p>" + name + "<p>не выходи из дома без маски</p>"
  );
  if (day == "суббота" || day == "воскресенье") {
    document.write("<p>Хороших выходных!</p>");
  } else {
    document.write("<p>Удачного карантинного дня</p>");
  }
};
var day = prompt("Какой сегодня день недели?");
var name = prompt("как вас зовут?");
greeting(name, day);
