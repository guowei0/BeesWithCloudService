<template>
    <div class="newbuild">
        <div class="new">
            <h4>新建订单</h4>
            <h4>
                订单控制
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <el-button plain>
                            未启动
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>未启动</el-dropdown-item>
                        <el-dropdown-item>办理中</el-dropdown-item>
                        <el-dropdown-item>办结</el-dropdown-item>
                        <el-dropdown-item>延期</el-dropdown-item>
                        <el-dropdown-item>终止</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </h4>
        </div>
        <div class="newCon">
            <div class="editor">
                <div class="editorDiv">
                    <h4>订单内容</h4>
                    <p>
                        <span>订单名称：</span>
                        <el-input v-model="formInline.user" placeholder="请输入订单名称"></el-input>
                    </p>
                    <p>
                        <span>公司名称：</span>
                        <el-input v-model="formInline.user" placeholder="请输入公司名称"></el-input>
                    </p>
                    <div class="note">
                        <span>订单备注：</span>
                        <quill-editor
                            v-model="content"
                            ref="myQuillEditor"
                            :options="editorOption"
                            @blur="onEditorBlur($event)"
                            @focus="onEditorFocus($event)"
                            @change="onEditorChange($event)"
                        >
                        </quill-editor>
                    </div>
                    <div class="source">
                        <p>
                            <span>订单来源：</span>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    <el-button plain>
                                        <span style="color: #c0c4cc;">请选择来源</span>
                                        <i class="el-icon-arrow-down el-icon--right" style="color: #c0c4cc;"></i>
                                    </el-button>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item style="color: #c0c4cc;">其它</el-dropdown-item>
                                    <el-dropdown-item style="color: #c0c4cc;">网络</el-dropdown-item>
                                    <el-dropdown-item style="color: #c0c4cc;">介绍</el-dropdown-item>
                                    <el-dropdown-item style="color: #c0c4cc;">老顾客</el-dropdown-item>
                                    <el-dropdown-item style="color: #c0c4cc;">新顾客</el-dropdown-item>
                                    <el-dropdown-item style="color: #c0c4cc;">网购</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </p>
                        <p>
                            <span>订单属性：</span>
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    <el-button plain>
                                        <span style="color: #c0c4cc;">请选择属性</span>
                                        <i class="el-icon-arrow-down el-icon--right" style="color: #c0c4cc;"></i>
                                    </el-button>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item style="color: #c0c4cc;"></el-dropdown-item>
                                    <el-dropdown-item style="color: #c0c4cc;">神秘订单</el-dropdown-item>
                                    <el-dropdown-item style="color: #c0c4cc;">网上订单</el-dropdown-item>
                                    <el-dropdown-item style="color: #c0c4cc;">普通订单</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </p>
                    </div>
                </div>
                <div class="contact">
                    <h4>联系方式</h4>
                    <div class="contactInput">
                        <p>
                            <span><b>*</b>手机号：</span>
                            <el-input v-model="formInline.user" placeholder="请输入手机号"></el-input>
                        </p>
                        <p>
                            <span><b>*</b> 客户名称：</span>
                            <el-input v-model="formInline.user" placeholder="请输入客户名称"></el-input>
                        </p>
                        <p>
                            <span>邮箱地址：</span>
                            <el-input v-model="formInline.user" placeholder="请输入邮箱地址"></el-input>
                        </p>
                        <p>
                            <span>QQ号码：</span>
                            <el-input v-model="formInline.user" placeholder="请输入QQ号码"></el-input>
                        </p>
                        <p>
                            <span>微信号：</span>
                            <el-input v-model="formInline.user" placeholder="请输入微信号"></el-input>
                        </p>
                        <p>
                            <span>联系地址：</span>
                            <el-input v-model="formInline.user" placeholder="请输入联系地址"></el-input>
                        </p>
                    </div>
                </div>
                <div class="Material">
                    <h4>材料准备</h4>
                    <p>
                        <span>合同上传：</span>
                        <el-upload class="upload-demo">
                            <el-button size="small" type="primary">添加附件</el-button>
                            <span class="el-upload__tip">支持多个材料上传（doc、xls、jpge、png、pdf）</span>
                        </el-upload>
                    </p>
                    <p>
                        <span>材料上传：</span>
                        <el-upload class="upload-demo">
                            <el-button size="small" type="primary">添加附件</el-button>
                            <span class="el-upload__tip">支持多个材料上传（doc、xls、jpge、png、pdf）</span>
                        </el-upload>
                    </p>
                    <div class="MateSelect">
                        <h4>
                            关联人1：
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    <el-button plain>
                                        请选择需求类别
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </el-button>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>此次</el-dropdown-item>
                                    <el-dropdown-item>与其</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </h4>
                        <h4>
                            关联人2：
                            <el-dropdown trigger="click">
                                <span class="el-dropdown-link">
                                    <el-button plain>
                                        请选择需求类别
                                        <i class="el-icon-arrow-down el-icon--right"></i>
                                    </el-button>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>此次</el-dropdown-item>
                                    <el-dropdown-item>与其</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </h4>
                    </div>
                </div>
                <el-button type="warning">保存</el-button>
            </div>
            <div class="TimeIncome">
                <div class="time">
                    <h4>时间管理</h4>
                    <h5>
                        <span>执行时间</span>
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </h5>
                </div>
                <div class="income">
                    <h4>收入金额</h4>
                    <h5>总计：<span>0</span>元</h5>
                    <p>
                        <span>收入1：</span>
                        <el-input v-model="formInline.user" placeholder="0"></el-input>
                        <span>元</span>
                    </p>
                    <p>
                        <span>备注：</span>
                        <el-input v-model="formInline.user" placeholder="收入1备注"></el-input>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </p>
                    <p>
                        <span>收入2：</span>
                        <el-input v-model="formInline.user" placeholder="0"></el-input>
                        <span>元</span>
                    </p>
                    <p>
                        <span>备注：</span>
                        <el-input v-model="formInline.user" placeholder="收入2备注"></el-input>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </p>
                    <p>
                        <span>收入3：</span>
                        <el-input v-model="formInline.user" placeholder="0"></el-input>
                        <span>元</span>
                    </p>
                    <p>
                        <span>备注：</span>
                        <el-input v-model="formInline.user" placeholder="收入3备注"></el-input>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </p>
                    <p>
                        <span>收入4：</span>
                        <el-input v-model="formInline.user" placeholder="0"></el-input>
                        <span>元</span>
                    </p>
                    <p>
                        <span>备注：</span>
                        <el-input v-model="formInline.user" placeholder="收入4备注"></el-input>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </p>
                    <p>
                        <span>收入5：</span>
                        <el-input v-model="formInline.user" placeholder="0"></el-input>
                        <span>元</span>
                    </p>
                    <p>
                        <span>备注：</span>
                        <el-input v-model="formInline.user" placeholder="收入5备注"></el-input>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
