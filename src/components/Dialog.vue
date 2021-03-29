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
        <div class="search">
          <div style="margin-top: 15px;">
            <el-input placeholder="代码：600519,GZMT,贵州茅台" v-model="input" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <el-col :span="2" v-for="(o, index) in 168" :key="o">
          <el-card :body-style="{ padding: '0px' }" style="margin: 3px;">
            <div style="padding: 0px;background-color: red;background-image:linear-gradient(90deg, #d62020,#00cca6)">
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
      input:'',
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
  .input-with-select>>>.el-input__inner{
    height: 62px!important;
  }
  .el-input-group{
    margin-top: -15px;
  }
  .search{
    width: 50%;
    height: 63px;
    position: absolute;
    /*background-color: blueviolet;*/
    top:39%;
    left:50%;
    margin-top: 2px;
    transform:translate(-50%,-50%);

  }
  .el-dialog--center .el-dialog__body{
    padding: 0;
  }
  .el-dialog__wrapper>>>.el-dialog__header{
    display:none;
  }
  .d-dialog{
    .el-row{
     margin: -27px;
      .el-card{
        -moz-box-shadow:4px 3px 4px #635858;
        -webkit-box-shadow:4px 3px 4px #635858;
        box-shadow:4px 3px 4px #635858;
    }
  }
  }
  .el-dialog__wrapper>>>el-dialog__body{
    padding: 0!important;
  }
  .el-dialog__wrapper>>>el-dialog--center .el-dialog__body{
    padding: 0!important;
  }
</style>

