import React from 'react'
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">  
      <h3 className='text-3x1 font-semibold hover:text-orange-500 cursor-pointer duration-200'>Shop</h3>
    </Link>
  )
}
