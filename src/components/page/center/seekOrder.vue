<template>
    <div>
        <div  class="userRight">
            <div  class="userTitle mgb10">追号记录</div>
            <div  class="userMain mgb10">
                <ul   class="searchFirst">
                    <li >
                        <span >彩种：</span>
                        <ins  class="selectIcon">
                            <div  class="title">全部彩票
                                <select  class="userSelect">
                                    <option  value="-1">全部彩票</option>
                                    <option  value="1000">
                                        重庆时时彩
                                    </option>
                                    <option  value="1001">
                                        新疆时时彩
                                    </option>
                                    <option  value="1003">
                                        天津时时彩
                                    </option>
                                    <option  value="1008">
                                        大发时时彩
                                    </option>
                                    <option  value="1100">
                                        广东11选5
                                    </option>
                                    <option  value="1101">
                                        上海11选5
                                    </option>
                                    <option  value="1102">
                                        山东11选5
                                    </option>
                                    <option  value="1103">
                                        江西11选5
                                    </option>
                                    <option  value="1201">
                                        福彩3D
                                    </option>
                                    <option  value="1202">
                                        排列3
                                    </option>
                                    <option  value="1300">
                                        大发六合彩
                                    </option>
                                    <option  value="1301">
                                        香港六合彩
                                    </option>
                                    <option  value="1302">
                                        北京快乐8
                                    </option>
                                    <option  value="1303">
                                        北京PK10
                                    </option>
                                    <option  value="1304">
                                        大发PK10
                                    </option>
                                    <option  value="1401">
                                        江苏快3
                                    </option>
                                    <option  value="1402">
                                        安徽快3
                                    </option>
                                    <option  value="1403">
                                        广西快3
                                    </option>
                                    <option  value="1404">
                                        吉林快3
                                    </option>
                                    <option  value="1405">
                                        湖北快3
                                    </option>
                                    <option  value="1406">
                                        北京快3
                                    </option>
                                    <option  value="1407">
                                        大发快3
                                    </option>
                                    <option  value="1408">
                                        河北快3
                                    </option>
                                    <option  value="1409">
                                        贵州快3
                                    </option>
                                    <option  value="1410">
                                        上海快3
                                    </option>
                                    <option  value="1411">
                                        甘肃快3
                                    </option>
                                    <option  value="0101">
                                        UU快三
                                    </option>
                                </select>
                            </div>
                            <em ></em>
                        </ins>
                    </li>
                    <li  class="_time">
                        <span >时间：
                            <a  class="userSearch time active">今天</a>
                            <a  class="userSearch time ">昨天</a>
                            <a  class="userSearch time ">七天</a>
                        </span>
                    </li>
                    <li  class="_state">
                        <span >类型：
                            <a  class="userSearch time active">全部</a>
                            <a  class="userSearch time ">未开始</a>
                            <a  class="userSearch time ">已开始</a>
                            <a  class="userSearch time ">已结束</a>
                        </span>
                    </li>
                </ul>
                <div  class="searchDetail">
                    <table >
                        <tbody >
                            <tr >
                                <th  colspan="1">流水号</th>
                                <th >彩种</th>
                                <th >起始期号</th>
                                <th >已追/总期数</th>
                                <th >已投/总金额</th>
                                <th >奖金状态</th>
                                <th >追号时间</th>
                                <th >操作项</th>
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
                <div  class="userTip">
                    <p >
                        <i ></i>温馨提示：追号记录最多只保留7天。
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
