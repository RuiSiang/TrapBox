const Koa = require('koa')
const app = new Koa();

const styles = `
<style>
body{
  padding: 4rem;
  background-color: #eee;
  word-break: break-all;
  font-family: Helvetica, Sans-Serif;
}
.wrap{
  padding: 4rem;
  background-color: white;
}
h1{
  text-align: center;
}
</style>
`

app.use(ctx => {
  const headers = Object.entries(ctx.headers || {}).map(([key, val]) => `<li>${key}=${val}</li>`).join('')
  const query = Object.entries(ctx.query || {}).map(([key, val]) => `<li>${key}=${val}</li>`).join('')
  const params = Object.entries(ctx.params || {}).map(([key, val]) => `<li>${key}=${val}</li>`).join('')
  const body = ctx.request.body
  const html = `
  <!DOCTYPE html>
  <html>
  <header>
  ${styles}
  </header>
  <body>
  <div class="wrap">
  <h1>TrapBox</h1>
  <h2>Headers</h2>
  <ul>${headers || ''}</ul>
  <h2>Params</h2>
  <ul>${params || ''}</ul>
  <h2>Query</h2>
  <ul>${query || ''}</ul>
  <h2>Body</h2>
  <div>${body || ''}</div>
  </div>
  </body>
  </html>`
  ctx.body = html
})

app.listen(parseInt('80' || pprocess.env.PORT))