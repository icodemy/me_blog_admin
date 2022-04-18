<template>
<!--  侧边导航栏-->
  <el-scrollbar style="height: 100%" wrap-style="overflow-x:hidden;">
    <el-menu
        router
        default-active="/dashboard"

        background-color="#304156"
        text-color="#fff"
        active-text-color="#47a1ff">
      <el-menu-item index="/dashboard">
        <i class="el-icon-pie-chart"></i>
        <span slot="title">仪表盘</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>文章</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/article/manage"><i class="el-icon-s-data"></i>博客管理</el-menu-item>
          <el-menu-item index="/article/write"><i class="el-icon-edit"></i>编写博客</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="/category">
        <i class="el-icon-menu"></i>
        <span slot="title">分类</span>
      </el-menu-item>

      <el-menu-item index="/tag">
        <i class="el-icon-collection-tag"></i>
        <span slot="title">标签</span>
      </el-menu-item>

      <el-menu-item index="/comment">
        <i class="el-icon-chat-line-round"></i>
        <span slot="title">评论</span>
      </el-menu-item>

      <el-menu-item index="/link">
        <i class="el-icon-share"></i>
        <span slot="title">友链</span>
      </el-menu-item>


      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/settings/account"><i class="el-icon-s-custom"></i>用户管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  name: "sideBar"
}
</script>

<style scoped>

</style>