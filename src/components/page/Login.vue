<template>
  <div>
    <div class="container registerPage">
      <h3 class="reg_tit">用户登录</h3>
      <p class="reg_small"></p>
      <ul class="submitContent mglr30 regMain">
        <li>
          <span>账 号：</span><input tag="帐号" type="text" autocomplete="off" class="userInput" v-model="userName">
          <!---->
        </li>
        <li>
          <span>密 码：</span> <input tag="密码" regmsg="密码应为6-16位字符" type="password" autocomplete="off" class="userInput" v-model="passWord">
          <!---->
        </li>
        <!---->
        <li style="margin-top: 23px;">
          <span></span>
          <a class="mainColorBtn submitBtnBig ClickShade" @click="submitBtnBig">登 录</a>
          <a href="/forgetPwd?Q=ResetPwd" class="forgetPwd">忘记密码?</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import bus from "../bus.js";
export default {
  data() {
    return {
      passWord: "",
      userName: ""
    };
  },
  components: {},
  methods: {
    submitBtnBig() {
      //  bus.$emit('tip', '18610412790')
      // localStorage.setItem('userInfo','18610412790');
      //  this.$router.push('/index')

      var that = this;
      this.$http
        .post(that.BASE_INFO.BASE_URL + "user/login", {
          password: that.passWord,
          name: that.userName
        })
        .then(function(response) {
          if (response.data.code == 1) {
            localStorage.setItem("userInfo", that.userName);
            that.$router.push("index");
          } else {
            alert(response.data.message);
          }
        });
    }
  }
};
</script>

<style>
</style>
