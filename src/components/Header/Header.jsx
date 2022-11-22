import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar bg-base-100">
  <Link to={'/'} className="btn btn-ghost normal-case text-xl">Challenge greydive</Link>
</div>
  )
}

export default Header