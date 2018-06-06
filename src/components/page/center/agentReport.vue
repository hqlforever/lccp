<template>
    <div>
        <div  class="userRight agentReport">
            <div  class="userTitle mgb10">代理报表</div>
            <div  id="Proxy_IndexPage" class="userMain">
                <div  class="u_codeedit">
                    <div  id="timeType" class="newTab">
                        <a  class="curr">今天</a>
                        <a  class="">昨天</a>
                        <a  class="">本月</a>
                        <a  class="">上月</a>
                    </div>
                    <ul  class="todayView mgb10"><input  type="text" placeholder="下级报表查询" class="userInput">&nbsp;
                        <a  class="submitBtn ClickShade">搜索</a>
                    </ul>
                    <div  class="notContent" style="padding: 100px 0px; display: none;">
                        <div   class="iconLoadingCon" style="transform: scale(0.6);"><img  data-v-3bf35cfc="" src="//imagess-google.com/system/mobile/lottery/loadingMobile.gif" alt="" class="loadingImg"></div>
                    </div>
                    <div  id="code_cont" class="code_cont" style="">
                        <ul  class="plMore">
                            <li >
                                <em >¥0.00</em>
                                <span >投注金额</span>
                            </li>
                            <li >
                                <em >¥0.00</em>
                                <span >中奖金额</span>
                            </li>
                            <li >
                                <em >¥0.00</em>
                                <span >活动礼金</span>
                            </li>
                            <li >
                                <em >¥0.00</em>
                                <span >团队返点</span>
                            </li>
                            <li >
                                <em >¥0.00</em>
                                <span >团队盈利</span>
                            </li>
                        </ul>
                        <ul  class="plMore">
                            <li >
                                <em >0人</em>
                                <span >投注人数</span>
                            </li>
                            <li >
                                <em >0人</em>
                                <span >首充人数</span>
                            </li>
                            <li >
                                <em >0人</em>
                                <span >注册人数</span>
                            </li>
                            <li >
                                <em >1人</em>
                                <span >下级人数</span>
                            </li>
                            <li >
                                <em >¥0.00</em>
                                <span >团队余额</span>
                            </li>
                        </ul>
                        <ul  class="plMore">
                            <li >
                                <em >¥0.00</em>
                                <span >充值金额</span>
                            </li>
                            <li >
                                <em >¥0.00</em>
                                <span >提现金额</span>
                            </li>
                            <!---->
                            <li >
                                <em >¥0.00</em>
                                <span >代理返点</span>
                            </li>
                            <!---->
                            <!---->
                            <li ></li>
                            <li ></li>
                        </ul>
                        <div  class="userTip">
                            <p >
                                <i ></i>温馨提示：代理报表最多只保存7天。
                            </p>
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
