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

//console.log(empleado1.presentarse())
//console.log(empleado1.calcularSalarioAnual())
//console.log(empleado1.desactivar())
//console.log(empleado1.info())



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