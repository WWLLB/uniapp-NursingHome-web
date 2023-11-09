var koa=require('koa');
var koaRouter=require('koa-router');
var swig = require('koa-swig');
var co=require('co');
var app = new koa();
var router = new koaRouter();

const render=swig({
	root:__dirname+'/view', //模板存放目录
	autoescape:true,		//是否自动编码
	cache:false,			//是否缓存
	ext:'.html'				//模板后缀名
})

app.context.render=co.wrap(render);

let users = [{username:'张三'}, {username:'李四'}, {username:'王五'}]

// app.use((ctx, next)=>{
// 	ctx.body="hello world";
// 	next();
// });

router.get('/html', async (ctx, next)=>{
	console.log('----------html--------');
	ctx.body = `<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<h1>hello HTML</h1>
		
	</body>
</html>`;
})

router.get('/list', async (ctx, next)=>{
	console.log('----------list--------');
	ctx.body = await ctx.render('1.html');
})

router.get('/users', async (ctx, next)=>{
	console.log('----------users--------');
	ctx.body = await ctx.render('1.html', {users});
})

router.get('/', (ctx, next)=>{
	ctx.body="root";
})

router.get('/id', (ctx, next)=>{
	ctx.body="123456";
})

router.get('/name', (ctx, next)=>{
	ctx.body="刘力军";
})

//router.get('/', (ctx, next)=>{
//	ctx.body="index-get";
//})

app.use(router.routes());
app.listen(8089);
