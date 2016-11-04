function VehicleConstructor(name,wheels,number){
  var obj = {};
  obj.name = name;
  obj.wheels = wheels;
  obj.number = number;

  obj.MakeNoise = function(noise){
    var noise = noise;
    console.log(noise)
  }
  return obj;
}

var bike = VehicleConstructor('bike', 2, 1);
bike.MakeNoise = function(){
  var noise = "ring ring"
  console.log(noise)
}

console.log(bike)
bike.MakeNoise();

var sedan = VehicleConstructor('sedan', 4, 4);
sedan.MakeNoise = function(){
  var noise = "Honk Honk"
  console.log(noise);
}
console.log(sedan)
sedan.MakeNoise()

var bus = VehicleConstructor('bus',23232, 0);
bus.pickup = function(newPass){
  bus.number += newPass;
}


console.log(bus.number)
bus.pickup(20)
console.log(bus.number)
bus.pickup(20)
console.log(bus.number)
