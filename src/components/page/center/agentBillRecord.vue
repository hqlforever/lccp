<template>
    <div>
        <div  class="userRight">
            <div  class="userTitle mgb10">交易明细</div>
            <div  class="userMain mgb10">
                <ul  class="todayView mgb10" style="text-align: left;">
                    <em >账号：</em> <input  type="text" placeholder="下级交易查询" class="userInput">&nbsp;
                    <a  class="submitBtn">搜索</a>
                </ul>
                <ul  class="searchFirst">
                    <li >
                        <span >摘要：</span>
                        <ins class="selectIcon">
                            <div class="title">全部摘要
                                <select class="userSelect">
                                    <option value="-1">全部摘要</option>
                                    <option value="1">
                                        充值入款
                                    </option>
                                    <option value="3">
                                        提现扣款
                                    </option>
                                    <option value="4">
                                        投注扣款
                                    </option>
                                    <option value="5">
                                        投注返点
                                    </option>
                                    <option value="2">
                                        奖金派送
                                    </option>
                                    <option value="6">
                                        提现退回
                                    </option>
                                    <option value="7">
                                        活动礼金
                                    </option>
                                    <option value="8">
                                        追号停止
                                    </option>
                                    <option value="9">
                                        误存提出
                                    </option>
                                    <option value="11">
                                        人工存入
                                    </option>
                                    <option value="12">
                                        其他优惠
                                    </option>
                                    <option value="17">
                                        投注撤单
                                    </option>
                                    <option value="30">
                                        代理明细
                                    </option>
                                    <option value="666">
                                        打赏扣款
                                    </option>
                                </select>
                            </div>
                            <em ></em>
                        </ins>
                    </li>
                    <!---->
                    <!---->
                    <li class="_time">
                        <span >时间：
                            <a class="userSearch time active">今天</a>
                            <a class="userSearch time ">昨天</a>
                            <a class="userSearch time ">七天</a>
                        </span>
                    </li>
                    <li class="_state">
                        <span >状态：
                            <a class="userSearch time active">账户明细</a>
                            <a class="userSearch time ">充值记录</a>
                            <a class="userSearch time ">提现记录</a>
                        </span>
                    </li>
                </ul>
                <div  class="searchDetail">
                    <table >
                        <tbody >
                            <tr >
                                <th >账号</th>
                                <th  colspan="1">时间</th>
                                <th >摘要</th>
                                <th >收入金额</th>
                                <th >支出金额</th>
                                <th >可用余额</th>
                                <th >备注</th>
                            </tr>
                        </tbody>
                        <tbody  class="Records_listCont">
                            <tr  style="border-bottom: 0px;">
                                <td  colspan="100">
                                    <div  class="notContent" style="padding: 100px 0px;">
                                        <i  class="iconfont"></i>暂无记录</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!---->
                    <!---->
                </div>
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
                <div  class="userTip mgt15">
                    <p >
                        <i ></i>温馨提示：交易明细最多只保留7天。
                    </p>
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
