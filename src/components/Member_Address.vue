<template>
<div>
  <!--    顶部的header开始-->
  <index-header></index-header>
  <index-headertwo></index-headertwo>
  <!--    顶部的header结束-->

  <!--End Header End-->
  <div class="i_bg bg_color">
    <!--Begin 用户中心 Begin -->
    <div class="m_content">
      <div class="m_left">
        <div class="left_n">管理中心</div>
        <div class="left_m">
          <div class="left_m_t t_bg1">订单中心</div>
          <ul>
            <li><a href="Member_Order.html">我的订单</a></li>
            <li><router-link :to="{path:'/Member_Address'}"  class="now"> 收货地址</router-link></li>
            <li><a href="#">缺货登记</a></li>
            <li><a href="#">跟踪订单</a></li>
          </ul>
        </div>
        <div class="left_m">
          <div class="left_m_t t_bg2">会员中心</div>
          <ul>
            <li><a href="Member_User.html">用户信息</a></li>
            <li><a href="Member_Collect.html">我的收藏</a></li>
            <li><a href="Member_Msg.html">我的留言</a></li>
            <li><a href="Member_Links.html">推广链接</a></li>
            <li><a href="#">我的评论</a></li>
          </ul>
        </div>
        <div class="left_m">
          <div class="left_m_t t_bg3">账户中心</div>
          <ul>
            <li><a href="Member_Safe.html">账户安全</a></li>
            <li><a href="Member_Packet.html">我的红包</a></li>
            <li><a href="Member_Money.html">资金管理</a></li>
          </ul>
        </div>
        <div class="left_m">
          <div class="left_m_t t_bg4">分销中心</div>
          <ul>
            <li><a href="Member_Member.html">我的会员</a></li>
            <li><a href="Member_Results.html">我的业绩</a></li>
            <li><a href="Member_Commission.html">我的佣金</a></li>
            <li><a href="Member_Cash.html">申请提现</a></li>
          </ul>
        </div>
      </div>
      <div class="m_right">
        <p></p>
        <div class="mem_tit">收货地址</div>
        <div class="address" v-for="myaddress1 in myaddress1">
          <div class="a_close"><a  @click="del_address(myaddress1.address_id)"><img src="/static/images/a_close.png" /></a ></div>
          <table border="0" class="add_t" align="center" style="width:98%; margin:10px auto;" cellspacing="0" cellpadding="0" >
            <tr>
              <td align="right" width="80">收货人姓名：</td>
              <td>{{myaddress1.address_name}}</td>
            </tr>
            <tr>
              <td align="right">详细地址：</td>
              <td>{{myaddress1.address}}</td>
            </tr>
            <tr>
              <td align="right">手机：</td>
              <td>{{myaddress1.phone}}</td>
            </tr>
          </table>
          <p align="right">
            <a  style="color:#ff4e00;" @click="getaddress(myaddress1.address_id)">设为默认</a>&nbsp; &nbsp; &nbsp; &nbsp; <a href="#" style="color:#ff4e00;">编辑</a>&nbsp; &nbsp; &nbsp; &nbsp;
          </p>
        </div>
        <div class="mem_tit">
          <a href="#"><img src="/static/images/add_ad.gif" /></a>
        </div>
        <table border="0" class="add_tab" style="width:930px;"  cellspacing="0" cellpadding="0" >
          <tr>
            <td width="135" align="right">配送地区</td>
            <td colspan="3" style="font-family:'宋体';" >

              <select name="province" v-on:change="getarea"  style="width:120px;height: 30px">
                <option value="" selected>请选择省份</option>
                <option v-for="province in province" v-bind:value="province.area_id" :id="province.area_id" >{{province.area_name}}</option>
              </select>

              <select name="city" v-on:change="getarea_tow" id="two" style="width:120px;height: 30px">
                <option value="" selected>请选择城市</option>
                <option v-for="myticy in city" v-bind:value="myticy.area_id" :id="myticy.area_id">{{myticy.area_name}}</option>
              </select>

              <select  name="area"  @change="getarea_three" id="three" style="width:120px;height: 30px">
                <option value="" selected>请选择县城</option>
                <option v-for="county in county" v-bind:value="county.area_id" :id="county.area_id">{{county.area_name}}</option>
              </select>
              （必填）
            </td>
          </tr>
          <tr>
            <td align="right">收货人姓名</td>
            <td style="font-family:'宋体';"><input type="text" v-model="name" class="add_ipt" />（必填）</td>
            <td align="right">手机</td>
            <td style="font-family:'宋体';"><input type="text" v-model="phone"  maxlength="11" class="add_ipt"  />（必填）</td>
          </tr>
          <tr>
            <td align="right">详细地址</td>
            <td style="font-family:'宋体';"><input type="text" v-model="ress"  class="add_ipt"  />（必填）</td>
          </tr>
        </table>
        <p align="right">
          <a href="#">删除</a>&nbsp; &nbsp; <a  class="add_b" @click="address">保存地址</a>
        </p>

      </div>
    </div>
    <!--End 用户中心 End-->
    <!--      底部脚开始-->
    <index-fool></index-fool>
    <!--      底部脚结束-->
  </div>

