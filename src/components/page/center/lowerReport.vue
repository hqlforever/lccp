<template>
    <div>
        <div  class="userRight">
            <div  class="userTitle mgb10">
                下级报表
            </div>
            <div  class="userMain mgb10">
                <div  id="timeType" class="newTab">
                    <a  class="curr">今天</a>
                    <a  class="">昨天</a>
                    <a  class="">本月</a>
                    <a  class="">上个月</a>
                </div>
                <div  class="searchDetail">
                    <table  class="lowerReportTable">
                        <tbody >
                            <tr >
                                <th >账号</th>
                                <th >用户类型</th>
                                <th >投注金额</th>
                                <th >中奖金额</th>
                                <th >返点金额</th>
                                <th >活动礼金</th>
                                <th >投注人数</th>
                                <th >盈利</th>
                            </tr>
                        </tbody>
                        <tbody  class="_tableList">
                            <tr  style="border-bottom: 0px;">
                                <td  colspan="100" style="padding: 100px 0px;">
                                    <div data-v-4d6b27fc=""  class="iconLoadingCon" style="transform: scale(0.6);"><img data-v-4d6b27fc="" data-v-3bf35cfc="" src="//imagess-google.com/system/mobile/lottery/loadingMobile.gif" alt="" class="loadingImg"></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div  class="page">
                    <p >共
                        <em ></em>条记录</p>
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
