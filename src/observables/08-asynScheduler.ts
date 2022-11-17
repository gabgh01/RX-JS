import { asyncScheduler } from "rxjs";

const saludar = (name:string) => console.log(`Hola Mundo ${name}`);

const subs = asyncScheduler.schedule(saludar, 2000, "Gabo");
const subs2 = asyncScheduler.schedule(
  function (name) {
    console.log(`Hola2 Mundo ${name}`);
    this.schedule(name,1000)
  },
  1000,
  "Gabo"
);

asyncScheduler.schedule(()=>subs2.unsubscribe(),10000);