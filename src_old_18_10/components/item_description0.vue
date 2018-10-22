<template>


<div id="single-item">

<article>

<div class="naslov">  {{item.name}}</div>
<pre>{{item.desc}}</pre>

<img :src='item.picture'/>

</article>

</div>
</template>


<script>


export default{
  props:['kosarica2','suma'],
  data(){
    return{
      id:this.$route.params.id,
      item:{},

    }
  },
  created(){
    this.$http.get('https://shop-158bc.firebaseio.com/item/'+this.id+'.json').then(function(data){
      console.log(data);
      this.item=data.body;
    })
  },

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
