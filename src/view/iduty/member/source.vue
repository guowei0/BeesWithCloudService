<template>
    <div class="source">
        <h4>来源管理</h4>
        <div class="sourceDiv">
            <h6>已有来源：</h6>
            <h6>
                新增来源：
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
    .source{
        background:#fff;
        h4{
            font-size: 16px;
            line-height: 50px;
            font-weight: 400;
            text-indent: 10px;
            border-bottom: 1px solid #ccc;
        }
        .sourceDiv{
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
