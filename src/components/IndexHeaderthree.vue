<template>
    <div>

      <!--Begin Menu Begin-->
      <div class="menu_bg">
        <div class="menu">
          <!--Begin 商品分类详情 Begin-->
          <div class="nav">
            <div class="nav_t">全部商品分类</div>
            <div class="leftNav" style="display: none;">
              <ul>
                <li v-for="arr1 in arr">
                  <div class="fj">
                    <span class="n_img"><span></span><img src="/static/images/nav1.png" /></span>
                    <span class="fl">{{arr1.name}}</span>
                  </div>
                  <div class="zj">
                    <div class="zj_l">
                      <div class="zj_l_c" v-for="arr2 in arr1.son">
                        <h2 >{{arr2.name}}</h2>
                        <a href="#" v-for="arr3 in arr2.son">{{arr3.name}}|</a>
                      </div>
                    </div>
                    <div class="zj_r">
                      <a href="#"><img src="/static/images/n_img1.jpg" width="236" height="200" /></a>
                      <a href="#"><img src="/static/images/n_img2.jpg" width="236" height="200" /></a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--End 商品分类详情 End-->
          <ul class="menu_r">
            <li><a href="Index.html">首页</a></li>
            <li><a href="Food.html">美食</a></li>
            <li><a href="Fresh.html">生鲜</a></li>
            <li><a href="HomeDecoration.html">家居</a></li>
            <li><a href="SuitDress.html">女装</a></li>
            <li><a href="MakeUp.html">美妆</a></li>
            <li><a href="Digital.html">数码</a></li>
            <li><a href="GroupBuying.html">团购</a></li>
          </ul>
          <div class="m_ad">中秋送好礼！</div>
        </div>
      </div>
      <!--End Menu End-->

    </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: 'IndexHeaderthree',
    data () {
      return {
        arr:12,    //树形导航菜单
        floor:1,   //楼层
      }
    },
    mounted () {
      var user=localStorage.getItem("user");
      this.user=user
      axios
        .get('http://localhost/blog/public/catry')   //Vue首页 左侧导航
        .then(response => (this.arr = response.data))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
      axios
        .get('http://localhost/blog/public/floor')
        .then(response => (this.floor = response.data))
        // .then(function (response){
        //   console.log(response.data);
        //   // this.floor = response.data;
        // })
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
    },
  }
</script>

<style scoped>

</style>
