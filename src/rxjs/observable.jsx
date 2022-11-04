import React, { useEffect } from "react";
import { range } from "rxjs";
import { createSubscriber } from "./utils";

// of : used to pass multiple parameters
// from : used to pass parameters in array form , basicaslly it flattens the array
// range : pass value in range
//fromEvent : subscribe to event
// subject :  subject is used to bridge reactive and non-reactive code, like using subject we can connect non-reactive code to reactive code

const RxObservable = () => {
  useEffect(() => {
    const observer = range(10, 20).subscribe(createSubscriber("range"));

    return () => {
      observer.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>RxObservable</h1>
    </div>
  );
};

export default RxObservable;
