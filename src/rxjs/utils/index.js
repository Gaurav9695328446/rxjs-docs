import { Observable } from "rxjs";

export const createSubscriber = (tag) => {
  return {
    next: (item) => console.log(`${tag}.next ${item}`),
    error: (error) => console.log(`${tag}.error ${error}`),
    complete: () => console.log(`${tag} complete`),
  };
};

export const createInterval = (time) => {
  return new Observable((observer) => {
    let index = 0;
    let interval = setInterval(() => {
      console.log(`Generating ${index}`);
      observer.next(index++);
    }, time);
    return () => {
      clearInterval(interval);
    };
  });
};
