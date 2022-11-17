import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const boton = document.createElement("button");

boton.innerHTML = "Detener Timer";
document.querySelector("body").append(boton);

const counter$ = interval(1000);
const clickButton$ = fromEvent(boton, "click");

clickButton$.pipe().subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});

/**
 * ?takeUntil = requiere la ejecucion de otro observable para detener su ejecucion
 * en este caso se implementa la opcion de click en boton para detener la ejecucion del interval
 */
counter$.pipe(takeUntil(clickButton$)).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});

/**
 * * skip para omitirlas n emisiones antes
 */
const clickButton2$ = fromEvent(boton, "mouseover");

clickButton2$.pipe(
    tap(console.log
    ),
    skip(2)
).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
