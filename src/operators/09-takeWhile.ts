/**
 * ? takeWhile = recibe valores mientras se cumple condicion
 */

import { fromEvent, interval, map, takeUntil, takeWhile, tap } from "rxjs";

const numbers$ = interval(1000);

numbers$
  .pipe(
    tap((t) => console.log("tap", t)),
    takeWhile((x) => x <= 5)
  )
  .subscribe({
    next: (x) => console.log("next", x),
    complete: () => console.log("complete"),
  });

  const clicks$ = fromEvent<MouseEvent>(document,'click');

  clicks$.pipe(
    map(({x,y})=>({x,y})),
    takeWhile(({y})=>y<=150,true)
  ).subscribe({
    next: (x) => console.log("next", x),
    complete: () => console.log("complete"),
  })