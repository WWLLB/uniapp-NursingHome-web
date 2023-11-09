var koa=require('koa');
var koaStaticCache=require('koa-static-cache');
var koaRouter=require('koa-router');


var app = new koa();
var router = new koaRouter();

app.use(koaStaticCache(__dirname+'/static',{
	prefix:'/static'
}))

app.use((ctx, next)=>{
	ctx.body="hello world";
	
});
router.get('/', (ctx, next)=>{
	ctx.body="index-get";
})

app.use(router.routes());

app.listen(8089);
