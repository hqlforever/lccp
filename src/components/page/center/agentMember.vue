<template>
    <div>
        <div class="userRight">
            <div class="userTitle mgb10">
                会员管理
            </div>
            <div class="userMain mgb10 agentMember">
                <div class="searchOpt">
                    账号：
                    <input type="text" name="a" class="userInput w90"> &nbsp; 用户类型：
                    <ins class="selectIcon">
                        <select name="f" class="userSelect">
                            <option value="-1">全部</option>
                            <option value="1">代理</option>
                            <option value="0">玩家</option>
                        </select>
                        <em></em>
                    </ins>&nbsp;
                    <a class="submitBtn">搜索</a>
                </div>
                <div class="accountDetail">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="ty_table3">
                        <tbody>
                            <tr>
                                <th>账号</th>
                                <th>用户类型</th>
                                <th>下级人数</th>
                                <th>余额</th>
                                <th>最后登录</th>
                                <th>操作</th>
                            </tr>
                        </tbody>
                        <tbody id="fudetail_list">
                            <tr style="border-bottom: 0px;">
                                <td colspan="100">
                                    <div class="notContent" style="padding: 100px 0px;">
                                        <i class="iconfont"></i>暂无记录</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="page">
                        <p>共
                            <em>0</em>条记录</p>
                        <div id="pageNav" class="pageNav">
                            <div id="pageNav" class="pageNav">
                                <ul class="pagination" style="display: none;">
                                    <li style="display: none;">
                                        <a>上一页</a>
                                    </li>
                                    <!---->
                                    <!---->
                                    <li style="display: none;">
                                        <a>下一页</a>
                                    </li>
                                </ul>
                            </div>
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
