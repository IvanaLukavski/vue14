<template>

  <div>


    <div class="sve">

<!--<button v-on:click.prevent="post">Dodaj</button>-->
<input class="trazi" type="text" v-model="ono_kaj_se_trazi" placeholder="Search"/></br></br>




<div class="blogovi" v-for="n in pretrazi_niz">
<router-link v-bind:to="'posts/' + posts.id">
  <h3 v-podcrtano>{{n.title}}</h3></br>{{n.sadrzaj | to-skraceno}}
</router-link>




</div>



</div>
  </div>
</template>

<script>
import unos from './unos.vue'

export default {
  components: {
    'app-unos':unos
  },
  data () {

    return {
        /*niz:[
          {grana:"Programiranje", posao:"Web Developer", show:false},
          {grana:"Upravljanje", posao:"Manager", show:false},
          {grana:"Podrška", posao:"Help desk assistent", show:false}
        ],*/
        blogs:[
          {title:'Putovanje', sadrzaj:'Putovanje u Italiju 3 dana...', show:false},
          {title:'Avionska karta', sadrzaj:'Avionska karta oba smjera', show:false},
          {title:'Quad', sadrzaj:'QUAD AVANTURA Za sve Vas avanturističkog duha pripremili smo pravu poslasticu! Nudimo Vam, ujedno i garantiramo nezaboravnu quad avanturu u netaknutom prirodnom okruženju. Sloboda koju Vam pruža pogon na sva četiri kotača neusporediva je sa bilo kojim prijevoznim sredstvom. Očekuje Vas vožnja preko livada, kroz šume i off- road puteve uz pratnju osposobljenog vodiča', show:false},
        ],
        ono_kaj_se_trazi:'',
         showModal: false,
         naslov:'',
         sadrzaj:'',
    }
  },
  computed:{

    /*
    pretrazi_niz:function(){
        return this.blogs.filter((posts)=>{
        //  return n.title.match(this.ono_kaj_se_trazi)|| n.sadrzaj.match(this.ono_kaj_se_trazi);
          return blogs.title.match(this.ono_kaj_se_trazi)|| blogs.sadrzaj.match(this.ono_kaj_se_trazi);
        });
    }*/

    pretrazi_niz:function(){
        return this.blogs.filter((n)=>{
        //  return n.title.match(this.ono_kaj_se_trazi)|| n.sadrzaj.match(this.ono_kaj_se_trazi);
          return n.title.match(this.ono_kaj_se_trazi)|| n.sadrzaj.match(this.ono_kaj_se_trazi);
        });
    }

  },
directives:{
  'podcrtano':{
    bind(el,binding,vnode){
      el.style.textDecoration="underline";
      el.style.color="#00bfff";
      el.style.fontSize="20px";
    }
  }




},
methods:{

},
created(){
  this.$http.get('https://vuejs-bfbf4.firebaseio.com/posts.json').then(function(data){
    console.log(data);
    return data.json();
  }).then(function(data){
    var blogsArray=[];
    for(let key in data){
      //  console.log(data[key]);
data[key].id=key;
blogsArray.push(data[key]);
    }
    console.log(blogsArray);
    this.blogs=blogsArray;
  })
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.blogovi{
  padding:1vw;
  line-height: 150%;
  border:1px solid black;
  margin:1vh;
}


.trazi{
  width:30vw;
  height:3vh;
  float: right;

  margin:1vh;
}

.sve{
  margin:5vw;
/*  border:solid black 1px;/
  /*margin-left:10vw;*/
}

.dodaj{
  margin:1vh;
  background-color:#373b42;
  color:white;
  font-size:20px;
  padding:0.5vw;
}

</style>
