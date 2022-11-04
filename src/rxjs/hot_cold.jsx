import React, { useEffect } from "react";
import { interval, take } from "rxjs";
import { createSubscriber } from "./utils";

const RxHotCold = () => {
  useEffect(() => {
    // const interval$ = interval(1000).pipe(take(10));
    // let timerOne = setTimeout(() => {
    //   interval$.subscribe(createSubscriber("one"));
    // }, 1200);
    // let timerTwo = setTimeout(() => {
    //   interval$.subscribe(createSubscriber("two"));
    // }, 3200);
    // return () => {
    //   clearInterval(interval$);
    //   clearTimeout(timerOne);
    //   clearTimeout(timerTwo);
    // };
  }, []);

  return (
    <div>
      <h1>RxHotCold</h1>
    </div>
  );
};

export default RxHotCold;
