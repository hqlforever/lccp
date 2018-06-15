<template>
  <div>
    <div class="header head9">
      <div id="HeaderTop" class="">
        <div class="snav">
          <div class="container">
            <div class="snavAll">
              <a href="/index" class="router-link-exact-active curr">
                Hi，欢迎来到爱上彩票！
              </a>
              <ins> | </ins>
              <a class="betNavMore">全部彩票</a>
            </div>
            <ul class="snavInfo" v-show="!isLogin">
              <li>
                <a href="/login" class="">亲，请登录</a>
                <i class="vertical"></i>
              </li>
              <li>
                <a href="/register" class="">用户注册</a>
              </li>
              <a class="serviceLink ServiceBtn">
                <i class="iconfont"></i>
                <span></span>
              </a>
            </ul>

            <ul class="snavInfo" v-show="isLogin">
              <li class="userName MsgShow">
                <a href="/center" class="_personalInfo"><img alt="" src="//imagess-google.com/system/common/headimg/274692371a941235.jpg">
                  <i>{{userName}}</i>
                </a>
                <span id="unreadMsgNum" onclick="window.location='letter'">
                  2
                </span>
                <!---->
              </li>
              <li class="HoverShow" @mouseenter="enter" @mouseleave="leave">
                <a href="/center/securityCenter" class="">我的账户
                  <i class="iconfont"></i>
                </a>
                <div class="accountList HoverShowContent" v-show="isShow">
                  <i></i>
                  <a href="/center/BetRecord" class="">投注记录</a>
                  <a href="/center/BillRecord" class="">交易记录</a>
                  <a href="/center/personalInfo" class="">个人信息</a>
                  <a href="/center/securityCenter" class="">安全中心</a>
                  <a href="/center/agentReport" class="">代理中心</a>
                </div>
              </li>
              <li>余额：
                <!---->
                <span class="ShowMoney showMoney">已隐藏
                  <i>显示</i>
                </span>
              </li>
              <li class="HoverPay" @mouseenter="enterRecharge" @mouseleave="leaveRecharge">
                <a>充值
                  <i class="iconfont"></i>
                </a>
                <div class="accountList HoverShowContent" v-show="isRechargeShow">
                  <i></i>
                  <div>
                    <a href="/center/ebankPay" class="">银行转账</a>
                    <a href="/center/quickPay" class="">快捷支付</a>
                    <a href="/center/Alipay" class="">支付宝</a>
                    <a href="/center/Weixin" class="">微信支付</a>
                    <a href="/center/QQpay" class="">QQ钱包</a>
                    <a href="/center/UnionPay" class="">银联支付</a>

                  </div>
                </div>
              </li>
              <li>
                <a href="/withdraw" class="">提现</a>
              </li>
              <li class="LoginOut" @click="LoginOut">退出</li>
              <a class="serviceLink ServiceBtn">
                <i class="iconfont"></i>
                <span></span>
              </a>
            </ul>

          </div>
          <div class="cardBox" style="display: none;">

          </div>
        </div>
      </div>
      <v-head></v-head>
    </div>

    <router-view v-on:changeLogin="changeLogin"></router-view>
    <v-foot></v-foot>
  </div>
</template>

<script>
import vHead from "./Header.vue";
import vFoot from "./Footer.vue";
export default {
  data() {
    return {
      isLogin: false,
      isShow: false,
      isRechargeShow: false,
      userName: ""
    };
  },
  created() {},
  mounted() {},
  components: {
    vHead,
    vFoot
  },
  methods: {
    enter: function() {
      this.isShow = !this.isShow;
    },
    leave: function() {
      this.isShow = !this.isShow;
    },
    enterRecharge: function() {
      this.isRechargeShow = !this.isRechargeShow;
    },
    leaveRecharge: function() {
      this.isRechargeShow = !this.isRechargeShow;
    },
    LoginOut: function() {
      this.isLogin=false;
      localStorage.clear();
      this.$router.push("login");
      
    },
    changeLogin() {
      let that = this;
      //检查localstorage 判断用户是否登录
      let userInfo = localStorage.getItem("userInfo");

      if (userInfo != null) {
        that.isLogin = true;
        that.userName = userInfo;
      } else {
        that.isLogin = false;
      }
    }
  }
};
</script>

<style>
</style>
