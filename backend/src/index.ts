import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { userRouter } from './routes/userRouter'
import { blogRouter } from './routes/blogRouter'

const app = new Hono()

app.use('/*', cors())
app.use('/*',
    cors({
      origin: 'http://localhost:5173',
      allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
      allowMethods: ['POST', 'GET', 'OPTIONS'],
      exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
      maxAge: 600,
      credentials: true,
    })
  )
app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)

export default app
