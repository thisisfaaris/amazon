import React from "react"
import Banner from "../src/components/Banner"
import Header from "../src/components/Header"

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto bg-gray-100">
      <Header />
      <main>
        {/* Banner */}
        <Banner />
      </main>
    </div>
  )
}
