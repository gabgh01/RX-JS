import { fromEvent, map, sampleTime, tap } from "rxjs";

/**
 * ?sampleTime(1000)
 * cada segundo emite el ultimo valor
 */
const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
  sampleTime(2000),
  map(({ x, y }) => ({ x, y })),
  tap((val)=>console.log('tap x',val.x,' y:',val.y)
  
)).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
