<template>
  <div id="app">
    <el-menu :default-active="$route.name" class="el-menu-demo" mode="horizontal" router>
  <el-menu-item index="game" route="/">Тывызыкты тывар</el-menu-item>
  <el-menu-item index="rezult" route="/rez">Оюннун туннели</el-menu-item>
  
</el-menu>
    <router-view></router-view>    
 
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
