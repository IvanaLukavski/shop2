<template>
  <keep-alive>


    <!--<div class="block"  v-on:keypress.116.prevent style="border:solid black 1px">-->
  <div class="block" >
    <div class="subtitle">Your cart!</div>
    <!--<div v-for="(p, index) in items"><img :src='p.picture' width="50px" height='50px'/>{{p.id}}->{{p.name}} Cijena {{p.price}} * {{p.qty}} = {{ukupno(p)}}-->
    <p v-if="kosarica.length<=0">Košarica je trenutno prazna!</p>

<!--<div v-for="(p, index) in kosarica"><img :src='p.picture' width="50px" height='50px'/>{{p.id}}->{{p.name}} Cijena {{p.price}} * {{p.qty}} = {{ukupno(p)}}-->

  <div style="border-bottom:1px solid #888888;" class="f" v-for="(p, index) in kosarica">


    <div class="columns notification">
      <div class="column">
        <p class="notification "><img :src='p.picture' width="100px" height='100px'/></p>
      </div>
      <div class="column">
        <p class="notification" style="border:solid red 1px;"><span class="subtitle" v-uredi >{{p.name}}</span></br><!--{{p.desc |to-skraceno}}--></p>
      </div>

      <div class="column">
        <p class="notification ">Price: ${{p.price}}</p>
      </div>
      <div class="column">
        <p class="notification ">Quantity: {{p.qty}}</p>
        <p class="button is-info is-small"   v-on:click="plus(p)" ref="input">+</p>
        <p class="button is-info is-small" v-on:click="minus(p)" ref="input">-</p>
      </div>
      <div class="column">
        <p class="notification">

          <div class="item is-small" ref="input">Total: {{ukupno(p)}}</div>


          <div class="delete is-pulled-right" v-on:click="obrisi(index)"></div>

        </p>
      </div>
    </div>


              <!--<img :src='p.picture' width="50px" height='50px'/>
              <span v-uredi class="inpu">{{p.name}}</span>
              <p v-uredi class="inpu">{{p.desc}}</p>
              <span class="inpu">${{p.price}}</span>
              <span class="inpu"> {{p.qty}} </span>-->





<!--<input v-model="p.qty" :id="p.id" type="number" placeholder="Qty" min="1" />-->
<!--Quantity
<div class="button is-info is-small"   v-on:click="plus(p)" ref="input">+</div>
<div class="button is-info is-small" v-on:click="minus(p)" ref="input">-</div>
<div class="delete is-pulled-right" v-on:click="obrisi(index)"></div>-->

</br></br>

</div>
  </br>
  <input type="button" class=" button is-info" value="Nastavi kupnju"/>
  <span v-if="kosarica.length>0"><input type="button" class=" button is-success" v-on:click="end_shopping()" value="Završi kupnju"/></span>

  </div>
</keep-alive>
</template>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>


import vodka from '../assets/vodka.svg'
import rum from '../assets/rum.svg'
import sensation from '../assets/sensation.jpg'
import pelin from '../assets/pelin.jpg'
import cart from '../assets/cart.png'
export default {
props:['kosarica','suma'],
/*props:{
  kosarica:{
    type:Array
  }
},*/
  data () {
    return {
        total:0,
        a:0,
        Plus:0,
        Minus:0,
        kolicina:0,
        prazno:false,
        ukupno_u_kosari:0


    }
  },
  methods:{

    end_shopping:function(){
      alert("Hallo, are you lud? treba još neke kupiti!!!");
    },

      obrisi:function(item){
        this.kosarica.splice(item,1);
      },

 plus:function(idd){



    console.log(idd.id_product);

this.kosarica.forEach(function(item){
//  console.log(item.id);
    console.log(item.id_product);
    //ili dodaj sa id_product provjeru
      if(item.id==idd.id){
              //  console.log("odrešeni "+item.id + "-> " + idd.id_product);
              item.qty=item.qty+1;
            }
        });

    },
  minus:function(idd){

        this.kosarica.forEach(function(item){

        if(item.id==idd.id){
          //console.log("odrešeni "+item.id_product + "-> " + idd.id);
          if(item.qty>0){
                item.qty=item.qty-1;
              }else{
                item.qty=0;
      /* ************************************************************************************* */
/*TU JOŠ DODAJ DA AK JE NULA KOLIČINA DA MAKNE IZ KOŠARICE TAJ PROIZVOD */
    //  item.id.splice(idd, 1);
    console.log(idd);

              }
              }
          });

     },
     ukupno: function(idd){
        return idd.qty*idd.price

     },
     global_ukupno: function(){
      //  return kosarica.qty* kosarica.price

     },

  },
  computed:{
    products(){
      return this.$store.state.products
    },
  }
  /*
  mounted: function () {
      //  this.prazno=false;

    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27) {
      //  alert("izađi");
        this.open = false;
      //  this.submitted = false;
      //  this.prazno=false;

      }
    });
  },*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.btn-group button {
    background-color: #4CAF50; /* Green background */
    border: 1px solid green; /* Green border */
    color: white; /* White text */
    padding: 10px 24px; /* Some padding */
    cursor: pointer; /* Pointer/hand icon */
    width: 50%; /* Set a width if needed */
    display: block; /* Make the buttons appear below each other */
}

.btn-group button:not(:last-child) {
    border-bottom: none; /* Prevent double borders */
}

/* Add a background color on hover */
.btn-group button:hover {
    background-color: #3e8e41;
}
.column {
        display: flex;
      }
</style>
