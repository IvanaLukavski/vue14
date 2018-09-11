<template>
  <div>

<app-header></app-header>
<router-view></router-view>
<!--<app-prikaz></app-prikaz>-->

<!--<div class="parent-component">
  <child-component v-on:selected="dateSelectedInChild"></child-component>
</div>-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import header from './components/header.vue'
import unos from './components/unos.vue'
import ChildComponent from './components/childcomponent'
//import prikaz from './components/showblogs.vue'




export default {
  name: 'App',
  components: {
    'app-header':header,
    'app-unos':unos,
    'child-component':ChildComponent
  //  'app-prikaz':prikaz
},
methods: {
    dateSelectedInChild (selectedDate) {
      console.log(selectedDate)
    }
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
  margin-top: 60px;
}
body{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
button{
  color:red;
  margin:0.8vh;
  background-color:#373b42;
  color:white;
  font-size:20px;
  padding:0.5vw;
  outline: 0;
}
li{
  text-decoration: none;
  outline: 0;
}
a{
    outline: 0;
}

</style>
