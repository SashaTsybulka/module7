// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.





function ElectricalAppliances(name, power){
    this.name = name;
    this.power = power;
    this.isOn = false;
  }
  
  ElectricalAppliances.prototype.isPlugged = function () {
    console.log(this.name + " is plugged!");
    this.isOn = true;
  };
    
  ElectricalAppliances.prototype.isUnplugged = function () {
    console.log(this.name + " is unplugged!");
    this.isOn = false;
  };
  
  ElectricalAppliances.prototype.getPower = function () {
      console.log(this.name + " consumes " + this.power + " Watt")
  }
  
  
  function Kettle(name, brand, power){
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.isOn = true; 
  }
  
  Kettle.prototype = new ElectricalAppliances();
  
  
  
  function Conditioner(name, brand, power){
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.isOn = false;
  }
  
  Conditioner.prototype = new ElectricalAppliances();
  
  
  const electricKettle = new Kettle ("Electric Kettle", "Bosch", 1800);
  
  
  const airConditioner = new Conditioner("Air conditioner", "Sumsung", 1213);
  
  
  electricKettle.isUnplugged();
  
  
  airConditioner.isPlugged();
  
  electricKettle.getPower();
  
  airConditioner.getPower();
  
  
  console.log (electricKettle);
  console.log (airConditioner);
  
  
  
  