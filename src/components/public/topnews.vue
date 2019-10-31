<template>
    <div id="topnews" class="topnews">
        <slot name="topnewstit"></slot>
        <slot name="topnewsword"></slot>
        <slot name="top3"></slot>
        <slot name="top4"></slot>
        <slot name="top5"></slot>
        <slot name="top6"></slot>
        <slot name="top7"></slot>
        <slot name="top8"></slot>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang='scss'>
    .topnews{
        padding:20px;
        border-bottom: solid 1px #ebebeb;
        overflow: hidden;
        h3{
            line-height: 30px;
            margin: 0;
        }
        p{
            margin: 0px;
            line-height: 34px;
            font-size: 14px;
            color: rgb(95, 95, 95)
        }
        div{
            float: left;
            line-height: 34px;
            margin-left: 20px;
            width: 40%;
            color: #585858;
            font-size: 13px;
        }
    }
</style>