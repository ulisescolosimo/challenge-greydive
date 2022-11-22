import React from "react";
import { Link } from "react-router-dom";

const TestCard = ({ test }) => {
  return (
    <Link
      to={`/details/${test.idVideo}`}
      className="card w-72 bg-base-100 text-white shadow-xl"
    >
      <div className="card-body">
        <h2 className="card-title flex justify-center">{test.cliente.charAt(0).toUpperCase() + test.cliente.slice(1)}</h2>
      </div>
    </Link>
  );
};

export default TestCard;
