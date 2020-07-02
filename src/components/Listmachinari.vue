<template>
        <b-container>
            <b-row> 
                <b-col  cols="11">
                        <div  v-for="mac in this.$store.state.Listmachinari" :key="mac.id" >
                                <router-link class="wraper" :to="{ name: 'Details', params: { id: mac.id }}">
                                    <b-col>
                                        <b-card  no-body class="overflow-hidden card"  >
                                                <b-row   v-if="mac.Error" v-bind:style="{backgroundColor :activeColor}"  no-gutters>
                                                        <b-card-body :title="mac.Name">
                                                            <b-card-text v-for="list in mac.Anomalia" :key="list.id">
                                                                <p >Anomalie: {{mac.Anomalia.length}}</p>
                                                                <p> </p>
                                                            </b-card-text>
                                                        </b-card-body>
                                                
                                                </b-row>
                                                <b-row  else="mac.Error"  no-gutters>
                                                        <b-card-body :title="mac.Name">
                                                            <b-card-text>
                                                                <p >Machina funzionante</p>
                                                            </b-card-text>
                                                        </b-card-body>
                                                
                                                </b-row>
                                        </b-card>
                                    
                                    </b-col>
                                </router-link>
                            
                        </div>
                </b-col>
                <b-col cols="1">
                     <b-button class="mt-3 " style="background-color: #007bff"><router-link  :to="{ path: 'Total' }" style="color: Black;">Totale</router-link></b-button>
                </b-col>
                
            </b-row>
        </b-container>
    
</template>

  <script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

@Component
export default class Listmachinari extends Vue {
 created(){
   this.$store.dispatch("loadmachinari");
   this.$store.dispatch("loadAnomalia");
   console.log(this.$store.state.Listmachinari);
   console.log(this.$store.state.Anomalia);
 }

data (){
    return{
         activeColor: '#FFBABA'
    }
 

}
 

}
    




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar{
     background-color: #0F70B7;
}
.card{
    width: 250px;
    height: 100px;
    float: left;
    margin: 10px 10px 10px 10px;
    border-radius: 10px;
    background-color:#C0C0C0;
    color:#102027 ;
}
.wraper a {
 text-decoration: inherit;
 
}

</style>
