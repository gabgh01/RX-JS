import { debounceTime, fromEvent, map, scan } from "rxjs";

const caja = document.createElement("input");

document.querySelector("body").append(caja);

const keyPress$ = fromEvent<any>(caja, "keyup");

keyPress$.pipe(
    debounceTime(1000),
    map(({target})=>target.value),
    
).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
