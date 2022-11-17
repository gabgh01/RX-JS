import { Observable, Subscription } from "rxjs";
import { Observer } from "rxjs/internal/types";

// const obs$:Observable=Observable.create();
const observer: Observer<number> = {
  next: (value) => console.log("siguiente [next]:", value),
  error: (error) => console.error("error [obs]:", error),
  complete: () => console.log("complete"),
};

const intervalo$ = new Observable<number>((suscriber) => {
  let cont = 1;
  const interval = setInterval(() => {
    suscriber.next(cont);
    cont++;
  }, 2500);
  setTimeout(() => {
    suscriber.complete();
  }, 2500);
  return () => {
    clearInterval(interval);
    console.log("intervalo destruido");
  };
});

const suscription: Subscription = intervalo$.subscribe(observer);
const suscription2: Subscription = intervalo$.subscribe(console.log);
const suscription3: Subscription = intervalo$.subscribe(console.log);

suscription.add(suscription2);
suscription.add(suscription3);
setTimeout(() => {
  // suscription.unsubscribe()
  // suscription2.unsubscribe()
  // suscription3.unsubscribe()
  suscription.unsubscribe();
}, 3000);
