import React from "react"
import Product from "./Product"

export default function ProductFeed({ products }) {
  console.log("🚀",products);
  return (
    <div>
      {products.map((value,index) => (
        <Product
          key={value.id}
          id={value.id}
          title={value.title}
          price={value.price}
          description={value.description}
          category={value.category}
          image={value.image}
        />
      ))}
    </div>
  )
}
