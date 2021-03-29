<template>
  <div class="da-index">
    <div class="content">
      <Dialog v-if="show"></Dialog>
      <div v-else>
        <el-row>
          <el-col :span="8" v-for="(o, index) in 50" :key="o">
            <el-card :body-style="{ padding: '0px' }">
              <!--          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">-->
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>
<script>
  import Dialog from "../../components/Dialog";
  export default {
      components: {Dialog},
      data() {
        return {
          currentDate: new Date(),
          show:true,
        };
    }
  }
</script>

<style scoped lang="scss">
    .da-index{
        display: flex;
        justify-content:center;
        /*background-color: #66a9a3;*/
        .content{

        }
    }
</style>

