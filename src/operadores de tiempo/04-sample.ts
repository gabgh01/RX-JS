import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500);

const click$ = fromEvent(document, 'click');

interval$.pipe(
  sample(click$)
).subscribe(
  {
    next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
  }
)