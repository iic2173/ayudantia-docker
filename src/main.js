const Koa = require('koa');
const { Client } = require('pg')
const app = new Koa();

const DATABASE_USER = process.env.DATABASE_USER || 'dcc'
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '1234'

console.log(DATABASE_USER)
console.log(DATABASE_PASSWORD)

// response
app.use( async (ctx) => {

  // Initial request
  ctx.body = 'Hello DCC!';

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

app.listen(3000, () => {
  console.log("Starting app in port 3000")
})

