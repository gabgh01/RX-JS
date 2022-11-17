/**
 * ?distinct
 * * se  encarga de no dejar pasar valores que ya previamente han sido emitidos
 */

import { distinct, from, of } from "rxjs";
const numeros$ = of(1, 1, 2, 2, 3, 4, 3, 5, 20, 20);
numeros$.pipe(distinct()).subscribe(console.log);

interface User {
  name: string;
  id: number;
}
const users: User[] = [
  {
    id: 1,
    name: "Gabo",
  },
  {
    id: 2,
    name: "pedro",
  },
  {
    id: 3,
    name: "Gabo",
  },
  {
    id: 1,
    name: "Gabo",
  },
  {
    id: 2,
    name: "Gabo",
  },
  {
    id: 1,
    name: "Juan",
  },
];

const users$ = from(users);

users$.pipe(distinct(({id})=>id),
distinct(user=>user.name)).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
