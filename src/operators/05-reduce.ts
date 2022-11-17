import { interval } from "rxjs";
import { reduce, take } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

const total = numbers.reduce(totalReducer, 0);
console.log("Total", total);

/**
 * ?take = se encarga de completar el observable pasando como parametro el numero de iteraciones
 */

interval(1000)
  .pipe(take(3), reduce(totalReducer))
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
