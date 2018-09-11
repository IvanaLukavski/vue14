<template>

  <div>


    <div class="sve">

<!--<button v-on:click.prevent="post">Dodaj</button>-->
<div class="search_i_dodaj">
    <button  class="search_i_dodaj" @click="open=true" v-model='naslov'>Novi blog</button></br>
    <input class="trazi" type="text" v-model="ono_kaj_se_trazi" placeholder="Search"/>

</div></br></br>

<div v-on:keyup.escape="hideModal" >
<vue-modaltor    :visible="open" @hide="sakrij" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>

<app-unos ></app-unos>

</vue-modaltor>
</div>

<br/>


<div class="blogovi" v-for="posts in pretrazi_niz">
<router-link v-bind:to="'posts/' + posts.id" class="link_naslov">
  <p v-podcrtano >{{posts.naslov | to-uppercase}} </p>
</router-link>


<!--<div class="skupa"><div class="sadrzaj_dohvacen"> {{posts.sadrzaj }}</div> <div class="obrisi" v-on:click="obrisi(posts.id)" >X</div></div>-->

<div id="sve_pocetna_parant">
    <div id="sadrzaj_dohvacen">
      <pre>
    {{posts.sadrzaj | to-skraceno}}

        <!--AKO HOĆEMO DA TOČKICE BUDU LINK DODAMO SLJEDEĆIH PAR REDOVA
        <i v-if="posts.sadrzaj.length>20">...</i></strong>
          <strong v-if="posts.sadrzaj.length>20">  <router-link v-bind:to="'posts/' + posts.id" class="link_naslov">  Prikaži više</router-link>
      </strong>-->
      <router-link v-bind:to="'posts/' + posts.id" ><span v-if="posts.sadrzaj.length>300">Prikaži više</span></router-link>

      </pre>
    </div>
    <div id="iksic">
      <p v-on:click="obrisi(posts.id)">X</p>
          <!--    <p v-on:click="obrisi_drzavu(posts.id)">X</p>-->
    </div>

</div>
<!--
<ul>
  <li v-for="novi in novi_array" v-on:click="obrisi_drzavu">{{novi}}</li>
</ul>-->


 <!--{{posts.id}}-->


<!--{{posts.sadrzaj | to-skraceno}}-->

<!--<div class="blogovi" v-for="n in pretrazi_niz"><h3 v-podcrtano>{{n.naslov}}</h3></br>{{n.sadrzaj | to-skraceno}}</div>-->
<hr>

</div>







</div>



  </div>
</template>

<script>
import unos from './unos.vue'


export default {
//props:['id'],
  components: {
    'app-unos':unos
  },

  data () {

    return {

        blogs:[],
        ono_kaj_se_trazi:'',
         showModal: false,
         naslov:'',
         sadrzaj:'',
      //   id:this.$route.params.id,
         open: false,
         show: false,
         idek:'',
         sadrzaj:'',
         preview:'Preview',
         dodana_vrijednost:'',
         nizek:["ddd","aaa" ],
         nizek2:["ddd","aaa" ],
         submitted:false,
         error:false,
         def:false,
         focused_naslov2:true,
         id:'',
         dialog:false,
         novi_array:['Austrija', 'Njemačka','Hrvatska'],
         focused:false,
         linkic:'<router-link v-bind:to="\'posts/\' + posts.id" class="link_naslov">...</router-link>',
         rez:'0',
         suma:''

    }
  },
  computed:{
    zbroji:function(){
    //  return  posts.sadrzaj.length
    },

    pretrazi_niz:function(){
        return this.blogs.filter((posts)=>{
        //  return n.title.match(this.ono_kaj_se_trazi)|| n.sadrzaj.match(this.ono_kaj_se_trazi);
          return posts.naslov.match(this.ono_kaj_se_trazi) ||posts.sadrzaj.match(this.ono_kaj_se_trazi);
        });
    }
  },
directives:{
  'podcrtano':{
    bind(el,binding,vnode){
      el.style.textDecoration="none";
      el.style.color="#00bfff";
  //    el.style.fontSize="20px";
  //    el.style.paddingBottom="0.5em"
    }
  }

},
methods:{
  obrisi_drzavu:function(ide){
//    this.posts.pop();



  },
  hideModal() {
              this.open = false
              console.log("dsfvsgdyfghrtzgju")
          },
  funk:function(){
    alert("Escapeee");
  },
  obrisi:function(ide){
    console.log(this.idek)

            this.$http.delete('https://vuejs-bfbf4.firebaseio.com/posts/'+ide+'.json').then(function(data){
  //            console.log(data);
//              return data.json();

            })


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

  },

  sakrij() {
            this.open = false;

            this.$http.get('https://vuejs-bfbf4.firebaseio.com/posts.json').then(function(data){
              console.log(data);
              return data.json();
            }).then(function(data){
              var blogsArray=[];
              for(let key in data){
          data[key].id=key;
          blogsArray.push(data[key]);
              }
          //    console.log(blogsArray);
              this.blogs=blogsArray;
            })
        }

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

},
filters:{
toUppercase(value){
    return value.toUpperCase();
},

toSkraceno(value){
  var a;
  if(value.length>300){
  return value.slice(0,300)+ "..."
}else{
  return value
}


},
toZbroji(value){
  return value.length
}
},

  mounted: function () {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27) {
        this.open = false;

        this.$http.get('https://vuejs-bfbf4.firebaseio.com/posts.json').then(function(data){
          console.log(data);
          return data.json();
        }).then(function(data){
          var blogsArray=[];
          for(let key in data){
      data[key].id=key;
      blogsArray.push(data[key]);
          }
      //    console.log(blogsArray);
          this.blogs=blogsArray;
        })
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
pre, body{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.blogovi{
  padding:1vw;
  line-height: 150%;
/*  border:1px solid black;*/
  margin:1vh;
}


.trazi{
  width:30vw;
  height:3vh;
  float: right;

  margin:1vh;
}

.search_i_dodaj{
    float: right;
}

.sve{
  margin:5vw;
/*  border:solid black 1px;/
  /*margin-left:10vw;*/
}


hr{
  color:#373b42;
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #c0c3c6;
  margin: 1em 0;
  padding: 0;
}

/*this.$dialog.alert('Request completed!')
    .then(function (dialog) {
        console.log('Closed')
    })

// Trigger a confirmation dialog
this.$dialog.confirm('Please confirm to continue')
    .then(function (dialog) {
        console.log('Clicked on proceed')
    })
    .catch(function () {
        console.log('Clicked on cancel')
    });*/



#sve_pocetna_parant{
display: flex;
}
#iksic{
flex: 1;
/*background: lightgreen;*/
text-align: right;
cursor: pointer;
color:#373b42;
}
#sadrzaj_dohvacen{
width: 80vw;
/*background: lightblue;*/
}
.link_naslov{
  text-decoration: none;
  font-size:1.5em;
}

span{
  color:#373b42;
  text-decoration: underline;
  font-size:1em;
}

span:hover{
  color:#373b42;
  text-decoration: underline;
  font-size:1.05em;
}
</style>
