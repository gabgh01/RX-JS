import { interval, Observer, timer } from "rxjs";

const interval$ = interval(1000);

const observer: Observer<any> = {
  next: (value) => console.log("valor", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete observer"),
};

// console.log('inicio');

// interval$.subscribe((value) => console.log("value", value));
// console.log('fin');

const timer$ = timer(2000);
console.log("inicio");

timer$.subscribe(observer);
console.log("fin");

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timer2$ = timer(hoyEn5,1000);
console.log("inicio");

timer2$.subscribe(observer);
console.log("fin");
