<template>
    <div>
        <div class="Global">
            <h4>全局数据</h4>
            <ul>
                <li>
                    <img src="@/common/img/全部订单.png" alt="">
                    <div>
                        <h2>39</h2>
                        <span>全部订单</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/已经完成订单.png" alt="">
                    <div>
                        <h2>6</h2>
                        <span>已经完成订单</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/超期订单.png" alt="">
                    <div>
                        <h2>29</h2>
                        <span>超期订单</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/进行中订单.png" alt="">
                    <div>
                        <h2>31</h2>
                        <span>进行中订单</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/全部任务.png" alt="">
                    <div>
                        <h2>39</h2>
                        <span>全部任务</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/今日任务.png" alt="">
                    <div>
                        <h2>6</h2>
                        <span>今日任务</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/超期任务.png" alt="">
                    <div>
                        <h2>29</h2>
                        <span>超期任务</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/已经完成任务.png" alt="">
                    <div>
                        <h2>31</h2>
                        <span>已经完成任务</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="MyData">
            <h4>我的数据</h4>
            <ul>
                <li>
                    <img src="@/common/img/全部订单.png" alt="">
                    <div>
                        <h2>26</h2>
                        <span>全部订单</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/已经完成订单.png" alt="">
                    <div>
                        <h2>2</h2>
                        <span>已经完成订单</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/超期订单.png" alt="">
                    <div>
                        <h2>21</h2>
                        <span>超期订单</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/进行中订单.png" alt="">
                    <div>
                        <h2>22</h2>
                        <span>进行中订单</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/全部任务.png" alt="">
                    <div>
                        <h2>14</h2>
                        <span>全部任务</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/今日任务.png" alt="">
                    <div>
                        <h2>0</h2>
                        <span>今日任务</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/超期任务.png" alt="">
                    <div>
                        <h2>11</h2>
                        <span>超期任务</span>
                    </div>
                </li>
                <li>
                    <img src="@/common/img/已经完成任务.png" alt="">
                    <div>
                        <h2>2</h2>
                        <span>已经完成任务</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
    .Global, .MyData{
        background:#fff;
        margin-bottom:10px;
    }
    .Global, .MyData{
        h4{
            padding: 15px 0;
            text-indent: 10px;
            font-size:14px;
            border-bottom:1px solid #ccc;
        }
        ul{
            display:flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding:10px;
            li{
                width:23%;
                border:1px solid #ccc;
                border-radius:10px;
                display:flex;
                align-items: center;
                padding: 20px;
                margin:10px 0;
                img{
                    width:65px;
                }
                div{
                    padding-left: 10px;
                    h2{
                        font-weight: 400;
                    }
                    span{
                        color:#999;
                        font-size:12px;
                    }
                }
            }
            li:hover{
                border-color:orange;
                cursor: pointer;
            }
        }
    }
</style>
