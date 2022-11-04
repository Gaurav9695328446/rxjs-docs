import React, { useEffect } from "react";
import { map, Subject } from "rxjs";
import { createSubscriber } from "./utils";

// subject :  subject is used to bridge reactive and non-reactive code, like using subject we can connect non-reactive code to reactive code
// behaviorSubject : when we want to pass initialValue to subject , then we need behaviorSubject
// AsyncSubject : //
// ReplaySubject : //

const RxSubject = () => {
  // const intervalSubject$ = new Subject();
  const currentUser$ = new Subject();
  const isLoggedIn$ = currentUser$.pipe(map((u) => u.isLoggedIn));

  useEffect(() => {
    // const interval$ = interval(2000).pipe(take(5));
    // const intervalSubscribe$ = interval$.subscribe(intervalSubject$);
    // intervalSubject$.subscribe(createSubscriber("sub1"));
    // intervalSubject$.subscribe(createSubscriber("sub2"));
    // intervalSubject$.subscribe(createSubscriber("sub3"));
    // const timer = setTimeout(() => {
    //   intervalSubject$.subscribe(createSubscriber("Look at me!"));
    // }, 2000);
    const loggedInSubscribe = isLoggedIn$.subscribe(
      createSubscriber("isLoggedIn")
    );
    currentUser$.next({ isLoggedIn: false });

    const loggedOutTimer = setTimeout(() => {
      currentUser$.next({ isLoggedIn: true, name: "Gaurav" });
    }, 2000);
    return () => {
      loggedInSubscribe.unsubscribe();
      clearTimeout(loggedOutTimer);
    };
  }, []);

  return (
    <div>
      <h1>RxSubject</h1>
    </div>
  );
};

export default RxSubject;
