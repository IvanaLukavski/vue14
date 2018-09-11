<template>
<div id="single-blog">

<article>

<div class="naslov">  {{blog.naslov | to-uppercase}}</div>
<pre>{{blog.sadrzaj}}</pre>
</article>

</div>
</template>


<script>

export default{
  data(){
    return{
      id:this.$route.params.id,
      blog:{}

    }
  },
  created(){
    this.$http.get('https://vuejs-bfbf4.firebaseio.com/posts/'+this.id+'.json').then(function(data){
      console.log(data);
      this.blog=data.body;
    })
  },

  filters:{
    toUppercase(va){
      return va.toUpperCase()
    }
  }

  }

</script>

<style>
#single-blog{
    margin:5vw;
}

body{
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
pre{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

h3{
  color:#00bfff;
  line-height: 500%;
}

.naslov{
  border-bottom:solid #00bfff 2px;
  padding-bottom:10px;
  width: auto;
  font-size:1.5em;
  color:#00bfff;
  font-weight: bold;
  margin-bottom:2vw;
}
</style>
