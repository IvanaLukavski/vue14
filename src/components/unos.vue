<template>
<div>


    <table >
      <caption style="text-align:left;" v-uredi>Unesi svoj blog</caption>
      <br/>
      <br/>

<tr>
  <td>
<label>Nalov</label></td><td>
  <input type="text"  @focus="focused_naslov = true" @blur="focused_naslov2 = false" v-model="naslov" class="zoom" v-validate="'required|min:2'" name="naslov"/></td>
<!--<input type="text"  @focus="focused_naslov = true" @blur="nije_popunjeno_polje" v-model="naslov" class="zoom" v-validate="'required|min:2'" name="naslov"/></td>-->

<transition name="bounce-in">
  <!--<td v-if="focused_naslov && naslov!=''">  <img class="slikice_popuna" src="../assets/popunjeno.png"></td>-->
  <td v-if="naslov!=''">  <img class="slikice_popuna" src="../assets/DONE.png"></td>

</transition>
<td v-if="focused_naslov && naslov==''">Molimo unesite!</td>




</tr>
<tr><td><label>Sadržaj</label></td><td><textarea @focus="focused_sadrzaj = true" rows=10 cols="20" v-model="sadrzaj" v-validate="'required|min:2'" class="zoom" name="sadrzaj"></textarea></td>
  <transition name="bounce-in">
    <!--<td v-if="focused_naslov && naslov!=''">  <img class="slikice_popuna" src="../assets/popunjeno.png"></td>-->
    <td v-if="sadrzaj!=''">  <img class="slikice_popuna" src="../assets/DONE.png"></td>

  </transition>
  <td v-if="focused_sadrzaj && sadrzaj==''">Molimo unesite!</td>



</tr>
<tr><td></td><td><button v-on:click.preventDefault="post">Dodaj blog</button></td></tr>
</table>


<div id="sve_pocetna_parant" v-if="submitted" class="success">
  <div  id="sadrzaj_dohvacen"> <p> Uspješno uneseno!</p> </div><div  id="iksic"  v-on:click="close"><p>X</p></div>


</div>
<p v-else>
  <div v-if="errors.has('naslov')" v-else=''>{{errors.first('naslov')}}  </div>
    <div v-if="errors.has('sadrzaj')" v-else=''>{{errors.first('sadrzaj')}}  </div>

</p>



<!--<transition name='alert-in'>-->

<!--</transition>-->



  </div>
</template>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>



function myFunction() {
    var x = document.getElementById("myText").autofocus;
    document.getElementById("demo").innerHTML = x;
}
export default {
   props:['focused_naslov','focused_sadrzaj'],
    //   directives: { focus: focus },
  data () {

    return {
        show: false,
        naslov:'',
        sadrzaj:'',
        preview:'Preview',
        dodana_vrijednost:'',
        nizek:["ddd","aaa" ],
        nizek2:["ddd","aaa" ],
        submitted:false,
        error:false,
        niz_greske:[],
        spremljeno:false,
        focused: false,

    }
  },

  methods:{
    funk:function(){
      alert("Escapeee");
    },
      dodaj_nizu:function(dodana_vrijednost){
        this.nizek.push(dodana_vrijednost);
      this.sadrzaj='';
      },
      post:function(){

        this.$validator.validateAll().then((result)=>{
          if(!result){
                  this.error=true;
                  this.submitted=false;
                  this.spremljeno=false;
                //  this.niz_greske.push("Popuni sadržaj");
          }else{



        this.$http.post('https://vuejs-bfbf4.firebaseio.com/posts.json',{
          naslov:this.naslov,
          sadrzaj:this.sadrzaj
        }).then(function(data){
          console.log(data);
          this.submitted=true;

          var self = this;
                     setTimeout(function(){
                         self.submitted = false;

                     }, 1000);


              //    setTimeout(function(){
                            self.focused_naslov =false;
                            self.focused_sadrzaj =false;
                            self.naslov='';
                            self.sadrzaj='';

                //         }, 1000);


        });
      }
    })
//  }
},

  close:function(){

    this.submitted=false;

  }

  },
  filters:{
    toUppercase(value){
        return value.toUpperCase();
    }
  },
  directives:{
    'boja':{

      bind(el,binding,vnode){
        el.style.color="#00bfff";
        el.style.textDecoration="underline ";
        el.style.fontSize="20px";
      }
    },
    'uredi':{
      bind(el,binding,vnode){
        el.style.color="#00bfff";
        el.style.fontSize="20px";
      }
    }
  },
  created(){
    this.focused=true;
  }

}


function myFunction() {
    var x = document.getElementById("myText").autofocus;
    document.getElementById("demo").innerHTML = x;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table, tr, td{
  margin-left: 5vw;
  margin-top: 5vw;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

td{
  padding:1vh;
  text-align:left;
}
input{
  width:40vw;
  height:3vh;
  font-size:20px;
  border-radius:5px;

-moz-box-shadow:    inset 0 0 5px #000000;
-webkit-box-shadow: inset 0 0 5px #000000;
box-shadow:         inset 0 0 5px #000000;
border: transparent;
padding:0.5vh;
}

textarea{
    width:40vw;
    border-radius:5px;
    -moz-box-shadow:    inset 0 0 5px #000000;
    -webkit-box-shadow: inset 0 0 5px #000000;
    box-shadow:         inset 0 0 5px #000000;
    border: transparent;
    padding:0.5vh;
    font-size:20px;
}

.zoom {
    transition: transform .2s;
    margin: 0 auto;
}

.zoom:focus {
    border:solid black 1px;
    transform: scale(1.02); /*
    normalno ostane isto ako denemo 1.0, sve manje od 1.0 će smanjiti blok, a sve veće od toga će ga zoomirati */
    -moz-box-shadow:    inset 0 0 7px #000000;
    -webkit-box-shadow: inset 0 0 7px #000000;
    box-shadow:         inset 0 0 7px #000000;
}

li{
  list-style-type: none;
  outline: 0;
}

.preview2{
  border:solid black 2px;
  transition: transform .2s; /* Animation */
  margin: 0 auto;

  /* Safari 3-4, iOS 1-3.2, Android 1.6- */
  -webkit-border-radius: 5px;

  /* Firefox 1-3.6 */
  -moz-border-radius: 5px;

  /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
  border-radius: 5px;
}

.preview{
  font-weight: bold;
}

.alert-in-enter-active{
  animation: bounce-in .5s;
}

.alert-in-leave-active{
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}


.success{
  border:solid green 1px;
  -moz-box-shadow:    inset 0 0 7px #44ce54;
  -webkit-box-shadow: inset 0 0 7px #44ce54;
  box-shadow:         inset 0 0 7px #44ce54;
  -webkit-border-radius: 5px;

  -moz-border-radius: 5px;

  border-radius: 5px;
  margin:1vw 5vw;
  padding: 0.5vw;
  font-size: 1em;

}


.close{
  text-align: right;
  border:solid black 1px;
  margin-right: 1vw;

}


.slikice_popuna{
  width: 2vw;
  height: 3vh;
}



.bounce-in-enter-active{
  animation: bounce-in .5s;
}

.bounce-in-leave-active{
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
.uneseno{
border:solid red 1px;
}




#sve_pocetna_parant{
display: flex;
}
#iksic{
flex: 1;
/*background: lightgreen;*/
/*text-align: right;*/
cursor: pointer;
}
#sadrzaj_dohvacen{
width: 70vw;

/*background: lightblue;*/
}

textarea{
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
