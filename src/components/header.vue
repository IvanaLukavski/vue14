<template>
  <div>
<ul>
    <router-link to="/" exact><li>Početna</li></router-link>
    <router-link to="/opis" exact><li>Opis</li></router-link>
    <!--<router-link to="/neke" exact><li>Neke</li></router-link>-->
  <!--  <router-link to="/blogs" exact><li>Blog</li></router-link>-->
</ul>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div{
  background-color: #373b42;
  border-radius:0 0 5px 5px;
  /*text-align: center;*/

}

 .router-link-active{
    border: solid black 1px;
    border-radius: 5px;
    padding: 10px 8px;
    background-color: white;
    text-align: center;
}

.router-link-active li{
  color:#373b42;
  text-align: center;
  font-weight: bold;
}
/*
ul:li:visited{
  font-size:22px;
}
*/

ul li{
  list-style-type: none;
  display: inline-block;
  padding: 10px;
/*  border: solid black 1px;*/
  border-radius: 3px;
  font-size: 16px;
  text-align: center;
     position:relative;
     margin: 15px 20px;
     width: 3vw;
     height: 2vh;
     color:white;
     text-decoration: none;
}
ul{
       margin-left:5vw;
}




</style>
