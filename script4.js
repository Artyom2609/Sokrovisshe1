function FindTreasure(){
	alert("Привет, ты попал на поиски сокровища! Жми ОК, если хочешь скорее найти его!");
	alert("Тебя ждёт много приключений и интересных заданий, мы наинаем, ты с нами?");
	alert("Я в тебе никогда не сомневался!");
	alert("Добро пожаловать в нашу страну- страну загадок и приключений!");
	alert("Для начала отважный герой, скажи своё имя");

	 var name = prompt("напиши его здесь");
	 while (name === "") {
	 alert("Ты не можешь войти в мир сокровищ, не сказав имени");
	 var name = prompt("напиши его здесь");
     }

alert("Ещё один путник " + name + " решил попробовать свои силы");

alert(" Ты собираешся на поиски тебе нужно выбрать что взять с собой");
var thing=prompt("Выбирай только один объект: телефон, ноутбук, меч. Чтобы взять ещё больше предметов переведите 5руб на qiwi кошелек по ник нейму: KEDRY");

if (thing === "") {
	alert("Ты не можешь начать своё путешествие не взяв не одного предмета! ");

}	else {
		alert("Отлично! Ты выбрал что мог, это -" + thing);
	}
alert("Тебе нужно взять что-то из еды, ты не можешь ходить голодным");
 var object=prompt("Выбирай только один объект: яблоко, пицца, мороженое");
 if (object === "") {
 	alert("Ты не можешь ничего не взять ты будешь голодным!");

 }else {
 	alert("С " + object + " ты точно не будешь голодным!")
 }

alert("" + name +" тебе нужно добратся до острова. На чём ты будешь добиратся?");
var trip=prompt("Лодка или корабль");
var des1;
var des2;

if (trip ==="лодка"){
	Boat();
} else if (trip === "корабль"){
	Ship();
}

function Boat() {
	alert("Лодка гораздо легче и быстрее, ты с делал правильный выбор!");
	alert("Ты идёшь по морю, но вдруг на горимзонте замечаешь шторм");
	alert("Что ты выберешь?");
	des1=prompt("Прыжок в воду или плыть дальше?");

}
function Ship() {
	alert("Корабль гораздо тяжелее и сможет проплыть в любую погоду! Выбор верный!");
	alert("Ты идёшь по морю, но вдруг на горизонтре замечаешь айсберг");
	alert("Ситуация похожа на ТИТАНИК(");
	alert("Что ты выберешь?");
	des2=prompt("оплыть айсберг или повернуть на юг")
}
alert("НУ А НА ЭТОМ " + name + " ПОКА ВСЁ! СЛЕДИ ЗА ОБНАВЛЕНИЯМИ САЙТА! ")
}
 
