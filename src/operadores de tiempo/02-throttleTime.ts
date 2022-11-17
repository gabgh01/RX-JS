/**
 * ?throtleTime
 * *ejecuta la primera accion y vuelve a ajecutarse al tiempo pasado por parametro
 */
import {
    asyncScheduler, fromEvent,
    map, throttleTime
} from "rxjs";

const caja = document.createElement("input");

document.querySelector("body").append(caja);

const keyPress$ = fromEvent<any>(caja, "keyup");

keyPress$
  .pipe(
    throttleTime(2000, asyncScheduler, {
      leading: false,//* true emite el primer valor es el comportamiento por default
      trailing: true,
    }),
    map(({ target }) => target.value)
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });
