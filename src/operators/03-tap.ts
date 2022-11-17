import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const num$ = range(1, 10);
num$
  .pipe(
    tap((x) => console.log("tap antes", x)),
    map((x) => x * 10),
    tap({
      next: (x) => console.log("despues", x),
      complete: () => console.log("se termina ejecucion"),
    })
  )
  .subscribe((val) => console.log("suscribe", val));
