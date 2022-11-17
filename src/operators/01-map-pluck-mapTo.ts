import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

range(1, 5)
  .pipe(map<number, string>((x) => (x * 10).toString()))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

keyup$
  .pipe(map<KeyboardEvent, string>((key) => key.code))
  .subscribe((val) => console.log("map", val));

const keyUpPluck = keyup$.pipe(pluck("target", "baseURI"));

keyUpPluck.subscribe((code) => console.log("pluck", code));

/**
 * *pluk operator funciona como un map tomando el valor de la key
 */

const keyupMapTo = keyup$.pipe(
  mapTo('a')
);

keyupMapTo.subscribe((val) => console.log("mapTo", val));
