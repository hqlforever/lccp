<template>
    <div>
        <div class="container containerUser fix pt15">
            <div class="slideUser">
                <ul class="sildeSession">
                    <h3>
                        <span></span>账号管理</h3>
                    <li class="router-link-exact-active curr">
                        <a href="/center/personalInfo">个人信息</a>
                    </li>

                    <li class="">
                        <a href="/center/securityCenter">安全中心</a>
                    </li>
                    <li class="">
                        <a href="/center/manageBankcard">银行卡管理</a>
                    </li>
                </ul>
                <ul class="sildeSession">
                    <h3>
                        <span></span>投注管理</h3>
                    <li>
                        <a href="/center/BetRecord" class="">投注记录</a>
                    </li>
                    <li>
                        <a href="/center/seekOrder" class="">追号记录</a>
                    </li>
                </ul>
                <ul class="sildeSession">
                    <h3>
                        <span></span>资金管理</h3>
                    <li>
                        <a href="/center/BillRecord" class="">交易记录</a>
                    </li>
                    <li class="">
                        <a href="/center/PLstatement">今日盈亏</a>
                    </li>
                </ul>
                <ul class="sildeSession">
                    <h3>
                        <span></span>代理中心</h3>
                    <li>
                        <a href="/center/agentIntro" class="">代理说明</a>
                    </li>
                    <li class="">
                        <a href="/center/agentReport">代理报表</a>
                    </li>
                    <li>
                        <a href="/center/lowerReport" class="">下级报表</a>
                    </li>
                    <li class="">
                        <a href="/center/manageInvite">下级开户</a>
                    </li>
                    <li>
                        <a href="/center/agentMember" class="">会员管理</a>
                    </li>
                    <li>
                        <a href="/center/agentBetRecord" class="">投注明细</a>
                    </li>
                    <li>
                        <a href="/center/agentBillRecord" class="">交易明细</a>
                    </li>
                </ul>
                <ul class="sildeSession">
                    <h3>
                        <span></span>消息管理</h3>
                    <li>
                        <a href="/center/letter" class="">站内信</a>
                    </li>
                    <li>
                        <a href="/center/Notice" class="">网站公告</a>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
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
