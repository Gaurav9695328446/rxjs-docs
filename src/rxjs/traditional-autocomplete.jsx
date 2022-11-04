import React from "react";
import { useState } from "react";

const TraditionalAutoComplete = () => {
  const [results, setResults] = useState([]);
  let lastTimeout = null;
  let nextQueryId = 0;

  const getItems = (title) => {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve([title, "Item 2", `Another ${Math.random()}`]);
      }, 500 + Math.random() * 200);
    });
  };

  return (
    <div>
      <form>
        <h1>TraditionalAutoComplete</h1>
        <input
          type="text"
          id="title"
          onChange={(e) => {
            const title = e.target.value;
            let ourQueryId = ++nextQueryId;
            if (lastTimeout) {
              clearTimeout(lastTimeout);
            }
            lastTimeout = setTimeout(() => {
              if (ourQueryId !== nextQueryId) {
                return;
              }
              getItems(title).then((items) => {
                console.log(" i am called");
                setResults(items);
              });
            }, 5000);
          }}
        />
        <ul id="results">
          {results.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default TraditionalAutoComplete;
