<template>
    <div>
        <div class="container registerPage">
            <h3 class="reg_tit">用户注册</h3>
            <p class="reg_small">
                <ins>奥巴马</ins>都已经注册了，赶紧加入吧！注册后系统将随机分配一张个性的头像。</p>
            <ul class="submitContent regMain">
                <li>
                    <span>邀请码：</span> <input regmsg="您输入的邀请码错误或者已过期" tag="邀请码" type="url" placeholder="请输入8位数字邀请码" class="userInput" v-model="inviteCode">
                    <!---->
                </li>
                <li>
                    <span>账号：</span> <input tag="帐号" regmsg="账号应为4-16个字符，可使用字母、数字" placeholder="请输入您要注册的账号" type="url" autocomplete="off" class="userInput" v-model="userName">
                    <!---->
                </li>
                <li>
                    <span>设置密码：</span> <input type="password" class="dpn"> <input type="password" tag="设置密码" placeholder="请输入您要设置的密码" autocomplete="off" class="userInput" v-model="passWord">
                    <!---->
                </li>
                <!---->
                <li>
                    <span></span>
                    <p style="display: inline; margin-left: 0px; font-size: 12px; color: rgb(154, 154, 154);"><input type="checkbox" style="width: inherit; margin-right: 5px;">我已经年满18岁
                        <span class="Validform_checktip"></span>
                    </p>
                </li>
                <li>
                    <span></span>
                    <a class="mainColorBtn submitBtnBig ClickShade" @click="register">注 册</a>
                    <a class="resetForm submitBtnBig ClickShade" style="background: rgb(113, 112, 116);">重 置</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        passWord:"",
        userName:"",
        inviteCode:""
        };
  },
  methods: {
    register() {
        var that=this;
      this.$http
        .post(that.BASE_INFO.BASE_URL+"user/createUser", {
          password: that.passWord,
          name: that.userName,
          inviteCode: that.inviteCode,
        })
        .then(function(response) {
          if(response.data.code==1){
             alert('注册成功');
             that.$router.push('index')
          }else{
             alert(response.data.message);
          }
        });
    }
  },
  components: {}
};
</script>

<style>
</style>
