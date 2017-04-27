## Example:
```node
require('marko/node-require');
 
const Koa = require('koa');
const app = new Koa();
const renderer = require('koa-marko');
 
const template = require('./index.marko');
app.use(renderer({
  templateDir: './views'
}));

app.use((ctx) => {
    ctx.marko('home', { ...local_data })
});
 
app.listen(8080);
```