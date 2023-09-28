import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Link to="/create-product">
        <Button>Create Product</Button>
      </Link>
    </div>
  );
}
