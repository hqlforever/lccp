<template>
    <div>
        <div id="app" class="lottery">
            <div class="header">
                <div id="HeaderTop" class="betHeader">
                    <div class="snav">
                        <div class="container">
                            <div class="snavAll">
                                <a href="/index" class=""></a>
                                <ins> | </ins>
                                <a class="betNavMore">全部彩票</a>
                            </div>
                            <ul class="snavInfo">
                                <li class="userName MsgShow">
                                    <a class="_personalInfo"><img alt="" src="//imagess-google.com/system/common/headimg/6EC9EDCC7B3BD70D.jpg">
                                        <i>18610412790</i>
                                    </a>
                                    <span id="unreadMsgNum" onclick="window.location='letter'">
                                        0
                                    </span>
                                    <!---->
                                </li>
                                <li class="HoverShow">
                                    <a href="/securityCenter" class="">我的账户
                                        <i class="iconfont"></i>
                                    </a>
                                    <div class="accountList HoverShowContent" style="display: none;">
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
                                <li class="HoverPay">
                                    <a>充值
                                        <i class="iconfont"></i>
                                    </a>
                                    <div class="accountList HoverShowContent" style="display: none;">
                                        <i></i>
                                        <div>
                                            <a href="/ebankPay" class="">银行转账</a>
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <a href="/quickPay" class="">快捷支付</a>
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <a href="/recharge/Alipay" class="">支付宝</a>
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <a href="/recharge/Weixin" class="">微信支付</a>
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <a href="/recharge/QQpay" class="">QQ钱包</a>
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <a href="/recharge/UnionPay" class="">银联支付</a>
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
                                            <!---->
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
                        <div class="cardBox" style="display: none;">
                            <!---->
                        </div>
                    </div>
                </div>
                <!---->
                <!---->
            </div>
            <div class="container bet">
                <table class="betMoreList" style="display: none;">
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
                                <a href="/lottery/K3/1401" class="">
                                    江苏快3
                                </a>
                                <a href="/lottery/K3/1402" class="">
                                    安徽快3
                                </a>
                                <a href="/lottery/K3/1403" class="">
                                    广西快3
                                </a>
                                <a href="/lottery/K3/1405" class="">
                                    湖北快3
                                </a>
                                <a href="/lottery/K3/1406" class="">
                                    北京快3
                                </a>
                                <a href="/lottery/K3/1407" class="">
                                    大发快3
                                </a>
                                <a href="/lottery/K3/1408" class="">
                                    河北快3
                                </a>
                                <a href="/lottery/K3/1411" class="">
                                    甘肃快3
                                </a>
                                <a href="/lottery/K3/1410" class="">
                                    上海快3
                                </a>
                                <a href="/lottery/K3/1409" class="">
                                    贵州快3
                                </a>
                                <a href="/lottery/K3/1404" class="">
                                    吉林快3
                                </a>
                            </td>
                            <td>
                                <a href="/lottery/SSC/1000" class="router-link-exact-active curr">
                                    重庆时时彩
                                </a>
                                <a href="/lottery/SSC/1001" class="">
                                    新疆时时彩
                                </a>
                                <a href="/lottery/SSC/1003" class="">
                                    天津时时彩
                                </a>
                                <a href="/lottery/SSC/1008" class="">
                                    大发时时彩
                                </a>
                            </td>
                            <td>
                                <a href="/lottery/KL8/1302" class="">
                                    北京快乐8
                                </a>
                                <a href="/lottery/PK10/1303" class="">
                                    北京PK10
                                </a>
                                <a href="/lottery/6HC/1301" class="">
                                    香港六合彩
                                </a>
                                <a href="/lottery/6HC/1300" class="">
                                    大发六合彩
                                </a>
                                <a href="/lottery/PK10/1304" class="">
                                    大发PK10
                                </a>
                            </td>
                            <td>
                                <a href="/lottery/SYX5/1100" class="">
                                    广东11选5
                                </a>
                                <a href="/lottery/SYX5/1101" class="">
                                    上海11选5
                                </a>
                                <a href="/lottery/SYX5/1102" class="">
                                    山东11选5
                                </a>
                                <a href="/lottery/SYX5/1103" class="">
                                    江西11选5
                                </a>
                            </td>
                            <td>
                                <a href="/lottery/FC3D/1201" class="">
                                    福彩3D
                                </a>
                                <a href="/lottery/PL35/1202" class="">
                                    排列3
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="betTitle fix">
                    <div class="betLogo">
                        <h2>重庆时时彩</h2>
                        <i class="iconfont L_SSC"></i>
                    </div>
                    <div class="time">
                        <div class="timeTitle" style="opacity: 1;">距
                            <b>20180601034</b>期投注截止还有：</div>
                        <em>00:09:28</em>
                    </div>
                    <div id="Results" class="announced">
                        <div class="announcedTitle">第
                            <b>20180601033</b>期开奖号码：</div>
                        <ul class="roundNo fix"><img src="//imagess-google.com/system/pc/ssc/ballOpening.gif"><img src="//imagess-google.com/system/pc/ssc/ballOpening.gif"><img src="//imagess-google.com/system/pc/ssc/ballOpening.gif"><img src="//imagess-google.com/system/pc/ssc/ballOpening.gif"><img src="//imagess-google.com/system/pc/ssc/ballOpening.gif"></ul>
                        <!---->
                        <ul class="announcedNo fix" style="display: none;"><img width="61" height="71" src="//imagess-google.com/system/pc/k3/open_num.gif"> <img width="61" height="71" src="//imagess-google.com/system/pc/k3/open_num.gif"> <img width="61" height="71" src="//imagess-google.com/system/pc/k3/open_num.gif"></ul>
                        <ul class="announcedNo fix" style="display: none;">
                            <li class="announcedNo1"></li>
                            <li class="announcedNo1"></li>
                            <li class="announcedNo8"></li>
                            <li class="announcedNo3"></li>
                            <li class="announcedNo5"></li>
                        </ul>
                        <ul class="announcedNo announcedNoText fix" style="display: none;">
                            <li class="announcedNo1">1</li>
                            <li class="announcedNo1">1</li>
                            <li class="announcedNo8">8</li>
                            <li class="announcedNo3">3</li>
                            <li class="announcedNo5">5</li>
                        </ul>
                    </div>
                </div>
                <div class="betContent fix">
                    <div class="betLeft">
                        <div>
                            <div class="betNavCon">
                                <ul class="betNav fix" style="width: 448px; transform: translateX(0px);">
                                    <li class="active">重庆时时彩</li>
                                    <li class="">新疆时时彩</li>
                                    <li class="">天津时时彩</li>
                                    <li class="">大发时时彩</li>
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
                                    <li class="curr">一星
                                        <!---->
                                    </li>
                                    <li class="">前二
                                        <!---->
                                    </li>
                                    <li class="">后二
                                        <!---->
                                    </li>
                                    <li class="">前三
                                        <!---->
                                    </li>
                                    <li class="">中三
                                        <!---->
                                    </li>
                                    <li class="">后三
                                        <!---->
                                    </li>
                                    <li class="">四星
                                        <!---->
                                    </li>
                                    <li class="">五星
                                        <!---->
                                    </li>
                                    <li class="">大小单双
                                        <!---->
                                    </li>
                                    <li class="">两面
                                        <em class="newPlayType">NEW</em>
                                    </li>
                                    <li class="">龙虎斗
                                        <em class="newPlayType">NEW</em>
                                    </li>
                                    <li class="">猜豹子
                                        <em class="newPlayType">NEW</em>
                                    </li>
                                </ul>
                                <ul class="betFilterAnd">
                                    <li>
                                        <span>定位胆</span>
                                        <div>
                                            <a class="curr">复式</a>
                                        </div>
                                    </li>
                                </ul>
                                <div class="betTip">
                                    <i class="iconfont"></i>从万位、千位、百位、十位、个位任意位置上至少选择1个号码，选号与相同位置上的开奖号码一致，奖金

                                    <ins>19.60</ins>元
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
                                                <td>.元</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>6元</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>0元</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="selectEg">选号示例</div>
                                    <div class="EgContent">
                                        <ul>
                                            <li>投注：1****</li>
                                            <li>开奖：1****</li>
                                            <li>奖金：
                                                <ins>19.60</ins>
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
                                                <div class="fix selectNormal">
                                                    <span class="buyNumberTitle">万位
                                                        <i></i>
                                                    </span>
                                                    <div class="buyNumber fix">
                                                        <a class="">
                                                            0
                                                        </a>
                                                        <a class="">
                                                            1
                                                        </a>
                                                        <a class="">
                                                            2
                                                        </a>
                                                        <a class="">
                                                            3
                                                        </a>
                                                        <a class="">
                                                            4
                                                        </a>
                                                        <a class="">
                                                            5
                                                        </a>
                                                        <a class="">
                                                            6
                                                        </a>
                                                        <a class="">
                                                            7
                                                        </a>
                                                        <a class="">
                                                            8
                                                        </a>
                                                        <a class="">
                                                            9
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
                                                <div class="fix selectNormal">
                                                    <span class="buyNumberTitle">千位
                                                        <i></i>
                                                    </span>
                                                    <div class="buyNumber fix">
                                                        <a class="">
                                                            0
                                                        </a>
                                                        <a class="">
                                                            1
                                                        </a>
                                                        <a class="">
                                                            2
                                                        </a>
                                                        <a class="">
                                                            3
                                                        </a>
                                                        <a class="">
                                                            4
                                                        </a>
                                                        <a class="">
                                                            5
                                                        </a>
                                                        <a class="">
                                                            6
                                                        </a>
                                                        <a class="">
                                                            7
                                                        </a>
                                                        <a class="">
                                                            8
                                                        </a>
                                                        <a class="">
                                                            9
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
                                                <div class="fix selectNormal">
                                                    <span class="buyNumberTitle">百位
                                                        <i></i>
                                                    </span>
                                                    <div class="buyNumber fix">
                                                        <a class="">
                                                            0
                                                        </a>
                                                        <a class="">
                                                            1
                                                        </a>
                                                        <a class="">
                                                            2
                                                        </a>
                                                        <a class="">
                                                            3
                                                        </a>
                                                        <a class="">
                                                            4
                                                        </a>
                                                        <a class="">
                                                            5
                                                        </a>
                                                        <a class="">
                                                            6
                                                        </a>
                                                        <a class="">
                                                            7
                                                        </a>
                                                        <a class="">
                                                            8
                                                        </a>
                                                        <a class="">
                                                            9
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
                                                <div class="fix selectNormal">
                                                    <span class="buyNumberTitle">十位
                                                        <i></i>
                                                    </span>
                                                    <div class="buyNumber fix">
                                                        <a class="">
                                                            0
                                                        </a>
                                                        <a class="">
                                                            1
                                                        </a>
                                                        <a class="">
                                                            2
                                                        </a>
                                                        <a class="">
                                                            3
                                                        </a>
                                                        <a class="">
                                                            4
                                                        </a>
                                                        <a class="">
                                                            5
                                                        </a>
                                                        <a class="">
                                                            6
                                                        </a>
                                                        <a class="">
                                                            7
                                                        </a>
                                                        <a class="">
                                                            8
                                                        </a>
                                                        <a class="">
                                                            9
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
                                                <div class="fix selectNormal">
                                                    <span class="buyNumberTitle">个位
                                                        <i></i>
                                                    </span>
                                                    <div class="buyNumber fix">
                                                        <a class="">
                                                            0
                                                        </a>
                                                        <a class="">
                                                            1
                                                        </a>
                                                        <a class="">
                                                            2
                                                        </a>
                                                        <a class="">
                                                            3
                                                        </a>
                                                        <a class="">
                                                            4
                                                        </a>
                                                        <a class="">
                                                            5
                                                        </a>
                                                        <a class="">
                                                            6
                                                        </a>
                                                        <a class="">
                                                            7
                                                        </a>
                                                        <a class="">
                                                            8
                                                        </a>
                                                        <a class="">
                                                            9
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
                                                                    <select class="userSelect">
                                                                        <option value="33">20180601034(当前期)</option>
                                                                        <option value="34">20180601035</option>
                                                                        <option value="35">20180601036</option>
                                                                        <option value="36">20180601037</option>
                                                                        <option value="37">20180601038</option>
                                                                        <option value="38">20180601039</option>
                                                                        <option value="39">20180601040</option>
                                                                        <option value="40">20180601041</option>
                                                                        <option value="41">20180601042</option>
                                                                        <option value="42">20180601043</option>
                                                                        <option value="43">20180601044</option>
                                                                        <option value="44">20180601045</option>
                                                                        <option value="45">20180601046</option>
                                                                        <option value="46">20180601047</option>
                                                                        <option value="47">20180601048</option>
                                                                        <option value="48">20180601049</option>
                                                                        <option value="49">20180601050</option>
                                                                        <option value="50">20180601051</option>
                                                                        <option value="51">20180601052</option>
                                                                        <option value="52">20180601053</option>
                                                                        <option value="53">20180601054</option>
                                                                        <option value="54">20180601055</option>
                                                                        <option value="55">20180601056</option>
                                                                        <option value="56">20180601057</option>
                                                                        <option value="57">20180601058</option>
                                                                        <option value="58">20180601059</option>
                                                                        <option value="59">20180601060</option>
                                                                        <option value="60">20180601061</option>
                                                                        <option value="61">20180601062</option>
                                                                        <option value="62">20180601063</option>
                                                                        <option value="63">20180601064</option>
                                                                        <option value="64">20180601065</option>
                                                                        <option value="65">20180601066</option>
                                                                        <option value="66">20180601067</option>
                                                                        <option value="67">20180601068</option>
                                                                        <option value="68">20180601069</option>
                                                                        <option value="69">20180601070</option>
                                                                        <option value="70">20180601071</option>
                                                                        <option value="71">20180601072</option>
                                                                        <option value="72">20180601073</option>
                                                                        <option value="73">20180601074</option>
                                                                        <option value="74">20180601075</option>
                                                                        <option value="75">20180601076</option>
                                                                        <option value="76">20180601077</option>
                                                                        <option value="77">20180601078</option>
                                                                        <option value="78">20180601079</option>
                                                                        <option value="79">20180601080</option>
                                                                        <option value="80">20180601081</option>
                                                                        <option value="81">20180601082</option>
                                                                        <option value="82">20180601083</option>
                                                                    </select>
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
                                                                    <select class="userSelect">
                                                                        <option value="33">20180601034(当前期)</option>
                                                                        <option value="34">20180601035</option>
                                                                        <option value="35">20180601036</option>
                                                                        <option value="36">20180601037</option>
                                                                        <option value="37">20180601038</option>
                                                                        <option value="38">20180601039</option>
                                                                        <option value="39">20180601040</option>
                                                                        <option value="40">20180601041</option>
                                                                        <option value="41">20180601042</option>
                                                                        <option value="42">20180601043</option>
                                                                        <option value="43">20180601044</option>
                                                                        <option value="44">20180601045</option>
                                                                        <option value="45">20180601046</option>
                                                                        <option value="46">20180601047</option>
                                                                        <option value="47">20180601048</option>
                                                                        <option value="48">20180601049</option>
                                                                        <option value="49">20180601050</option>
                                                                        <option value="50">20180601051</option>
                                                                        <option value="51">20180601052</option>
                                                                        <option value="52">20180601053</option>
                                                                        <option value="53">20180601054</option>
                                                                        <option value="54">20180601055</option>
                                                                        <option value="55">20180601056</option>
                                                                        <option value="56">20180601057</option>
                                                                        <option value="57">20180601058</option>
                                                                        <option value="58">20180601059</option>
                                                                        <option value="59">20180601060</option>
                                                                        <option value="60">20180601061</option>
                                                                        <option value="61">20180601062</option>
                                                                        <option value="62">20180601063</option>
                                                                        <option value="63">20180601064</option>
                                                                        <option value="64">20180601065</option>
                                                                        <option value="65">20180601066</option>
                                                                        <option value="66">20180601067</option>
                                                                        <option value="67">20180601068</option>
                                                                        <option value="68">20180601069</option>
                                                                        <option value="69">20180601070</option>
                                                                        <option value="70">20180601071</option>
                                                                        <option value="71">20180601072</option>
                                                                        <option value="72">20180601073</option>
                                                                        <option value="73">20180601074</option>
                                                                        <option value="74">20180601075</option>
                                                                        <option value="75">20180601076</option>
                                                                        <option value="76">20180601077</option>
                                                                        <option value="77">20180601078</option>
                                                                        <option value="78">20180601079</option>
                                                                        <option value="79">20180601080</option>
                                                                        <option value="80">20180601081</option>
                                                                        <option value="81">20180601082</option>
                                                                        <option value="82">20180601083</option>
                                                                    </select>
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
                                                                    <select class="userSelect">
                                                                        <option value="33">20180601034(当前期)</option>
                                                                        <option value="34">20180601035</option>
                                                                        <option value="35">20180601036</option>
                                                                        <option value="36">20180601037</option>
                                                                        <option value="37">20180601038</option>
                                                                        <option value="38">20180601039</option>
                                                                        <option value="39">20180601040</option>
                                                                        <option value="40">20180601041</option>
                                                                        <option value="41">20180601042</option>
                                                                        <option value="42">20180601043</option>
                                                                        <option value="43">20180601044</option>
                                                                        <option value="44">20180601045</option>
                                                                        <option value="45">20180601046</option>
                                                                        <option value="46">20180601047</option>
                                                                        <option value="47">20180601048</option>
                                                                        <option value="48">20180601049</option>
                                                                        <option value="49">20180601050</option>
                                                                        <option value="50">20180601051</option>
                                                                        <option value="51">20180601052</option>
                                                                        <option value="52">20180601053</option>
                                                                        <option value="53">20180601054</option>
                                                                        <option value="54">20180601055</option>
                                                                        <option value="55">20180601056</option>
                                                                        <option value="56">20180601057</option>
                                                                        <option value="57">20180601058</option>
                                                                        <option value="58">20180601059</option>
                                                                        <option value="59">20180601060</option>
                                                                        <option value="60">20180601061</option>
                                                                        <option value="61">20180601062</option>
                                                                        <option value="62">20180601063</option>
                                                                        <option value="63">20180601064</option>
                                                                        <option value="64">20180601065</option>
                                                                        <option value="65">20180601066</option>
                                                                        <option value="66">20180601067</option>
                                                                        <option value="67">20180601068</option>
                                                                        <option value="68">20180601069</option>
                                                                        <option value="69">20180601070</option>
                                                                        <option value="70">20180601071</option>
                                                                        <option value="71">20180601072</option>
                                                                        <option value="72">20180601073</option>
                                                                        <option value="73">20180601074</option>
                                                                        <option value="74">20180601075</option>
                                                                        <option value="75">20180601076</option>
                                                                        <option value="76">20180601077</option>
                                                                        <option value="77">20180601078</option>
                                                                        <option value="78">20180601079</option>
                                                                        <option value="79">20180601080</option>
                                                                        <option value="80">20180601081</option>
                                                                        <option value="81">20180601082</option>
                                                                        <option value="82">20180601083</option>
                                                                    </select>
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
                                        <div>
                                            <div>
                                                <table class="chaseList _col5">
                                                    <tbody>
                                                        <tr>
                                                            <th>序号</th>
                                                            <th><input type="checkbox" checked="checked">追号期次</th>
                                                            <th>倍数</th>
                                                            <th>金额</th>
                                                            <th>预期开奖时间</th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div class="chaseListCon">
                                                    <table class="chaseList generalTable _col5">
                                                        <tbody></tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <!---->
                                        </div>
                                    </div>
                                    <div class="chaseDes">
                                        <p class="betTotal">共追号
                                            <em>0</em> 期，
                                            <i>0</i> 注，总投注金额
                                            <em>0.00</em>元</p>
                                    </div>
                                    <a class="betBtn">立即投注</a>
                                </div>
                            </div>
                        </div>
                        <!---->
                        <!---->
                    </div>
                    <div class="betRight">
                        <div class="today box">
                            <!---->
                            <h3 class="">今日开奖</h3>
                            <div id="" class="more">
                                <a href="/trendChart/1000" class="" target="_blank">走势图</a>
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
                                        <tr>
                                            <td class="c_green">
                                                <i class="o_qi">20180601032</i>
                                            </td>
                                            <td>
                                                <i class="numbers">1,1,8,3,5</i>
                                                <!---->
                                            </td>
                                            <td>11:20:42</td>
                                        </tr>
                                        <tr>
                                            <td class="c_green">
                                                <i class="o_qi">20180601031</i>
                                            </td>
                                            <td>
                                                <i class="numbers">7,5,2,9,0</i>
                                                <!---->
                                            </td>
                                            <td>11:10:44</td>
                                        </tr>
                                        <tr>
                                            <td class="c_green">
                                                <i class="o_qi">20180601030</i>
                                            </td>
                                            <td>
                                                <i class="numbers">7,2,3,8,9</i>
                                                <!---->
                                            </td>
                                            <td>11:00:42</td>
                                        </tr>
                                        <tr>
                                            <td class="c_green">
                                                <i class="o_qi">20180601029</i>
                                            </td>
                                            <td>
                                                <i class="numbers">9,0,1,1,0</i>
                                                <!---->
                                            </td>
                                            <td>10:50:44</td>
                                        </tr>
                                        <tr>
                                            <td class="c_green">
                                                <i class="o_qi">20180601028</i>
                                            </td>
                                            <td>
                                                <i class="numbers">0,8,8,9,9</i>
                                                <!---->
                                            </td>
                                            <td>10:40:44</td>
                                        </tr>
                                        <tr>
                                            <td class="c_green">
                                                <i class="o_qi">20180601027</i>
                                            </td>
                                            <td>
                                                <i class="numbers">6,3,1,4,3</i>
                                                <!---->
                                            </td>
                                            <td>10:30:43</td>
                                        </tr>
                                        <tr>
                                            <td class="c_green">
                                                <i class="o_qi">20180601026</i>
                                            </td>
                                            <td>
                                                <i class="numbers">9,1,6,0,7</i>
                                                <!---->
                                            </td>
                                            <td>10:20:42</td>
                                        </tr>
                                        <tr>
                                            <td class="c_green">
                                                <i class="o_qi">20180601025</i>
                                            </td>
                                            <td>
                                                <i class="numbers">6,0,7,9,1</i>
                                                <!---->
                                            </td>
                                            <td>10:10:44</td>
                                        </tr>
                                        <tr>
                                            <td class="c_green">
                                                <i class="o_qi">20180601024</i>
                                            </td>
                                            <td>
                                                <i class="numbers">5,2,2,8,3</i>
                                                <!---->
                                            </td>
                                            <td>10:00:45</td>
                                        </tr>
                                        <tr>
                                            <td class="c_green">
                                                <i class="o_qi">20180601023</i>
                                            </td>
                                            <td>
                                                <i class="numbers">6,0,4,5,3</i>
                                                <!---->
                                            </td>
                                            <td>01:55:42</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!---->
                        </div>
                        <div class="mybet box">
                            <h3 class="">我的投注</h3>
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
                                            <a href="/betRecord" class="">更多&gt;&gt;</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="winningList box">
                            <h3 class="">中奖信息</h3>
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
                                    <div class="bd">
                                        <div class="tempWrap" style="overflow: hidden; height: 510px;">
                                            <ul class="winnerList" style="cursor: pointer; position: relative; top: -255px; transition: all 0.3s linear;">
                                                <li><img src="//imagess-google.com/system/common/headimg/81e8ebc3eedde4e1.jpg">
                                                    <p>di***3 大发时时彩<br>喜中
                                                        <span>¥169.76</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/CA64E00C3F9FD5F3.jpg">
                                                    <p>看韩剧 大发快3<br>喜中
                                                        <span>¥9.1</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/4A2E3EA214381904.jpg">
                                                    <p>落叶 大发六合彩<br>喜中
                                                        <span>¥9.9</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/831CA133362DE10D.jpg">
                                                    <p>26***c 大发快3<br>喜中
                                                        <span>¥1.97</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/02c5f9ba752fdfcf.jpg">
                                                    <p>zs***3 大发PK10<br>喜中
                                                        <span>¥1.8</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/EF01C8BED7B70053.jpg">
                                                    <p>33***l 广西快3<br>喜中
                                                        <span>¥1.96</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/6F1A99A3D02A6DEC.jpg">
                                                    <p>宝宝来了 北京PK10<br>喜中
                                                        <span>¥96.7</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/D38F599DF12CD206.jpg">
                                                    <p>稳稳的赢 大发六合彩<br>喜中
                                                        <span>¥15.84</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/c5cb0b1aa816d7aa.jpg">
                                                    <p>18***4 UU快三<br>喜中
                                                        <span>¥39.4</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/8f58610879f7e312.jpg">
                                                    <p>c1***0 大发PK10<br>喜中
                                                        <span>¥98</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/779d89d0bf5536a7.jpg">
                                                    <p>11***6 广西快3<br>喜中
                                                        <span>¥97</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/119ce2240e5d2e11.jpg">
                                                    <p>wa***g 山东11选5<br>喜中
                                                        <span>¥64.35</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/dd7f31dac854287d.jpg">
                                                    <p>发发发 大发六合彩<br>喜中
                                                        <span>¥198</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/2ccae7bb8c67d793.jpg">
                                                    <p>gq***9 大发六合彩<br>喜中
                                                        <span>¥99</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/C7BB5088540C8040.jpg">
                                                    <p>叫我傻妞 广西快3<br>喜中
                                                        <span>¥5.85</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/1EF6FC3ACCBCD762.jpg">
                                                    <p>17***9 大发PK10<br>喜中
                                                        <span>¥97.9</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/be83d242f47468f2.jpg">
                                                    <p>16***n 北京PK10<br>喜中
                                                        <span>¥9.75</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/2bba7e78591a9278.jpg">
                                                    <p>qw***9 广西快3<br>喜中
                                                        <span>¥7.84</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/efe347f5ff37e8f1.jpg">
                                                    <p>15***5 UU快三<br>喜中
                                                        <span>¥58.5</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/81e8ebc3eedde4e1.jpg">
                                                    <p>你三啊 大发六合彩<br>喜中
                                                        <span>¥96.52</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/81e8ebc3eedde4e1.jpg">
                                                    <p>di***3 大发时时彩<br>喜中
                                                        <span>¥169.76</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/CA64E00C3F9FD5F3.jpg">
                                                    <p>看韩剧 大发快3<br>喜中
                                                        <span>¥9.1</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/4A2E3EA214381904.jpg">
                                                    <p>落叶 大发六合彩<br>喜中
                                                        <span>¥9.9</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/831CA133362DE10D.jpg">
                                                    <p>26***c 大发快3<br>喜中
                                                        <span>¥1.97</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/02c5f9ba752fdfcf.jpg">
                                                    <p>zs***3 大发PK10<br>喜中
                                                        <span>¥1.8</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/EF01C8BED7B70053.jpg">
                                                    <p>33***l 广西快3<br>喜中
                                                        <span>¥1.96</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/6F1A99A3D02A6DEC.jpg">
                                                    <p>宝宝来了 北京PK10<br>喜中
                                                        <span>¥96.7</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/D38F599DF12CD206.jpg">
                                                    <p>稳稳的赢 大发六合彩<br>喜中
                                                        <span>¥15.84</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/c5cb0b1aa816d7aa.jpg">
                                                    <p>18***4 UU快三<br>喜中
                                                        <span>¥39.4</span>
                                                    </p>
                                                </li>
                                                <li><img src="//imagess-google.com/system/common/headimg/8f58610879f7e312.jpg">
                                                    <p>c1***0 大发PK10<br>喜中
                                                        <span>¥98</span>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="moneyList" style="width: 100%; display: none;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="position: relative;">
                                        <tr>
                                            <th colspan="2">昨日累计盈利排行榜</th>
                                        </tr>
                                        <tr>
                                            <td><img src="//imagess-google.com/system/common/headimg/274692371a941235.jpg">
                                                <p>账号昵称：小茶<br> 昨日盈利：
                                                    <i>¥507287</i>
                                                </p>
                                            </td>
                                            <td>
                                                <ins>1</ins>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src="//imagess-google.com/system/common/headimg/8f58610879f7e312.jpg">
                                                <p>账号昵称：37***9<br> 昨日盈利：
                                                    <i>¥498546</i>
                                                </p>
                                            </td>
                                            <td>
                                                <ins>2</ins>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src="//imagess-google.com/system/common/headimg/da9fd665c01b0961.jpg">
                                                <p>账号昵称：42***5<br> 昨日盈利：
                                                    <i>¥361285</i>
                                                </p>
                                            </td>
                                            <td>
                                                <ins>3</ins>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src="//imagess-google.com/system/common/headimg/a48577237f589358.jpg">
                                                <p>账号昵称：15***4<br> 昨日盈利：
                                                    <i>¥344820</i>
                                                </p>
                                            </td>
                                            <td>
                                                <ins>4</ins>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src="//imagess-google.com/system/common/headimg/a5e3e2b62d17a646.jpg">
                                                <p>账号昵称：范范<br> 昨日盈利：
                                                    <i>¥338487</i>
                                                </p>
                                            </td>
                                            <td>
                                                <ins>5</ins>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src="//imagess-google.com/system/common/headimg/F95FE943163DAF92.jpg">
                                                <p>账号昵称：zs***8<br> 昨日盈利：
                                                    <i>¥319982</i>
                                                </p>
                                            </td>
                                            <td>
                                                <ins>6</ins>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src="//imagess-google.com/system/common/headimg/ddc5484c140d900c.jpg">
                                                <p>账号昵称：13***9<br> 昨日盈利：
                                                    <i>¥262766</i>
                                                </p>
                                            </td>
                                            <td>
                                                <ins>7</ins>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src="//imagess-google.com/system/common/headimg/775f5994a0568972.jpg">
                                                <p>账号昵称：w1***6<br> 昨日盈利：
                                                    <i>¥235128</i>
                                                </p>
                                            </td>
                                            <td>
                                                <ins>8</ins>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src="//imagess-google.com/system/common/headimg/d86c69601267c45a.jpg">
                                                <p>账号昵称：一缕芬芳<br> 昨日盈利：
                                                    <i>¥229653</i>
                                                </p>
                                            </td>
                                            <td>
                                                <ins>9</ins>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src="//imagess-google.com/system/common/headimg/1B6A214FF62BD91F.jpg">
                                                <p>账号昵称：wc***0<br> 昨日盈利：
                                                    <i>¥221658</i>
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
                                        <div class="technicalSupport-box"><img src="http://imagess-google.com/test/../system/common/other/dafayun.png" alt="大发云">
                                            <p>
                                                大发云
                                                <br> 彩票系统平台
                                            </p>
                                            <i></i>
                                        </div>
                                        <div class="technicalSupport-box uulive"><img src="http://imagess-google.com/test/../system/common/other/uulive.png" alt="UU直播">
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
                                            <span style="width: 0%;"></span>
                                        </p>
                                        <em>0'00</em>
                                        <i>秒</i>
                                    </li>
                                    <li>昨日提现平均时间
                                        <p class="footBar">
                                            <span style="width: 0%;"></span>
                                        </p>
                                        <em>0'00</em>
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
            <div class="notice">
                <div class="noticCon">
                    <h3>网站最新公告
                        <a class="iconfont closeNotice"></a>
                    </h3>
                    <ul>
                        <li>
                            <a>
                                <i></i>?重要通知<br>[2018-05-07 11:45:17]
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
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
