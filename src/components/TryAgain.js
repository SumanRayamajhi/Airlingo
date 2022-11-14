import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const TryAgain = () => {
  let error = useRouteError();
  const navigate = useNavigate();
  console.error(error);
  return (
    <button
      onClick={() => {
        navigate(0);
      }}
    >
      Try again
    </button>
  );
};

export default TryAgain;
