

class Home {
    constructor(fields, length, color, amount, chairs, household, crockery, technology, childrens, halls) {
                this.fields = fields;
                this.length = length;
                this.color = color;
                this.amount = amount;
                this.chairs = chairs;
                this.household = household;
                this.crockery = crockery;
                this.technology = technology;
                this.childrens = childrens;
                this.halls = halls;
                
}
}
const home = new Home (
    '50.5',
    '40',
    'white',
    '5',
    '20',
    '7',
    '5',
    '10',
    '2',
    '1'
)
console.log(home)


class School {
    constructor(chairs, students, teachers, location, floor, electricity, sewerage, innovation, computers, rooms) {
                this.chairs = chairs;
                this.students = students;
                this.teachers = teachers;
                this.location = location;
                this.floor = floor;
                this.electricity = electricity;
                this.sewerage = sewerage;
                this.innovation = innovation;
                this.computers = computers;
                this.rooms = rooms;
                
}
}
const school = new School (
    '600',
    '500',
    '50',
    'normal',
    'yes',
    'yes',
    'not',
    'be present',
    '50',
    '33'
)
console.log(school)