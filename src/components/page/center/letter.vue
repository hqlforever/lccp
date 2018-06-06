<template>
    <div>
        <div  class="userRight">
            <div  class="userTitle mgb10">站内信</div>
            <div  class="userMain mgb10">
                <div  class="sendList">
                    <table  width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody >
                            <tr >
                                <th  scope="col">&nbsp;</th>
                                <th  scope="col">主题</th>
                                <th  scope="col">发件人</th>
                                <th  scope="col">时间</th>
                            </tr>
                        </tbody>
                        <tbody  class="fudetail_list">
                            <tr  style="border-bottom: 0px;" class="noData">
                                <td  colspan="100">
                                    <div  class="notContent" style="padding: 100px 0px;">
                                        <i  class="iconfont"></i>暂无记录</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div  class="page">
                        <p >共
                            <em >0</em>条记录</p>
                        <div  id="pageNav" class="pageNav">
                            <div  id="pageNav" class="pageNav">
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
                    <div  class="msgControl"><input  type="checkbox">全选
                        <input  type="button" value="标为已读"> <input  type="button" value="删除"></div>
                    <div  class="userTip">
                        <p >
                            <i ></i>温馨提示：系统将自动清空5天前的用户消息记录。
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
