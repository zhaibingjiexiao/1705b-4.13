<template>
  <div id="app">
    <div id="nav" class=" clear">
      <h1>课程表</h1>
      <ul v-for="i in arr" class=" clear">
        <li>{{ i.xingqi }}</li>
        <li>{{ i.shangone }}</li>
        <li>{{ i.shangtwo }}</li>
        <li>{{ i.shangthree }}</li>
        <li>{{ i.shangfour }}</li>
        <li>{{ i.xiaone }}</li>
        <li>{{ i.xiatwo }}</li>
        <li>{{ i.xiathree }}</li>
        <li>{{ i.xiafour }}</li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created(){
    this.$http.get("http://localhost:3000/biao").then((e)=>this.arr=e.body)
  },
  data(){
    return {
      arr:[]
    }
  }
}
</script>
<style>
  *{
    padding:0;
    margin:0;
    text-decoration:none;
    list-style:none;
  }
  .clear:after {
    display:block;
    content:'';
    clear:both;
  }
  .clear {
    zoom:1;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav{
    width: 730px;
    margin:0 auto;
  }
  #nav h1{
    font-size: 30px;
    margin-bottom:20px;
  }
  #nav ul{
   padding:0;
   width: 729px;
   height: 40px;
   border: 1px solid #ccc;
 }
 #nav ul li{
   padding:0;
   margin:0;
   float: left;
   width: 80px;
   height: 40px;
   list-style:none;
   line-height: 40px;
   text-decoration:none;
   border-right: 1px solid #ccc;
 }
 #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
