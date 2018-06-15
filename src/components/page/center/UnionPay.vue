<template>
    <div>
        <div  class="userRight">
            <div  class="userTitle mgb10">我要充值</div>
            <div  class="userMain">
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
                        <a href="/recharge/UnionPay" class="router-link-exact-active curr">银联支付</a>
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
                            <span  class="unionpay noBG">通道1</span>
                            <em ></em>
                        </div>
                        <div  name="rbt" type="radiobox" class="rb">
                            <i ></i>
                            <span  class="unionpay noBG">通道2</span>
                            <em ></em>
                        </div>
                    </div>
                </div>
                <!---->
                <div  class="stepBox mtop ptop">
                    <ul  class="submitContent">
                        <li >
                            <span  class="wnone">充值金额：</span> <input  tag="充值金额" type="text" class="userInput">
                            <!---->
                        </li>
                        <li >
                            <span  class="w81"></span>
                            <a  class="submitBtn">充值</a>
                        </li>
                    </ul>
                    <div  class="userTip">
                        <p >※ 温馨提示：<br > 1、使用银联APP扫一扫二维码进行支付，系统自动到账。
                            <br > 2、单笔充值金额最低
                            <ins >10</ins>元，最高
                            <ins >500000</ins>元。<br > 3、转账1笔提交1次，请勿重复提交订单。
                            <br ></p>
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
