/* eslint-disable no-undef */
<template>
  <div id="app">
    
        <Bar v-if="loaded"  :chartdata="chartdata" :options="options"></Bar>
   
  </div>
</template>
<script>
    import Bar from '../Charts/Bar.vue'
    import axios from 'axios';
    export default  {
    
    name: "Details",
    components: {
        Bar
        
    },
  data:()=>{
    return {
      chartdata :null,
      options : null,
      loaded : null,
      idmachinario:null,
      sum :null,
      date:[],
      Buoniquestasettimana: []
    }

  },
       async created(){
          await axios.get("http://localhost:3000/produzione/ ")
          .then((response) => {
              this.loaded= true;
            //const today = new Date() ;
              //const date=  today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
             // console.log("curent date " ,date.g);
            //Push into array totale all pezzi Buoni 
            response.data.forEach(element => {
               this.Buoniquestasettimana.push(element.Buoni);
            });
            

            console.log(this.date);
             const a = new Date(this.date[4]*1000)
             console.log(a);
             console.log(a.getMonth());
            
                  
                  this.chartdata= {
               labels: ['Lun', 'Mar', "Mer","Gio","Ven"],
               datasets: [
                 {
                   label: "Numeri pezzi", 
                    backgroundColor: ["#F29255","#D4EBDF","#CFDFAF","#7D90A9","#A695A1"],
                    data: [this.Buoniquestasettimana[0], this.Buoniquestasettimana[1],this.Buoniquestasettimana[2],this.Buoniquestasettimana[3],this.Buoniquestasettimana[4]]
                 }  
               ]
             }
            this.options = {
               
               maintainAspectRatio :false,
               title:{ 
                 display: true ,
                 text:" Produzione settimanale"
               }
            }

            
             

            });
            
     
            
    
      
 }

    };
    
    
</script>

<style scoped>

#PZS{
    position: absolute;
    margin-top: 130px;
    margin-left: 118px;
    color: #c2cfe9;
}

#Dimensioni{
    width: 300px;
    height: 300px;
    margin-left: 25px;
}

span {
  text-align: center;
  font-weight: bold;
  display: block;
}
</style>
