<template>
    <div>
        <div  class="userRight">
            <div  class="userTitle mgb10">个人信息</div>
            <div  class="userMain mgb10">
                <div  id="newTab" class="newTab">
                    <a  href="/center/personalInfo" class="">个人资料</a>
                    <a  href="/center/personalLevel" class="curr router-link-exact-active curr">等级头衔</a>
                </div>
                <div  class="evCall fix tapli">
                    <div  class="selectHeadImg"><img  src="//imagess-google.com/system/common/headimg/CA64E00C3F9FD5F3.jpg" width="100" height="100" alt="" class="headImg">
                        <a >修改头像</a>
                    </div>
                    <ul  class="evCallInfo">
                        <li >
                            <em >账</em>号：
                            <span >mm00333</span>
                        </li>
                        <li >
                            <em >等</em>级：
                            <span >VIP1</span>
                        </li>
                        <li >
                            <em >头</em>衔：
                            <span >农民</span>
                        </li>
                        <li >成长值：
                            <span >0</span>
                        </li>
                        <li  style="color: rgb(153, 153, 153);">每充值1元加1分</li>
                    </ul>
                    <div  class="levelBar">
                        <p  class="u-progress">
                            <span  class="pgbar" style="width: 0%;">
                                <span  class="pging"></span>
                            </span>
                        </p>
                        <em  class="point">0%</em>
                        <div  class="levelBarInfo">
                            <em >VIP1</em>
                            <p >
                                <span  style="color: rgb(241, 66, 65);">0</span>/10 距离下一级还要10分</p>
                            <i >VIP2</i>
                        </div>
                    </div>
                    <h6 >等级机制</h6>
                    <table  width="80%" id="Gradelist">
                        <tbody >
                            <tr >
                                <th >等级</th>
                                <th >头衔</th>
                                <th >成长积分</th>
                                <th >晋级奖励(元)</th>
                                <th >跳级奖励(元)</th>
                            </tr>
                            <tr >
                                <td >VIP1</td>
                                <td >农民</td>
                                <td >0</td>
                                <td >0</td>
                                <td >0</td>
                            </tr>
                            <tr >
                                <td >VIP2</td>
                                <td >地主</td>
                                <td >10</td>
                                <td >1</td>
                                <td >1</td>
                            </tr>
                            <tr >
                                <td >VIP3</td>
                                <td >知县</td>
                                <td >200</td>
                                <td >5</td>
                                <td >6</td>
                            </tr>
                            <tr >
                                <td >VIP4</td>
                                <td >通判</td>
                                <td >1000</td>
                                <td >10</td>
                                <td >16</td>
                            </tr>
                            <tr >
                                <td >VIP5</td>
                                <td >知府</td>
                                <td >10000</td>
                                <td >58</td>
                                <td >74</td>
                            </tr>
                            <tr >
                                <td >VIP6</td>
                                <td >总督</td>
                                <td >50000</td>
                                <td >318</td>
                                <td >392</td>
                            </tr>
                            <tr >
                                <td >VIP7</td>
                                <td >巡抚</td>
                                <td >250000</td>
                                <td >1688</td>
                                <td >2080</td>
                            </tr>
                            <tr >
                                <td >VIP8</td>
                                <td >丞相</td>
                                <td >1000000</td>
                                <td >6888</td>
                                <td >8968</td>
                            </tr>
                            <tr >
                                <td >VIP9</td>
                                <td >帝王</td>
                                <td >5000000</td>
                                <td >38888</td>
                                <td >47856</td>
                            </tr>
                        </tbody>
                    </table>
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
