<template>

    <div id="app" class="lottery">
        <v-head></v-head>
        <div class="container bet">

            <div class="betTitle fix">
                <div class="betLogo">
                    <h2>{{LotteryName}}</h2>
                    <i class="iconfont L_PK10"></i>
                </div>
                <div class="time">
                    <div class="timeTitle" style="opacity: 1;">距
                        <b>{{currentID+1}}</b>期投注截止还有：</div>
                    <em>{{countTimeStr}}</em>
                </div>
                <div id="Results" class="announced">
                <div  class="announcedTitle">第<b >{{currentID}}</b>期开奖号码：</div>
                <ul  class="announcedNo fix" style="">
                <li  class="announcedNo1"></li>
                <li  class="announcedNo2"></li>
                <li  class="announcedNo6">
                </li>
                </ul>
                </div>
            </div>
            <div class="betContent fix">
                <div class="betLeft">
                    <div>
                        <div class="betNavCon">
                            <ul class="betNav fix" style="width: 1232px; transform: translateX(0px);">
                                <li :class="{active:1401 == code}" @click="tab(1401)">江苏快3</li>
                                <li :class="{active:1402 == code}" @click="tab(1402)">安徽快3</li>
                                <li :class="{active:1406 == code}" @click="tab(1406)">北京快3</li>
                                <li :class="{active:1410 == code}" @click="tab(1410)">上海快3</li>
                            </ul>
                        </div>
                        <a class="betNavtab left">
                            <span>
                                <em></em>
                            </span>
                        </a>
                        <a class="betNavtab right">
                            <span>
                                <em></em>
                            </span>
                        </a>
                    </div>
                    <!---->
                    <!---->
                    <div>
                        <ul class="betFilter">
                            <li class="curr">和值</li>
                            <li class="">三同号通选</li>
                            <li class="">三同号单选</li>
                            <li class="">三不同号</li>
                            <li class="">三连号通选</li>
                            <li class="">二同号复选</li>
                            <li class="">二同号单选</li>
                            <li class="">二不同号</li>
                        </ul>
                        <div class="betTip">
                            <i class="iconfont"></i>猜3个开奖号相加的和，3-10为小，11-18为大。赔率1.968-190.94倍。</div>
                        <div class="checkNumber" style="height:344px;width:710px;">
                            <ul style=" text-align:center">
                                <li class="">
                                    <a class="ClickShade">3</a>
                                    <span> 赔190.94</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">4</a>
                                    <span> 赔63.64</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">5</a>
                                    <span> 赔31.82</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">6</a>
                                    <span> 赔19.09</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">7</a>
                                    <span> 赔12.72</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">8</a>
                                    <span> 赔9.09</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">9</a>
                                    <span> 赔7.63</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">10</a>
                                    <span> 赔7.07</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">11</a>
                                    <span> 赔7.07</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">12</a>
                                    <span> 赔7.63</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">13</a>
                                    <span> 赔9.09</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">14</a>
                                    <span> 赔12.72</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">15</a>
                                    <span> 赔19.09</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">16</a>
                                    <span> 赔31.82</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">17</a>
                                    <span> 赔63.64</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">18</a>
                                    <span> 赔190.94</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">大</a>
                                    <span> 赔率1.968</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">小</a>
                                    <span> 赔率1.968</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">单</a>
                                    <span> 赔率1.968</span>
                                </li>
                                <li class="">
                                    <a class="ClickShade">双</a>
                                    <span> 赔率1.968</span>
                                </li>
                            </ul>
                            <!---->
                            <!---->
                        </div>
                        <div class="Panel" style="display: none;">
                            <p class="betTotal">您选择了
                                <em>0</em> 注</p>
                            <a class="betBtn ClickShade">确认选号</a>
                        </div>
                        <div class="checkedList">
                            <table>
                                <tbody></tbody>
                            </table>
                        </div>
                        <div class="Bet">
                            <p class="betTotal">方案注数
                                <em>0</em> 注，金额
                                <i class="money">0</i> 元</p>
                            <a class="betBtn ClickShade UnClick">立即投注</a>
                        </div>
                    </div>
                </div>
                <div class="betRight">
                    <div class="today box">
                        <!---->
                        <h3>今日开奖</h3>
                        <div id="" class="more">
                            <a href="/trendChart/1303" target="_blank">走势图</a>
                            <a>玩法说明</a>
                        </div>
                        <!---->
                        <div class="ResultsList">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" id="fn_getoPenGame" class="ty_table_gameBet curr">
                                <tbody>
                                    <tr>
                                        <th scope="col">期号</th>
                                        <th scope="col">开奖号</th>
                                        <th scope="col">开奖时间</th>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr v-for="item of OpenList">
                                        <td class="c_green">
                                            <i class="o_qi">{{item.IssueNo}}</i>
                                        </td>
                                        <td>

                                            <i class="numbers">{{item.LotteryOpen | formatNO}}
                                                <a v-on:click="detail(item.LotteryOpen)">详情</a>
                                            </i>
                                        </td>
                                        <td>{{item.OpenTime | formatDate}}</td>
                                    </tr>
                                    <!-- <tr>
                                        <td class="c_green">
                                            <i class="o_qi">684596</i>
                                        </td>
                                        <td>
                                            
                                            <i class="numbers">06,04,07,02,09,..
                                                <a>详情</a>
                                            </i>
                                        </td>
                                        <td>20:19:20</td>
                                    </tr> -->
                                </tbody>
                            </table>
                        </div>
                        <!---->
                    </div>
                    <div class="mybet box">
                        <h3>我的投注</h3>
                        <h3 class="notSelect">我的追号</h3>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="_mybetContent">
                            <tbody>
                                <tr>
                                    <th>期号</th>
                                    <th>投注金额</th>
                                    <th>奖金</th>
                                </tr>
                                <!---->
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <!---->
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" class="_betChaseAnimation dpn"></table>
                        <table class="more">
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="/betRecord">更多&gt;&gt;</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="winningList box" style="height:620px;">
                        <h3>中奖信息</h3>
                        <h3 class="notSelect">昨日盈利榜</h3>
                        <div id="Ranking" class="winnerListSlide" style="width: 100%; box-sizing: content-box;">
                            <div id="lotteryInfo" style="width: 100%;">
                                <table width="100%">
                                    <tbody>
                                        <tr>
                                            <th>中奖信息实时更新</th>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="bd" style="height:100%">
                                    <div style="overflow: hidden; height: 510px;">

                                        <ul class="winnerList">
                                            <li v-for="item of BonusList">
                                                <img :src="'//imagess-google.com/system/common/headimg/'+item.UserPhoto" />
                                                <p>{{item.UserName}} {{item.LotteryName}}<br>喜中
                                                    <span>¥{{item.Bonus}}</span>
                                                </p>
                                            </li>
                                        </ul>
                                        <!-- <li v-for="item of BonusList">
                                                 <img src="//imagess-google.com/system/common/headimg/520bcebd43fb2458.jpg"/>
                                                 <p>{{item.UserName}} {{item.LotteryName}}<br>喜中
                                                    <span>¥{{item.Bonus}}</span>
                                                </p>
                                            </li> -->

                                        <!-- <li><img src="//imagess-google.com/system/common/headimg/520bcebd43fb2458.jpg">
                                                <p>71***8 大发六合彩<br>喜中
                                                    <span>¥40.26</span>
                                                </p>
                                            </li>
                                            -->

                                    </div>
                                </div>
                            </div>
                            <div id="moneyList" style="width: 100%; display: none;">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="position: relative;">
                                    <tr>
                                        <th colspan="2">昨日累计盈利排行榜</th>
                                    </tr>
                                    <tr>
                                        <td><img src="//imagess-google.com/system/common/headimg/9ebf89b60bdaaf51.jpg">
                                            <p>账号昵称：幸福滋味<br> 昨日盈利：
                                                <i>¥630372</i>
                                            </p>
                                        </td>
                                        <td>
                                            <ins>1</ins>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="//imagess-google.com/system/common/headimg/7f02613f51d3b253.jpg">
                                            <p>账号昵称：含笑半步颠<br> 昨日盈利：
                                                <i>¥520661</i>
                                            </p>
                                        </td>
                                        <td>
                                            <ins>2</ins>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="//imagess-google.com/system/common/headimg/73ad0d4d5aa8c974.jpg">
                                            <p>账号昵称：尧尧<br> 昨日盈利：
                                                <i>¥514723</i>
                                            </p>
                                        </td>
                                        <td>
                                            <ins>3</ins>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="//imagess-google.com/system/common/headimg/C7BB5088540C8040.jpg">
                                            <p>账号昵称：赢多多<br> 昨日盈利：
                                                <i>¥470687</i>
                                            </p>
                                        </td>
                                        <td>
                                            <ins>4</ins>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="//imagess-google.com/system/common/headimg/EED50A5799E76E58.jpg">
                                            <p>账号昵称：面朝大海<br> 昨日盈利：
                                                <i>¥428793</i>
                                            </p>
                                        </td>
                                        <td>
                                            <ins>5</ins>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="//imagess-google.com/system/common/headimg/9f42ce18775ccc25.jpg">
                                            <p>账号昵称：ty***3<br> 昨日盈利：
                                                <i>¥377421</i>
                                            </p>
                                        </td>
                                        <td>
                                            <ins>6</ins>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="//imagess-google.com/system/common/headimg/be83d242f47468f2.jpg">
                                            <p>账号昵称：gs***5<br> 昨日盈利：
                                                <i>¥291620</i>
                                            </p>
                                        </td>
                                        <td>
                                            <ins>7</ins>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="//imagess-google.com/system/common/headimg/EED50A5799E76E58.jpg">
                                            <p>账号昵称：34***3<br> 昨日盈利：
                                                <i>¥287836</i>
                                            </p>
                                        </td>
                                        <td>
                                            <ins>8</ins>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="//imagess-google.com/system/common/headimg/73ad0d4d5aa8c974.jpg">
                                            <p>账号昵称：li***2<br> 昨日盈利：
                                                <i>¥277797</i>
                                            </p>
                                        </td>
                                        <td>
                                            <ins>9</ins>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="//imagess-google.com/system/common/headimg/81e8ebc3eedde4e1.jpg">
                                            <p>账号昵称：老小孩<br> 昨日盈利：
                                                <i>¥261432</i>
                                            </p>
                                        </td>
                                        <td>
                                            <ins>10</ins>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="cardBox" style="display: none;">
                        <!---->
                    </div>
                </div>
            </div>
        </div>
        <v-foot></v-foot>
    </div>

