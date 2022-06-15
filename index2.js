// Написать функцию, которая принимает в качестве аргументов 
//строку и объект, а затем проверяет есть ли у переданного 
//объекта свойство с данным именем. Функция должна возвращать 
//true или false.

const people = {
    name1: "Andrei Petrov",
    name2: "Bogdan Hmelnytskyi",
 };

function checkObject(str,obj){
  return str in obj;
}

checkObject('name1' ,people);


