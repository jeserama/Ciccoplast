<template>
  <div id="app">
    <!--v-for="mac in this.$store.state.Machinario" :key="mac.id"-->
    <div id="Dimensioni" >
        <h1>Dati fermi d'impianto</h1>
        <b-row style="background-color : #F6E4F6">
              <b-col cols="2">
                  <p class="mt-3" >Date </p>
              </b-col>
              <b-col cols="4">
                  <p class="mt-3" >Durata</p>
              </b-col>
              <b-col>
                  <p class="mt-3" >Causa</p>
              </b-col>
        </b-row>
        <b-row  v-for="mac in this.$store.state.Fermiimpianto" :key="mac.id">
          <b-col cols="2">
                  <p>{{new Date() | dateFormat('DD/MM/YYYY')}}</p>
              </b-col>
              <b-col cols="4">
                  <p>{{mac.tempofermo}}</p>
              </b-col>
              <b-col >
                  <p>{{mac.causa}}</p>
              </b-col>
        </b-row>

    </div>
  </div>
</template>
<script>

   // import LineChart from "../LineChart.js";
    export default  {
   
    name: "Details",
    components: {
       
    },
    created(){

   this.$store.dispatch("loadfermiimpianto");
   

    
 }
    };
</script>

<style scoped>



#Dimensioni{
    width: 500px;
    height: 500px;
    margin-left: 25px;
}

span {
  text-align: center;
  font-weight: bold;
  display: block;
}
</style>
