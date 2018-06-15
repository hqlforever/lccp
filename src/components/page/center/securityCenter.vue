<template>
    <div>
        <div class="userRight">
            <div class="userTitle mgb10">安全中心</div>
            <div class="userMain mgb10">
                <div class="mg30">
                    <div class="safeTop mgb10">
                        <div class="star">
                            <i class="iconfont curr"></i>
                            <i class="iconfont"></i>
                            <i class="iconfont"></i>
                            <i class="iconfont"></i>
                            <i class="iconfont"></i>
                        </div>
                        <div class="text">
                            <strong>您的账号安全级别为
                                <i>极低</i>，可以通过完善安全信息提高级别。</strong>
                            <p>上次登录：
                                <ins>2018-05-28 11:43:43</ins>
                                <ins>北京,北京</ins> | 不是我登录？
                                <a href="/verifyPwd" class="alink">修改密码</a>
                            </p>
                        </div>
                    </div>
                    <ul id="safeList" class="safeList">
                        <li>
                            <span class="iconfont"></span>
                            <span class="text">
                                <strong>登陆密码</strong>
                                <p>建议您使用字母和数字的组合、混合大小写、在组合中加入下划线等符号。</p>
                            </span>
                            <span class="btn">
                                <a href="/verifyPwd" class="">修改密码</a>
                            </span>
                        </li>
                        <li class="noSet">
                            <span class="iconfont"></span>
                            <span class="text">
                                <strong>未设置安全密码</strong>
                                <p>安全密码用于提现、绑定银行卡等操作，可保障资金安全。</p>
                            </span>
                            <span class="btn">
                                <a href="/setSafePwd" class="">设置安全密码</a>
                            </span>
                        </li>
                        <li class="noSet">
                            <span class="iconfont"></span>
                            <span class="text">
                                <strong>未绑定密保手机:
                                    <ins id="mobile"></ins>
                                </strong>
                                <p>密保手机可以增加账户安全性，快速找回帐号密码。</p>
                            </span>
                            <span class="btn">
                                <a href="/setMobile" class="">绑定密保手机</a>
                            </span>
                        </li>
                        <li class="noSet">
                            <span class="iconfont"></span>
                            <span class="text">
                                <strong>未设置密保问题</strong>
                                <p>密保问题可以增加账户安全性，快速找回帐号密码。</p>
                            </span>
                            <span class="btn">
                                <a href="/setQuestion" class="">设置密保问题</a>
                            </span>
                        </li>
                        <li class="noSet">
                            <span class="iconfont"></span>
                            <span class="text">
                                <strong>未绑定密保邮箱</strong>
                                <p>绑定邮箱可以增加账户安全性，快速找回帐号密码。</p>
                            </span>
                            <span class="btn">
                                <a href="/setMail" class="">绑定密保邮箱</a>
                            </span>
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
