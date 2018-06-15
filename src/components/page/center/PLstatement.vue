<template>
    <div>
        <div class="userRight">
            <div class="userTitle mgb10">今日盈亏</div>
            <div class="userMain mgb10">
                <div id="PLhtml">
                    <div class="plCon fix">
                        <div class="balance">
                            <span>
                                <i></i>0.00</span>
                            <p>
                                <i class="iconfont"></i>余额
                                <a href="/ebankPay" class="">充值</a>
                                <a href="/withdraw" class="">提现</a>
                                <a href="/billRecord" class="">交易记录</a>
                            </p>
                        </div>
                        <div class="plTotal">
                            <i class="iconfont"></i>
                            <div class="detail">
                                <p>盈亏总额（元）</p>
                                <em>
                                    <i></i>0.00</em>
                            </div>
                        </div>
                        <div class="calculate">
                            <i class="iconfont"></i>
                            <div class="detail">
                                <p>盈亏计算公式</p>
                                <ins>中奖-投注+活动+返点</ins>
                            </div>
                        </div>
                    </div>
                    <ul class="plMore">
                        <li>
                            <em>0.00</em>
                            <span>投注金额</span>
                        </li>
                        <li>
                            <em>0.00</em>
                            <span>中奖金额</span>
                        </li>
                        <li>
                            <em>0.00</em>
                            <span>活动礼金</span>
                        </li>
                        <li>
                            <em>0.00</em>
                            <span>返点金额</span>
                        </li>
                        <li>
                            <em>0.00</em>
                            <span>充值金额</span>
                        </li>
                        <li>
                            <em>0.00</em>
                            <span>提现金额</span>
                        </li>
                    </ul>
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
