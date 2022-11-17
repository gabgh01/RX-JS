import { Observable } from'rxjs';
import { Observer } from 'rxjs/internal/types';

// const obs$:Observable=Observable.create();
const observer:Observer<any>={
    next:value=>console.log('siguiente [next]:', value),
    error:error=>console.error('error [obs]:', error),
    complete:()=>console.log('complete')
    
    
    
}

const observable$:Observable<number|string>=new Observable(suscriber=>{
    suscriber.next(1);
    suscriber.next(2);
    suscriber.next(3);
    suscriber.next('Hola');
    suscriber.error('se jodio')
    suscriber.complete();
});

// observable$.subscribe(
//     valor=>console.log('next', valor),
//     error=>console.error('error', error),
//     ()=>console.log('complete')
// );

observable$.subscribe(observer);