import React from "react"
import Banner from "../src/components/Banner"
import Header from "../src/components/Header"
import ProductFeed from "../src/components/ProductFeed"

export default function Home({ products }) {
  return (
    <div className="max-w-screen-2xl mx-auto bg-gray-100">
      <Header />
      <main>
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  )
  return {
    props: {
      products,
    },
  }
}
