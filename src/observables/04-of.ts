import { of } from "rxjs";

const obs$ = of(1, 2, 3, 4, 5);

obs$.subscribe({
  next: (value) => console.log("next", value),
  error: (erro) => console.log("error", erro),
  complete: () => console.log("termino observable"),
});

const obs2$ = of(...[1, 2, 3, 4, 5],[12,13,14,15]);
obs2$.subscribe({
next: (value) => console.log("next2", value),
error: (erro) => console.log("error2", erro),
  complete: () => console.log("termino2 observable"),
});