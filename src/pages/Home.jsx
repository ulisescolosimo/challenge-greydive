import React from "react";
import TestList from "../components/TestList";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h1 className="text-4xl font-bold text-black my-10">Tests</h1>
      <TestList />
    </div>
  );
};

export default Home;
