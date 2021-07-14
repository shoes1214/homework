<template>
  <div>
    <el-button type="primary">+</el-button>

    <el-dialog
  title="对话框"
  :visible.sync="dialogVisible"
  width="30%">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="$message('这是一条消息提示')">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
name:"App",
data(){
  return{
    dialogVisible:true
  }
}
}
</script>

<style>

</style>