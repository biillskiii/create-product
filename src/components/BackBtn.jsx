import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 

const BackBtn = () => {
  const navigate = useNavigate();
  const backToForm = () => {
    navigate("/create-product");
  };
  return (
    <Button onClick={backToForm}>
      <i className="bi bi-arrow-left"></i> Back
    </Button>
  );
};
export default BackBtn;
