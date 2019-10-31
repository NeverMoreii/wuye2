<template>
    <div class="xiaoqu">
        <topnews>
            <h3 slot="topnewstit">小区详情</h3>
            <div slot="top3"> 创建人：经办员A</div>
            <div slot="top4"> 创建日期：2019-10-10</div>
            <div slot="top5"> 创建时间：10:01:01</div>
            <div slot="top6"> 上次变更日期：2019-10-11</div>
            <div slot="top7"> 上次变更时间：15:03:10</div>
            <div slot="top8"> 备注信息：本小区基础描述信息展示</div>
        </topnews>
       <template  class="xiqoqutop2">
            <el-tabs v-model="activeName3" @tab-click="handleClick" >
                <el-tab-pane label="本月缴费" name="benyue">
                    <div>本月缴费笔数 3000 16 本月实缴金额¥ 2,000,000.00</div>
                </el-tab-pane>
                <el-tab-pane label="上月缴费" name="shangyue">
                    <div>上月缴费笔数 3000 16 本月实缴金额¥ 2,000,000.00</div>                
                </el-tab-pane>
                <el-tab-pane label="业主查询" name="yezhu">
                    <div>业主缴费笔数 3000 16 本月实缴金额¥ 2,000,000.00</div>                
                </el-tab-pane>            
            </el-tabs>
        </template>                 
        <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="详情" name="xiangqing">
                <div class="xiangqing">
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
                </div>
            </el-tab-pane>
            <el-tab-pane label="历史" name="lishi">
                <div class="lishi">
                    lishi
                </div>                
            </el-tab-pane>
        </el-tabs>
        </template>        
    </div>    
</template>
<script>
import topnews from '@/components/public/topnews'
export default {
    components:{
      topnews,
    } , 
    data(){
        return{
            activeName: 'second' ,//选项卡
            activeName3: 'three' //选项卡
        }
    } ,
    methods:{
        handleClick(tab, event) {
             console.log(tab, event);
      }
    }  
}
</script>
<style scoped lang="scss">
    .xiaoqu{
        margin: 20px;
        overflow: hidden;
        .el-tabs{
            margin-top: 20px; 
            div{
                line-height: 50px;
                color: #616161;
                font-size: 16px;
                margin-left: 20px;
                }
        }
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
    }
</style>