class Car {
    constructor(brand, model, year, km, id){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.km = km;
        this.id = id;
    } 
    kmPerYear() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year + 1;
        return this.km / age;
    }
}

export default Car;