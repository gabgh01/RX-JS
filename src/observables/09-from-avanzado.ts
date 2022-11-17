import {of, from, Observer} from 'rxjs';
/**
 * *of = toma argumentos y genera secuencia
 * *from = array, promise, iterable, observable
 */

 const observer: Observer<any> = {
  next: (value) => console.log("valor", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete observer"),
};

// const source$ = from('Gabo');
// const source2$ = of(...[0,1,2,3,4,5]);

const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe( async (resp)=>{
//   console.log('resp', resp.url);
 
//  const data = await resp.json();
//  console.info('Data', data);
   
  
// })
//source$.subscribe(observer);
const miGenerator = function*(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
  yield 7;
};

const miIterable = miGenerator();

for (const iterator of miIterable) {
  console.log(iterator);
  
}

from(miIterable).subscribe(observer);