const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, id, email, officeNbr) {
        super(name, id, email)
        this.officeNbr = officeNbr
        this.title = "Manager"

    }

    getRole() {
        return this.title;
    }

    getofficeNbr() {
        return this.officeNbr;
    }

}
 module.exports = Manager