<template>

    <!--<div class="block"  v-on:keypress.116.prevent style="border:solid black 1px">-->
<div class="block">



<section class="section">
    <div class="container">
    <div class="subtitle">Details</div>

  <div class="container" v-for="(p, index) in kosarica2">


        <div class="container" >
          <div class="columns">
             <div class="column" >
               <div class="card">
          <figure class="image" >
            <!--DENEM 100 % VISINU I DUŽINU DA POPUNI CIJELU COLUMN CLASU!!!! -->
              <img class="image "  width="100%" height="100%" :src='p.picture' :alt='p.desc' >
        </figure>
      </div>
        </div>


        <div class="column">

            <div class="container">
                <div class="field is-horizontal">

                  <div class="field-label">
                      <div class="control">
                    <div class="content subtitle has-text-info is-mobile">{{p.name}}</div>
                  </div>
                  </div>

                </div>

          <div class="field is-horizontal">
          <div class="field-label">
            <div class="control">
                <div class=" content">{{p.desc |to-skraceno }}</div>
              </div>
          </div>

        <div class="field is-horizontal">
        <div class="field-label">
            <div class="control">
              <div class="content">{{p.price}} kn</div>
            </div>
          </div>
        </div>
      </div>
    </div><!-- zatvoreni div za column ispred konteinera-->
  </div>
</div>


  <!--<span class="description">{{p.desc}}</span>
   <span class="characteristics">{{p.desc}}</span>-->
   </p>

<div class="container is-paddingless-horizontal">

<div class="field">
  <!--  <div class="button" id="detalji" v-on:click="detalji('detalji')">Opis <span class="b" v-if="prikazi_detalje==true">-</span><span v-else> +</span></div>-->
  <div class="button is-info is-outlined"  v-on:click="prikazi_detalje=!prikazi_detalje">Opis
    <span class="column" v-if="prikazi_detalje==true"> -</span><span class="column" v-else> +</span></div>
  <div class="detalji" v-if="prikazi_detalje==true">{{p.desc}}</div>
</div>



    <div class="field">
      <div class="button is-info is-outlined" v-on:click="prikazi_karakteristike=!prikazi_karakteristike">Karakteristike
        <span class="column" v-if="prikazi_karakteristike==true">-</span><span class="column" v-else> +</span></div>
      <div class="karakteristike" v-if="prikazi_karakteristike==true">{{p.price}}</div>
    </div>


    <div class="field">
      <div class="button is-info is-outlined" v-on:click="prikazi_ostalo=!prikazi_ostalo">Proizvođač

         <span class="column" v-if="prikazi_ostalo==true">-</span><span class="column" v-else> +</span>

      <!--   <article class="media"><figure class="media-left">

           <span> <i class="fa fa-minus-square-o" aria-hidden="true"></i> </span></figure>

           <div class="media-content"><div class="content">
          <h1 class="title is-size-4">Naslov</h1>
          <p class="is-size-6">

         Every selected HTML element is a DOM object. It has properties.
         </p>

         </div></div>
       </article>-->



       </div>
      <div class="column" v-if="prikazi_ostalo==true">{{p.price}}</div>
    </div>

  </div>
</div>

</div>
</div>
</section>


  </div>

</template>

<script>


import vodka from '../assets/vodka.svg'
import rum from '../assets/rum.svg'
import sensation from '../assets/sensation.jpg'
import pelin from '../assets/pelin.jpg'
import cart from '../assets/cart.png'
export default {
props:['kosarica2','suma'],
/*props:{
  kosarica:{
    type:Array
  }
},*/
  data () {
    return {
        total:0,
        a:0,
        poruka:"poruka",
        Plus:0,
        Minus:0,
        prvi:0,
        drugi:0,
        kolicina:0,
        prazno:false,
        ukupno_u_kosari:0,
        prikazi_detalje:false,
        prikazi_karakteristike:false,
        prikazi_ostalo:false

    }
  },
  methods:{

    end_shopping:function(){
      alert("Hallo, are you lud? treba još neke kupiti!!!");
    },
  /*  detalji:function(item){
      console.log(item);
      this.prikazi_detalje=true;
      this.prikazi_karakteristike=false;
    },*/

    detalji:function(tip){
        console.log(tip)
        switch(tip) {
            case detalji:
                alert("detalji");
                break;
            case karakteristike:
                alert("karakteristike");
                break;
            default:
                alert("nemam pojma")
        }

    },
/*karakteristike:function(item){
  this.prikazi_detalje=false;
    this.prikazi_karakteristike=true;
  }*/
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

  img {
          float: none;
      }

      .notification{
        display: block;
      }

      .is-paddingless-horizontal{
        padding-left:0;
        padding-right:0;

      }
</style>
