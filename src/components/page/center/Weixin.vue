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
                        <a href="/recharge/Weixin" class="router-link-exact-active curr">微信支付</a>
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
                <div  class="stepBox mbottom pbottom" style="display: none;">
                    <span  class="bspan">充值通道：</span>
                    <div  class="bankblockList Bank fix">
                        <div  name="rbt" type="radiobox" class="rb rb_active wechatCon">
                            <i ></i>
                            <span  class="wechat noBG">通道1</span>
                            <em ></em>
                        </div>
                    </div>
                </div>
                <div  class="" id="isShow">
                    <!---->
                    <!---->
                    <!---->
                    <div  class="row fix">
                        <div  class="colMd8">
                            <div  class="stepBox topBox h150">
                                <em ></em>
                                <span >
                                    <b >请使用微信转账到以下银行卡：</b>单笔最低
                                    <ins >10</ins>元，最高
                                    <ins >50000</ins>元</span>
                                <ul  class="alipayee">
                                    <li >
                                        <ins >收款银行：</ins>
                                        <ins ><input  type="text" class="code">
                                            <a  class="copy_btn">复制</a>
                                        </ins>
                                    </li>
                                    <li >
                                        <ins >收款户名：</ins>
                                        <ins ><input  type="text" class="code">
                                            <a  class="copy_btn">复制</a>
                                        </ins>
                                    </li>
                                    <li >
                                        <ins >收款账号：</ins>
                                        <ins ><input  type="text" class="code">
                                            <a  class="copy_btn">复制</a>
                                        </ins>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div  class="colMd4">
                            <div  class="stepBox h150">
                                <span  style="display: block;">扫码支付</span>
                                <div  class="erweima" style="text-align: center;"><img  src="//imagess-google.com/ascp/UploadImages/20180524090415607220.png" alt=""></div>
                            </div>
                        </div>
                    </div>
                    <div  class="stepBox mtop">
                        <em ></em>
                        <span >
                            <b >请认真填写您的转账信息：</b>请务必转账后再提交订单,否则无法及时查到您的款项！ 转账后请添加好友留言账号</span>
                        <ul >
                            <li >
                                <ins >
                                    <b >充值金额：</b><input  type="text" tag="充值金额" class="userInput">
                                    <!---->
                                </ins>
                                <ins >
                                    <b >您的微信昵称：</b><input  type="text" tag="您的微信昵称" class="userInput">
                                    <!---->
                                </ins>
                            </li>
                        </ul>
                        <h6  style="text-align: center;">
                            <a  class="submitBtn">提交充值订单</a>
                        </h6>
                        <div  class="userTip">
                            <p  class="mgl20">※ 温馨提示：<br > 1、请使用微信转账到以上账户。
                                <br > 2、若提供的是二维码，请使用微信扫一扫进行转账。若提供的是银行账号，请使用微信转账到银行卡的方式进行转账。
                                <br > 3、转账时，请在留言中备注自己的游戏账号，便于及时确认充值金额。
                                <br > 4、请正确填写您的微信昵称和充值金额。微信昵称并非微信账号，请注意区分。
                                <br > 5、请务必转账后再提交订单，否则无法及时查到您的款项！转账1笔提交1次，请勿重复提交订单。
                            </p>
                        </div>
                    </div>
                </div>
                <!---->
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
