<template>
    <div>
        <div  class="userRight">
            <div  class="userTitle mgb10">我要充值</div>
            <div  class="userMain mgb10">
                <div  class="newTab pt15 fix">
                    <div >
                        <a href="/ebankPay" class="">银行转账</a>
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <a href="/quickPay" class="router-link-exact-active curr">快捷支付</a>
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
                        <!---->
                    </div>
                </div>
                <div  class="stepBox mbottom pbottom" style="">
                    <span  class="bspan">充值通道：</span>
                    <div  class="bankblockList Bank fix">
                        <div  name="rbt" type="radiobox" class="rb rb_active wechatCon">
                            <i ></i>
                            <span  class="noBG">通道1</span>
                            <em ></em>
                        </div>
                        <div  name="rbt" type="radiobox" class="rb">
                            <i ></i>
                            <span  class="noBG">通道2</span>
                            <em ></em>
                        </div>
                    </div>
                </div>
                <div  class="stepBox quickPay">
                    <ul  class="submitContent">
                        <li >
                            <span >选择银行：</span>
                            <div  class="bankblockList fix">
                                <a  title="工商银行" class="rb">
                                    <i ></i>
                                    <span  class="工商银行"> 工商银行</span>
                                    <em ></em>
                                </a>
                                <a  title="建设银行" class="rb">
                                    <i ></i>
                                    <span  class="建设银行"> 建设银行</span>
                                    <em ></em>
                                </a>
                                <a  title="农业银行" class="rb">
                                    <i ></i>
                                    <span  class="农业银行"> 农业银行</span>
                                    <em ></em>
                                </a>
                                <a  title="民生银行" class="rb">
                                    <i ></i>
                                    <span  class="民生银行"> 民生银行</span>
                                    <em ></em>
                                </a>
                                <a  title="招商银行" class="rb">
                                    <i ></i>
                                    <span  class="招商银行"> 招商银行</span>
                                    <em ></em>
                                </a>
                                <a  title="交通银行" class="rb">
                                    <i ></i>
                                    <span  class="交通银行"> 交通银行</span>
                                    <em ></em>
                                </a>
                                <a  title="中国银行" class="rb">
                                    <i ></i>
                                    <span  class="中国银行"> 中国银行</span>
                                    <em ></em>
                                </a>
                                <a  title="邮政储蓄" class="rb">
                                    <i ></i>
                                    <span  class="邮政储蓄"> 邮政储蓄</span>
                                    <em ></em>
                                </a>
                                <a  title="中信银行" class="rb">
                                    <i ></i>
                                    <span  class="中信银行"> 中信银行</span>
                                    <em ></em>
                                </a>
                                <a  title="兴业银行" class="rb">
                                    <i ></i>
                                    <span  class="兴业银行"> 兴业银行</span>
                                    <em ></em>
                                </a>
                                <a  title="华夏银行" class="rb">
                                    <i ></i>
                                    <span  class="华夏银行"> 华夏银行</span>
                                    <em ></em>
                                </a>
                                <a  title="浦发银行" class="rb">
                                    <i ></i>
                                    <span  class="浦发银行"> 浦发银行</span>
                                    <em ></em>
                                </a>
                                <a  title="广发银行" class="rb">
                                    <i ></i>
                                    <span  class="广发银行"> 广发银行</span>
                                    <em ></em>
                                </a>
                                <a  title="平安银行" class="rb">
                                    <i ></i>
                                    <span  class="平安银行"> 平安银行</span>
                                    <em ></em>
                                </a>
                                <a  title="光大银行" class="rb">
                                    <i ></i>
                                    <span  class="光大银行"> 光大银行</span>
                                    <em ></em>
                                </a>
                                <a  title="银座银行" class="rb">
                                    <i ></i>
                                    <span  class="银座银行"> 银座银行</span>
                                    <em ></em>
                                </a>
                                <a  title="农商银行" class="rb">
                                    <i ></i>
                                    <span  class="农商银行"> 农商银行</span>
                                    <em ></em>
                                </a>
                            </div>
                        </li>
                        <li >
                            <span >充值金额：</span> <input  tag="充值金额" type="text" class="userInput">
                            <!---->
                        </li>
                        <li >
                            <span ></span>
                            <a  class="submitBtn">充值</a>
                        </li>
                    </ul>
                    <div  class="userTip">
                        <p >※ 温馨提示：<br > 1、快捷支付需开通网银才能进行支付。
                            <br > 2、单笔充值金额最低
                            <ins >10</ins>元，最高
                            <ins >500000</ins>元。<br > 3、充值成功后，点击“返回商户”即可自动到账。
                        </p>
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
