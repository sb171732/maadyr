<template>
  <div class="home">
      <h2>Ойнакчыларнын данзызы</h2>

      <table class="w3-table w3-striped">
           <tr>
              <th>Фамилиязы</th>
              <th>Ады</th>
              <th>Частырыглары</th>
           </tr>
           <tr v-for="u in users" :key="u.id">
              <td>{{ u.fname }}</td>
              <td>{{ u.lname }}</td>
              <td>{{ u.defeat }}</td>
           </tr>
      </table>


      <el-row :gutter="10">
  <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="1" class="w3-border" style="height: 50px;">
  </el-col>
  <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="1" class="w3-border " style="height: 50px;">
  </el-col>
  <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="1" class="w3-border " style="height: 50px;">
  </el-col>
  <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="1" class="w3-border" style="height: 50px;">
  </el-col>
 
  </el-row>

  </div>
</template>

<script>
import {store} from '../store'
// @ is an alias to /src
export default {
  name: 'HomeView',
  computed:{
    users(){
      return store.state.users
    }
  }
}
</script>
<style>
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    margin-bottom: 10px;
  }
</style>