<template>
  <div class="dialog">
    <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
            fullscreen="false"
            center="true"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true
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

<style scoped>
  .dialog >>>.el-dialog__wrapper {
    /*background-color:rgba(0,0,0,0.8);*/
    /*opacity:8%;*/

  }
</style>