export default {
    name: 'Newlybuild',
    data () {
        return {
            content: null,
            editorOption: {},
            formInline: {
                user: '',
                region: ''
            }
        }
    },
    components: {
        quillEditor
    },
    methods: {
        onEditorBlur () { // 失去焦点事件
        },
        onEditorFocus () { // 获得焦点事件
        },
        onEditorChange () { // 内容改变事件
        }
    }
}
</script>
<style lang="scss">
    .newbuild{
        width:100%;
        height:auto;
        .new{
            width:100%;
            font-size:14px;
            padding:10px;
            margin-bottom: 10px;
            display:flex;
            justify-content: space-between;
            align-items: center;
            background: #fff;
        }
        .newCon{
            display:flex;
            .editor{
                flex: 1;
                height:auto;
                .editorDiv{
                    height:auto;
                    margin-bottom: 10px;
                    background: #fff;
                    h4{
                        line-height: 50px;
                        text-indent: 10px;
                        font-weight: 400;
                        font-size:14px;
                        border-bottom: 1px solid #ccc;
                    }
                    p{
                        display:flex;
                        align-items: center;
                        padding:10px;
                        span{
                            font-size: 12px;
                            flex-shrink: 0;
                        }
                        .el-input{
                            width:80%;
                        }
                    }
                    .note{
                        height:200px;
                        padding:10px;
                        display:flex;
                        background: #fff;
                        span{
                            font-size: 12px;
                        }
                        .quill-editor{
                            height: 100px;
                            width:80%;
                        }
                        .ql-editor{
                            background: #fff;
                        }
                    }
                    .source{
                        display:flex;
                        p{
                            margin-right:30px;
                        }
                    }
                }
                .contact{
                    background: #fff;
                    margin-bottom: 10px;
                    h4{
                        line-height: 50px;
                        text-indent: 10px;
                        font-weight: 400;
                        font-size:14px;
                        border-bottom: 1px solid #ccc;
                    }
                    .contactInput{
                        display:flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        p{
                            width:50%;
                            font-size:12px;
                            padding:10px;
                            display:flex;
                            justify-content: space-around;
                            align-items: center;
                            span{
                                flex-shrink: 0;
                                b{
                                    color:red;
                                    padding-right: 1px;
                                }
                            }
                            .el-input{
                                width:70%;
                                .el-input__inner{
                                    height: 35px;
                                }
                            }
                            &:last-child{
                                width:100%;
                                .el-input{
                                    width:86%;
                                }
                            }
                        }
                    }
                }
                .Material{
                    background: #fff;
                    margin-bottom: 10px;
                    h4{
                        line-height: 50px;
                        text-indent: 10px;
                        font-weight: 400;
                        font-size:14px;
                        border-bottom: 1px solid #ccc;
                    }
                    p{
                        display:flex;
                        align-items: center;
                        padding: 10px;
                        span{
                            font-size: 12px;
                        }
                        .el-button--primary{
                            border:0;
                            background: #f0f0f0;
                        }
                    }
                    .MateSelect{
                        display:flex;
                        h4, span{
                            font-size:12px;
                        }
                        span, i{
                            color: #ccc;
                        }
                    }
                }
                .el-button--warning{
                    width:200px;
                    margin: 0 auto 50px;
                    display:block;
                    span{
                        color: #fff;
                    }
                }
            }
            .TimeIncome{
                width: 300px;
                margin-left: 10px;
                .time{
                    margin-bottom: 10px;
                    background: #fff;
                    h4{
                        font-size: 14px;
                        line-height: 45px;
                        text-indent: 10px;
                        background: #fff9f1;
                    }
                    h5{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px;
                        span{
                            font-weight: 400;
                        }
                        .el-input{
                            width: 150px;
                        }
                    }
                }
                .income{
                    background: #fff;
                    h4{
                        font-size: 14px;
                        line-height: 45px;
                        text-indent: 10px;
                        background: #fff9f1;
                    }
                    h5{
                        font-weight:400;
                        padding:10px;
                        span{
                            color: #fa6d28;
                            font-weight:800;
                            font-size:18px;
                        }
                    }
                    p{
                        display:flex;
                        justify-content: space-between;
                        align-items: center;
                        padding:10px;
                        font-size: 12px;
                        .el-input{
                            width: 80%;
                            .el-input__inner{
                                height: 30px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
