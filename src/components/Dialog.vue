<template>
  <div class="d-dialog">
    <el-dialog
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
            fullscreen="true"
            center="true"
:showClose="showClo"
    >
      <el-row >
        <el-col :span="2" v-for="(o, index) in 20" :key="o">
          <el-card :body-style="{ padding: '0px' }" style="margin: 3px;">
            <div style="padding: 14px;background-color: red;background-image:linear-gradient(90deg, #d62020,#00cca6)">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true,
showClo:false,
      colorList:[
        {color:'linear-gradient(90deg, #d62020,#00cca6)',back:'green'},
        {color:'linear-gradient(90deg, #d62020,#00cca6)',back:'green'},
        {color:'linear-gradient(90deg, #d62020,#00cca6)',back:'green'},
        {color:'linear-gradient(90deg, #d62020,#00cca6)',back:'green'},
        {color:'linear-gradient(90deg, #d62020,#00cca6)',back:'green'},
        {color:'linear-gradient(90deg, #d62020,#00cca6)',back:'green'},
      ],
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
    }
  }
}
</script>

<style lang="scss" scoped>
  .dialog >>>.el-dialog__wrapper {
    /*background-color:rgba(0,0,0,0.8);*/
    /*opacity:8%;*/

  }
  .el-dialog--center .el-dialog__body{
    padding: 0;
  }
  .el-dialog__header{
    display:none!important;
    /*padding: 0!important;*/
  }
  .d-dialog{
    /*background-color: black;*/
    .el-row{
      margin: -20px;
    /*background-color:black;*/
      .el-card{
        -moz-box-shadow:4px 3px 4px #635858;
        -webkit-box-shadow:4px 3px 4px #635858;
        box-shadow:4px 3px 4px #635858;
    }
  }
  }
</style>


<!--<template>-->
<!--  <div class="popContainer">-->
<!--        <el-dialog-->
<!--                :visible.sync="dialogVisible"-->
<!--                width="30%"-->
<!--                :before-close="handleClose"-->
<!--                fullscreen="true"-->
<!--                center="true"-->
<!--        >-->
<!--          <el-row >-->
<!--            <el-col :span="2" v-for="(o, index) in 10" :key="o">-->
<!--              <el-card :body-style="{ padding: '0px' }" style="margin: 3px;">-->
<!--                <div style="padding: 14px;background-color: red;background-image:linear-gradient(90deg, #d62020,#00cca6)">-->
<!--                  <span>好吃的汉堡</span>-->
<!--                  <div class="bottom clearfix">-->
<!--                    <time class="time">{{ currentDate }}</time>-->
<!--                    <el-button type="text" class="button">操作按钮</el-button>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </el-card>-->
<!--            </el-col>-->
<!--          </el-row>-->
<!--        </el-dialog>-->
<!--  </div>-->
<!--</template>-->
<!--<style>-->
<!--  .popContainer{-->
<!--    position: fixed;-->
<!--    top: 0;-->
<!--    left: 0;-->
<!--    right: 0;-->
<!--    bottom: 0;-->
<!--    background: rgba(0,0,0,0.3);-->
<!--  }-->
<!--</style>-->
