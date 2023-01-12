import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '#about',
  },
  {
    label: 'Products',
    to: '#products',
  },
  {
    label: 'Business Opportunity',
    to: '#business-opportunity',
  },
  {
    label: 'Contact',
    to: '#contact',
  },
]

function Nav() {
  return (
    <nav className='flex sticky z-50 top-0 left-0 justify-between p-8 border-b-2 border-green-600 items-center max-w-7xl mx-auto bg-white/20 backdrop-blur-sm'>
      <div className='w-44'>
        <img
          src='./src/assets/sisThenji.svg'
          alt='logo'
          className='w-full'
        />
      </div>
      <ul
        className='flex
      '
      >
        {navLinks.map(link => (
          <li
            className='m-2 p-2 pb-1 font-semibold hover:border-b-2 hover:border-green-700 active:text-green-700'
            key={link.label}
          >
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
