/**
 * ?distinctUntilChange
 * *emite valores si el valor anterior no es igual a la emitida
 */
import { distinctUntilChanged, from, of } from "rxjs";
const numeros$ = of(1, 1, "1", 1, 2, 2, 3, 4, 3, 5, 20, 20);
numeros$.pipe(distinctUntilChanged()).subscribe(console.log);

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

users$
  .pipe(
    distinctUntilChanged((previus, current) => previus.id === current.id),
    distinctUntilChanged((previus,current) => previus.name === current.name)
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
