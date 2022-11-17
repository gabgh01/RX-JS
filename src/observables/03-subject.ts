import { Observable, Subscription, Subject } from "rxjs";
import { Observer } from "rxjs/internal/types";

// const obs$:Observable=Observable.create();
const observer: Observer<number> = {
  next: (value) => console.log("siguiente [next]:", value),
  error: (error) => console.error("error [obs]:", error),
  complete: () => console.log("complete"),
};

const intervalo$ = new Observable<number>((suscriber) => {
  const intervalId = setInterval(() => {
    const max = 100;
    const min = 1;
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    suscriber.next(num);
  }, 3000);
  return () => {
    clearInterval(intervalId);
    console.log('se destruye el suscribe del intervalo');
    
  };
});

// const subscription1 = intervalo$.subscribe((rnd) =>
//   console.log("subscription 1: ", rnd)
// );
// const subscription2 = intervalo$.subscribe((rnd) =>
//   console.log("subscription 2: ", rnd)
// );

/**
 * *1- casteo multiple
 * *2- tambien es un observer
 * *3- tambien next, error y complete
 */

const subject$ = new Subject();

const susbscription = intervalo$.subscribe(subject$);

const subscription1 = subject$.subscribe((rnd) =>
  console.log("subscription 1: ", rnd)
);
const subscription2 = subject$.subscribe((rnd) =>
  console.log("subscription 2: ", rnd)
);

/**
 * * el subject tambien funciona como un observer y puede emitir valores
 * *pero por debajo se sigue ejecutando el intervalo
 */
setTimeout(() => {
  subject$.next(200);
  subject$.complete();
  susbscription.unsubscribe();
}, 3500);
