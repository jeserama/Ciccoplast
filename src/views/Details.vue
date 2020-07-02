<template>
  <div class="Home">
    <Navbar/>
     
        <b-row fixed>
            <b-col id="printable" cols="9" > 
                <b-row >
                        <b-col>
                            <Doughnutpezzi/>
                        </b-col>
                        <b-col>
                            <Bartargetpezzi/>
                        </b-col>
                </b-row>
                <b-row class="mt-5">
                        <b-col>
                            <Anomalia/>
                        </b-col>
                        <b-col>
                            <Fermi/> 
                        </b-col>
                </b-row>
                
            </b-col>
            <b-col cols="3">
                <Calendar></Calendar> <br>
                <b-button onclick="window.print()">Stampare</b-button>
            </b-col>
        </b-row>
  
   
    </div>
</template>
<script>
// @ is an alias to /src

import Navbar from '@/components/navbar.vue';
import Doughnutpezzi from '@/components/Doughnut_pezzi.vue';
//import Doughnut from '@/components/Doughnut.vue';
// import axios from 'axios';
import Bartargetpezzi from '@/components/Bar_target_chart.vue';
import Anomalia from '@/components/Anomalia.vue';
import Fermi from '@/components/Fermi_impianto.vue';
import Calendar from '@/components/Calendar.vue';



export default {
  name: 'Home',
  components: {
      
      Navbar,
      Doughnutpezzi,
     Anomalia,
     Bartargetpezzi,
     Fermi,
     Calendar

    
  }
}
</script>


<style scoped>
@media print {
  body * {
    visibility: hidden;
  }
  #printable, #printable * {
    visibility: visible;
  }
  #printable {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
