import { from, map, reduce, scan } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc, actual) => {
//   return acc + actual;
// };
const totalAcumulador = (acc, actual) => acc + actual;

from(numbers).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);
from(numbers).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

//Redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}
const users: Usuario[] = [
  {
    id: "Gabo",
    autenticado: true,
    token: "ABC",
  },
  {
    id: "Gabo",
    autenticado: false,
    token: null,
  },
  {
    id: "Gabo",
    autenticado: true,
    token: "ABC123",
  },
];

const state$ = from(users).pipe(
  scan<Usuario>((acc, current) => {
    return { ...acc, ...current };
  })
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
