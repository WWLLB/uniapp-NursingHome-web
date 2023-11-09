(async function(){
	const mysql = require('mysql2/promise');
	const koa = require('koa');
	const Static = require('koa-static-cache');
	const Router = require('koa-router');
	const fs=require('fs');
	const app=new koa();
	const router=new Router();
	//静态
	app.use(Static('./static',{
		prefix:'/static',
		gzip:true
	}))
	
	//连接数据库
	const connection = await mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'js17150145'
	});
	//添加路由

	router.get('/js17150145',ctx=>{
		const content=fs.readFileSync('./zly.html');
		ctx.body=content.toString()
	})
	
    router.get('/list',async ctx=>{
    	let [arr]=await connection.query("SELECT * FROM zhangliyan");
    	ctx.body={
    		data:arr
    	}
    })
    app.use(router.routes());
    app.listen(8090);
})();
