import { auditTime, fromEvent, interval, tap } from "rxjs";

/**
 * ? auditTime(2000)
 ** emite el ultimo valor emitido en un periodo de tiempo
 */
const interval$ = interval(1000);

interval$
  .pipe(
    tap((x) => console.log("tap", x)),
    auditTime(2000)
  )
  .subscribe({
    next: (val) => console.log("next", val),
    complete: () => console.log("complete"),
  });

const click$ = fromEvent(document, "click");

click$.pipe(
  tap((x) => console.log("tap", x)),
  auditTime(2000)).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
