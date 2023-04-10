
const Employee = require('./Employee');


class Manager extends Employ {
    constructor (name, id, email, officeNumber) {
        // calling employ constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    
    getRole () {
        return "Manager";
    }
}

 
module.exports = Manager; 
