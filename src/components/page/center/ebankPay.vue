<template>
    <div>
        <div  class="userRight">
            <div  class="userTitle mgb10">我要充值</div>
            <div  class="userMain mgb10">
                <div  class="newTab pt15 fix">
                    <div >
                        <a href="/ebankPay" class="router-link-exact-active curr">银行转账</a>
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
                        <!---->
                    </div>
                </div>
                <div  id="isShow">
                    <div  class="stepBox">
                        <em ></em>
                        <span >
                            <b >请转账到以下银行账户：</b>单笔最低
                            <ins >10</ins>元，最高
                            <ins >5000000</ins>
                        </span>
                        <ul  class="bankStyle">
                            <li  class="bankTable">
                                <ins >收款银行：</ins>
                                <ins >
                                    <div  class="bankblockList fix">
                                        <a  title="招商银行" class="rb rb_active">
                                            <i  checked="checked"></i>
                                            <span  checked="checked" class="招商银行">招商银行</span>
                                            <em  checked="checked"></em>
                                        </a>
                                    </div>
                                </ins>
                            </li>
                            <li >
                                <ins  style="width: 30px;">收款户名：</ins>
                                <ins ><input  type="text" class="code">
                                    <a  class="copy_btn">复制</a>
                                </ins>
                            </li>
                            <li >
                                <ins  class="leftIn">收款账号：</ins>
                                <ins ><input  type="text" class="code">
                                    <a  class="copy_btn">复制</a>
                                </ins>
                            </li>
                            <li >
                                <ins  class="leftIn">开户支行：</ins>
                                <ins ><input  type="text" class="code">
                                    <a  class="copy_btn">复制</a>
                                </ins>
                            </li>
                        </ul>
                    </div>
                    <div  class="stepBox">
                        <em ></em>
                        <span >
                            <b >请认真填写您的转账信息：</b>请务必转账后再提交订单,否则无法及时查到您的款项！</span>
                        <ul >
                            <li >
                                <ins >
                                    <span >充值金额：</span> <input  type="text" tag="充值金额" class="userInput">
                                    <!---->
                                </ins>
                                <ins >
                                    <span >您的银行户名：</span><input  type="text" tag="您的银行户名" class="userInput">
                                    <!---->
                                </ins>
                            </li>
                        </ul>
                        <ul >
                            <h6 >
                                <a  class="submitBtn">提交充值订单</a>
                            </h6>
                        </ul>
                        <div  class="userTip">
                            <p >※ 温馨提示：<br > 1、请转账完成后再提交充值订单。
                                <br > 2、请正确填写您的户名和充值金额。
                                <br > 3、转账1笔提交1次，请勿重复提交订单。
                                <br > 4、转帐完成后请保留单据作为核对证明。
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
