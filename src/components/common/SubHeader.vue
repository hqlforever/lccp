<template>
    <div>
        <div class="header">
            <div id="HeaderTop" class="betHeader">
                <div class="snav">
                    <div class="container">
                        <div class="snavAll" >
                            <a href="/index" class=""></a>
                            <ins> | </ins>
                            <a class="betNavMore" @mouseenter="enter_leave" @mouseleave="enter_leave" >全部彩票</a>
                        </div>
                        <ul class="snavInfo">
                          
                            <li class="userName MsgShow"  @mouseenter="showInfo_enter_leave" @mouseleave="showInfo_enter_leave" >
                                <a class="_personalInfo"><img alt="" src="//imagess-google.com/system/common/headimg/CA64E00C3F9FD5F3.jpg">
                                    <i>mm00333</i>
                                </a>
                                <span id="unreadMsgNum" onclick="window.location='letter'">
                                    0
                                </span>
                                <!---->
                            </li>
                            <li class="HoverShow" @mouseenter="my_enter_leave" @mouseleave="my_enter_leave">
                                <a href="/securityCenter" class="" >我的账户
                                    <i class="iconfont"></i>
                                </a>
                                <div class="accountList HoverShowContent" v-show="is_myShow">
                                    <i></i>
                                    <a href="/BetRecord" class="">投注记录</a>
                                    <a href="/BillRecord" class="">交易记录</a>
                                    <a href="/personalInfo" class="">个人信息</a>
                                    <a href="/securityCenter" class="">安全中心</a>
                                    <a href="/agentReport" class="">代理中心</a>
                                </div>
                            </li>
                            <li>余额：
                                <!---->
                                <span class="ShowMoney showMoney">已隐藏
                                    <i>显示</i>
                                </span>
                            </li>
                            <li class="HoverPay" @mouseenter="enter_leave_Recharge" @mouseleave="enter_leave_Recharge">
                                <a>充值
                                    <i class="iconfont"></i>
                                </a>
                                <div class="accountList HoverShowContent" v-show="isRechargeShow">
                                    <i></i>
                                    <div>
                                        <a href="/center/Recharge/0" class="">银行转账</a>
                                        <a href="/center/Recharge/1" class="">快捷支付</a>
                                        <a href="/center/Recharge/2" class="">支付宝</a>
                                        <a href="/center/Recharge/3" class="">微信支付</a>
                                        <a href="/center/Recharge/4" class="">QQ钱包</a>
                                        <a href="/center/Recharge/5" class="">银联支付</a>
                                        <a style="display: none;"></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="/withdraw" class="">提现</a>
                            </li>
                            <li class="LoginOut">退出</li>
                            <a class="serviceLink ServiceBtn">
                                <i class="iconfont"></i>
                                <span></span>
                            </a>
                        </ul>
                    </div>
                    <div class="cardBox" v-show="isShowInfo" style="left: 716px; top: 36px;  position: absolute; z-index: 3;">
                        <div class="card fix">
                            <div class="cardLeft"><img src="//imagess-google.com/system/common/headimg/6EC9EDCC7B3BD70D.jpg" alt="" width="80" height="80">
                                <h6>昵称未设置</h6>
                            </div>
                            <div class="cardInfo">
                                <ul>
                                    <li>性别：保密</li>
                                    <li>账号：18********0</li>
                                    <li>等级：VIP1</li>
                                    <li>头衔：农民</li>
                                    <li>累计中奖：0</li>
                                </ul>
                            </div>
                            <ul class="cardIcon fix">
                                <li>
                                    <a>
                                        <i class="iconfont L_PK10"></i>
                                    </a>
                                </li>

                                <li>
                                    <a>
                                        <i class="iconfont noActive L_K3"></i>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i class="iconfont noActive L_SSC"></i>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i class="iconfont noActive L_SYX5"></i>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i class="iconfont noActive L_KL8"></i>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i class="iconfont noActive L_FC3D"></i>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i class="iconfont noActive L_PL35"></i>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i class="iconfont noActive L_6HC"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container bet">
            <table class="betMoreList" v-bind:style="{'display':isShow ? 'table':'none'}">
                <tbody>
                    <tr>
                        <th style="width: 214px;">快3</th>
                        <th>时时彩</th>
                        <th>快乐彩</th>
                        <th>11选5</th>
                        <th>低频彩</th>
                    </tr>
                    <tr>
                        <td>
                            <a href="/lottery/K3/1401">
                                江苏快3
                            </a>
                            <a href="/lottery/K3/1402">
                                安徽快3
                            </a>
                            <a href="/lottery/K3/1403">
                                广西快3
                            </a>
                            <a href="/lottery/K3/1405">
                                湖北快3
                            </a>
                            <a href="/lottery/K3/1406">
                                北京快3
                            </a>
                            <a href="/lottery/K3/1407">
                                大发快3
                            </a>
                            <a href="/lottery/K3/1408">
                                河北快3
                            </a>
                            <a href="/lottery/K3/1411">
                                甘肃快3
                            </a>
                            <a href="/lottery/K3/1410">
                                上海快3
                            </a>
                            <a href="/lottery/K3/1409">
                                贵州快3
                            </a>
                            <a href="/lottery/K3/1404">
                                吉林快3
                            </a>
                        </td>
                        <td>
                            <a href="/lottery/SSC/1000">
                                重庆时时彩
                            </a>
                            <a href="/lottery/SSC/1001">
                                新疆时时彩
                            </a>
                            <a href="/lottery/SSC/1003">
                                天津时时彩
                            </a>
                            <a href="/lottery/SSC/1008">
                                大发时时彩
                            </a>
                        </td>
                        <td>
                            <a href="/lottery/KL8/1302">
                                北京快乐8
                            </a>
                            <a href="/lottery/PK10/1303" class="router-link-exact-active curr">
                                北京PK10
                            </a>
                            <a href="/lottery/6HC/1301">
                                香港六合彩
                            </a>
                            <a href="/lottery/6HC/1300">
                                大发六合彩
                            </a>
                            <a href="/lottery/PK10/1304">
                                大发PK10
                            </a>
                        </td>
                        <td>
                            <a href="/lottery/SYX5/1100">
                                广东11选5
                            </a>
                            <a href="/lottery/SYX5/1101">
                                上海11选5
                            </a>
                            <a href="/lottery/SYX5/1102">
                                山东11选5
                            </a>
                            <a href="/lottery/SYX5/1103">
                                江西11选5
                            </a>
                        </td>
                        <td>
                            <a href="/lottery/FC3D/1201">
                                福彩3D
                            </a>
                            <a href="/lottery/PL35/1202">
                                排列3
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      is_myShow: false,
      isRechargeShow: false,
      isShowInfo: false
    };
  },
  components: {},
  methods: {
    enter_leave: function() {
      this.isShow = !this.isShow;
    },
    my_enter_leave: function() {
      this.is_myShow = !this.is_myShow;
    },
    enter_leave_Recharge: function() {
      this.isRechargeShow = !this.isRechargeShow;
    },
    showInfo_enter_leave: function() {
     this.isShowInfo=!this.isShowInfo;
    },
    
  }
};
</script>

<style>

</style>
