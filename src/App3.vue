<template>
    <div>
        <div class="header head9">
             <div  id="HeaderTop" class="">
                <div  class="snav">
                    <div  class="container">
                        <div  class="snavAll">
                            <a  href="/index" class="router-link-exact-active curr">
                                Hi，欢迎来到爱上彩票！
                            </a>
                            <ins > | </ins>
                            <a  class="betNavMore">全部彩票</a>
                        </div>
                        <ul  class="snavInfo">
                            <li >
                                <a  href="/login" class="">亲，请登录</a>
                                <i  class="vertical"></i>
                            </li>
                            <li >
                                <a  href="/register" class="">用户注册</a>
                            </li>
                            <a  class="serviceLink ServiceBtn">
                                <i  class="iconfont"></i>
                                <span ></span>
                            </a>
                        </ul>
                    </div>
                    <div   class="cardBox" style="display: none;">
                        <!---->
                    </div>
                </div>
            </div>
           <div class="nav">
                <div class="container fix">
                    <h3>
                        <a href="/">
                            <img src="http://imagess-google.com/ascp/logo/logo1.png?95ae">
                        </a>
                    </h3>
                    <!---->
                    <ul class="navItem fix flr">
                        <li  id="navIndex">
                            <a href="/index">首页</a>
                        </li>
                        <!---->
                        <li class="" id="navLottery">
                            <a href="/lotteryHall">购彩大厅</a>
                        </li>
                        <!---->
                        <li class="" id="navLive">
                            <a href="/livelist">UU直播</a>
                        </li>
                        <!---->
                        <li class="" id="navActivity">
                            <a href="/activity">活动中心</a>
                        </li>
                        <!---->
                        <li class="" id="navHelp">
                            <a href="/mobile">手机购彩</a>
                        </li>
                        <!---->
                        <li class="" id="navHelp">
                            <a href="/helpCenter">帮助指南</a>
                        </li>
                        <!---->
                        <span></span>
                    </ul>
                </div>
            </div>
            
        </div>

        <div class="container registerPage">
            <h3 class="reg_tit">用户登录</h3>
            <p class="reg_small"></p>
            <ul class="submitContent mglr30 regMain">
                <li>
                    <span>账 号：</span><input tag="帐号" type="text" autocomplete="off" class="userInput">
                    <!---->
                </li>
                <li>
                    <span>密 码：</span> <input tag="密码" regmsg="密码应为6-16位字符" type="password" autocomplete="off" class="userInput">
                    <!---->
                </li>
                <!---->
                <li style="margin-top: 23px;">
                    <span></span>
                    <a class="mainColorBtn submitBtnBig ClickShade">登 录</a>
                    <a href="/forgetPwd?Q=ResetPwd" class="forgetPwd">忘记密码?</a>
                </li>
            </ul>
        </div>

        <div class="footer mgt40">
            <div class="ftadCon">
                <div class="container">
                    <ul class="ftad fix">
                        <li>
                            <a id="dafaCloud" target="_blank" href="http://www.dafacloud.com">
                                <p>技术支持
                                    <i>Technical support</i>
                                </p>
                                <div class="technicalSupport fix">
                                    <div class="technicalSupport-box">
                                        <img src="http://imagess-google.com/test/../system/common/other/dafayun.png" alt="大发云">
                                        <p>
                                            大发云
                                            <br> 彩票系统平台
                                        </p>
                                        <i></i>
                                    </div>
                                    <div class="technicalSupport-box uulive">
                                        <img src="http://imagess-google.com/test/../system/common/other/uulive.png" alt="UU直播">
                                        <p>
                                            UU直播
                                            <br> 彩票直播平台
                                        </p>
                                        <i></i>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <p>服务体验
                                <i>Service experience</i>
                            </p>
                            <ul class="serviceExperience">
                                <li>昨日充值平均时间
                                    <p class="footBar">
                                        <span style="width: 40.3704%;"></span>
                                    </p>
                                    <em>3'38</em>
                                    <i>秒</i>
                                </li>
                                <li>昨日提现平均时间
                                    <p class="footBar">
                                        <span style="width: 56.2963%;"></span>
                                    </p>
                                    <em>5'04</em>
                                    <i>秒</i>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p>充值方式
                                <i>Recharge method</i>
                            </p>
                            <div class="rechargeMethod">
                                <i class="wechat"></i>
                                <i class="alipay"></i>
                                <i class="cup"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container _about aboutText">
                <p class="fix">
                    <a>关于我们</a>|
                    <a>联系我们</a>|
                    <a>代理推广</a>|
                    <a>法律声明</a>|
                    <a>隐私声明</a>
                    <!---->
                </p>
                <p class="copyright">Copyright ©
                    <span class="siteName">爱上彩票</span> Reserved | 18+</p>
            </div>
        </div>
        <!---->
        <div class="layermbox layermbox2 layermshow" style="display: none;">
            <div class="laymshade"></div>
            <div class="layermmain">
                <div class="section">
                    <div class="layermchild  layermanim">
                        <div class="layermcont">
                            <i></i>
                            <i class="laymloadtwo"></i>
                            <i></i>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
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
