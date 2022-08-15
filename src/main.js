const Koa = require('koa');
const { Client } = require('pg')
const app = new Koa();

// response
app.use( async (ctx) => {

  // Initial request
  ctx.body = 'Hello DCC!';

  // Database request
  const client = new Client({
    user: 'dcc',
    host: 'db', // Because using docker the name of the host is the name of the container
    database: 'dcc',
    password: '1234',
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

