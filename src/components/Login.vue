<template>
  <div class="hello">
    <!--Begin Login Begin-->
    <div class="log_bg">
      <div class="top">
        <div class="logo"><a href="Index.html"><img src="/static/images/logo.png" /></a></div>
      </div>
      <div class="login">
        <div class="log_img"><img src="/static/images/l_img.png" width="611" height="425" /></div>
        <div class="log_c">
          <form>
            <table border="0" style="width:370px; font-size:14px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr height="50" valign="top">
                <td width="55">&nbsp;</td>
                <td>
                  <span class="fl" style="font-size:24px;">登录</span>
                  <span class="fr">还没有商城账号，<a href="Regist.html" style="color:#ff4e00;">立即注册</a></span>
                </td>
              </tr>
              <tr height="70">
                <td>用户名</td>
                <td><input type="text" value="" v-model="name" class="l_user" /></td>
              </tr>
              <tr height="70">
                <td>密&nbsp; &nbsp; 码</td>
                <td><input type="password" value="" v-model="password" class="l_pwd" /></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style="font-size:12px; padding-top:20px;">
                	<span style="font-family:'宋体';" class="fl">
                    	<label class="r_rad"><input type="checkbox" /></label><label class="r_txt">请保存我这次的登录信息</label>
                    </span>
                  <span class="fr"><a href="#" style="color:#ff4e00;">忘记密码</a></span>
                </td>
              </tr>
              <tr height="60">
                <td>&nbsp;</td>
                <!--                <td><button class="log_btn"  v-on:click="login">登录</button></td>-->
                <td><input type="submit" class="log_btn" value="登录" v-on:click="login()" ></td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </div>
    <div class="btmbg">
      <div class="btm">
        备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com   Copyright © 2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group <br />
        <img src="/static/images/b_1.gif" width="98" height="33" /><img src="/static/images/b_2.gif" width="98" height="33" /><img src="/static/images/b_3.gif" width="98" height="33" /><img src="/static/images/b_4.gif" width="98" height="33" /><img src="/static/images/b_5.gif" width="98" height="33" /><img src="/static/images/b_6.gif" width="98" height="33" />
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import Router from '../router';
  export default {
    name: "login",
    data() {
      return {
        name:'',
        password:'',
      }
    },
    methods:{
      login:function() {
        if (this.name=== '' || this.password === '') {
          alert('账号或密码不能为空');
        }else{
          axios.post(this.url+"auth/login", {   //传值到后台
            name: this.name,
            password: this.password,
          })
            .then(function (response) {                               //返回数据
              if (response.status==200){
                var user=JSON.parse(response.config.data);     //字符串转对象
                // 存储
                localStorage.setItem("user", user.name);
                localStorage.setItem("token", response.data.access_token);
                // this.$router.push({path:'/index'})  //跳转
                this.$router.push({name: 'Index'});  //跳转
              }
            }.bind(this))                            //跳转要加的
            .catch(function (error) {
              alert("用户名或密码错误")
              // console.log(error);
            });
        }
      }
    }
  }
  // var token = localStorage.getItem("token");
</script>

<style scoped>
  /*.bind(this)*/
</style>
