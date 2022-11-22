import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TestCard from "../components/TestCard";
import TestCardDetails from "../components/TestCardDetails";

const Details = () => {
  const params = useParams();

  const [testDetails, setTestsDetails] = useState([]);

  const getDetails = async () => {
    await axios
      .get("/database/db.json")
      .then((res) => {
        setTestsDetails(
          res?.data?.filter((item) => item.idVideo === params.id)
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-around flex-col sm:flex-row items-center my-10 gap-5 w-full container mx-5">
        <Link className="btn mt-5 text-white" to={"/"}>
          Go back to tests
        </Link>
        <h1 className="text-2xl font-bold text-black">
          Test details from test #{params.id}
        </h1>
      </div>
      <TestCardDetails testDetails={testDetails} />
    </div>
  );
};

export default Details;
