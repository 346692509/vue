<template>
  <div>
    <!--    顶部的header开始-->
    <index-header></index-header>
    <index-headertwo></index-headertwo>
    <index-headerthree></index-headerthree>
    <!--    顶部的header结束-->

  <div class="i_bg">
    <div class="content mar_20">
      <img src="/static/images/img1.jpg" />
    </div>
    <!--Begin 第一步：查看购物车 Begin -->
    <div class="content mar_20">
      <table border="0" class="car_tab" style="width:1200px; margin-bottom:50px;" cellspacing="0" cellpadding="0">
        <tr>
          <td class="car_th" width="50"><input type="checkbox" name="" value="" style="width: 20px;height: 20px"></td>
          <td class="car_th" width="470">商品名称</td>
          <td class="car_th" width="140">属性</td>
          <td class="car_th" width="150">购买数量</td>
          <td class="car_th" width="110">单价</td>
          <td class="car_th" width="130">小计</td>
          <td class="car_th" width="90">返还积分</td>
          <td class="car_th" width="190">操作</td>
        </tr>
        <tr v-for="shopping_cate in shopping_cate">
          <td>
            <input type="checkbox" style="width: 35px;height: 35px"  v-on:click="checkboxa(shopping_cate)">
          </td>
          <td>
            <div class="c_s_img"><img src="/static/images/c_1.jpg" width="73" height="73" /></div>
            <h3>{{shopping_cate.goods_name}}</h3>{{shopping_cate.shopping_cate}}
          </td>
          <td align="center">颜色：灰色</td>
          <td align="center">
            <div class="c_num">
              <input type="button" value="" @click="shopping_num_reduce(shopping_cate);" class="car_btn_1"  />
              <input type="text" :value="shopping_cate.shopping_num"   name="" class="car_ipt" />
              <input type="button" value="" @click="shopping_num_add(shopping_cate);" class="car_btn_2" />
            </div>
          </td>
          <td align="center" style="font-size:13px;color:#ff4e00;">{{shopping_cate.shopping_price | formatMoney }}</td>
          <td align="center" style="font-size:15px;color:#ff4e00;">{{shopping_cate.shopping_price * shopping_cate.shopping_num | formatMoney }}</td>
          <td align="center">123</td>
          <td align="center"><a onclick="ShowDiv('MyDiv','fade')">删除</a>&nbsp; &nbsp;<a href="#">加入收藏</a></td>
        </tr>
        <tr height="70">
          <td colspan="6" style="font-family:'Microsoft YaHei'; border-bottom:0;">
            <label class="r_rad"><input type="checkbox" name="clear" checked="checked" /></label><label class="r_txt">清空购物车</label>
            <span class="fr">商品总价：<b style="font-size:22px; color:#ff4e00;">{{totalPrice | formatMoney}}</b></span>
          </td>
        </tr>
        <tr valign="top" height="150">
          <td colspan="6" align="right">
            <a href="#"><img src="/static/images/buy1.gif" /></a>&nbsp; &nbsp; <router-link :to="{path:'/BuyCarTwo',query:{sid:sid}}" ><img src="/static/images/buy2.gif" /></router-link>
          </td>
        </tr>
      </table>
    </div>
    <!--End 第一步：查看购物车 End-->

    <!--Begin 弹出层-删除商品 Begin-->
    <div id="fade" class="black_overlay"></div>
    <div id="MyDiv" class="white_content">
      <div class="white_d">
        <div class="notice_t">
          <span class="fr" style="margin-top:10px; cursor:pointer;" onclick="CloseDiv('MyDiv','fade')"><img src="/static/images/close.gif" /></span>
        </div>
        <div class="notice_c">

          <table border="0" align="center" style="font-size:16px;" cellspacing="0" cellpadding="0">
            <tr valign="top">
              <td>您确定要把该商品移除购物车吗？</td>
            </tr>
            <tr height="50" valign="bottom">
              <td><a href="#" class="b_sure">确定</a><a href="#" class="b_buy">取消</a></td>
            </tr>
          </table>

        </div>
      </div>
    </div>
    <!--End 弹出层-删除商品 End-->

    <!--      底部脚开始-->
    <index-fool></index-fool>
    <!--      底部脚结束-->
  </div>

  </div>
</template>

<script>
  import axios from "axios";
  import IndexHeader from "./IndexHeader";
  import IndexHeadertwo from "./IndexHeadertwo";
  import IndexHeaderthree from "./IndexHeaderthree";
  import IndexFool from "./IndexFool";
  export default {
    name:'BuyCar',
    components:{
      IndexHeader,
      IndexHeadertwo,
      IndexHeaderthree,
      IndexFool,
    },
    data () {
      return {
        shopping_cate:[],   //购物车详情
        shopping:[],
        totalPrice:0,
        sid:''
      }
    },
    mounted () {
      //购物车详情
      axios.post(this.url+"Mycar/myCar", {   //传值到后台
        token:localStorage.getItem("token"),
      })
        // .then(function (response) {                               //返回数据
        //   console.log(response)
        // })
        .then(response => (this.shopping_cate = response.data))
        .catch(function (error) {
          console.log(error);
        });
    },
    methods:{
      //单品减1
      shopping_num_reduce(shopping_cate){
        axios.post(this.url+"Mycar/num_reduce", {
          token:localStorage.getItem("token"),
          shopping_id:shopping_cate.shopping_id
        })
        return shopping_cate.shopping_num<=1 ? shopping_cate.shopping_num=1 :shopping_cate.shopping_num--;
      },
      //单品加1
      shopping_num_add(shopping_cate){
        axios.post(this.url+"Mycar/num_add", {   //传值到后台
          token:localStorage.getItem("token"),
          shopping_id:shopping_cate.shopping_id
        })
        return shopping_cate.shopping_num++;
      },
      //单选或者多选商品
      checkboxa : function(shopping_cate){
        var arr=shopping_cate.shopping_id;
        if (this.shopping[arr]==undefined||this.shopping[arr]==''){
          // this.sid+=arr+','
          this.shopping[arr]=shopping_cate
        }else{
          this.shopping[arr]= '';
        }
        var totalP = 0;
        var s_id=''
        this.shopping.forEach(function (val) {
          if (val!=''){
            totalP+=val.shopping_price*val.shopping_num;
            s_id+=val.shopping_id+','
          }
        })
        this.totalPrice=totalP
        this.sid=s_id
        // console.log(this.sid)
      },
    },
    //过滤器过滤小数
    filters : {
      formatMoney:function (val){
        return '￥'+Math.round(val*100)/100;  //限制小数2位
      }
    }
  }

</script>

<style scoped>

</style>
