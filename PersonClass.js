
    class Person{
        constructor(name,age,email,address){
            this.name = name;
            this.age = age;
            this.email = email;
            this.address = address;
        }

        getData(){
            let personData = `${this.name} is ${this.age} years old and lives in ${this.address}`;
            return personData
        }

    }

    let person = new Person("David",25,"David64@gmail.com","968654 Ho street");
    console.log(person.getData());

    class Employee extends Person{
        constructor(name,age,email,address){
            super(name,age,email,address);
        }
        setAttributes(companyName,salary,experience){
            this.companyName = companyName;
            this.salary = salary;
            this.experience = experience;
        }
        getAttributes(){
            let employeeData = `${this.name} is ${this.age} years old ${this.email} livies in ${this.address} working at ${this.companyName} with salary ${this.salary} and has ${this.experience} years of experience.`
            return employeeData;
        }
    }
    let employee1 = new Employee("Karthik",25,"Karthik25@gmail.com","5-6-7 Kk street")
    employee1.setAttributes("Capgemini",30000,5);
    console.log(employee1.getAttributes())