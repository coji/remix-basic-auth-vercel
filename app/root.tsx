import type { LoaderArgs, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

const isAuthorized = (request: Request) => {
  const header = request.headers.get('Authorization')
  if (!header) return false
  const base64 = header.replace('Basic ', '')
  const [username, password] = Buffer.from(base64, 'base64')
    .toString()
    .split(':')
  return username === 'admin' && password === 'password'
}

export const loader = ({ request }: LoaderArgs) => {
  if (isAuthorized(request)) {
    return json({ authorized: true })
  } else {
    return json({ authorized: false }, { status: 401 })
  }
}

export default function App() {
  const { authorized } = useLoaderData<typeof loader>()
  if (!authorized) {
    return <>Authorization Required</>
  }

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
