<template>
    <div>
      <!--    顶部的header开始-->
      <index-header></index-header>
      <index-headertwo></index-headertwo>
      <index-headerthree></index-headerthree>
      <!--    顶部的header结束-->

        <div class="content mar_20">
          <img src="/static/images/img2.jpg" />
        </div>

      <div class="content mar_20">
        <div class="two_bg">
          <div class="two_t">
            <span class="fr"><a href="#">修改</a></span>商品列表
          </div>
          <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
            <tr>
              <td class="car_th" width="420">商品名称</td>
              <td class="car_th" width="140">属性</td>
              <td class="car_th" width="150">单价</td>
              <td class="car_th" width="130">购买数量</td>
              <td class="car_th" width="130">小计</td>
              <td class="car_th" width="140">返还积分</td>
            </tr>
              <tr v-for="mycar in mycartwo">
                <td>
                  <div class="c_s_img"><img src="/static/images/c_3.jpg" width="73" height="73" /></div>
                  {{mycar.goods_name}}
                </td>
                <td align="center">{{mycar.shopping_cate}}</td>
                <td align="center " style="color:#ff4e00;">￥{{mycar.shopping_price}}</td>
                <td align="center">{{mycar.shopping_num}}</td>
                <td align="center" style="color:#ff4e00;">￥{{mycar.shopping_price*mycar.shopping_num}}</td>
                <td align="center">26R</td>
              </tr>
            <tr>
              <td colspan="5" align="right" style="font-family:'Microsoft YaHei';">
                商品总价：<span style="color: #ff4e00">￥{{totalPrice}}</span> ； 返还积分 56R
              </td>
            </tr>
          </table>

          <div class="two_t">
            <router-link to="/Member_Address"><span class="fr"><a >修改</a ></span></router-link>收货人信息
          </div>
          <table border="0" class="peo_tab" style="width:1110px;" cellspacing="0" cellpadding="0" v-for="default_address in default_address">
            <tr>
              <td class="p_td" width="100">收货人名称</td>
              <td width="395">{{default_address.address_name}}</td>
              <td class="p_td">手机</td>
              <td>{{default_address.phone}}</td>
            </tr>
            <tr>
              <td class="p_td">收货人名称</td>
              <td >{{default_address.address}}</td>
              <td class="p_td"></td>
              <td></td>
            </tr>
          </table>


          <div class="two_t">
            配送方式
          </div>
          <table border="0" class="car_tab" style="width:1110px;" cellspacing="0" cellpadding="0">
            <tr>
              <td class="car_th" width="80"></td>
              <td class="car_th" width="200">名称</td>
              <td class="car_th" width="370">订购描述</td>
              <td class="car_th" width="150">费用</td>
              <td class="car_th" width="135">免费额度</td>
              <td class="car_th" width="175">保价费用</td>
            </tr>
            <tr>
              <td align="center"><input type="checkbox" name="ch" checked="checked" /></td>
              <td align="center" style="font-size:14px;"><b>申通快递</b></td>
              <td>江、浙、沪地区首重为15元/KG，其他地区18元/KG，续重均为5-6元/KG， 云南地区为8元</td>
              <td align="center">￥15.00</td>
              <td align="center">￥0.00</td>
              <td align="center">不支持保价</td>
            </tr>
            <tr>
              <td align="center"><input type="checkbox" name="ch" /></td>
              <td align="center" style="font-size:14px;"><b>城际快递</b></td>
              <td>运费固定</td>
              <td align="center">￥15.00</td>
              <td align="center">￥0.00</td>
              <td align="center">不支持保价</td>
            </tr>
            <tr>
              <td align="center"><input type="checkbox" name="ch" /></td>
              <td align="center" style="font-size:14px;"><b>邮局平邮</b></td>
              <td>运费固定</td>
              <td align="center">￥15.00</td>
              <td align="center">￥0.00</td>
              <td align="center">不支持保价</td>
            </tr>
            <tr>
              <td colspan="6">
                <span class="fr"><label class="r_rad"><input type="checkbox" name="baojia" /></label><label class="r_txt">配送是否需要保价</label></span>
              </td>
            </tr>
          </table>

          <div class="two_t">
            支付方式
          </div>
          <ul class="pay">
            <li class="checked">支付宝<div class="ch_img"></div></li>
            <li>银行亏款/转账<div class="ch_img"></div></li>
            <li>货到付款<div class="ch_img"></div></li>
          </ul>

          <table border="0" style="width:900px; margin-top:20px;" cellspacing="0" cellpadding="0">
            <tr>
              <td align="right">
                该订单完成后，您将获得 <font color="#ff4e00">{{totalPrice}}</font> 积分 ，以及价值 <font color="#ff4e00">￥0.00</font> 的红包 <br />
                商品总价: <font color="#ff4e00">￥{{totalPrice}}</font>  + 配送费用: <font color="#ff4e00">￥15.00</font>
              </td>
            </tr>
            <tr height="70">
              <td align="right">
                <b style="font-size:14px;">应付款金额：<span style="font-size:22px; color:#ff4e00;">￥{{totalPrice}}</span></b>
              </td>
            </tr>
            <tr height="70">
              <td align="right"><a @click="getorder"><img src="/static/images/btn_sure.gif" /></a></td>
            </tr>
          </table>
        </div>
      </div>
      <!--      底部脚开始-->
      <index-fool></index-fool>
      <!--      底部脚结束-->

    </div>
</template>

<script>
  import axios from "axios";
  import IndexHeader from "./IndexHeader";
  import IndexHeadertwo from "./IndexHeadertwo";
  import IndexHeaderthree from "./IndexHeaderthree";
  import IndexFool from "./IndexFool";
  export default {
    name: 'BuyCarTwo',
    components:{
      IndexHeader,
      IndexHeadertwo,
      IndexHeaderthree,
      IndexFool,
    },
    data(){
      return{
        mycartwo:[],    //购物车第二页信息
        totalPrice:'',  //总价
        default_address:'',//我的地址
        shopping_id:'',    // 货品信息
        id:'',
        order_id:''
      }
    },
    methods:{
      getorder:function () {
        // 生成订单
        var shopping_id=''
        this.mycartwo.forEach(function (val) {
          shopping_id+=val.shopping_id+','
        })
        this.shopping_id=shopping_id
        axios.post(this.url+"Mycar/add_address", {   //传值到后台
          token:localStorage.getItem("token"),
          shopping_id:this.shopping_id,
          default_address:this.default_address,
          totalPrice:this.totalPrice,
        })
        .then(function (response) {                               //返回数据
          console.log(response.data)
          window.location.href='http://localhost/blog/public/api/pay/index?order_id='+response.data.order_id+'&token='+localStorage.getItem("token")+'';
        })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    mounted () {
      //传shoppingID。查询购物车第二页
      var shoping_id=this.$route.query.sid;
      axios.post(this.url+"Mycar/myCartwo", {   //传值到后台
        token:localStorage.getItem("token"),
        id:shoping_id
      })
      // .then(function (response) {                               //返回数据
      //   console.log(response.data)
      // })
        .then(response => (this.mycartwo = response.data))
        .catch(function (error) {
          console.log(error);
        });
      //查询默认地址
      axios.post(this.url+"Mycar/selectaddress", {   //传值到后台
        token:localStorage.getItem("token"),
      })
        .then(response => (this.default_address = response.data))
        .catch(function (error) {
          console.log(error);
        });
    },
    updated () {
      var totalP = 0;
      this.mycartwo.forEach(function (val) {
        totalP+=val.shopping_price*val.shopping_num;
      })
      this.totalPrice=totalP
    }
  }
</script>
<style scoped>

</style>
