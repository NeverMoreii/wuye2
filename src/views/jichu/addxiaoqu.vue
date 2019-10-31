<template>
    <div class="addxiaoqu">
        <div>
            <span>小区名称：</span>
            <el-input style="width:400px"
                placeholder="请输入内容"
                v-model="name"
                clearable>
            </el-input>
        </div>
        <div style="margin-top:30px">
            <span>楼栋数：</span>
            <el-input style="width:120px"
                placeholder="请输入内容"
                v-model="buildnum"
                clearable>
            </el-input>
            <span>单元数：</span>
            <el-input style="width:120px"
                placeholder="请输入内容"
                v-model="danyuan"
                clearable>
            </el-input>
            <span>户数：</span>
            <el-input style="width:120px"
                placeholder="请输入内容"
                v-model="hu"
                clearable>
            </el-input>                        
        </div>        
    </div>
</template>
<script>
export default {
    data(){
        return{
            name: '',//小区名
            buildnum:'',//楼栋数
            danyuan:'',//楼栋数
            hu:'',//楼栋数
            buildnum:'',//楼栋数
            buildnum:'',//楼栋数
            buildnum:'',//楼栋数
            
        }
    }
}
</script>
<style scoped lang="scss">
    .addxiaoqu{
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
    }
</style>