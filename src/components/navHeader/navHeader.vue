<template>
    <div class="navHeader">
        <div class="navLeft">
            <img src="@/common/img/logo.png" alt="">
            <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#000"
                active-text-color="#ffd04b"
            >
                <el-submenu index="1">
                    <template slot="title">场景接入</template>
                    <el-menu-item index="1-1">系统首页</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">股转秒杀</template>
                    <el-menu-item index="2-1">系统首页</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">产品中心</template>
                    <el-menu-item index="3-1">产品中心</el-menu-item>
                    <el-menu-item index="3-2">beehive</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">微商城</template>
                    <el-menu-item index="4-1">控制台</el-menu-item>
                    <el-menu-item index="4-2">服务列表</el-menu-item>
                    <el-menu-item index="4-3">订单中心</el-menu-item>
                    <el-menu-item index="4-4">客户列表</el-menu-item>
                    <el-menu-item index="4-5">财务中心</el-menu-item>
                    <el-menu-item index="4-6">业务员信息</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">业务系统</template>
                    <el-menu-item index="5-1">iDuty</el-menu-item>
                    <el-menu-item index="5-2">服务列表</el-menu-item>
                    <el-menu-item index="5-3">全岗位线索接入</el-menu-item>
                    <el-menu-item index="5-4">CRM</el-menu-item>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">其它</template>
                    <el-submenu index="6-1">
                        <template slot="title">异业联盟</template>
                        <el-menu-item index="6-1-1">场景接入</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6-2">
                        <template slot="title">工具箱</template>
                        <el-menu-item index="6-2-1">售前问卷</el-menu-item>
                        <el-menu-item index="6-2-2">著作权查询</el-menu-item>
                        <el-menu-item index="6-2-3">查公司</el-menu-item>
                        <el-menu-item index="6-2-4">蜂擎名片夹</el-menu-item>
                        <el-menu-item index="6-2-5">商标查询</el-menu-item>
                        <el-menu-item index="6-2-6">专利查询</el-menu-item>
                        <el-menu-item index="6-2-7">自助核名</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6-3">
                        <template slot="title">电商</template>
                        <el-menu-item index="6-3-1">蜂擎商城</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6-4">
                        <template slot="title">供求市场</template>
                        <el-menu-item index="6-4-1">交易大厅</el-menu-item>
                        <el-menu-item index="6-4-2">我发布的</el-menu-item>
                        <el-menu-item index="6-4-3">收藏夹</el-menu-item>
                        <el-menu-item index="6-4-4">浏览历史</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
            <img src="@/common/img/应用市场.png" alt="">
        </div>
        <div class="navRight">
            <div class="information">
                <img src="@/common/img/pd转world.png" alt="">
                <img src="@/common/img/营业执照识别.png" alt="">
                <img src="@/common/img/身份证识别.png" alt="">
            </div>
            <div class="certification">
                <img src="@/common/img/去认证.png" alt="">
                <span>去认证</span>
            </div>
            <div class="personal">
                <img src="@/common/img/个人.png" alt="">
                 <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        18801109878<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>应用市场</el-dropdown-item>
                        <el-dropdown-item>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
    .navHeader{
        width:100%;
        height:60px;
        flex-shrink: 0;
        display:flex;
        justify-content: space-between;
        align-items: center;
        background: #000;
        .navLeft{
            display:flex;
            align-items: center;
            justify-content: space-between;
            img{
                display:inline-block;
                margin-left:15px;
                margin-right:20px;
            }
            .el-menu{
                border-bottom:0;
                .el-submenu__title{
                    color:#b8b8b8;
                    .el-icon-arrow-down{
                        color:#b8b8b8;
                    }
                }
                .el-submenu{
                    margin:0 -10px;
                }
            }
        }
        .navRight{
            flex: 1;
            height:100%;
            display:flex;
            align-items: center;
            img{
                width:20px;
                margin: 0 5px;
                cursor:pointer;
            }
            .information{
                padding: 0 5px;
                border-left: 1px solid #ccc;
                border-right: 1px solid #ccc;
            }
            .certification{
                display:flex;
                align-items: center;
                padding: 0 5px;
                border-right: 1px solid #ccc;
                cursor:pointer;
                span{
                    color:#fff;
                    padding-right: 5px;
                    font-size: 14px;
                }
            }
            .personal{
                display:flex;
                align-items: center;
                padding: 0 5px;
                cursor:pointer;
                span, i{
                    font-size: 14px;
                    color:#fff;
                }
            }
        }
    }
</style>
