<template>
    <div>
        <div class="container containerUser fix pt15">
            <div class="slideUser">
                <ul class="sildeSession">
                    <h3>
                        <span></span>账号管理</h3>
                    <li class="router-link-exact-active curr">
                        <a href="/personalInfo">个人信息</a>
                    </li>

                    <li class="">
                        <a href="/securityCenter">安全中心</a>
                    </li>
                    <li class="">
                        <a href="/manageBankcard">银行卡管理</a>
                    </li>
                </ul>
                <ul class="sildeSession">
                    <h3>
                        <span></span>投注管理</h3>
                    <li>
                        <a href="/BetRecord" class="">投注记录</a>
                    </li>
                    <li>
                        <a href="/seekOrder" class="">追号记录</a>
                    </li>
                </ul>
                <ul class="sildeSession">
                    <h3>
                        <span></span>资金管理</h3>
                    <li>
                        <a href="/BillRecord" class="">交易记录</a>
                    </li>
                    <li class="">
                        <a href="/PLstatement">今日盈亏</a>
                    </li>
                </ul>
                <ul class="sildeSession">
                    <h3>
                        <span></span>代理中心</h3>
                    <li>
                        <a href="/agentIntro" class="">代理说明</a>
                    </li>
                    <li class="">
                        <a href="/agentReport">代理报表</a>
                    </li>
                    <li>
                        <a href="/lowerReport" class="">下级报表</a>
                    </li>
                    <li class="">
                        <a href="/manageInvite">下级开户</a>
                    </li>
                    <li>
                        <a href="/agentMember" class="">会员管理</a>
                    </li>
                    <li>
                        <a href="/agentBetRecord" class="">投注明细</a>
                    </li>
                    <li>
                        <a href="/agentBillRecord" class="">交易明细</a>
                    </li>
                </ul>
                <ul class="sildeSession">
                    <h3>
                        <span></span>消息管理</h3>
                    <li>
                        <a href="/letter" class="">站内信</a>
                    </li>
                    <li>
                        <a href="/Notice" class="">网站公告</a>
                    </li>
                </ul>
            </div>
            <div class="userRight">
                <div class="userTitle mgb10">个人信息</div>
                <div class="userMain mgb10">
                    <div id="newTab" class="newTab">
                        <a href="/personalInfo" class="curr router-link-exact-active curr">个人资料</a>
                        <a href="/personalLevel" class="">等级头衔</a>
                    </div>
                    <div class="fix tapli">
                        <div class="selectHeadImg"><img src="//imagess-google.com/system/common/headimg/274692371a941235.jpg" width="100" height="100" alt="" class="headImg">
                            <a>修改头像</a>
                        </div>
                        <ul class="personalInfo submitContent">
                            <li>
                                <span>账号：</span>
                                <ins>13001129736</ins>
                            </li>
                            <li>
                                <span>等级：</span>
                                <ins>VIP1</ins>
                            </li>
                            <li>
                                <span>头衔：</span>
                                <ins>农民</ins>
                            </li>
                            <li>
                                <span>昵称：</span> <input regmsg="请使用五位以内的汉字" tag="昵称" placeholder="昵称为1-5位汉字，设置后不能修改" type="text" class="userInput">
                                <!---->
                            </li>
                            <li>
                                <span>手机：</span> <input type="text" disabled="disabled" class="userInput">
                                <a href="/setMobile" class="" notsubmit="yes">绑定</a>
                            </li>
                            <li>
                                <span>邮箱：</span> <input type="text" disabled="disabled" class="userInput">
                                <a href="/setMail" class="" notsubmit="yes">绑定</a>
                            </li>
                            <li>
                                <span>性别：</span>
                                <label class="radio_box">
                                    <i></i>男</label>
                                <label class="radio_box">
                                    <i></i>女</label>
                                <label class="radio_box checked">
                                    <i></i>保密</label>
                            </li>
                            <li>
                                <span>生日：</span>
                                <div name="Year" type="selectbox" class="diyselect">
                                    <div class="selected">1900</div>
                                    <div class="opts" style="display: none; width: 73px; top: 30px; left: -1px;">
                                        <a href="javascript:;" value="0">2018</a>
                                        <a href="javascript:;" value="1">2017</a>
                                        <a href="javascript:;" value="2">2016</a>
                                        <a href="javascript:;" value="3">2015</a>
                                        <a href="javascript:;" value="4">2014</a>
                                        <a href="javascript:;" value="5">2013</a>
                                        <a href="javascript:;" value="6">2012</a>
                                        <a href="javascript:;" value="7">2011</a>
                                        <a href="javascript:;" value="8">2010</a>
                                        <a href="javascript:;" value="9">2009</a>
                                        <a href="javascript:;" value="10">2008</a>
                                        <a href="javascript:;" value="11">2007</a>
                                        <a href="javascript:;" value="12">2006</a>
                                        <a href="javascript:;" value="13">2005</a>
                                        <a href="javascript:;" value="14">2004</a>
                                        <a href="javascript:;" value="15">2003</a>
                                        <a href="javascript:;" value="16">2002</a>
                                        <a href="javascript:;" value="17">2001</a>
                                        <a href="javascript:;" value="18">2000</a>
                                        <a href="javascript:;" value="19">1999</a>
                                        <a href="javascript:;" value="20">1998</a>
                                        <a href="javascript:;" value="21">1997</a>
                                        <a href="javascript:;" value="22">1996</a>
                                        <a href="javascript:;" value="23">1995</a>
                                        <a href="javascript:;" value="24">1994</a>
                                        <a href="javascript:;" value="25">1993</a>
                                        <a href="javascript:;" value="26">1992</a>
                                        <a href="javascript:;" value="27">1991</a>
                                        <a href="javascript:;" value="28">1990</a>
                                        <a href="javascript:;" value="29">1989</a>
                                        <a href="javascript:;" value="30">1988</a>
                                        <a href="javascript:;" value="31">1987</a>
                                        <a href="javascript:;" value="32">1986</a>
                                        <a href="javascript:;" value="33">1985</a>
                                        <a href="javascript:;" value="34">1984</a>
                                        <a href="javascript:;" value="35">1983</a>
                                        <a href="javascript:;" value="36">1982</a>
                                        <a href="javascript:;" value="37">1981</a>
                                        <a href="javascript:;" value="38">1980</a>
                                        <a href="javascript:;" value="39">1979</a>
                                        <a href="javascript:;" value="40">1978</a>
                                        <a href="javascript:;" value="41">1977</a>
                                        <a href="javascript:;" value="42">1976</a>
                                        <a href="javascript:;" value="43">1975</a>
                                        <a href="javascript:;" value="44">1974</a>
                                        <a href="javascript:;" value="45">1973</a>
                                        <a href="javascript:;" value="46">1972</a>
                                        <a href="javascript:;" value="47">1971</a>
                                        <a href="javascript:;" value="48">1970</a>
                                        <a href="javascript:;" value="49">1969</a>
                                        <a href="javascript:;" value="50">1968</a>
                                        <a href="javascript:;" value="51">1967</a>
                                        <a href="javascript:;" value="52">1966</a>
                                        <a href="javascript:;" value="53">1965</a>
                                        <a href="javascript:;" value="54">1964</a>
                                        <a href="javascript:;" value="55">1963</a>
                                        <a href="javascript:;" value="56">1962</a>
                                        <a href="javascript:;" value="57">1961</a>
                                        <a href="javascript:;" value="58">1960</a>
                                        <a href="javascript:;" value="59">1959</a>
                                        <a href="javascript:;" value="60">1958</a>
                                        <a href="javascript:;" value="61">1957</a>
                                        <a href="javascript:;" value="62">1956</a>
                                        <a href="javascript:;" value="63">1955</a>
                                        <a href="javascript:;" value="64">1954</a>
                                        <a href="javascript:;" value="65">1953</a>
                                        <a href="javascript:;" value="66">1952</a>
                                        <a href="javascript:;" value="67">1951</a>
                                        <a href="javascript:;" value="68">1950</a>
                                        <a href="javascript:;" value="69">1949</a>
                                        <a href="javascript:;" value="70">1948</a>
                                    </div>
                                    <div class="sb_icon arrow" style="top: 15px;"></div>
                                </div>
                                <div name="Month" type="selectbox" class="diyselect">
                                    <div class="selected">1</div>
                                    <div class="opts" style="display: none; width: 73px; top: 30px; left: -1px;">
                                        <a href="javascript:;" value="0">1</a>
                                        <a href="javascript:;" value="1">2</a>
                                        <a href="javascript:;" value="2">3</a>
                                        <a href="javascript:;" value="3">4</a>
                                        <a href="javascript:;" value="4">5</a>
                                        <a href="javascript:;" value="5">6</a>
                                        <a href="javascript:;" value="6">7</a>
                                        <a href="javascript:;" value="7">8</a>
                                        <a href="javascript:;" value="8">9</a>
                                        <a href="javascript:;" value="9">10</a>
                                        <a href="javascript:;" value="10">11</a>
                                        <a href="javascript:;" value="11">12</a>
                                    </div>
                                    <div class="sb_icon arrow" style="top: 15px;"></div>
                                </div>
                                <div name="Date" type="selectbox" class="diyselect">
                                    <div class="selected">1</div>
                                    <div class="opts" style="display: none; width: 73px; top: 30px; left: -1px;">
                                        <a href="javascript:;" value="0">1</a>
                                        <a href="javascript:;" value="1">2</a>
                                        <a href="javascript:;" value="2">3</a>
                                        <a href="javascript:;" value="3">4</a>
                                        <a href="javascript:;" value="4">5</a>
                                        <a href="javascript:;" value="5">6</a>
                                        <a href="javascript:;" value="6">7</a>
                                        <a href="javascript:;" value="7">8</a>
                                        <a href="javascript:;" value="8">9</a>
                                        <a href="javascript:;" value="9">10</a>
                                        <a href="javascript:;" value="10">11</a>
                                        <a href="javascript:;" value="11">12</a>
                                        <a href="javascript:;" value="12">13</a>
                                        <a href="javascript:;" value="13">14</a>
                                        <a href="javascript:;" value="14">15</a>
                                        <a href="javascript:;" value="15">16</a>
                                        <a href="javascript:;" value="16">17</a>
                                        <a href="javascript:;" value="17">18</a>
                                        <a href="javascript:;" value="18">19</a>
                                        <a href="javascript:;" value="19">20</a>
                                        <a href="javascript:;" value="20">21</a>
                                        <a href="javascript:;" value="21">22</a>
                                        <a href="javascript:;" value="22">23</a>
                                        <a href="javascript:;" value="23">24</a>
                                        <a href="javascript:;" value="24">25</a>
                                        <a href="javascript:;" value="25">26</a>
                                        <a href="javascript:;" value="26">27</a>
                                        <a href="javascript:;" value="27">28</a>
                                        <a href="javascript:;" value="28">29</a>
                                        <a href="javascript:;" value="29">30</a>
                                        <a href="javascript:;" value="30">31</a>
                                    </div>
                                    <div class="sb_icon arrow" style="top: 15px;"></div>
                                </div>
                            </li>
                            <li>
                                <span></span>
                                <a href="javascript:;" class="submitBtn">保存</a>
                            </li>
                        </ul>
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
