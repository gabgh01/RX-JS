import { first, fromEvent, interval, tap } from "rxjs";

const numbers$ = interval(1000);

numbers$.pipe(first((x) => x >= 2)).subscribe((x) => console.log("val", x));

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(tap(x=>console.log('tap',x)), 
first<MouseEvent>(event=>event.clientY >=150)
).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
