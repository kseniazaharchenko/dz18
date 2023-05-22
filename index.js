class Human {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(human) {
        this.residents.push(human);
    }
}

class House {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Maximum number of apartments reached.");
        }
    }
}

// Створюємо декілька екземплярів класу Людина
const john = new Human("John", "male");
const jane = new Human("Jane", "female");
const bob = new Human("Bob", "male");
const alice = new Human("Alice", "female");

// Створюємо декілька екземплярів класу Квартира та додаємо до них жителів
const apartment1 = new Apartment();
apartment1.addResident(john);
apartment1.addResident(jane);

const apartment2 = new Apartment();
apartment2.addResident(bob);
apartment2.addResident(alice);

// Створюємо екземпляр класу Будинок та додаємо до нього квартири
const house = new House(2);
house.addApartment(apartment1);
house.addApartment(apartment2);