<template>
    <div id="xiaoqulist" class="xiaoqulist">
        <topnews>
            <h3 slot="topnewstit">小区基础信息维护</h3>
            <p slot="topnewsword">小区基础信息的导入导出及管理维护。</p>
        </topnews>
        <div class="xiaoqutop">
            <div class="topname">
                <p>我的管辖小区</p>
                <h3>10个小区</h3>
            </div>
            <div class="topname">
                <p>我的管辖小区</p>
                <h3>10个小区</h3>
            </div>
            <div class="topname">
                <p>我的管辖小区</p>
                <h3>10个小区</h3>
            </div>                        
        </div>
        <div class="anniu">
            <el-button type="primary">主要按钮</el-button>
            <el-button>默认按钮</el-button>
            <el-button>默认按钮</el-button>
            <el-button>默认按钮</el-button>
            <el-button>默认按钮</el-button>
        </div>
        <div class="xiaoqulist">
            <el-table
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                type="index"
                label="ID"
                width="60">
                </el-table-column>                
                <el-table-column
                prop="xiaoqunum"
                label="小区编号"
                width="120">
                <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
                </el-table-column>
                <el-table-column
                prop="name"
                label="小区名"
                width="150">
                </el-table-column>
                <el-table-column
                prop="buildnum"
                label="楼栋数"
                sortable
                width="90">
                </el-table-column> 
                <el-table-column
                prop="danyuannum"
                label="单元数"
                sortable
                width="100">
                </el-table-column> 
                <el-table-column
                prop="hunum"
                label="户数"
                sortable
                width="100">
                </el-table-column>
                <el-table-column
                prop="time"
                label="创建日期"
                width="120">
                </el-table-column> 
                <el-table-column
                prop="words"
                label="备注"
                width="120">
                </el-table-column> 
                <el-table-column
                width="160"
                label="基础信息"
                >
                <el-button
                    type="text"
                    size="small">
                    移除
                </el-button>
                <el-button
                    type="text"
                    size="small">
                    修改
                </el-button>
                <el-button
                    type="text"
                    size="small">
                    详细
                </el-button>                
                </el-table-column>
                <el-table-column
                width="190"
                label="关联信息维护"
                >
                 <el-button
                    type="text"
                    size="small">
                    楼栋
                </el-button>
                <el-button
                    type="text"
                    size="small">
                    单元
                </el-button>
                <el-button
                    type="text"
                    size="small">
                    门户
                </el-button>
                <el-button
                    type="text"
                    size="small">
                    业主
                </el-button>                                
                </el-table-column>                                                                                                                                                    
            </el-table>            
        </div>
        <page></page>
    </div>
</template>
<script>
import topnews from '@/components/public/topnews'
import page from '@/components/public/page'
export default {
    components:{
      topnews,page
    } ,
data() {
      return {
        tableData3: [{
          xiaoqunum:'14567654',  
          date: '2016-05-03',
          name: '中南世纪城一期项目',
          buildnum: '145',
          danyuannum:"1233",
          hunum:"12334",
          time:"2019.01.10",
          words:"一些文字备注"
        },
        {
          xiaoqunum:'14567654',  
          date: '2016-05-03',
          name: '中南世纪城一期项目',
          buildnum: '145',
          danyuannum:"1233",
          hunum:"12334",
          time:"2019.01.10",
          words:"一些文字备注"
        }, ],
        multipleSelection: [],      
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },//element选中列表
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }, //element选中列表      
    }
      
}
</script>
<style scoped lang='scss'>
    .xiaoqulist{
        margin: 20px;
        .xiaoqutop{
            border: solid 1px #d6d6d6;
            padding: 6px;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            display: flex;
            .topname{
                width: 100%;
                flex: 1;
                text-align: center;
                        p{
                            margin: 0px;
                            line-height: 34px;
                            font-size: 14px;
                            color: rgb(95, 95, 95)
                        }
            }
        }
        .anniu{
            margin-top: 20px;
        }       
    }
</style>