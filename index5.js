class ElectricalAppliances {
    constructor (name, power){
        this.name = name;
        this.power = power;
        this.isOn = false;
    }
    
    
isPlugged () {
    console.log(this.name + " is plugged!");
    this.isOn = true;
};

isUnplugged () {
    console.log(this.name + " is unplugged!");
    this.isOn = false;
};
  
getPower = function() {
    console.log(this.name + " consumes " + this.power + " Watt");
}

}
  
class Kettle extends ElectricalAppliances {
    constructor(name, brand, power){
        super (name, power);
        this.name = name;
        this.brand = brand;
        this.power = power;
        this.isOn = true; 
    }
}  

class Conditioner extends ElectricalAppliances {
    constructor (name, brand, power){
        super (name, power);
        this.name = name;
        this.brand = brand;
        this.power = power;
        this.isOn = false;
    }
}
  
  
  
const electricKettle = new Kettle ("Electric Kettle", "Bosch", 1800);
  
  
const airConditioner = new Conditioner("Air conditioner", "Sumsung", 1213);
  
  
electricKettle.isUnplugged();
    
airConditioner.isPlugged();
  
electricKettle.getPower();
  
airConditioner.getPower();
  
  
console.log (electricKettle);
console.log (airConditioner);
  
  
  
  