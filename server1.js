var koa = require("koa");
var koaRouter = require("koa-router");
var bodyParser = require("koa-bodyparser");

var app = new koa();
var router = new koaRouter();

app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Authorization"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  await next();
});

router.get("/list", function (ctx, next) {
  ctx.body = "Hello, List!";
});

router.post("/data", bodyParser(), function (ctx, next) {
  const { id, name, quantity } = ctx.request.body;
  console.log(id, name, quantity);
  ctx.body = "Data received";
});

app.use(function (ctx, next) {
  return new Promise(function (resolve, reject) {
    ctx.set("Access-Control-Allow-Origin", "*");
    resolve(next());
  });
});

app.use(router.routes());

app.listen(3000, function () {
  console.log("Server is running on port 3000...");
});