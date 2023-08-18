const Router = require('@koa/router');
const Koa = require('koa');
const { Client } = require('pg')

const logger = require('koa-logger')


const DATABASE_USER = process.env.DATABASE_USER || 'dcc'
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '1234'

const app = new Koa();

router = new Router();

app.use(logger())
app
  .use(router.routes())
  .use(router.allowedMethods());


router.get('/', async (ctx, next) => {
  // Database request
  const client = new Client({
    user: DATABASE_USER,
    host: 'db', // Because using docker the name of the host is the name of the container
    database: 'dcc',
    password: DATABASE_PASSWORD,
    port: 5432,
  })
  await client.connect()
  const res = await client.query('SELECT * FROM ayudantes;')
  ctx.body = res.rows;
  await client.end()
});

router.get('/test', async (ctx, next) => {
  ctx.body = "Hello world!"
});

app.listen(3000, () => {
  console.log("Starting app in port 3000")
})

