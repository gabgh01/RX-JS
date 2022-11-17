import { fromEvent, Observer } from "rxjs";

/**
 * * eventos del DOM
 */

const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer: Observer<any> = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("termina observer"),
};

src1$.subscribe(({ x, y }) => console.log(x, y));
src2$.subscribe(({ key }) => console.log("tecla pulsada", key));
