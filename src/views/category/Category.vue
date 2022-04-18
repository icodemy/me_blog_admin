<template>
  <div class="container">

    <el-container>
      <el-aside width="480px">
        <!--  左边添加分类-->
        <el-card class="left-card">
          <div slot="header">
            <span>{{isAdd ? '添加' : '更新'}}分类</span>
          </div>
          <div>
            <el-form label-position="top" :model="formContent" :rules="rules" ref="categoryForm">
              <el-form-item label="分类名称：" prop="name">
                <el-input v-model="formContent.name"></el-input>
              </el-form-item>
              <el-form-item label="分类描述：" prop="description">
                <el-input type="textarea" rows="4" v-model="formContent.description"></el-input>
              </el-form-item>
            </el-form>

            <el-button type="primary" size="medium" @click="submitForm('categoryForm')">{{isAdd ? '添 加' : '更 新'}}</el-button>
            <el-button v-show="!isAdd" size="medium" @click="resetForm('categoryForm')">返回添加</el-button>

          </div>
        </el-card>
      </el-aside>

      <el-main style="padding: 0">
        <!--  右边分类列表-->
        <el-card class="right-card">
          <div slot="header">
            <span>分类列表</span>
          </div>
          <div>
            <el-table
                :header-cell-style="{'text-align':'center'}"
                :data="categoryList"
                style="width: 100%">
              <el-table-column
                  align="center"
                  label="名称"
                  width="140">
                <template slot-scope="scope">
                  {{ scope.row.name }}
                </template>
              </el-table-column>

              <el-table-column
                  align="center"
                  label="描述"
                  width="220">
                <template slot-scope="scope">
                  {{ scope.row.description }}
                </template>
              </el-table-column>

              <el-table-column
                  align="center"
                  label="文章数"
                  width="110">
                <template slot-scope="scope">
                  <el-tag size="medium">{{ scope.row.count }}</el-tag>

                </template>
              </el-table-column>

              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button
                      size="mini"
                      @click="handleEdit(scope.$index, scope.row)">编辑
                  </el-button>
                  <el-button
                      size="mini"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除
                  </el-button>
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
import {addCategory, deleteCategory, getCategoryList, updateCategory} from "../../api/category/category";
import {logout} from "../../api/login/login";
import router from "../../router";

export default {
  name: "Category",
  data() {
    return {
      isAdd:true,
      formContent: {
        categoryId: null,
        name: '',
        description: '',
      },
      rules: {
        name: [
          {required: true, message: '请输入分类名称', trigger: 'blur'},
          {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
        ],
        description: [
          {required: true, message: '请输入分类描述', trigger: 'blur'}
        ],
      },

      categoryList:{}


    }
  },
  created() {
    this.getCategoryList();
  },
  methods: {
    // 添加或更新分类
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        //表单验证通过
        if (valid) {
          // 添加
          if (this.formContent.categoryId == null) {
            addCategory(this.formContent).then(res => {
              if (res) {
                this.formContent.categoryId = null
                this.formContent.name = ''
                this.formContent.description = ''
                this.getCategoryList()
              }
            })
          }else{
            //更新
            updateCategory(this.formContent).then(res=>{
              if (res) {
                this.formContent.categoryId = null
                this.formContent.name = ''
                this.formContent.description = ''
                this.getCategoryList()
              }
            })
          }


        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 返回添加
    resetForm(formName) {
      this.isAdd = true
      this.$refs[formName].resetFields();
    },

    // 获取分类列表
    getCategoryList() {
      // console.log('getCategoryList')
      getCategoryList().then(res=>{
        if(res){
          this.categoryList = res.data.data
        }
      })
    },

    //编辑
    handleEdit(index, row) {
      this.isAdd = false
      this.formContent.categoryId = row.categoryId
      this.formContent.name = row.name
      this.formContent.description = row.description
    },
    // 删除
    handleDelete(index, row) {

      this.$confirm('您将要删除分类【'+ row.name +'】, 是否继续?', '提示', {
        confirmButtonText: '继续',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteCategory(row.categoryId).then(res=>{
          if(res){
            this.getCategoryList()
          }
        })
      }).catch(() => {

      });
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 15px;
  margin-left: 15px;
}

.left-card {
  width: 460px;
}

.right-card {
  width: 660px;
}



</style>