</template>

<script>
import vFoot from "../common/Footer.vue";
import vHead from "../common/SubHeader.vue";
import moment from "moment";
import ctl from "../../Controller.js";
export default {
  data() {
    return {
      chooseOBJ: {
        one: [],
        two: [],
        three: [],
        four: [],
        five: [],
        six: [],
        senven: [],
        eight: [],
        nine: [],
        ten: []
      },
      Quantity: 0,
      Amount: 0,
      Much: 1,
      UnitPrice: 2.0,
      OpenList: [],
      BonusList: [],
      ServerTime: Date,
      LotteryPlan: [],
      currentID0: "",
      currentID: "",
      currentList: [],
      nowPlan: {},
      countTimeStr: "00:00:00",
      Timer1: null,
      Timer2: null,
      LotteryName: ""
    };
  },
  components: {
    vFoot,
    vHead
  },
  mounted() {
    let that = this;
    that.code = this.$route.params.id;

    switch (that.code) {
      case "1401":
        this.LotteryName = "江苏快3";
        break;
      case "1402":
        this.LotteryName = "安徽快3";
        break;
      case "1406":
        this.LotteryName = "北京快3";
        break;
      case "1410":
        this.LotteryName = "上海快3";
        break;
    }

    let p1 = new Promise(function(resolve, reject) {
      ctl.GetServerTimeMillisecond().then(function(response) {
        if (response.data.Code == 1) {
          resolve(response.data.Data);
        }
      });
    });
    let p2 = new Promise(function(resolve, reject) {
      ctl.GetLotteryPlan({ code:that.code }).then(function(response) {
        if (response.data.Code == 0) {
          resolve(response.data.Data);
        }
      });
    });
    let p3 = new Promise(function(resolve, reject) {
      ctl.GetLotteryOpen({ code: that.code }).then(function(response) {
        if (response.data.Code == 1) {
          resolve(response.data.BackData);
        }
      });
    });

    Promise.all([p1, p2, p3]).then(result => {
      that.ServerTime = new Date(parseInt(result[0]));
      that.LotteryPlan = result[1];
      that.OpenList = result[2];
      that.currentList = that.OpenList[0].LotteryOpen.split(",");
      that.StartTime();
      that.checkCurrentID();
    });
    that.init();
  },
  methods: {
     tab(code) {
      clearInterval(this.Timer1);
      clearInterval(this.Timer2);
      //this.$router.push("/lottery/SSC" + code);
      window.location.href = '/lottery/K3/'+code;
    
    },
    detail(id) {
      this.layer.open({
        area: "auto",
        offset: "auto",
        type: 0,
        className: "layerConfirm layerCenter",
        content: id,
        title: "温馨提示",
        btn: ["确定"]
      });
    },
   
    isDateBetween(beginTime, endTime, nowTime) {
      var strb = beginTime.split(":");
      if (strb.length != 3) {
        return false;
      }

      var stre = endTime.split(":");
      if (stre.length != 3) {
        return false;
      }

      var strn = nowTime.split(":");
      if (stre.length != 3) {
        return false;
      }
      var b = new Date();
      var e = new Date();
      var n = new Date();

      b.setHours(strb[0]);
      b.setMinutes(strb[1]);
      b.setSeconds(strb[2]);
      e.setHours(stre[0]);
      e.setMinutes(stre[1]);
      e.setSeconds(stre[2]);
      n.setHours(strn[0]);
      n.setMinutes(strn[1]);
      n.setSeconds(strn[2]);
      if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
        return true;
      } else {
        return false;
      }
    },
    findNowPlan() {
      let that = this;
      var tempTime = moment(that.ServerTime).format("HH:mm:ss");
      let nowPlan = {};
      for (var item of that.LotteryPlan) {
        if (that.isDateBetween(item.StartTime, item.EndTime, tempTime)) {
          nowPlan = item;
          break;
        }
      }
      return nowPlan;
    },

    init() {
      var that = this;
      that.Timer2 = setInterval(function() {
        ctl.GetNewestBonusList().then(function(response) {
          if (response.data.Code == 1) {
            that.BonusList = response.data.BackData.NewestBonusList;
          }
        });
        ctl.GetLotteryOpen().then(function(response) {
          if (response.data.Code == 1) {
            that.OpenList = response.data.BackData;

            that.currentID = parseInt(that.OpenList[0].IssueNo);
            that.currentList = that.OpenList[0].LotteryOpen.split(",");
          }
        });
      }, 5000);
    },
    StartTime() {
      let that = this;

      that.nowPlan = this.findNowPlan();
      that.Timer1 = setInterval(function() {
        var m = that.ServerTime;
        that.ServerTime = new Date(m.getTime() + 1000);
        that.countTime();
      }, 1000);
    },
    countTime() {
      let that = this;
      //获取当前时间
      let date = that.ServerTime;
      let now = date.getTime();
      //设置截止时间
      let endDate = new Date(moment().format("L") + " " + that.nowPlan.EndTime);
      let end = endDate.getTime();
      //时间差
      let leftTime = end - now;

      //定义变量 d,h,m,s保存倒计时的时间
      let h, m, s;
      if (leftTime >= 0) {
        h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        h = h > 10 ? h : "0" + h;
        m = Math.floor((leftTime / 1000 / 60) % 60);
        m = m >= 10 ? m : "0" + m;
        s = Math.floor((leftTime / 1000) % 60);
        s = s >= 10 ? s : "0" + s;
        that.countTimeStr = h + ":" + m + ":" + s;
      } else {
        clearInterval(this.Timer1);
        that.StartTime();
        that.checkCurrentID();
        that.countTimeStr = "00:00:00";
      }
    },
    checkCurrentID() {
      var that = this;
      let date = new Date(that.OpenList[0].OpenTime);
      let now = date.getTime();
      let endDate = new Date(moment().format("L") + " " + that.nowPlan.EndTime);
      let end = endDate.getTime();
      //时间差
      let leftTime = end - now;
      let num = Math.abs(leftTime) / 1000 / 60;

      if (num < 5) {
        that.currentID = parseInt(that.OpenList[0].IssueNo);
      } else {
        that.currentID = parseInt(that.OpenList[0].IssueNo) + 1;
      }
      //   else if (num > 6) {
      //       that.currentID = parseInt(that.OpenList[0].IssueNo) + 1;
      //     that.currentID0 = parseInt(that.OpenList[0].IssueNo) + 2;
      //   }
    }
  },
  filters: {
    formatDate(time) {
      return moment(time).format("HH:mm:ss");
    },
    formatNO(NO) {
      return NO.substring(0, 17) + "...";
    }
  },
  destroyed() {
    //clearTimeout(this.StartTime)
    clearInterval(this.Timer1);
    clearInterval(this.Timer2);
  }
};
</script>

<style>
</style>
