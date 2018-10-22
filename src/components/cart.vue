<template>
  <div>
    <section class="section is-paddingless is-marginless is-responsive">

      <div class="container is-marginless is-paddingless">
        <div class="subtitle">Vaša košarica!</div>

        <p v-if="kosarica.length<=0">Košarica je trenutno prazna!</p>
        <div class=" container is-paddingless is-marginless" >
          <div  class="column is-paddingless is-marginless" v-for="(p, index) in kosarica">

            <div class="columns is-mobile is-multiline is-paddingless is-marginless" >
              <!--<div class="container is-paddingless is-marginless">-->

        <!--  <div class="column is-multiline is-6-mobile">-->

                <div class="column is-6-mobile is-paddingless is-marginless" width="60%" height="60%" >
                <div class="column">
                      <img :src='p.picture' class="is-one-quarter"/>
                    </div>
                </div>



               <div class="column is-6-mobile ">
                <div class="columns is-mobile is-desktop is-multiline  is-paddingless is-marginless">
                 <div class="column  is-12-desktop is-12-tablet is-12-mobile is-paddingless is-marginless" v-uredi>Naziv</div>
                 <div class="column is-12-mobile is-12-tablet is-12-desktop  is-paddingless is-marginless">{{p.name}}</div>
               </div>
             </div>
<!--</div>
    <div class="column is-multiline is-6-mobile">-->
    <div class="column is-12-mobile ">
      <div class="columns is-mobile is-desktop is-multiline  is-paddingless is-marginless">
       <div class="column is-12-desktop is-12-tablet is-9-mobile is-paddingless is-marginless" v-uredi>Količina </div>
       <div class="column is-3-mobile is-12-tablet is-12-desktop has-text-centered is-paddingless is-marginless"> {{p.qty}}

        <div v-on:click="plus(p)" ref="input" class="button is-small is-pulled-right"> +</div>
         <div v-on:click="minus(p)" ref="input" class="button is-small is-pulled-right">-</div>

       </div>
     </div>
   </div>

            <!--  <div class="columns is-12-mobile notification ">
              <div class="column is-mobile is-desktop is-multiline notification ">
                 <div class="column is-12-desktop is-12-tablet is-9-mobile">Cijena</div>
                 <div class="column is-3-mobile is-12-tablet is-12-desktop has-text-centered">{{p.price}}</div>
               </div>
             </div>-->
             <div class="column is-12-mobile ">
               <div class="columns is-mobile is-desktop is-multiline is-paddingless is-marginless">
                <div class="column is-12-desktop is-12-tablet is-9-mobile is-paddingless is-marginless" v-uredi>Cijena</div>
                <div class="column is-3-mobile is-12-tablet is-12-desktop has-text-centered is-paddingless is-marginless">{{p.price}}</div>
              </div>
            </div>

              <div class="column is-12-mobile ">
                <div class="columns is-mobile is-desktop is-multiline is-paddingless is-marginless">
                 <div class="column is-12-desktop is-12-tablet is-9-mobile is-paddingless is-marginless" v-uredi>Ukupno</div>
                 <div class="column is-3-mobile is-12-tablet is-12-desktop has-text-centered is-paddingless is-marginless">{{ukupno(p)}}</div>
               </div>
             </div>


        <!-- <div class="column is-6-mobile" >
           <div class="notification is-paddingless">
            <div class="content  " v-on:click="obrisi(index)"><span class="delete"></span></div>
           </div>
        </div>-->
<!--</div>-->

<div>
  <hr class="is-divider"></div>

      </div>

      <div class="column is-6-mobile is-pulled-right" >
        <div class="notification is-paddingless">
         <div class="content  " v-on:click="obrisi(index)"><span class="delete"></span></div>
        </div>
     </div>

    </div>

  </div>

</div>
</section>

<section class="section container is-responsive is-paddingless is-marginless">
  <div class="is-pulled-right ">
    <!--  <input type="button" v-on:click="hideModal()" class="button is-info" value="Nastavi kupnju"/>-->
    <slot name="continue_shopping"></slot>
    <span v-if="kosarica.length>0"><input type="button" class=" button is-success" v-on:click="end_shopping()" value="Završi kupnju"/></span>
  </div></section>



</div>
</template>

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
.card{
  width:100%;
}

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
        margin:auto;
        padding:1vw;

      }

.column-width {
  width:auto;
  height:auto;
}



.grid{
  display:grid;
  grid-template-columns:[xl-start] lfr [md-start] min(0,624px)[md-end] lr [xl-end];
}
.grid *{grid-column:md;}
.grid-xl{grid-column:xl;}

.nema {
  overflow-x: hidden;
  overflow-y: hidden;
}



/*

@media screen and(min-width: 768px) and (max-width: 991px) {
  .image{
    width:10vw;
    height:10vw;
  }

  .title {
    font-size:3vw;
  }
  .subtitle{
    font-size:2vw;
  }

  .columns .notification i{
      width:3vw;
      padding:0;
      margin:0;
    }

  .column .content {
    font-size:2vw;
  }
}





@media screen and(max-width: 768px) {
  .image{
    width:5vw;
    height:5vh;
  }

  .title {
    font-size:3vw;
  }
  .subtitle{
    font-size:2vw;
  }
  .columns .notification i{
      width:3vw;
      padding:0;
      margin:0;
    }

  .column .content {
    font-size:2vw;
  }
}
@media screen and (max-width: 767px) {
  .image{
    width:5vw;
    height:5vh;
  }

  .title{
    font-size:3vw;
  }
  .subtitle{
    font-size:2vw;
  }

  .columns .notification i{
      width:3vw;
      padding:0;
      margin:0;
    }

  .column .content {
    font-size:2vw;
  }

}


@media screen and (max-width: 698px){
  .image{
    width:5vw;
    height:5vh;
  }
    .title {
      font-size:3vw;
    }

    .subtitle{
      font-size:2vw;
    }
    .columns .notification i{
        width:3vw;
        padding:0;
        margin:0;
      }

    .column .content {
      font-size:2vw;
    }
}


@media screen and(max-device-width: 480px) and (orientation: landscape) {
}




@media screen and (-webkit-min-device-pixel-ratio: 0) {
}

@media all and (transform-3d), (-webkit-transform-3d) {
}*/

/*DO TUD JE PRAVI*/






















/*
@media (min-width: 768px) {
}


@media (min-width: 992px) {

}
@media (min-width: 1200px) {

}


@media screen and (max-width: 767px) {

}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
}

@media (max-device-width: 480px) and (orientation: landscape) {
}
@media (max-width: 767px) {
}

@media all and (transform-3d), (-webkit-transform-3d) {

}
@media (min-width: 768px) and (max-width: 991px) {

}
*/




</style>
