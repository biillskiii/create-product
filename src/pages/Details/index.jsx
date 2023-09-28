import React from "react";
import { useParams, useLocation } from "react-router-dom";
import BackBtn from "../../components/BackBtn";

function Details() {
  const { productId } = useParams();
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="container">
      <BackBtn/>
      <div className="bg-light card mx-auto w-50 my-6">
        <div className="card-body">
          <div className="bg-gray py-2 shadow-lg rounded-sm">
            <h2 className="card-title text-center">PRODUCT DETAILS</h2>
          </div>
          <div className="mt-4 text-dark">
            <p className="card-text">
              <strong>Product ID:</strong> {productId}
            </p>
            <p className="card-text">
              <strong>Product Name:</strong> {product.name}
            </p>
            <p className="card-text">
              <strong> Product Category:</strong> {product.category}
            </p>
            {product.image && (
              <div className="card-text ml-2">
                <strong>Product Image:</strong>
                <br />
                <img
                  src={URL.createObjectURL(product.image)}
                  alt={`Image for ${product.name}`}
                  style={{ maxWidth: "50%" }}
                />
              </div>
            )}
            <br />
            <p className="card-text">
            <strong>Product Description:</strong> {product.description}
            </p>
            <p className="card-text">
            <strong>Product Price:</strong> {product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
