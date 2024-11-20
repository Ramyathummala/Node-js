// let vehicle = {
//     wheels: '4',
//     fuelType: 'Gasoline',
//     color: 'Green'
//     }
//     let carProps = {
//     type: {
//     value: 'Volkswagen'
//     },
//     model: {
//     value: 'Golf'
//     }
//     }
//     var car = Object.create(vehicle, carProps);
//     console.log(car);

// var Object=Object.create(null);
// // console.log(Object)

    // function Person(name,age){
    //     this.name=name,
    //     this.age=age
    // };
    // var obj=new Person("ramya",23)
    // console.log(obj)//function constructor

//     function Person() {}
// Person.prototype.name = "Sudheer";
// var object = new Person();
// console.log(Person)

// // Create a new instance using function prototype.
// var newInstance = Object.create(func.prototype)
// // Call the function
// var result = func.call(newInstance, x, y, z),
// // If the result is a non-null object then use it otherwise just use the new instance.
// console.log(result && typeof result === 'object' ? result : newInstance);

// const orgObject = { company: 'XYZ Corp'};
// const carObject = { name: 'Toyota'};
// const staff = Object.assign({}, orgObject, carObject);
// console.log(staff) //object.assign()

// let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
// let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 3);
// console.log(arrayIntegers1) 
// let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
// let arrayIntegers2 = arrayIntegersOriginal2.splice(3,1 ,"w","r"); 
// console.log(arrayIntegers2)

// let X = { geeks: 1 }; 
// let Output = (function () { 
// 	delete X.geeks; 
// 	return X.geeks; 
// })(); 

// console.log(Output);//undefined

let output = (function(x) {
    delete x;
    return x;
})(0);
  
console.log(output);


