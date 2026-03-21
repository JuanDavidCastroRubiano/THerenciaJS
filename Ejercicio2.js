class Contenido {
    constructor(titulo, genero, anio) {
        this.titulo = titulo;
        this.genero = genero;
        this.anio = anio;
        this.disponible = true;
    }

    ficha() {
        return this.titulo + " - " + this.genero + " - " + this.anio;
    }

    retirar() {
        this.disponible = false;
        return "Contenido retirado";
    }

    estado() {
        if (this.disponible) {
            return "Disponible";
        } else {
            return "Retirado";
        }
    }
}

class Pelicula extends Contenido {
    constructor(titulo, genero, anio, duracion) {
        super(titulo, genero, anio);
        this.duracion = duracion;
    }

    duracionFormateada() {
        let horas = Math.floor(this.duracion / 60);
        let minutos = this.duracion % 60;
        return horas + "h " + minutos + "min";
    }

    ficha() {
        return this.titulo + " - " + this.genero + " - " + this.anio + 
               " - Duración: " + this.duracionFormateada();
    }
}

class Serie extends Contenido {
    constructor(titulo, genero, anio, temporadas) {
        super(titulo, genero, anio);
        this.temporadas = temporadas;
        this.episodiosPorTemporada = 0;
    }

    registrarEpisodios(cantidad) {
        this.episodiosPorTemporada = cantidad;
    }

    totalEpisodios() {
        return this.temporadas * this.episodiosPorTemporada;
    }

    ficha() {
        return this.titulo + " - " + this.genero + " - " + this.anio +
               " - Temporadas: " + this.temporadas +
               " - Episodios: " + this.totalEpisodios();
    }
}

const pelicula1 = new Pelicula("Avengers", "Acción", 2019, 180);
const pelicula2 = new Pelicula("Titanic", "Drama", 1997, 195);
const pelicula3 = new Pelicula("Mario Bros", "Animación", 2023, 92);

const serie1 = new Serie("Breaking Bad", "Drama", 2008, 5);
const serie2 = new Serie("Stranger Things", "Ciencia ficción", 2016, 4);
const serie3 = new Serie("Dark", "Misterio", 2017, 3);


serie1.registrarEpisodios(10);
serie2.registrarEpisodios(8);
serie3.registrarEpisodios(10);

const catalogo = [pelicula1, pelicula2, pelicula3, serie1, serie2, serie3];

for (let i = 0; i < catalogo.length; i++) {
    console.log(catalogo[i].ficha());
}


pelicula2.retirar();
serie3.retirar();

console.log(pelicula2.estado());
console.log(serie3.estado());

let disponibles = 0;

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].disponible) {
        disponibles++;
    }
}

console.log("Disponibles:", disponibles);