<template>
    <div>
        <div class="userRight">
            <div class="userTitle mgb10">我要充值</div>
            <div class="userMain mgb10">
                <div class="newTab pt15 fix">
                    <div>
                        <!--class="router-link-exact-active curr"-->

                        <a v-for="(item,index) in tabs" :class="{curr:index == num}" @click="tab(index)">{{item}}</a>
                        <!-- <a href="#" >银行转账</a>
                        <a href="#">快捷支付</a>
                        <a href="#">支付宝</a>
                        <a href="#">微信支付</a>
                        <a href="#">QQ钱包</a>
                        <a href="#">银联支付</a> -->
                    </div>
                </div>
                <div v-show="0 == num">
                    <div class="stepBox">
                        <em></em>
                        <span>
                            <b>请转账到以下银行账户：</b>单笔最低
                            <ins>10</ins>元，最高
                            <ins>5000000</ins>
                        </span>
                        <ul class="bankStyle">
                            <li class="bankTable">
                                <ins>收款银行：</ins>
                                <ins>
                                    <div class="bankblockList fix">
                                        <a title="招商银行" class="rb rb_active">
                                            <i checked="checked"></i>
                                            <span checked="checked" class="招商银行">招商银行</span>
                                            <em checked="checked"></em>
                                        </a>
                                    </div>
                                </ins>
                            </li>
                            <li>
                                <ins style="width: 30px;">收款户名：</ins>
                                <ins><input type="text" class="code" value="张三">
                                    <a class="copy_btn">复制</a>
                                </ins>
                            </li>
                            <li>
                                <ins class="leftIn">收款账号:</ins>
                                <ins><input type="text" class="code" value="6214834204425442">
                                    <a class="copy_btn">复制</a>
                                </ins>
                            </li>
                            <li>
                                <ins class="leftIn">开户支行：</ins>
                                <ins><input type="text" class="code" value="湖北十堰分行开发区支行">
                                    <a class="copy_btn">复制</a>
                                </ins>
                            </li>
                        </ul>
                    </div>
                    <div class="stepBox">
                        <em></em>
                        <span>
                            <b>请认真填写您的转账信息：</b>请务必转账后再提交订单,否则无法及时查到您的款项！</span>
                        <ul>
                            <li>
                                <ins>
                                    <span>充值金额：</span> <input type="text" tag="充值金额" class="userInput">
                                    <!---->
                                </ins>
                                <ins>
                                    <span>您的银行户名：</span><input type="text" tag="您的银行户名" class="userInput">
                                    <!---->
                                </ins>
                            </li>
                        </ul>
                        <ul>
                            <h6>
                                <a class="submitBtn">提交充值订单</a>
                            </h6>
                        </ul>
                        <div class="userTip">
                            <p>※ 温馨提示：<br> 1、请转账完成后再提交充值订单。
                                <br> 2、请正确填写您的户名和充值金额。
                                <br> 3、转账1笔提交1次，请勿重复提交订单。
                                <br> 4、转帐完成后请保留单据作为核对证明。
                            </p>
                        </div>
                    </div>
                </div>
                <div v-show="1 == num">

                    <div class="stepBox quickPay">
                        <ul class="submitContent">
                            <li>
                                <span>选择银行：</span>
                                <div class="bankblockList fix">
                                    <a title="工商银行" class="rb">
                                        <i></i>
                                        <span class="工商银行"> 工商银行</span>
                                        <em></em>
                                    </a>
                                    <a title="建设银行" class="rb">
                                        <i></i>
                                        <span class="建设银行"> 建设银行</span>
                                        <em></em>
                                    </a>
                                    <a title="农业银行" class="rb">
                                        <i></i>
                                        <span class="农业银行"> 农业银行</span>
                                        <em></em>
                                    </a>
                                    <a title="民生银行" class="rb">
                                        <i></i>
                                        <span class="民生银行"> 民生银行</span>
                                        <em></em>
                                    </a>
                                    <a title="招商银行" class="rb">
                                        <i></i>
                                        <span class="招商银行"> 招商银行</span>
                                        <em></em>
                                    </a>
                                    <a title="交通银行" class="rb">
                                        <i></i>
                                        <span class="交通银行"> 交通银行</span>
                                        <em></em>
                                    </a>
                                    <a title="中国银行" class="rb">
                                        <i></i>
                                        <span class="中国银行"> 中国银行</span>
                                        <em></em>
                                    </a>
                                    <a title="邮政储蓄" class="rb">
                                        <i></i>
                                        <span class="邮政储蓄"> 邮政储蓄</span>
                                        <em></em>
                                    </a>
                                    <a title="中信银行" class="rb">
                                        <i></i>
                                        <span class="中信银行"> 中信银行</span>
                                        <em></em>
                                    </a>
                                    <a title="兴业银行" class="rb">
                                        <i></i>
                                        <span class="兴业银行"> 兴业银行</span>
                                        <em></em>
                                    </a>
                                    <a title="华夏银行" class="rb">
                                        <i></i>
                                        <span class="华夏银行"> 华夏银行</span>
                                        <em></em>
                                    </a>
                                    <a title="浦发银行" class="rb">
                                        <i></i>
                                        <span class="浦发银行"> 浦发银行</span>
                                        <em></em>
                                    </a>
                                    <a title="广发银行" class="rb">
                                        <i></i>
                                        <span class="广发银行"> 广发银行</span>
                                        <em></em>
                                    </a>
                                    <a title="平安银行" class="rb">
                                        <i></i>
                                        <span class="平安银行"> 平安银行</span>
                                        <em></em>
                                    </a>
                                    <a title="光大银行" class="rb">
                                        <i></i>
                                        <span class="光大银行"> 光大银行</span>
                                        <em></em>
                                    </a>
                                    <a title="银座银行" class="rb">
                                        <i></i>
                                        <span class="银座银行"> 银座银行</span>
                                        <em></em>
                                    </a>
                                    <a title="农商银行" class="rb">
                                        <i></i>
                                        <span class="农商银行"> 农商银行</span>
                                        <em></em>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <span>充值金额：</span> <input tag="充值金额" type="text" class="userInput">
                                <!---->
                            </li>
                            <li>
                                <span></span>
                                <a class="submitBtn">充值</a>
                            </li>
                        </ul>
                        <div class="userTip">
                            <p>※ 温馨提示：<br> 1、快捷支付需开通网银才能进行支付。
                                <br> 2、单笔充值金额最低
                                <ins>10</ins>元，最高
                                <ins>500000</ins>元。<br> 3、充值成功后，点击“返回商户”即可自动到账。
                            </p>
                        </div>
                    </div>
                </div>
                <div v-show="2 == num">
                    <div class="" id="isShow">
                        <div class="row fix">
                            <div class="colMd8">
                                <div class="stepBox topBox h150">
                                    <em></em>
                                    <span>
                                        <b>请转账到以下支付宝账户：</b>单笔最低
                                        <ins>10</ins>元，最高
                                        <ins>50000</ins>元</span>
                                    <ul>
                                        <li>
                                            <ins>收款支付宝姓名：</ins>
                                            <ins><input type="text" class="code" value="张三">
                                                <a class="copy_btn">复制</a>
                                            </ins>
                                        </li>
                                        <li>
                                            <ins>收款支付宝账号：</ins>
                                            <ins><input type="text" class="code" value="zansan@163.com">
                                                <a class="copy_btn">复制</a>
                                            </ins>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="colMd4">
                                <div class="stepBox h150">
                                    <span style="display: block;">扫码支付</span>
                                    <div class="erweima" style="text-align: center;"><img src="//imagess-google.com/ascp/UploadImages/20180524090415607220.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                        <div class="stepBox mtop">
                            <em></em>
                            <span>
                                <b>请认真填写您的转账信息：</b>请务必转账后再提交订单,否则无法及时查到您的款项！</span>
                            <ul>
                                <li>
                                    <ins>
                                        <b>充值金额：</b><input type="text" tag="充值金额" class="userInput">
                                        <!---->
                                    </ins>
                                    <ins>
                                        <b>您的支付宝姓名：</b><input tag="您的支付宝姓名" type="text" class="userInput">
                                        <!---->
                                    </ins>
                                </li>
                            </ul>
                            <ul>
                                <h6>
                                    <a class="submitBtn">提交充值订单</a>
                                </h6>
                            </ul>
                            <div class="userTip">
                                <p class="mgl20">※ 温馨提示：<br> 1、请转账完成后再提交充值订单。
                                    <br> 2、请正确填写您的姓名和充值金额。
                                    <br> 3、若提供的是银行账号，请使用支付宝转账到银行卡的方式进行转账。
                                    <br> 4、转账1笔提交1次，请勿重复提交订单。
                                </p>
                            </div>
                        </div>
                        <!---->
                        <!---->
                        <!---->
                    </div>
                </div>
                <div v-show="3 == num">
                    <div class="" id="isShow">

                        <div class="row fix">
                            <div class="colMd8">
                                <div class="stepBox topBox h150">
                                    <em></em>
                                    <span>
                                        <b>请使用微信转账到以下银行卡：</b>单笔最低
                                        <ins>10</ins>元，最高
                                        <ins>50000</ins>元</span>
                                    <ul class="alipayee">
                                        <li>
                                            <ins>收款银行：</ins>
                                            <ins><input type="text" class="code" value="微信支付">
                                                <a class="copy_btn">复制</a>
                                            </ins>
                                        </li>
                                        <li>
                                            <ins>收款户名：</ins>
                                            <ins><input type="text" class="code" value="扫描付款">
                                                <a class="copy_btn">复制</a>
                                            </ins>
                                        </li>
                                        <li>
                                            <ins>收款账号：</ins>
                                            <ins><input type="text" class="code" value="例如存款100请存100.01">
                                                <a class="copy_btn">复制</a>
                                            </ins>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="colMd4">
                                <div class="stepBox h150">
                                    <span style="display: block;">扫码支付</span>
                                    <div class="erweima" style="text-align: center;"><img src="//imagess-google.com/ascp/UploadImages/20180524090415607220.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                        <div class="stepBox mtop">
                            <em></em>
                            <span>
                                <b>请认真填写您的转账信息：</b>请务必转账后再提交订单,否则无法及时查到您的款项！ 转账后请添加好友留言账号</span>
                            <ul>
                                <li>
                                    <ins>
                                        <b>充值金额：</b><input type="text" tag="充值金额" class="userInput">
                                        <!---->
                                    </ins>
                                    <ins>
                                        <b>您的微信昵称：</b><input type="text" tag="您的微信昵称" class="userInput">
                                        <!---->
                                    </ins>
                                </li>
                            </ul>
                            <h6 style="text-align: center;">
                                <a class="submitBtn">提交充值订单</a>
                            </h6>
                            <div class="userTip">
                                <p class="mgl20">※ 温馨提示：<br> 1、请使用微信转账到以上账户。
                                    <br> 2、若提供的是二维码，请使用微信扫一扫进行转账。若提供的是银行账号，请使用微信转账到银行卡的方式进行转账。
                                    <br> 3、转账时，请在留言中备注自己的游戏账号，便于及时确认充值金额。
                                    <br> 4、请正确填写您的微信昵称和充值金额。微信昵称并非微信账号，请注意区分。
                                    <br> 5、请务必转账后再提交订单，否则无法及时查到您的款项！转账1笔提交1次，请勿重复提交订单。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="4 == num">
                    <div class="stepBox">
                        <ul class="submitContent">
                            <li>
                                <span class="">充值金额：</span> <input tag="充值金额" type="text" class="userInput">
                                <!---->
                            </li>
                            <li>
                                <span class=""></span>
                                <a class="submitBtn">充值</a>
                            </li>
                        </ul>
                        <div class="userTip">
                            <p>※ 温馨提示：<br> 1、使用QQ扫一扫二维码进行支付，系统自动到账。
                                <br> 2、单笔充值金额最低
                                <ins>10</ins>元，最高
                                <ins>500000</ins>元。<br> 3、转账1笔提交1次，请勿重复提交订单。
                                <br></p>
                        </div>
                    </div>
                </div>
                <div v-show="5 == num">
                    <div class="stepBox mtop ptop">
                        <ul class="submitContent">
                            <li>
                                <span class="wnone">充值金额：</span> <input tag="充值金额" type="text" class="userInput">
                                <!---->
                            </li>
                            <li>
                                <span class="w81"></span>
                                <a class="submitBtn">充值</a>
                            </li>
                        </ul>
                        <div class="userTip">
                            <p>※ 温馨提示：<br> 1、使用银联APP扫一扫二维码进行支付，系统自动到账。
                                <br> 2、单笔充值金额最低
                                <ins>10</ins>元，最高
                                <ins>500000</ins>元。<br> 3、转账1笔提交1次，请勿重复提交订单。
                                <br></p>
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
    return {
      tabs: [
        "银行转账",
        "快捷支付",
        "支付宝",
        "微信支付",
        "QQ钱包",
        "银联支付"
      ],
      tabContents: ["内容一", "内容二", "内容三"],
      num: 0
    };
  },
  components: {},
  mounted() {
    this.num = this.$route.params.id;
  },
  methods: {
    tab(index) {
      this.num = index;
    }
  }
};
</script>

<style>
</style>
