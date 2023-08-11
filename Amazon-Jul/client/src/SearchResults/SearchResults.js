import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Product from "../Components/Product/Product"; // Import your Product component
import products from "../Components/DetailExplanation/SampleProduct"; // Import your product data

function SearchResults() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  // Filter the products based on the search query
  const matchingProducts = Object.values(products).filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleProductClick = () => {
    // Navigate to the checkout page directly
    navigate("/checkout");
  };

  return (
    <div className="searchResults">
      <h2>Search Results for "{query}"</h2>
      <div className="searchResults__products">
        {matchingProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
            onProductClick={handleProductClick}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
