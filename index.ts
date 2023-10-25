// class Album {
//   title: string;
//   songs: string[];
//   constructor(title, songs: string[]) {
//     this.title = title;
//     this.songs = songs;
//   }
// }

// class Banda {
//   members: string[];
//   albums: Album[];

//   constructor(members: string[], albums: Album[]) {
//     this.members = members;
//     this.albums = albums;
//   }
// }

// function main() {
//   const unAlbum = {
//     title: "Album de banda",
//     songs: ["cancion de banda"],
//   };

//   const unaBanda = new Banda(["Jose"], [unAlbum, unAlbum, unAlbum]);
//   console.log(unaBanda.members);
//   console.log(unaBanda.albums);
// }

// main();

// crear las clases Edificio, Piso y Departamento aquí
class Piso {
  nombre: string;
  deptos: Departamento[];
  constructor(nombre) {
    this.nombre = nombre;
    this.deptos = [];
  }
  pushDepartamento(depto: Departamento) {
    this.deptos.push(depto);
  }
  getDepartamentos(): Departamento[] {
    return this.deptos;
  }
}

class Departamento {
  nombre: string;
  constructor(nombre) {
    this.nombre = nombre;
  }
  getName() {
    return this.nombre;
  }
}

class Edificio {
  piso: Piso[];
  constructor(piso: Piso[]) {
    this.piso = piso;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const pisoEncontrado = this.piso.find(
      (piso) => piso.nombre == nombreDePiso
    );
    return pisoEncontrado.pushDepartamento(departamento);
  }
  getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
    const pisoEncontrado = this.piso.find(
      (piso) => piso.nombre == nombreDePiso
    );
    return pisoEncontrado.getDepartamentos();
  }
}

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
  console.log("Vino otra persona y metió cambio")
}
main();
