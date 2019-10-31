<template>
    <div class="changexiaoqu">
        <span>小区名称：</span>
        <el-input style="width:400px"
            placeholder="请输入内容"
            v-model="input10"
            clearable>
        </el-input>
        <div></div>
        <span>小区备注：</span>
        <el-input style="width:400px;margin-top: 50px"
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
        </el-input> 
        <div class="save">
          <el-button type="primary">保存</el-button> 
        </div>
      
    </div>
</template>
<script>
export default {
    data() {
      return {
        input10: '',//输入框
        textarea: ''//输入框
      } 
    }     
}
</script>
<style scoped lang="scss">
    .changexiaoqu{
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
       .save{
           margin-top: 30px;
           margin-left: 80px;
       }
    }
        
</style>