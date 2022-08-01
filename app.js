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
  font-weight: 900;
  text-align: center;
}
h2{
  font-weight: 500;
  margin:0;
}
.flex{
  display: flex;
  justify-content: center;
}
.flex>div{
  text-align: center;
  min-width: 50%;
}
</style>
`

app.use(ctx => {
  const method = ctx.method
  const url = ctx.url.split('?')[0]
  const headers = Object.entries(ctx.headers || {}).map(([key, val]) => `<li>${key}=${val}</li>`).join('')
  const query = Object.entries(ctx.query || {}).map(([key, val]) => `<li>${key}=${val}</li>`).join('')
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
  <div class="flex">
    <div>
      <h2>Method</h2>
      <div>${method}</div>
    </div>
    <div>
      <h2>Target Url</h2>
      <div>${url}</div>
    </div>
  </div>
  <h2>Headers</h2>
  <ul>${headers || ''}</ul>
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