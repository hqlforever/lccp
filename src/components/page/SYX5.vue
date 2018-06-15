<template>

    <div id="app" class="lottery">
        <v-head></v-head>
        <div class="container bet">

            <div class="betTitle fix">
                <div class="betLogo">
                    <h2>{{LotteryName}}</h2>
                    <i class="iconfont L_SYX5"></i>
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

                    </ul>
                    <ul class="announcedNo announcedNoText fix" style="display: none;">

                    </ul>
                </div>
            </div>
            <div class="betContent fix">
                <div class="betLeft">
                    <div>
                        <div class="betNavCon">
                            <ul class="betNav fix" style="width: 448px; transform: translateX(0px);">

                                <li :class="{active:1100 == code}" @click="tab(1100)">广东11选5</li>
                                <li :class="{active:1101 == code}" @click="tab(1101)">上海11选5</li>
                                <li :class="{active:1102 == code}" @click="tab(1102)">山东11选5</li>
                                <li :class="{active:1103 == code}" @click="tab(1103)">江西11选5</li>

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
                    <div>
                        <div>
                            <ul class="betFilter">
                                <li class="curr">三码
                                    <!---->
                                </li>
                                <li class="">二码
                                    <!---->
                                </li>
                                <li class="">不定位
                                    <!---->
                                </li>
                                <li class="">定位胆
                                    <!---->
                                </li>
                                <li class="">趣味型
                                    <!---->
                                </li>
                                <li class="">任选复式
                                    <!---->
                                </li>
                                <li class="">任选单式
                                    <!---->
                                </li>
                                <li class="">任选胆拖
                                    <!---->
                                </li>
                            </ul>
                            <ul class="betFilterAnd">
                                <li>
                                    <span>三码</span>
                                    <div>
                                        <a class="curr">前三直选复式</a>
                                        <a class="">前三直选单式</a>
                                        <a class="">前三组选复式</a>
                                        <a class="">前三组选单式</a>
                                        <a class="">前三组选胆拖</a>
                                    </div>
                                </li>
                            </ul>
                            <div class="betTip">
                                <i class="iconfont"></i>从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中 的前3个号码相同，且顺序一致，即为中奖，奖金

                                <ins>1928.52</ins>元
                                <!---->
                                <div class="hoverContent">
                                    <table>
                                        <tr>
                                            <th>猜中</th>
                                            <th>单注最高奖金</th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>1元</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>9元</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>2元</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>8元</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>.元</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>5元</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>2元</td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="selectEg">选号示例</div>
                                <div class="EgContent">
                                    <ul>
                                        <li>投注：01,02,03</li>
                                        <li>开奖：01,02,03,*,*</li>
                                        <li>奖金：
                                            <ins>1928.52</ins>
                                        </li>
                                        <!---->
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mode">
                                <div class="sscCheckNumber">
                                    <ul>
                                        <li>
                                            <div class="fix selectSYX5">
                                                <span class="buyNumberTitle">第一位
                                                    <i></i>
                                                </span>
                                                <div class="buyNumber fix">
                                                    <a class="">
                                                        01
                                                    </a>
                                                    <a class="">
                                                        02
                                                    </a>
                                                    <a class="">
                                                        03
                                                    </a>
                                                    <a class="">
                                                        04
                                                    </a>
                                                    <a class="">
                                                        05
                                                    </a>
                                                    <a class="">
                                                        06
                                                    </a>
                                                    <a class="">
                                                        07
                                                    </a>
                                                    <a class="">
                                                        08
                                                    </a>
                                                    <a class="">
                                                        09
                                                    </a>
                                                    <a class="">
                                                        10
                                                    </a>
                                                    <a class="">
                                                        11
                                                    </a>
                                                </div>
                                                <!---->
                                                <div class="buyNumberFilter">
                                                    <a>全</a>
                                                    <a>大</a>
                                                    <a>小</a>
                                                    <a>奇</a>
                                                    <a>偶</a>
                                                    <a>清</a>
                                                </div>
                                            </div>
                                            <div class="fix selectSYX5">
                                                <span class="buyNumberTitle">第二位
                                                    <i></i>
                                                </span>
                                                <div class="buyNumber fix">
                                                    <a class="">
                                                        01
                                                    </a>
                                                    <a class="">
                                                        02
                                                    </a>
                                                    <a class="">
                                                        03
                                                    </a>
                                                    <a class="">
                                                        04
                                                    </a>
                                                    <a class="">
                                                        05
                                                    </a>
                                                    <a class="">
                                                        06
                                                    </a>
                                                    <a class="">
                                                        07
                                                    </a>
                                                    <a class="">
                                                        08
                                                    </a>
                                                    <a class="">
                                                        09
                                                    </a>
                                                    <a class="">
                                                        10
                                                    </a>
                                                    <a class="">
                                                        11
                                                    </a>
                                                </div>
                                                <!---->
                                                <div class="buyNumberFilter">
                                                    <a>全</a>
                                                    <a>大</a>
                                                    <a>小</a>
                                                    <a>奇</a>
                                                    <a>偶</a>
                                                    <a>清</a>
                                                </div>
                                            </div>
                                            <div class="fix selectSYX5">
                                                <span class="buyNumberTitle">第三位
                                                    <i></i>
                                                </span>
                                                <div class="buyNumber fix">
                                                    <a class="">
                                                        01
                                                    </a>
                                                    <a class="">
                                                        02
                                                    </a>
                                                    <a class="">
                                                        03
                                                    </a>
                                                    <a class="">
                                                        04
                                                    </a>
                                                    <a class="">
                                                        05
                                                    </a>
                                                    <a class="">
                                                        06
                                                    </a>
                                                    <a class="">
                                                        07
                                                    </a>
                                                    <a class="">
                                                        08
                                                    </a>
                                                    <a class="">
                                                        09
                                                    </a>
                                                    <a class="">
                                                        10
                                                    </a>
                                                    <a class="">
                                                        11
                                                    </a>
                                                </div>
                                                <!---->
                                                <div class="buyNumberFilter">
                                                    <a>全</a>
                                                    <a>大</a>
                                                    <a>小</a>
                                                    <a>奇</a>
                                                    <a>偶</a>
                                                    <a>清</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <!---->
                                <!---->
                            </div>
                            <div class="Panel">
                                <p class="betTotal">
                                    您选择了
                                    <em>0</em> 注，
                                    <em class="inputAdd fix">
                                        <i class="off">-</i> <input type="tel">
                                        <i class="">+</i>
                                    </em> 倍
                                    <select>
                                        <option value="1">元</option>
                                        <option value="0.1">角</option>
                                        <option value="0.01">分</option>
                                    </select>
                                    共
                                    <i>0.00</i>元
                                </p>
                                <a class="betBtn">确认选号</a>
                            </div>
                        </div>
                        <div class="checkedListCon">
                            <div class="checkedList">
                                <table>
                                    <tbody></tbody>
                                </table>
                            </div>
                            <p class="betTotal">
                                方案注数
                                <em>0</em> 注，金额
                                <i>￥0</i>元
                                <input type="radio" name="buyType" id="radio1">
                                <label for="radio1" class="radioLabel">我要自购</label> <input type="radio" name="buyType" id="radio2">
                                <label for="radio2" class="radioLabel">我要追号</label>
                            </p>
                            <a class="betBtn">马上投注</a>
                        </div>
                        <div class="Bet" style="display: none;">
                            <div class="chaseBox">
                                <div class="chase">
                                    <ul class="chaseSort fix">
                                        <li class="curr" style="cursor: pointer;">普通追号</li>
                                        <li class="" style="cursor: pointer;">翻倍追号</li>
                                        <li class="" style="cursor: pointer;">盈利率追号</li>
                                        <li class="" style="cursor: pointer;">盈利金额追号</li>
                                        <label><input type="checkbox"> 中奖后停止追号
                                        </label>
                                    </ul>
                                    <div>
                                        <div class="ordinaryChase">
                                            <span>连续追：</span>
                                            <ul class="chaseLonger fix" style="cursor: pointer;">
                                                <li class="">5期</li>
                                                <li class="curr">10期</li>
                                                <li class="">15期</li>
                                                <li class="">20期</li>
                                            </ul>
                                            &nbsp;
                                            <input type="number">期 倍数：
                                            <input type="number"></div>
                                        <div class="advancedChase fix" style="display: none;">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>基本参数： </td>
                                                    </tr>
                                                    <tr>
                                                        <td>起始期号：
                                                            <em class="selectIcon">
                                                            
                                                                <em></em>
                                                            </em>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>追号期数：
                                                            <input type="number"> 期
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>起始倍数：
                                                            <input type="number"> 倍</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>高级参数：</td>
                                                    </tr>
                                                    <tr>
                                                        <td class=""><input type="radio" name="multiplyIndex" checked="checked"> 每隔
                                                            <input type="number"> 期 倍数×
                                                            <input type="number"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="noCurr"><input type="radio" name="multiplyIndex"> 前
                                                            <input type="number"> 期 倍数=起始倍数，之后倍数=
                                                            <input type="number"></td>
                                                    </tr>
                                                </tbody>
                                            </table> <hr></div>
                                        <div class="advancedChase fix" style="display: none;">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>基本参数： </td>
                                                    </tr>
                                                    <tr>
                                                        <td>起始期号：
                                                            <em class="selectIcon">
                                                               
                                                                <em></em>
                                                            </em>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>追号期数：
                                                            <input type="number"> 期
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>起始倍数：
                                                            <input type="number"> 倍</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>高级参数：</td>
                                                    </tr>
                                                    <tr>
                                                        <td class=""><input type="radio" name="rateIndex" checked="checked"> 预期盈利率≥
                                                            <input type="number"> %
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="noCurr"><input type="radio" name="rateIndex"> 前
                                                            <input type="number"> 期 预期盈利率≥
                                                            <input type="number">%
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="noCurr">
                                                            之后预期盈利率≥
                                                            <input type="number">%
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table> <hr></div>
                                        <div class="advancedChase fix" style="display: none;">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>基本参数： </td>
                                                    </tr>
                                                    <tr>
                                                        <td>起始期号：
                                                            <em class="selectIcon">
                                                                
                                                                <em></em>
                                                            </em>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>追号期数：
                                                            <input type="number"> 期
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>起始倍数：
                                                            <input type="number"> 倍</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>高级参数：</td>
                                                    </tr>
                                                    <tr>
                                                        <td class=""><input type="radio" name="cashIndex" checked="checked"> 预期盈利金额≥
                                                            <input type="number"> 元
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="noCurr"><input type="radio" name="cashIndex"> 前
                                                            <input type="number"> 期 预期盈利金额≥
                                                            <input type="number">元
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="noCurr">
                                                            之后预期盈利金额≥
                                                            <input type="number">元
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table> <hr></div>
                                        <a class="betBtn generalScheme" style="display: none;">生成追号计划</a>
                                    </div>
                                    <div >
                                        <div >
                                            <table  class="chaseList _col5">
                                                <tbody >
                                                    <tr >
                                                        <th >序号</th>
                                                        <th ><input  type="checkbox" checked="checked">追号期次</th>
                                                        <th >倍数</th>
                                                        <th >金额</th>
                                                        <th >预期开奖时间</th>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div  class="chaseListCon">
                                                <table  class="chaseList generalTable _col5">
                                                    <tbody >
                                                        <tr >
                                                            <td >1</td>
                                                            <td ><input  type="checkbox">2018060944
                                                                <em >(当前期)</em>
                                                            </td>
                                                            <td ><input  type="tel"> 倍</td>
                                                            <td >￥0.00元</td>
                                                            <td >20180609 16:18:00</td>
                                                        </tr>
                                                        <tr >
                                                            <td >2</td>
                                                            <td ><input  type="checkbox">2018060945
                                                                <em  style="display: none;">(当前期)</em>
                                                            </td>
                                                            <td ><input  type="tel"> 倍</td>
                                                            <td >￥0.00元</td>
                                                            <td >20180609 16:28:00</td>
                                                        </tr>
                                                        <tr >
                                                            <td >3</td>
                                                            <td ><input  type="checkbox">2018060946
                                                                <em  style="display: none;">(当前期)</em>
                                                            </td>
                                                            <td ><input  type="tel"> 倍</td>
                                                            <td >￥0.00元</td>
                                                            <td >20180609 16:38:00</td>
                                                        </tr>
                                                        <tr >
                                                            <td >4</td>
                                                            <td ><input  type="checkbox">2018060947
                                                                <em  style="display: none;">(当前期)</em>
                                                            </td>
                                                            <td ><input  type="tel"> 倍</td>
                                                            <td >￥0.00元</td>
                                                            <td >20180609 16:48:00</td>
                                                        </tr>
                                                        <tr >
                                                            <td >5</td>
                                                            <td ><input  type="checkbox">2018060948
                                                                <em  style="display: none;">(当前期)</em>
                                                            </td>
                                                            <td ><input  type="tel"> 倍</td>
                                                            <td >￥0.00元</td>
                                                            <td >20180609 16:58:00</td>
                                                        </tr>
                                                        <tr >
                                                            <td >6</td>
                                                            <td ><input  type="checkbox">2018060949
                                                                <em  style="display: none;">(当前期)</em>
                                                            </td>
                                                            <td ><input  type="tel"> 倍</td>
                                                            <td >￥0.00元</td>
                                                            <td >20180609 17:08:00</td>
                                                        </tr>
                                                        <tr >
                                                            <td >7</td>
                                                            <td ><input  type="checkbox">2018060950
                                                                <em  style="display: none;">(当前期)</em>
                                                            </td>
                                                            <td ><input  type="tel"> 倍</td>
                                                            <td >￥0.00元</td>
                                                            <td >20180609 17:18:00</td>
                                                        </tr>
                                                        <tr >
                                                            <td >8</td>
                                                            <td ><input  type="checkbox">2018060951
                                                                <em  style="display: none;">(当前期)</em>
                                                            </td>
                                                            <td ><input  type="tel"> 倍</td>
                                                            <td >￥0.00元</td>
                                                            <td >20180609 17:28:00</td>
                                                        </tr>
                                                        <tr >
                                                            <td >9</td>
                                                            <td ><input  type="checkbox">2018060952
                                                                <em  style="display: none;">(当前期)</em>
                                                            </td>
                                                            <td ><input  type="tel"> 倍</td>
                                                            <td >￥0.00元</td>
                                                            <td >20180609 17:38:00</td>
                                                        </tr>
                                                        <tr >
                                                            <td >10</td>
                                                            <td ><input  type="checkbox">2018060953
                                                                <em  style="display: none;">(当前期)</em>
                                                            </td>
                                                            <td ><input  type="tel"> 倍</td>
                                                            <td >￥0.00元</td>
                                                            <td >20180609 17:48:00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <!---->
                                    </div>
                                </div>
                                <div class="chaseDes">
                                    <p class="betTotal">共追号
                                        <em>10</em> 期，
                                        <i>0</i> 注，总投注金额
                                        <em>0.00</em>元</p>
                                </div>
                                <a class="betBtn">立即投注</a>
                            </div>
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
      case "1100":
        this.LotteryName = "广东11选5";
        break;
      case "1101":
        this.LotteryName = "上海11选5";
        break;
      case "1102":
        this.LotteryName = "山东11选5";
        break;
      case "1103":
        this.LotteryName = "江西11选5";
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
      window.location.href = "/lottery/SYX5/" + code;
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
