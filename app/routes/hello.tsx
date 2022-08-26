import { NavLink, Outlet } from '@remix-run/react'

export default function Hello() {
  return (
    <div>
      <h1>Hello World!</h1>

      <ul>
        <li>
          <NavLink to="one">one</NavLink>
        </li>
        <li>
          <NavLink to="two">two</NavLink>
        </li>
      </ul>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
