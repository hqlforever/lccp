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
                                    <i>13001129736</i>
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
            <div class="nav">
                <div class="container fix">
                    <h3>
                        <a href="/">
                            <img src="@/assets/Images/logo.jpg">
                        </a>
                    </h3>
                    <!---->
                    <ul class="navItem fix flr">
                        <li id="navIndex">
                            <router-link to="/index">首页</router-link>
                        </li>
                        <!---->
                        <li class="" id="navLottery">
                            <router-link to="/lotteryHall">购彩大厅</router-link>
                        </li>
                        <!---->
                        <li class="" id="navLive">
                            <router-link to="/livelist">UU直播</router-link>
                        </li> 
                        <!---->
                        <li class="" id="navActivity">
                            <router-link to="/activity">活动中心</router-link>
                            <!-- <a href="/activity">活动中心</a> -->
                        </li>
                        <!---->
                        <li class="" id="navHelp">
                            <router-link to="/mobile">手机购彩</router-link>
                            <!-- <a href="/mobile">手机购彩</a> -->
                        </li>
                        <!---->
                        <li class="" id="navHelp">
                            <router-link to="/helpCenter">帮助指南</router-link>
                            <!-- <a href="/helpCenter">帮助指南</a> -->
                        </li>
                        <!---->
                        <span></span>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import  bus  from '../bus.js'
export default {
  data() {
    return {
      isShow: false,
      isLogin: false,
      isRechargeShow: false
    };
  },
  components: {},
  mounted() {
    bus.$on("tip", text => {
      if (localStorage.getItem("userInfo")) {
        this.isLogin = true;
      }
    });
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
      localStorage.removeItem("userInfo");
      this.$router.push("/login");
       bus.$emit('tip', '18610412790')
    }
  }
};
</script>

<style>
</style>
