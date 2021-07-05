/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid"
import Currency from "react-currency-formatter"

const MAX_RATING = 5
const MIN_RATING = 1

export default function Product({
  id,
  title,
  price,
  description,
  category,
  image,
}) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  )

  const [hasPrime] = useState(Math.random() < 0.5)
  console.log("img", image)

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10" key={id}>
      <p className="absolute top-2 text-xs italic text-gray-400">{category}</p>
      <img
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        alt={title}
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img src="./amazon.svg" alt="amazon" className="h-5 w-auto" />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none">
        Add to Basket
      </button>
    </div>
  )
}
