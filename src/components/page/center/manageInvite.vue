<template>
    <div>
        <div class="userRight">
            <div class="userTitle mgb10">下级开户</div>
            <div class="userMain openAgent">
                <div class="newTab">
                    <a href="/manageInvite" class="curr router-link-exact-active curr">下级开户</a>
                    <a href="/manageIcode" class="">邀请码管理</a>
                </div>
                <div data-id="1" data-title="" class="TabLi">
                    <ul class="searchFirst">
                        <li>
                            <span>开户类型：</span>
                            <a href="javascript:;" class="userSearch active">代理</a>
                            <a href="javascript:;" class="userSearch">玩家</a> <br> 返点设置：请先为下级设置返点。
                            <a class="rebateDesLink">点击查看返点赔率表</a>
                        </li>
                    </ul>
                    <div id="NextOpen" class="bonusTable">
                        <ul>
                            <li>时时彩</li>
                            <li><input type="number" name="SSC" tag="时时彩返点" placeholder="" min="0.0" step="0.1" max="8.0" class="userInput mgl20">&nbsp;
                                <span>（自身返点8.0，可为下级设置返点范围0.0-8.0）</span>
                            </li>
                        </ul>
                        <ul>
                            <li>快3</li>
                            <li><input type="number" name="K3" tag="快3返点" placeholder="" min="0.0" step="0.1" max="8.4" class="userInput mgl20">&nbsp;
                                <span>（自身返点8.4，可为下级设置返点范围0.0-8.4）</span>
                            </li>
                        </ul>
                        <ul>
                            <li>11选5</li>
                            <li><input type="number" name="SYX5" tag="11选5返点" placeholder="" min="0.0" step="0.1" max="7.4" class="userInput mgl20">&nbsp;
                                <span>（自身返点7.4，可为下级设置返点范围0.0-7.4）</span>
                            </li>
                        </ul>
                        <ul>
                            <li>福彩3D</li>
                            <li><input type="number" name="FC3D" tag="福彩3D返点" placeholder="" min="0.0" step="0.1" max="7.4" class="userInput mgl20">&nbsp;
                                <span>（自身返点7.4，可为下级设置返点范围0.0-7.4）</span>
                            </li>
                        </ul>
                        <ul>
                            <li>排列3</li>
                            <li><input type="number" name="PL35" tag="排列3返点" placeholder="" min="0.0" step="0.1" max="7.4" class="userInput mgl20">&nbsp;
                                <span>（自身返点7.4，可为下级设置返点范围0.0-7.4）</span>
                            </li>
                        </ul>
                        <ul>
                            <li>北京快乐8</li>
                            <li><input type="number" name="KL8" tag="北京快乐8返点" placeholder="" min="0.0" step="0.1" max="7.4" class="userInput mgl20">&nbsp;
                                <span>（自身返点7.4，可为下级设置返点范围0.0-7.4）</span>
                            </li>
                        </ul>
                        <ul>
                            <li>PK10</li>
                            <li><input type="number" name="PK10" tag="PK10返点" placeholder="" min="0.0" step="0.1" max="8.0" class="userInput mgl20">&nbsp;
                                <span>（自身返点8.0，可为下级设置返点范围0.0-8.0）</span>
                            </li>
                        </ul>
                        <ul>
                            <li>六合彩</li>
                            <li><input type="number" name="6HC" tag="六合彩返点" placeholder="" min="0.0" step="0.1" max="10.0" class="userInput mgl20">&nbsp;
                                <span>（自身返点10.0，可为下级设置返点范围0.0-10.0）</span>
                            </li>
                        </ul>
                    </div>
                    <a class="submitBtn">生成邀请码</a>
                    <div class="userTip mg30">
                        <p>※ 温馨提示：
                            <br> 1、不同的返点赔率不同，返点越高赔率越高。
                            <br> 2、代理可获得的佣金等于代理自身返点与下级返点的差值，如代理自身返点6，下级返点4，代理可获得下级投注金额的2%，即下级下注100元，代理可获得2元。
                            <br> 3、下级返点值设得越低，下级的赔率就越低，建议给下级设置的返点不要过低。
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
