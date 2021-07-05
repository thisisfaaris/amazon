/* eslint-disable @next/next/no-img-element */
import React from "react"
import Product from "./Product"

export default function ProductFeed({ products }) {
  // console.log("🚀", products)
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-48 mx-auto">
      {products.map((value, index) => (
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
      {/* <img className="md:col-span-full" src="./banner1.png" alt="banner" />
      <div className="md:col-span-2">
        {products.slice(4, 5).map((value, index) => (
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
      {products.slice(5, products.length).map((value, index) => (
        <Product
          key={value.id}
          id={value.id}
          title={value.title}
          price={value.price}
          description={value.description}
          category={value.category}
          image={value.image}
        />
      ))} */}
    </div>
  )
}
