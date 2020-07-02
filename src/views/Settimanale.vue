<template>
  <div class="Home">
    <Navbar/>
     
        <b-row fixed>
            <b-col cols="9" > 
                <b-row>
                        <b-col>
                                <b-row class="mt-3">
                                    <b-col> 
                                        <router-link :to="{ path: 'Total' }">Giornaliero</router-link>|
                                    
                                        <router-link :to="{ path: 'Settimanale' }">Settimanale</router-link> <br>
                                    </b-col>
                                               
                                               
                                </b-row>
                         <Barsettimanale/>
                        </b-col>
                </b-row>
                <b-row>
                        <b-col>
                            <!--<h1>Dati Anomalie </h1>-->
                           
                        </b-col>
                        <b-col>
                           <!-- <h1>Dati fermi impianto</h1>-->
                            
                        </b-col>
                </b-row>
                
            </b-col>
            <b-col cols="3">
                <b-calendar></b-calendar> <br>
            </b-col>
        </b-row>
  
   
    </div>
</template>
<script>
// @ is an alias to /src

import Navbar from '@/components/navbar.vue';
//import Doughnutpezzi from '@/components/Doughnut_totale';
//import Bartargetpezzi from '@/components/Bar_target_chart.vue';
import Barsettimanale from '@/components/Bar_settimanale.vue';





export default {
  name: 'Home',
  components: {
      
      Navbar,
      Barsettimanale

    
  }
}
</script>
