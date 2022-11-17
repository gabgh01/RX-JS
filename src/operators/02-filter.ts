import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";
// range(0, 20)
//   .pipe(filter((value) => value % 2 === 1))
//   .subscribe((val) => console.log("valor emitido", val));
range(0, 20)
  .pipe(
    filter((value, index) => {
      console.log("index", index);

      return value % 2 === 1;
    })
  )
  .subscribe((val) => console.log("valor emitido", val));
interface Personaje {
  tipo: string;
  nombre: string;
}
const personajes: Personaje[] = [
  {
    tipo: "heroe",
    nombre: "Batman",
  },
  {
    tipo: "heroe",
    nombre: "Robin",
  },
  {
    tipo: "Villano",
    nombre: "Joker",
  },
];

from<Personaje[]>(personajes)
  .pipe(filter((personaje) => personaje.tipo.toLowerCase().trim() === "heroe"))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map<KeyboardEvent, string>((event) => event.code),
  filter((key) => key === "Enter" || key === "NumpadEnter")
);

keyup$.subscribe(console.log);
