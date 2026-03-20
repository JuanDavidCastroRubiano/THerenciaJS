class Empleado{
    constructor(nombre, cargo, salario){
        this.nombre = nombre
        this.cargo = cargo
        this.salario = salario
        this.activo = true
    }
    presentarse(){
        return `Hola ${this.nombre} tu cargo es  ${this.cargo} `
    }
    calcularSalarioAnual(){
        return "su salario anual es de: " + this.salario * 12
    }
    desactivar(){
        this.activo = false
        return `Usuario desactivado`
    }
    info(){
        return `EMPLEADO: ${this.nombre} Cargo ${this.cargo} tu salario ${this.salario} y tu estado es  ${this.activo}`
    }
}

let empleado1 = new Empleado( "Juan ", "Desarrollador ", 3000000)
let empleado2 = new Empleado( "jose ", "Tecnico ", 2000000)
let empleado3 = new Empleado( "Marcela ", "Gerente ", 30000000)

console.log(empleado1.presentarse())
console.log(empleado1.calcularSalarioAnual())
console.log(empleado1.desactivar())
console.log(empleado1.info())



class Lider extends Empleado {
    constructor(nombre, salario, equipo){
        super(nombre,"lider", salario) 
        this.equipo = equipo
        
    }
    presentarEquipo(){
        return `Tu equipo de trabajo es: ${this.equipo.join(", ")}`         
              
    }   
    agregarMiembro(nombre){
        this.equipo.push(nombre)
        return `${nombre} fue agregado a tu equipo de trabajo`
    }   
    info(){
        return `Lider: ${this.nombre} Cargo ${this.cargo} tu salario ${this.salario} y tu estado es  ${this.activo} el numero de personas son: ${this.equipo.length}`

    }
}
let equipo1 = ["Juan", "pepito", "Pepita"]
let equipo2 = ["maria", "ana", "Danna"]
let lider1 = new Lider("Carlos", 6000000, equipo1)
let lider2 = new Lider("Sara", 6000000, equipo2)

console.log(lider1.presentarEquipo())
console.log(lider1.calcularSalarioAnual())
console.log(lider1.desactivar())
console.log(lider2.agregarMiembro("Felix"))
console.log(lider2.presentarEquipo())
console.log(lider1.info())
console.log(lider2.info())

let empleado4 = new Empleado("Max", "Auxiliar", 2000000)
let empleado5 = new Empleado("Angie", "Auxiliar", 2000000)
let empleado6 = new Empleado("Helena", "Auxiliar", 2000000)
let empleado7 = new Empleado("Sofia", "Auxiliar", 2000000)

let lider3 = new Lider("Laura", 6000000, ["Max", "Angie"])
let lider4 = new Lider("Diego", 6000000, ["Helena", "Sofia"])

let empleados = [ empleado4, empleado5, empleado6, empleado7, lider3, lider4]

let total = 0

for (let i = 0; i < empleados.length; i++) {
    total += empleados[i].salario
}
// la nomina la realice onvace a todos los empleados desde el inicio del ejercicio
console.log("Nomina mensual:", total)
console.log("Nomina anual:", total * 12)

// desactivar uno
empleado6.desactivar()
console.log(empleado6.info())

// info lideres
console.log(lider3.info())
console.log(lider3.presentarEquipo())

console.log(lider4.info())
console.log(lider4.presentarEquipo())