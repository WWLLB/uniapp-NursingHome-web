
async function run(){

  var koa=require('koa');
  var koaRouter=require('koa-router');
  var swig = require('koa-swig');
  var co=require('co');
  var koaStaticCache=require('koa-static-cache');
  var bodyParser=require('koa-bodyparser');
  var mysql=require('mysql2/promise');

  var app = new koa();
  var router = new koaRouter();

  app.use(bodyParser());

  app.use(koaStaticCache(__dirname+'/static',{
    prefix:'/static',
    gzip:true
  }));

  let datas={
    appName:"todolist",
    list:[{id:1,name:"pen",number:12,price:1},
    {id:2,name:"book",number:10,price:2},
    {id:3,name:"ruuber",number:20,price:0.5}
    ]
  }

  const connection=await mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'uniapp'
  });

  const render=swig({
    root:__dirname+'/view', //模板存放目录
    autoescape:true,    //是否自动编码
    cache:false,      //是否缓存
    ext:'.html'       //模板后缀名
  });
  app.context.render=co.wrap(render);

  router.get('/', async (ctx, next)=>{
    
    ctx.body=await ctx.render('index.html',{datas});
  });

  // 查询数据
  router.get('/image',async ctx=>{
    let [data]=await connection.query("SELECT * FROM images")
    ctx.body={
      code:1,
      data
    };
  });

  router.get('/getadd', async (ctx, next)=>{
    //ctx.body=await ctx.render('add.html',{datas});
    ctx.body=await ctx.render('getadd.html',{datas});
  });

  router.get('/postadd', async (ctx, next)=>{
    //ctx.body=await ctx.render('add.html',{datas});
    ctx.body=await ctx.render('postadd.html',{datas});
  });

  router.get('/getData', (ctx, next)=>{
    let name=ctx.query.name;
    let price=ctx.query.price;
    let number=ctx.query.number;
    ctx.body="获取数据："+name+"-"+price+"-"+number;
  });

  // 添加数据
  router.post('/postData', async (ctx, next)=>{
    let name=ctx.request.body.name;
    let price=ctx.request.body.price;
    let number=ctx.request.body.number;
    ctx.body="获取数据："+name+"-"+price+"-"+number;

    let id=1,src="1-4.jpg",author='wangwu',title="kankan";
    let [data]=await connection.query("INSERT INTO images (id,src,author,title,loveNumber,commentNumber,shareNumber) VALUES('"+id+"','"+src+"','"+author+"','"+title+"','"+id+"','"+id+"','"+id+"')");
    console.log(data);
    if(data.affectedRows>0) {
      ctx.body={
        code:0,
        data:"添加成功"
      }
    }else {
      ctx.body={
        code:1,
        data:"添加失败"
      }
    }
  });


//删除数据
 router.post('/deleteData', async (ctx, next)=>{
   let name=ctx.request.body.name;
   let price=ctx.request.body.price;
   let number=ctx.request.body.number;
  let id=1
 let [data]=await connection.query("DELETE FROM images WHERE loveNumber=0 AND commentNumber=4 AND shareNumber=4");
   console.log(data);
   if(data.affectedRows>0) {
     ctx.body={
       code:0,
       data:"删除成功"
     }
   }else {
     ctx.body={
       code:1,
       data:"删除失败"
     }
   }
 });
 
 //更改数据：
 
router.post('/update', async (ctx, next)=>{
   let id = ctx.params.id;
   let name=ctx.request.body.name;
   let price=ctx.request.body.price;
   let number=ctx.request.body.number;
 
   let [data]=await connection.query("UPDATE images SET loveNumber=3 WHERE src='1.jpg'");
   console.log(data);
   if(data.affectedRows>0) {
     ctx.body={
       code:0,
       data:"更改成功"
     }
   }else {
     ctx.body={
       code:1,
       data:"更改失败"
     }
   }
 });

  app.use(router.routes());
  app.listen(8089);
};

run();