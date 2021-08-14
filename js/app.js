const db = {
    data:[
        {
            name: "name2",
            email: "test@gmail.com",
            age:19,
            mayor: () => this.age>=18
        },
        {
            name: "name3",
            email: "test@gmail.co",
            age:12,
            mayor: () => this.age >=18
        }
    ],
    // suma:(num1, num2) => num1 + num2,
    // resta:(num1,num2)=>
}   

db.data.map((e) => {
    console.log(e.mayor());
});

