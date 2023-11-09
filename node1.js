var koa=require('koa');

var app = new koa();


app.use((ctx, next)=>{
	ctx.body="hello world";
	
});


app.listen(8089);
