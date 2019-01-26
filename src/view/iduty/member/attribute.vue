<template>
    <div class="attribute">
        <h4>订单属性</h4>
        <div class="attr">
            <h6>已有属性：</h6>
            <h6>
                新增属性：
                <el-input placeholder="请输入来源名称"></el-input>
                <el-button type="warning">确认</el-button>
            </h6>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
    .attribute{
        background:#fff;
        h4{
            font-size: 16px;
            line-height: 50px;
            font-weight: 400;
            text-indent: 10px;
            border-bottom: 1px solid #ccc;
        }
        .attr{
            padding: 15px;
            h6{
                font-size:12px;
                font-weight: 400;
                padding: 10px;
                .el-input{
                    width:200px;
                }
            }
        }
    }
</style>
