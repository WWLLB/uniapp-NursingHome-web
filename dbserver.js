async function run(){
var koa=require('koa');
var Router=require('koa-router');
var Static=require('koa-static-cache');
var mysql=require('mysql2/promise');

var app=new koa();
var router=new Router();

app.use(Static('./static',{
	prefix:'/static',
	gzip:true
}));

const connection=await mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'uniapp'
});

router.get('/', (ctx, next)=>{
	ctx.body="Hello";
})

router.get('/image',async ctx=>{
	let [data]=await connection.query("SELECT * FROM images")
	ctx.body={
		code:1,
		data
	};
});


//router.get('/test',ctx=>{
//	ctx.body="hello";
//});

//router.get('/test',async ctx=>{
//	let [data]=await connection.query("SELECT * FROM images")
//	ctx.body=data;
//});
// app.use("*", function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-control-Allow-Headers", "xCors");
//     res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS,HEAD,FETCH");
//     res.header("Access-control-max-age", 1000);       //测试通过
//     next();
// });

app.use(async (ctx, next)=>{
	//ctx.body="hello world";
	await ctx.set('Access-Control-Allow-Origin', '*');
	await next();
});

app.use(router.routes());

app.listen(8090);
};


run();

