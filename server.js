var koa = require("koa");
var koaRouter = require("koa-router");
var swig = require("koa-swig");
var co = require("co");
var koaStaticCache = require("koa-static-cache");
var mysql = require("mysql2/promise");
var cors = require("@koa/cors");
var koaBodyParser = require('koa-bodyparser');

var app = new koa();
var router = new koaRouter();

async function run() {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "731553053",
    database: "js20080227",
  });

  router.get("/api/2-js20080227", async (ctx, next) => {
    const [data] = await connection.query("SELECT * FROM weibangli");
    ctx.body = {
      code: 0,
      message: "阿邦的吃在南京",
      text: "客官！请看阿邦小馆的菜单",
      data: data,
    };
  });

  router.post("/api/1-js20080227", koaBodyParser(), async (ctx, next)  => {
    const id = ctx.request.body.id;
    const name = ctx.request.body.name;
  
    console.log("接收到的数据：", id, name);
  
    let [data] = await connection.query(
      "INSERT INTO weibangli (id,name) VALUES (?,?)",
      [id, name]
    );
    console.log("插入数据的结果：", data);
    if (data.affectedRows > 0) {
      ctx.body = {
        code: 0,
        data: "添加成功",
      };
    } else {
      ctx.body = {
        code: 1,
        data: "添加失败",
      };
    }
  });

 router.get("/api/test", async (ctx, next) => {
   ctx.body = {
     code: 0,
     message: "吃在南京",
     text: "开发者信息",
     data: [
       { id: 1, name: "韦邦利", major: "计算机科学与技术",interest: "好难学" },
       { id: 2, name: "小金毛", major: "软件工程", interest: "根本不会" },
       { id: 3, name: "蛋白", major: "物联网工程", interest: "直接摆烂" },
     ],
   };
 });
 
 
 
  router.get("/api/3-js20080227", async (ctx, next) => {
    const [data] = await connection.query("SELECT * FROM weibangli");
    ctx.body = {
      code: 0,
      message: "获取数据库数据成功",
      data: data,
    };
  });

  app.use(cors({
    origin: "http://localhost:8080",
  }));
  app.use(router.routes());

  app.listen(3000, () => {
    console.log("Server is running on port 3000...");
  });
}

run();