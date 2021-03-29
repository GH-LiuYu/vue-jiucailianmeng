<template>
  <div>
      <el-container>
          <el-header>
                  <Header></Header>
          </el-header>

              <el-main ref="homePage" class="backtop">
                  <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
                      <transition name="fade" mode="out-in">
                          <!--          想要动画生效，下面必须加key-->

                          <router-view  :key="key"></router-view>

                      </transition>
                  </vue-custom-scrollbar>
                  <el-backtop target=".scroll-area" :visibility-height=200></el-backtop>
              </el-main>
<!--          <el-footer>-->
              <Footer></Footer>
<!--          </el-footer>-->
      </el-container>
  </div>
</template>
<script>
  import Footer from "./Footer";
  import Header from "./Header";
  import vueCustomScrollbar from 'vue-custom-scrollbar'
  import "vue-custom-scrollbar/dist/vueScrollbar.css"
  export default {
    name: "Main",
    components: {Footer,Header,vueCustomScrollbar},
    data() {
      return {
        isCollapse: false, //导航栏默认为展开
        toggle: false, //第二个图标默认隐藏
        block: true, //默认显示第一个图标

        clientHeight:'',
          settings: {
              suppressScrollY: false,
              suppressScrollX: false,
              wheelPropagation: false
          },
      };
    },
    mounted(){
      // 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
    },
    computed: {
      key() {
        return this.$route.fullPath;
      },
    },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      },
    },
    methods: {
      // 动态控制展开与收起和切换对应图标
      changeFixed(clientHeight){ //动态修改样式
        this.$refs.homePage.$el.style.height = clientHeight-60+'px';
      },
        scrollHanle(evt) {
            console.log(evt)
        }
    },
  };
</script>

<style lang="scss" scoped>
  .el-header {
    color: #333;
    line-height: 60px;
    height: 100%;
    padding: 0 !important;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    text-align: center;
  }

  .el-main{
      width:100%;
      margin: auto;
      padding: 0;
  }
  .el-footer {
      background-color: #b3c0d1;
      color: #333;
      line-height: 60px;
      height: 100vh;
      padding: 0;
      text-align: center;
  }

  .fade-leave-active,
  .fade-enter-active {
    transition: all 1s;
  }

  .fade-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  .scroll-area {
      position: relative;
      margin: auto;
      width: 100%;
      height: 100%;
  }
</style>
