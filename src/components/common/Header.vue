<template>
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
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
</style>
