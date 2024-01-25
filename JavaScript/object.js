//객체 속성 다루기
const person = {
    name: {
        firstName:"doom",
        lastName:"guys"
    },
    age:20,
    likes:["apple","samsung"],
    printHello:function() {
        return "hello";
    }
};

//다양한 객체 접근법
console.log( person.name.firstName ); //doom
console.log(person.age); //20
console.log(person.likes[0]); //apple
console.log(person.printHello()); //hello

