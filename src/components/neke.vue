<template>
  <div >


<vue-modaltor  :visible="open" @hide="hideModal"     :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
    <p v-for="n in niz">{{n.ime}}</p>

    <table>
      <caption style="text-align:left;" v-uredi>Unesi svoj blog</caption>
      <br/>
      <br/>


<tr><td>
<label>Nalov</label></td><td><input type="text" v-model="naslov" class="zoom"/></br></td></tr>
<tr><td><label>Sadržaj</label></td><td><textarea rows=10 cols="30" v-model="sadrzaj" class="zoom"></textarea></td></tr>
<tr><td></td><td><button v-on:click.prevent="post">Dodaj blog</button></td></tr>
</table>
<!--<button v-on:click="dodaj_nizu(naslov,sadrzaj)">Dodaj blog</button>-->


<transition name='alert-in'>

  <p v-if="naslov != '' || sadrzaj!=''">
<!--<p  v-if="show">-->
  <template>
  <table class="preview">
<tr><td v-boja>{{preview | to-uppercase }}</td></tr>
<tr><td>Nalov:</td> <td>{{naslov}}</td></tr>
<tr><td>Sadržaj:</td> <td><pre>{{sadrzaj}}</pre></td></tr>

</table>
</template>


</p>
<!--OVAK MI TU ELSE NE DELA VJEROJATNO JER NIJE UNUTAR TEMPLATE ALI MISLIM DA NIJE TO-->
<!--<p v-else>nema</p>-->
</transition>



</vue-modaltor>
  <button @click="open=true">modal-basic</button>
  <div v-if="submitted" class="success">  Uspješno uneseno!</div>


  </div>
</template>

<script>
export default {

  data () {
    return {
      niz:[
        {ime:"Ana", godine:25},
        {ime:"Ivana", godine:25}
      ],
      open: false,
      show: false,
      naslov:'',
      sadrzaj:'',
      preview:'Preview',
      dodana_vrijednost:'',
      nizek:["ddd","aaa" ],
      nizek2:["ddd","aaa" ],
      submitted:false
    }
  },
  methods: {

    hideModal() {
              this.open = false
          },
          post:function(){
            this.$http.post('https://vuejs-bfbf4.firebaseio.com/posts.json',{
              naslov:this.naslov,
              sadrzaj:this.sadrzaj
            }).then(function(data){
              console.log(data);
              this.submitted=true;
              this.sadrzaj='';
              this.naslov='';
              this.open= false;
              this.submitted=true;
            });
          }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
