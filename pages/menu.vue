<template>
  <div>
   <!-- <navbar>
      <template v-slot:default>
        <span>韦邦利</span>
        <span>js20080227</span>
        <button @click="gonews2">南京小吃介绍</button>
        <button @click="gonews">最具人气的小吃</button>
      </template>
    </navbar> -->

    <view class="content">
      <div style="width: 50%; text-align: left;">
       <!-- <button @click="getDataFromServer">获取后端数据</button> -->
        <button @click="getRandomDataFromDB">阿邦点餐</button>
      </div>

      <div class="result-container">
        <div class="result">
          <div class="result-placeholder"></div>
          <div style="display: flex; flex-direction: column; align-items: center;">
            <h3>您的点餐结果</h3>
            <p>ID：{{ randomData.id }}</p>
            <p>名称：{{ randomData.name }}</p>
          </div>
          <image class="logo" src="/static/images/鸭血粉丝.jfif"></image>
          <div style="display: flex; flex-direction: column; align-items: center;">
            <h1 class="message">{{ message }}</h1>
            <h2 class="text">{{ text }}</h2>
            <ul>
              <li v-for="(item, index) in sortedDataList" :key="index">
                {{ item.name }}，{{ item.id }}
              </li><!-- 循环显示数据库的数据,从小到大 -->
            </ul>
            <form @submit.prevent="addData">
              <button type="submit" @click="addData">输入添加您想吃的南京美食</button>
              <input type="text" v-model="id" placeholder="点击这里输入菜单号">
              <input type="text" v-model="name" placeholder="点击这里输入菜单名">
            </form>
            <div style="width: 100%; text-align: left;">
              <button @click="getDataFromServer">刷新最新菜单</button>
            </div>
          </div>
        </div>
      </div>
    </view>

  </div>
</template>
<script>
import axios from "axios";
import navbar from '@/components/navbar.vue'; //导航栏组件


export default {
	
	 name: 'index',
	  components: {
	    navbar
		},
	
	
  data() {
    return {
      message: "",
      text: "",
      dataList: [],
      title: "欢迎来到我的个人主页",
      name: "",
      id: "",
      randomData: {},
    };
  },
  methods: {
    gonews() {
      uni.navigateTo({
        url: "/pages/news/news",
      });
    },
    gonews2() {
      uni.navigateTo({
        url: "/pages/youname/youname",
      });
    },
    addData() {
      console.log("添加数据被触发了");
      console.log("发送的数据：", this.id, this.name);
      axios
        .post("http://localhost:3000/api/1-js20080227", {
          id: this.id,
          name: this.name,
        })
        .then((res) => {
          console.log("接收到的数据：", res.data);
          this.name = "";
          this.id = "";
          this.getData();
		   // this.getDataFromServer();
        })
        .catch((err) => {
          console.error(err);
        });
    },
	
	//这里注释掉可以不用运行时就显示后端数据，而是点击按钮才能显示菜单
     getData() {
    //   axios
    //     .get("http://localhost:3000/api/data", {
    //       timeout: 5000,
    //       headers: {
    //         "Access-Control-Allow-Origin": "http://localhost:8080",
    //       },
    //     })
    //     .then((response) => {
    //       this.message = response.data.message;
    //       this.text = response.data.text;
    //       this.dataList = response.data.data;
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
     },
	
	//获取后端服务器数据按钮
  getDataFromServer() {
	  console.log("查看菜单被被触发了");
    this.message = "正在获取数据，请稍候...";
    this.text = "";
    this.dataList = [];
    axios
      .get("http://localhost:3000/api/2-js20080227")
      .then((response) => {
        console.log(response.data);
        this.message = response.data.message;
        this.text = response.data.text;
        this.dataList = response.data.data;
      })
      .catch((error) => {
        console.error(error);
        this.message = "获取数据失败";
        this.text = "请检查网络连接或稍后再试";
      });
  },
	
    getRandomDataFromDB() {
		console.log("获取数据被触发了");
		console.log("随机点餐的功能");
      axios
        .get("http://localhost:3000/api/3-js20080227")
        .then((response) => {
          const data = response.data.data;
          const randomIndex = Math.floor(Math.random() * data.length);
          this.randomData = data[randomIndex];
		  console.log("接收到的数据：", this.randomData);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  computed: {
    sortedDataList() {
      return this.dataList.sort((a, b) => {
        return a.id - b.id;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
	
	/* 导航栏样式 已经转到渲染目录了*/
	/* .navbar {
	  display: flex;
	  justify-content: flex-start;
	  align-items: center;
	  height: 50px;
	  background-color: #333;
	  color: #fff;
	  padding: 0 20px;
	}
	
	.navbar button {
	  margin-right: 10px;
	} */
	
	
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 50px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* .logo {
  height: 600rpx;
  width: 800rpx;
  margin-top: 90rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
} */

.logo {
  height: 45vh;
  width: 90vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.message {
  font-size: 48px;
  margin-bottom: 20px;
  z-index: 1;
}

.text {
  font-size: 36px;
  z-index: 1;
}

/* 居中显示点餐文字 */

/* .result-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
}

.result {
  text-align: center;
} */


/* 以下三个修改了点餐的布局,使得数据的增加不会影响上面的文字布局显示 */
.result-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}

.result {
  text-align: center;
}

.result-placeholder {
  height: 20px;
}


</style>