</div>
</template>

<script>
  import axios from 'axios';
  import IndexHeader from "./IndexHeader";
  import IndexHeadertwo from "./IndexHeadertwo";
  import IndexFool from "./IndexFool";
  export default {
    name: 'Member_Address',
    components:{
      IndexHeader,
      IndexHeadertwo,
      IndexFool,
    },
    data(){
      return{
        province:'', //省数组
        city:'', //市数组
        county:'', //县数组
        province_name:'', //省名字
        city_name:'', //市名字
        county_name:'', //县名字
        name:'',       //收货人名字
        phone:'',       //收货人手机号
        ress:'',       //具体收货地址
        myaddress:'',    //拼接后的完整地址
        myaddress1:'',    //库里查询循环
      }
    },
    methods:{
      //当省份下拉框被点击时执行
      getarea:function (event) {
        document.getElementById('two').value=0  //置空
        document.getElementById('three').value=0
        this.city_name=''       //置空防止修改
        this.county_name=''
        this.province_name=document.getElementById(event.target.value).innerHTML //取选择的省份名字
        var pid=event.target.value
        axios
          .post(this.url+"Member/address", {
            p_id:pid,
            token:localStorage.getItem("token")
          })
          .then(response => (this.city = response.data))
          // .then(function (response) {                               //返回数据
          //   console.log(response.data)
          // })
          .catch(function (error) {
            console.log(error);
          });
      },
      //当市份下拉框被点击时执行
      getarea_tow:function (event) {
        this.city_name=document.getElementById(event.target.value).innerHTML  //取选择的市的名字
        var pid=event.target.value
        axios
          .post(this.url+"Member/address", {
            p_id:pid,
            token:localStorage.getItem("token")
          })
          .then(response => (this.county = response.data))
      },
      //当县城下拉框被点击时执行
      getarea_three:function (event) {
         this.county_name=document.getElementById(event.target.value).innerHTML  //取选择的县的名字
      },
      address:function () {
        this.myaddress=''
        if (this.name===''||this.phone===''||this.ress===''||this.province_name===''||this.city_name===''||this.county_name===''){
          alert('请正确填写资料')
          return false
        }
        this.myaddress=this.province_name+this.city_name+this.county_name+this.ress  //拼接好的地址
        axios
          .post(this.url+"Member/address1", {       //token到后台验证
            token:localStorage.getItem("token"),
            name:this.name,
            phone:this.phone,
            myaddress:this.myaddress,
          })
          .then(function (response){
            console.log(response.data);
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
      },
      //删除地址
      del_address:function (address_id) {
        axios
          .post(this.url+"Member/deladdress", {       //地址循环
            token:localStorage.getItem("token"),
            address_id:address_id
          })
          .then(function (response) {                               //返回数据
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      //设为默认地址
      getaddress:function (address_id) {
        axios
          .post(this.url+"Member/getaddress", {
            token:localStorage.getItem("token"),
            ress_id:address_id
          })
          .then(function (response) {                               //返回数据
            console.log(response.data)
            alert('修改成功')
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    mounted(){
      axios
      .post(this.url+"Member/address", {       //从库里拿到地址
        p_id:1,
        token:localStorage.getItem("token")
      })
      .then(response => (this.province = response.data))
      // .then(function (response) {
      //   console.log(response.data)
      // })
      .catch(function (error) {
        console.log(error);
      });
      axios
        .post(this.url+"Member/myaddress", {       //地址循环
          token:localStorage.getItem("token")
        })
        .then(response => (this.myaddress1 = response.data))
        // .then(function (response) {                               //返回数据
        //   console.log(response.data)
        // })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
</script>

<style scoped>

</style>
