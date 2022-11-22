import axios from "axios";
import React, { useEffect, useState } from "react";
import TestCard from "./TestCard";

const TestList = () => {
  const [tests, setTests] = useState([]);

  const getTests = async () => {
    await axios.get("/database/db.json")
      .then((res) => {
        setTests(res.data);
        console.log(tests);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTests();
  }, []);

  return (
    <div className="flex gap-10 flex-wrap justify-center mt-5">
      {tests.map((test) => (
        <TestCard key={test.idVideo} test={test} />
      ))}
    </div>
  );
};

export default TestList;
