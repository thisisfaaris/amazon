import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"

export const navbar = [
  {
    id: 0,
    title: "Today's Deals   ",
  },
  {
    id: 1,
    title: "Customer Service",
  },
  {
    id: 2,
    title: "Gift Cards",
  },
  {
    id: 3,
    title: "Registry",
  },
  {
    id: 4,
    title: "Sell",
  },
]

export default function Header() {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center flex-grow bg-amazon_blue-default p-1 py-2 px-4">
        <div className="flex flex-grow sm:flex-grow-0 items-center mt-2">
          <Image
            src="/amazon.png"
            alt="amazon logo"
            height={50}
            width={150}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex flex-grow rounded-md cursor-pointer items-center h-10 bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 px-2 whitespace-nowrap">
          <div className="link">
            <p>Hello,Sign in</p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="flex h-4 w-4 absolute top-0 right-0 md:right-10">
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-yellow-400 opacity-70" />
              <span className="relative inline-flex rounded-full w-full h-full bg-yellow-500 justify-center text-center text-black text-xs font-bold">
                0
              </span>
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex justify-between items-center bg-amazon_blue-light text-white text-sm p-2 px-6">
        <div className="flex items-center space-x-3">
          <Link href="">
            <a className="link flex items-center font-bold md:text-sm">
              <MenuIcon className="h-6 mr-2" />
              All
            </a>
          </Link>
          {navbar.map((value, index) => (
            <Link href="" key={index}>
              <a className="link hidden md:inline-flex font-normal md:text-sm">
                {value.title}
              </a>
            </Link>
          ))}
        </div>
        <Link href="">
          <a className="link flex text-right font-bold md:text-sm">
            Amazons response to COVID-19
          </a>
        </Link>
      </div>
    </header>
  )
}
