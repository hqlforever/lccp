<template>

    <div id="app" class="lottery">
        <v-head></v-head>
        <div class="container bet">

            <div class="betTitle fix headPK10">
                <div class="betLogo">
                    <h2>香港六合彩</h2>
                    <i class="iconfont L_6HC"></i>
                </div>
                <div class="time">
                    <div class="timeTitle" style="opacity: 1;">距
                        <b>{{currentID+1}}</b>期投注截止还有：</div>
                    <em>{{countTimeStr}}</em>
                </div>
                <div id="Results" class="announced">
                    <div class="announcedTitle">第
                        <b>{{currentID}}</b>期开奖号码：</div>

                    <ul class="roundNo fix">
                        <li v-for="item of currentList">
                            {{item}}
                        </li>
                    </ul>

                    <ul class="announcedNo fix" style="display: none;">
                        <img width="61" height="71" src="//imagess-google.com/system/pc/k3/open_num.gif"> <img width="61" height="71" src="//imagess-google.com/system/pc/k3/open_num.gif"> <img width="61" height="71" src="//imagess-google.com/system/pc/k3/open_num.gif"></ul>
                    <ul class="announcedNo fix" style="display: none;">
                        <li class="announcedNo06"></li>
                        <li class="announcedNo04"></li>
                        <li class="announcedNo07"></li>
                        <li class="announcedNo02"></li>
                        <li class="announcedNo09"></li>
                        <li class="announcedNo05"></li>
                        <li class="announcedNo03"></li>
                        <li class="announcedNo10"></li>
                        <li class="announcedNo08"></li>
                        <li class="announcedNo01"></li>
                    </ul>
                    <ul class="announcedNo announcedNoText fix" style="display: none;">
                        <li class="announcedNo06">06</li>
                        <li class="announcedNo04">04</li>
                        <li class="announcedNo07">07</li>
                        <li class="announcedNo02">02</li>
                        <li class="announcedNo09">09</li>
                        <li class="announcedNo05">05</li>
                        <li class="announcedNo03">03</li>
                        <li class="announcedNo10">10</li>
                        <li class="announcedNo08">08</li>
                        <li class="announcedNo01">01</li>
                    </ul>
                </div>
            </div>
            <div class="betContent fix">
                <div  class="betLeft">
                    <div  >
                        <div  class="betNavCon">
                            <ul  class="betNav fix" style="width: 224px; transform: translateX(0px);">
                                <li  class="active">香港六合彩</li>
                            </ul>
                        </div>
                        <a  class="betNavtab left">
                            <span >
                                <em ></em>
                            </span>
                        </a>
                        <a  class="betNavtab right">
                            <span >
                                <em ></em>
                            </span>
                        </a>
                    </div>
                    <!---->
                    <div  >
                        <div  >
                            <ul  class="betFilter">
                                <li  class="curr">特码
                                    <!---->
                                </li>
                                <li  class="">正码
                                    <!---->
                                </li>
                                <li  class="">连码
                                    <!---->
                                </li>
                                <li  class="">半波
                                    <!---->
                                </li>
                                <li  class="">生肖
                                    <!---->
                                </li>
                                <li  class="">尾数
                                    <!---->
                                </li>
                                <li  class="">不中
                                    <!---->
                                </li>
                            </ul>
                            <ul  class="betFilterAnd">
                                <li >
                                    <span >特码</span>
                                    <div >
                                        <a  class="curr">直选</a>
                                        <a  class="">两面</a>
                                    </div>
                                </li>
                            </ul>
                            <div  class="betTip">
                                <i  class="iconfont"></i>从1-49中任选1个或多个号码，每个号码为一注，所选号码中包含特码，即为中奖。 赔率

                                <ins >48.51</ins>
                                <!---->
                                <div  class="hoverContent">
                                    <table >
                                        <tr >
                                            <th >猜中</th>
                                            <th >单注最高奖金</th>
                                        </tr>
                                        <tr >
                                            <td ></td>
                                            <td >4元</td>
                                        </tr>
                                        <tr >
                                            <td ></td>
                                            <td >8元</td>
                                        </tr>
                                        <tr >
                                            <td ></td>
                                            <td >.元</td>
                                        </tr>
                                        <tr >
                                            <td ></td>
                                            <td >5元</td>
                                        </tr>
                                        <tr >
                                            <td ></td>
                                            <td >1元</td>
                                        </tr>
                                    </table>
                                </div>
                                <!---->
                            </div>
                        </div>
                        <!---->
                        <!---->
                        <div  class="sscCheckNumber colorbox">
                            <ul  class="fix">
                                <li >
                                    <div  class="fix selectMini">
                                        <span  class="buyNumberTitle">号码
                                            <i ></i>
                                        </span>
                                        <div  class="buyNumber fix">
                                            <a  class="red">
                                                <span >01</span>
                                            </a>
                                            <a  class="red">
                                                <span >02</span>
                                            </a>
                                            <a  class="blue">
                                                <span >03</span>
                                            </a>
                                            <a  class="blue">
                                                <span >04</span>
                                            </a>
                                            <a  class="green">
                                                <span >05</span>
                                            </a>
                                            <a  class="green">
                                                <span >06</span>
                                            </a>
                                            <a  class="red">
                                                <span >07</span>
                                            </a>
                                            <a  class="red">
                                                <span >08</span>
                                            </a>
                                            <a  class="blue">
                                                <span >09</span>
                                            </a>
                                            <a  class="blue">
                                                <span >10</span>
                                            </a>
                                            <a  class="green">
                                                <span >11</span>
                                            </a>
                                            <a  class="red">
                                                <span >12</span>
                                            </a>
                                            <a  class="red">
                                                <span >13</span>
                                            </a>
                                            <a  class="blue">
                                                <span >14</span>
                                            </a>
                                            <a  class="blue">
                                                <span >15</span>
                                            </a>
                                            <a  class="green">
                                                <span >16</span>
                                            </a>
                                            <a  class="green">
                                                <span >17</span>
                                            </a>
                                            <a  class="red">
                                                <span >18</span>
                                            </a>
                                            <a  class="red">
                                                <span >19</span>
                                            </a>
                                            <a  class="blue">
                                                <span >20</span>
                                            </a>
                                            <a  class="green">
                                                <span >21</span>
                                            </a>
                                            <a  class="green">
                                                <span >22</span>
                                            </a>
                                            <a  class="red">
                                                <span >23</span>
                                            </a>
                                            <a  class="red">
                                                <span >24</span>
                                            </a>
                                            <a  class="blue">
                                                <span >25</span>
                                            </a>
                                            <a  class="blue">
                                                <span >26</span>
                                            </a>
                                            <a  class="green">
                                                <span >27</span>
                                            </a>
                                            <a  class="green">
                                                <span >28</span>
                                            </a>
                                            <a  class="red">
                                                <span >29</span>
                                            </a>
                                            <a  class="red">
                                                <span >30</span>
                                            </a>
                                            <a  class="blue">
                                                <span >31</span>
                                            </a>
                                            <a  class="green">
                                                <span >32</span>
                                            </a>
                                            <a  class="green">
                                                <span >33</span>
                                            </a>
                                            <a  class="red">
                                                <span >34</span>
                                            </a>
                                            <a  class="red">
                                                <span >35</span>
                                            </a>
                                            <a  class="blue">
                                                <span >36</span>
                                            </a>
                                            <a  class="blue">
                                                <span >37</span>
                                            </a>
                                            <a  class="green">
                                                <span >38</span>
                                            </a>
                                            <a  class="green">
                                                <span >39</span>
                                            </a>
                                            <a  class="red">
                                                <span >40</span>
                                            </a>
                                            <a  class="blue">
                                                <span >41</span>
                                            </a>
                                            <a  class="blue">
                                                <span >42</span>
                                            </a>
                                            <a  class="green">
                                                <span >43</span>
                                            </a>
                                            <a  class="green">
                                                <span >44</span>
                                            </a>
                                            <a  class="red">
                                                <span >45</span>
                                            </a>
                                            <a  class="red">
                                                <span >46</span>
                                            </a>
                                            <a  class="blue">
                                                <span >47</span>
                                            </a>
                                            <a  class="blue">
                                                <span >48</span>
                                            </a>
                                            <a  class="green">
                                                <span >49</span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div  class="Panel">
                            <p  class="betTotal">您选择了
                                <em >0</em> 注</p>
                            <a  class="betBtn ClickShade">确认选号</a>
                        </div>
                        <div  class="checkedList">
                            <table >
                                <tbody ></tbody>
                            </table>
                        </div>
                        <div  class="Bet">
                            <p  class="betTotal">方案注数
                                <em >0</em> 注，金额
                                <i  class="money">0</i> 元</p>
                            <a  class="betBtn ClickShade UnClick">立即投注</a>
                        </div>
                    </div>
                    <!---->
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

                                            <i class="numbers">{{item.LotteryOpen }}
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
import ctl from "../../Controller.js";
import moment from "moment";

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
      code: 1301,
      LotteryName: "",
      countTimeStr: "00:00:00",
      Timer1: null,
      Timer2: null
    };
  },
  components: {
    vFoot,
    vHead
  },
  mounted() {
    let that = this;

    let p1 = new Promise(function(resolve, reject) {
      ctl.GetServerTimeMillisecond().then(function(response) {
        if (response.data.Code == 1) {
          resolve(response.data.Data);
        }
      });
    });
    let p2 = new Promise(function(resolve, reject) {
      ctl.GetLotteryPlan({ code: that.code }).then(function(response) {
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
      window.location.href = "/lottery/SSC/" + code;
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
    choose(event) {
      var text = event.currentTarget.innerText;
      var eID = event.target.parentNode.getAttribute("id");
      var child = event.target.parentNode.children;
      if (event.currentTarget.className == "") {
        event.currentTarget.className = "curr";
      } else {
        event.currentTarget.className = "";
      }
      this.setValue(eID, child);
    },
    selected(event) {
      var that = this;
      var text = event.currentTarget.innerText;
      var child = event.target.parentNode.previousElementSibling.children;
      var eID = event.target.parentNode.previousElementSibling.getAttribute(
        "id"
      );

      for (var i = 0; i < child.length; i++) {
        child[i].className = "";
      }

      if (text == "全") {
        for (var i = 0; i < child.length; i++) {
          child[i].className = "curr";
        }
      }
      if (text == "奇") {
        for (var i = 0; i < child.length; i++) {
          if ((i + 1) % 2 == 1) {
            child[i].className = "curr";
          }
        }
      }

      if (text == "偶") {
        for (var i = 0; i < child.length; i++) {
          if ((i + 1) % 2 == 0) {
            child[i].className = "curr";
          }
        }
      }
      if (text == "大") {
        for (var i = 0; i < child.length; i++) {
          if (i >= 5) {
            child[i].className = "curr";
          }
        }
      }
      if (text == "小") {
        for (var i = 0; i < child.length; i++) {
          if (i < 5) {
            child[i].className = "curr";
          }
        }
      }
      that.setValue(eID, child);
    },
    setValue(id, child) {
      var that = this;
      that.chooseOBJ[id].splice(0, that.chooseOBJ[id].length);

      for (var i = 0; i < child.length; i++) {
        if (child[i].className == "curr") {
          that.chooseOBJ[id].push(child[i].innerText);
        }
      }

      var num = 0;

      for (var i in that.chooseOBJ) {
        num = num + that.chooseOBJ[i].length;
      }

      that.Quantity = num;
      that.Amount = parseFloat(num * 2, 2);
      //console.info(this.chooseOBJ[id].length);
    },
    addAndsub(flag) {
      let that = this;
      if (flag) {
        if (that.Much > 10000) {
          return false;
        }
        that.Much = that.Much + 1;
        that.Amount = that.Much * that.UnitPrice * this.Quantity;
      } else {
        if (that.Much <= 1) {
          that.Much = 1;
        } else {
          that.Much = that.Much - 1;
        }

        that.Amount = that.Much * that.UnitPrice * this.Quantity;
      }
    },
    muchChange() {
      var that = this;
      if (that.Much >= 1 && that.Much <= 10000) {
        that.Amount = that.Much * that.UnitPrice * this.Quantity;
      }
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

      if (num < 10) {
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
.betFilter li {
  width: 38px;
  height: 28px;
}
ul li {
  /* display: inline-block;
  width: 42px;
  height: 48px;
  margin: 0 5px;
  position: relative;
  background: url(http://imagess-google.com/system/pc/ssc/ballOpenBg.png)
    no-repeat;
  font-size: 22px;
  line-height: 42px;
  color: #a12836;
  text-shadow: 1px 1px 1px #f5f5f5; */
}
</style>
