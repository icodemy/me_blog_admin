<template>
<div class="home-container">
  <el-container>
    <el-header>
      <right-menu></right-menu>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <sideBar></sideBar>
      </el-aside>

      <el-main>
        <transition name="fade-transform" mode="out-in">
          <router-view class="homeRouterView"/>
        </transition>

      </el-main>

    </el-container>

  </el-container>
</div>
</template>

<script>
import sideBar from "../../components/sideBar";
import rightMenu from "../../components/rightMenu";
export default {
  name: "Home",
  components: {sideBar,rightMenu},

  data() {
    return {

    }
  },
  methods: {

  }

}
</script>

<style scoped>
.home-container{
  width: 100%;
  height: 100%;
}
/*===============布局start=====================*/
.el-header{
  background-color: #fff;
  position: relative;
  width: 100%;
  height: 60px;
  box-shadow: 0 3px 4px rgb(0 21 41 / 8%);
}

.el-aside{
  background-color: #304156;
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  overflow: hidden;
}


.el-main{
  padding: 15px;
  /*background-color: aqua;*/
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
  min-height: calc(100vh - 60px);
}

/*==================布局end===================*/

</style>