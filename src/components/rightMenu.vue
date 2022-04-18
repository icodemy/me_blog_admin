<template>
  <div class="right-menu">
    <el-tooltip class="item" effect="dark" content="跳转到博客主页" placement="left">
      <a href="https://www.icodeme.cn" target="_blank" class="to-front el-icon-s-promotion" />
    </el-tooltip>
    <el-dropdown class="avatar-container" trigger="hover">
      <div class="avatar-wrapper">
        <el-avatar :size="32" :src="user.avatar" fit="contain" />
        <span class="name">{{ user.name }}</span>
        <i class="el-icon-caret-bottom" />
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link :to="{name: '用户管理'}">
          <el-dropdown-item icon="el-icon-user">
            个人中心
          </el-dropdown-item>
        </router-link>

        <el-dropdown-item divided icon="el-icon-switch-button" @click.native="logout">
          退出登录
        </el-dropdown-item>

      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import {logout} from "../api/login/login";
import router from "../router";

export default {
  name: "rightMenu",
  data() {
    return {
      user:{
        name:JSON.parse(localStorage.getItem('user')).username,
        avatar:JSON.parse(localStorage.getItem('user')).avatar
      }
    }
  },
  methods:{
    logout(){
      this.$confirm('您将要注销登录, 是否继续?', '提示', {
        confirmButtonText: '继续',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        logout().then(res=>{
          if(res){
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            router.replace('/')
          }
        })
      }).catch(() => {

      });
    }
  }
}
</script>

<style scoped>
/*===================header=======================*/
.right-menu {
  float: right;
  height: 100%;
  line-height: 60px;
}
.right-menu:focus {
  outline: none;
}
.right-menu .to-front {
  text-decoration: none;
  position: relative;
  top: -8px;
  margin-right: 24px;
  font-size: 20px;
  transition: all 0.3s;
  color: #888;
}
.right-menu .to-front:hover {
  color: #409EFF;
}
.right-menu .right-menu-item {
  display: inline-block;
  padding: 0 8px;
  height: 100%;
  font-size: 18px;
  color: #5a5e66;
  vertical-align: text-bottom;
}
.right-menu .right-menu-item.hover-effect {
  cursor: pointer;
  transition: background 0.3s;
}
.right-menu .right-menu-item.hover-effect:hover {
  background: rgba(0, 0, 0, 0.025);
}
.right-menu .avatar-container {
  margin-right: 30px;
}
.right-menu .avatar-container .avatar-wrapper {
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-items: center;
}
.right-menu .avatar-container .avatar-wrapper:hover .el-icon-caret-bottom {
  transform: rotate(180deg);
}
.right-menu .avatar-container .avatar-wrapper .name {
  margin: 0 5px 0 10px;
}
.right-menu .avatar-container .avatar-wrapper .el-icon-caret-bottom {
  transition: all 0.7s;
  font-size: 14px;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}

</style>