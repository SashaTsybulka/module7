//Написать, функцию, которая принимает в качестве аргумента 
//объект и выводит в консоль все ключи и значения только 
//собственных свойств. Данная функция не должна возвращать значение.

const people = {
    name1: "Andrei Petrov",
    name2: "Stepan Bandera",
  };
  
  const peopleAge = {
    ageAndrei: 25,
    ageBandera: 113,
  };
    
  
  function showObj (obj){
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log( `${key} - ${obj[key]}` ); 
      }   
    }
  }
  
  showObj(peopleAge);