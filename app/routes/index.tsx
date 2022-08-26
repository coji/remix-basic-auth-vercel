import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div>
      <h2>Welcome to authorized page</h2>

      <Link to="hello">Hello?</Link>
    </div>
  )
}
