import React, { useEffect, useState } from "react";
import { debounceTime, distinctUntilChanged, mergeMap, Subject } from "rxjs";
import axios from "axios";

const RxjsAutoComplete = () => {
  const [results, setResults] = useState([]);
  const onSearch = new Subject();

  const handleSearch = (e) => {
    const value = e.target.value;
    onSearch.next(value);
  };

  const getGithubUserData = (username) => {
    axios
      .get("https://api.github.com/search/users", {
        params: {
          q: username,
        },
      })
      .then((res) => {
        setResults((prev) => [...prev, ...res.data.items]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onSearch.pipe(debounceTime(400), distinctUntilChanged()).subscribe({
      next: (val) => {
        if (val && val.length > 3) {
          getGithubUserData(val);
        }
      },
      error: (err) => console.log(err),
    });
  }, []);

  return (
    <div>
      <form>
        <h1>RxjsAutoComplete</h1>
        <input type="text" id="title" onChange={handleSearch} />
        <ul id="results">
          {results.map((item, index) => (
            <li key={index}>{item.login}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default RxjsAutoComplete;
