// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods using 
//the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CuboidMaker {
    constructor(fillIn) {
        this.length = fillIn.length;
        this.width = fillIn.width;
        this.height = fillIn.height;
    }
    volume() {
        return this.length * this.width * this.height;
    } //function to provide us with the volume.
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    } //funciton to provide us with the surface area.
}; //Parent Class

class CubeMaker extends CuboidMaker {
    constructor(maker) {
        super(maker);
        this.name = maker.name;
        this.speciality = maker.speciality;
        this.material = maker.material;
    }; // the new added info
    greeting() {
        return `Hello, my name is ${this.name} and I specialize in ${this.speciality}. The material i used to create this table was expensive as is expected from ${this.material}, thank you for hiring me!`
    }; //A phrase to let us know who we hired for the job
}; //Child class for Cuboidmaker. It provides more information on the cube maker.

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
}); //first object associated with parent

const John = new CubeMaker({
    length: 1,
    width: 2,
    height: 3,
    name: "John",
    speciality: "Cube jewelry",
    material: "Ruby"
}) //first object associated witht the child

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log(John.volume()); // 6
console.log(John.surfaceArea()); // 22
console.log(John.greeting()) // Hello, my name is John and I specialize in Cube jewelry. The material i used to create this table was expensive as is expected from Ruby, thank you for hiring me!