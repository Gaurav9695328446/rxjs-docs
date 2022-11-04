import React, { useEffect } from "react";
import { interval, take } from "rxjs";
import { createSubscriber } from "./utils";

// do : is needed to execute anything whenever value is subscribed without affecting the sequences
// finally : is needed when we need to run any side-effect at the end of observer completes
// filter : is needed to apply filter to values in range
// startWith : is set the value from begines
// merge : merge the subscription sequence and merge the observable
// concat: appends the sequence of second observer to first observer
// map: tranforms the sequence item
// mergeMap : maps the return map from projection Ex: wehn we want list from list of Aray of list
// switchMap :
// reduce : 
// scan  :
// toArray  :
// withLatestFrom : 
// retry :
// catch : 
// take :
// takeUntill : 

const RxOperations = () => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <h1>RxOperations</h1>
    </div>
  );
};

export default RxOperations;
