<template>
    <div>
        <div data-v-15c4658c="" class="userRight">
            <div data-v-15c4658c="" class="userTitle mgb10">投注明细</div>
            <div data-v-15c4658c="" class="userMain mgb10">
                <ul data-v-15c4658c="" class="todayView mgb10" style="text-align: left;">
                    <em data-v-15c4658c="">账号：</em> <input data-v-15c4658c="" type="text" placeholder="下级投注查询" class="userInput">&nbsp;
                    <a data-v-15c4658c="" class="submitBtn">搜索</a>
                </ul>
                <ul data-v-15c4658c="" class="searchFirst">
                    <li>
                        <span>彩种：</span>
                        <ins class="selectIcon">
                            <div class="title">全部彩票
                                <select class="userSelect">
                                    <option value="-1">全部彩票</option>
                                    <option value="1000">
                                        重庆时时彩
                                    </option>
                                    <option value="1001">
                                        新疆时时彩
                                    </option>
                                    <option value="1003">
                                        天津时时彩
                                    </option>
                                    <option value="1008">
                                        大发时时彩
                                    </option>
                                    <option value="1100">
                                        广东11选5
                                    </option>
                                    <option value="1101">
                                        上海11选5
                                    </option>
                                    <option value="1102">
                                        山东11选5
                                    </option>
                                    <option value="1103">
                                        江西11选5
                                    </option>
                                    <option value="1201">
                                        福彩3D
                                    </option>
                                    <option value="1202">
                                        排列3
                                    </option>
                                    <option value="1300">
                                        大发六合彩
                                    </option>
                                    <option value="1301">
                                        香港六合彩
                                    </option>
                                    <option value="1302">
                                        北京快乐8
                                    </option>
                                    <option value="1303">
                                        北京PK10
                                    </option>
                                    <option value="1304">
                                        大发PK10
                                    </option>
                                    <option value="1401">
                                        江苏快3
                                    </option>
                                    <option value="1402">
                                        安徽快3
                                    </option>
                                    <option value="1403">
                                        广西快3
                                    </option>
                                    <option value="1404">
                                        吉林快3
                                    </option>
                                    <option value="1405">
                                        湖北快3
                                    </option>
                                    <option value="1406">
                                        北京快3
                                    </option>
                                    <option value="1407">
                                        大发快3
                                    </option>
                                    <option value="1408">
                                        河北快3
                                    </option>
                                    <option value="1409">
                                        贵州快3
                                    </option>
                                    <option value="1410">
                                        上海快3
                                    </option>
                                    <option value="1411">
                                        甘肃快3
                                    </option>
                                    <option value="0101">
                                        UU快三
                                    </option>
                                </select>
                            </div>
                            <em></em>
                        </ins>
                    </li>
                    <li class="_time">
                        <span>时间：
                            <a class="userSearch time active">今天</a>
                            <a class="userSearch time ">昨天</a>
                            <a class="userSearch time ">七天</a>
                        </span>
                    </li>
                    <li class="_state">
                        <span>类型：
                            <a class="userSearch time active">全部</a>
                            <a class="userSearch time ">已中奖</a>
                            <a class="userSearch time ">未中奖</a>
                            <a class="userSearch time ">等待开奖</a>
                        </span>
                    </li>
                </ul>
                <div data-v-15c4658c="" class="searchDetail">
                    <table data-v-15c4658c="">
                        <tbody data-v-15c4658c="">
                            <tr data-v-15c4658c="">
                                <th data-v-15c4658c="">账号</th>
                                <th data-v-15c4658c="" colspan="1">彩种</th>
                                <th data-v-15c4658c="">期号</th>
                                <th data-v-15c4658c="">投注内容</th>
                                <th data-v-15c4658c="">投注金额</th>
                                <th data-v-15c4658c="">开奖号码</th>
                                <th data-v-15c4658c="">奖金状态</th>
                                <th data-v-15c4658c="">投注时间</th>
                                <th data-v-15c4658c="">操作项</th>
                            </tr>
                        </tbody>
                        <tbody data-v-15c4658c="" class="Records_listCont">
                            <tr data-v-15c4658c="" style="border-bottom: 0px;">
                                <td data-v-15c4658c="" colspan="100">
                                    <div data-v-15c4658c="" class="notContent" style="padding: 100px 0px;">
                                        <i data-v-15c4658c="" class="iconfont"></i>暂无记录</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div data-v-15c4658c="" class="page">
                    <p data-v-15c4658c="">共
                        <em data-v-15c4658c="">0</em>条记录</p>
                    <div data-v-15c4658c="" id="pageNav" class="pageNav">
                        <div data-v-15c4658c="" id="pageNav" class="pageNav">
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
                <div data-v-15c4658c="" class="userTip mgt15">
                    <p data-v-15c4658c="">
                        <i data-v-15c4658c=""></i>温馨提示：投注明细最多只保留7天。
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
