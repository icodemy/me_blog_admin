<template>
  <div class="container">

    <el-container>
      <el-aside width="480px">
        <!--  左边添加标签-->
        <el-card class="left-card">
          <div slot="header">
            <span>添加标签</span>
          </div>
          <div>
            <el-form label-position="top" :model="formContent">
              <el-form-item label="标签名称：">
                <el-input v-model="formContent.name"></el-input>
              </el-form-item>
            </el-form>

            <el-button type="primary" size="medium">添 加</el-button>
            <el-button size="medium">返回添加</el-button>

          </div>
        </el-card>
      </el-aside>

      <el-main style="padding: 0">
        <!--  右边标签列表-->
        <el-card class="right-card">
          <div slot="header">
            <span>标签列表</span>
          </div>
          <div>
            <el-table
                :data="tableData"
                style="width: 100%">
              <el-table-column
                  label="编号"
                  width="80">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
              </el-table-column>

              <el-table-column
                  label="名称"
                  width="180">
                <template slot-scope="scope">

                      <el-tag size="medium">{{ scope.row.name }}</el-tag>


                </template>
              </el-table-column>

              <el-table-column
                  label="文章数"
                  width="180">
                <template slot-scope="scope">

                      <el-tag size="medium">{{ scope.row.name }}</el-tag>

                </template>
              </el-table-column>

              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>

            </el-table>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Tag",
  data(){
    return{
      formContent:{
        name:'',
        desc:'',
      },
      tableData: [{
        id:1,
        name: '2016-05-02',
        articleCount: 20,
      }, {
        id:1,
        name: '2016-05-02',
        articleCount: 20,
      },{
        id:1,
        name: '2016-05-02',
        articleCount: 20,
      },{
        id:1,
        name: '2016-05-02',
        articleCount: 20,
      },{
        id:1,
        name: '2016-05-02',
        articleCount: 20,
      },]
    }
  },
  methods:{
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 15px;
  margin-left: 15px;
}

.left-card{
  width: 460px;
}
.right-card {
  width: 660px;
}
</style>