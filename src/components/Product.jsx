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

  return (
    <div>
      <p>{category}</p>
      <img
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        alt={title}
      />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>
      <p>{description}</p>
      <div>
        <Currency quantity={price} currency="GBP" />
      </div>

      {hasPrime && (
        <>
          <img src="./amazon.svg" alt="amazon" className="h-5 w-auto" />
          <p>Free Next-day Delivery</p>
        </>
      )}

      <button>Add to Basket</button>
    </div>
  )
}
