<template>
  <div class="Home">
    <Navbar/>
     
        <b-row fixed>
            <b-col cols="9" > 
                <b-row>
                        <b-col>
                            <Doughnutpezzi/>
                        </b-col>
                        <b-col>
                            <Bartargetpezzi/>
                        </b-col>
                        
                </b-row>
                <b-row>
                        <b-col>
                            <h1> </h1>
                            <!--<Barsettimanale/>-->
                        </b-col>
                        <b-col>
                            <h1></h1>
                        </b-col>
                </b-row>
                
            </b-col>
            <b-col cols="3">
                <b-calendar></b-calendar> <br>
                <b-button style="background-color: #007bff" ><router-link style="color :Black" :to="{ path: 'Settimanale' }">Settimanale</router-link></b-button>
            </b-col>
        </b-row>
  
   
    </div>
</template>
<script>
// @ is an alias to /src

import Navbar from '@/components/navbar.vue';
import Doughnutpezzi from '@/components/Doughnut_totale';
import Bartargetpezzi from '@/components/Bar_target_chart.vue';
//import Barsettimanale from '@/components/Bar_settimanale.vue';





export default {
  name: 'Home',
  components: {
      
      Navbar,
      Doughnutpezzi,
      Bartargetpezzi
      //Barsettimanale

    
  }
}
</script>
