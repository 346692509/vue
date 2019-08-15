<template>
  <div>
    <div class="top">
      <div class="logo"><router-link to="/index"><img src="/static/images/logo.png" /></router-link ></div>
      <div class="search">
        <form>
          <input type="text" value="" class="s_ipt" />
          <input type="submit" value="搜索" class="s_btn" />
        </form>
        <span class="fl"><a href="#"  v-for="va in info" > {{va.goods_name}}</a></span>
      </div>
      <div class="i_car">
        <div class="car_t">购物车 [ <span>3</span> ]</div>
        <div class="car_bg">
          <!--Begin 购物车未登录 Begin-->
          <div class="un_login" v-if="user == ''">还未登录！<a href="Login.html" style="color:#ff4e00;">马上登录</a> 查看购物车！</div>
          <!--End 购物车未登录 End-->
          <!--Begin 购物车已登录 Begin-->
          <ul class="cars">
            <li v-for="shopping_cate in shopping_cate">
              <div class="img"><a href="#"><img src="/static/images/car1.jpg" width="58" height="58" /></a></div>
              <div class="name"><a href="#">{{shopping_cate.goods_name}}</a></div>
              <div class="price"><font color="#ff4e00">{{shopping_cate.shopping_price}}</font>　　　　　 X{{shopping_cate.shopping_num}}</div>
            </li>
          </ul>
          <div class="price_sum">共计&nbsp; <font color="#ff4e00">￥</font><span>￥76818</span></div>
          <div class="price_a" @click="mycar"><router-link to="/BuyCar"  >去购物车结算</router-link></div>
          <!--End 购物车已登录 End-->
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: 'IndexHeadertwo',
    data () {
      return {
        info:[],
        user: localStorage.getItem("user"),
        shopping_cate:'', //购物车详情
        totalPrice:''
      }
    },
    methods:{
      mycar(){
        axios.post(this.url+"auth/me", {   //传值到后台
          token:localStorage.getItem("token")
        })
          .catch(function (error) {
            alert('您还没有登录哦！')
            this.$router.push({path:'/login'})  //跳转
            return false
          }.bind(this))
        // .then(response => (this.user_id = response.data.id))
      }
    },
    mounted () {
      axios
        .get('http://localhost/blog/public/index')        //热搜
        .then(response => (this.info = response.data))
        .catch(function (error) { // 请求失败处理
          // console.log(error);
        });
      //购物车详情
      axios.post(this.url+"Mycar/myCar", {   //传值到后台
        token:localStorage.getItem("token"),
      })
      // .then(function (response) {                               //返回数据
      //   console.log(response.data)
      // })
        .then(response => (this.shopping_cate = response.data))
        .catch(function (error) {
          console.log(error);
        });
    },
    // updated () {
    //   var totalP = 0;
    //   this.shopping_cate.forEach(function (val) {
    //     totalP+=val.shopping_price*val.shopping_num;
    //   })
    //   this.totalPrice=totalP
    // }
  }
</script>

<style scoped>

</style>
