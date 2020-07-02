import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Machinari } from '@/models/Machinari'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Listmachinari : new Array <Machinari>(),
    Machinario :new Array <Machinari>() ,
    Anomalia: [],
    Fermiimpianto:[]
  },
  mutations: {
    AllMachinari (state,data){
      state.Listmachinari =  data ; 
    },
    Machinario(state,data){
      state.Machinario =data
    },
    Allfermi(state,data){
      state.Fermiimpianto =data
    },
    AllAnomalia(state,data){
      state.Anomalia =data
    }
  },
  actions: {
    loadmachinari({commit}){
      axios.get<Machinari[]>("http://localhost:3000/machinari/")
      .then((result)=>{
        const data = result.data;
        commit('AllMachinari',data)
    });
    },
    loadAnomalia({commit}){
      axios.get("http://localhost:3000/machinari/")
      .then((result)=>{
        const data = result.data.Anomalia;
        console.log(data);
        commit('AllAnomalia',data)
    });
    },
    loadfermiimpianto({commit}){
      axios.get("http://localhost:3000/fermi_impianto/")
      .then((result)=>{
        const data = result.data;
        console.log(data);
        commit('Allfermi',data)
    });
    },
    machinariobyid({commit}, idmachinari){
      axios.get<Machinari[]>("http://localhost:3000/machinari/"+idmachinari)
      .then((result)=>{
        const data = result.data;
        commit('Machinario',data)
    });
    },
  },
  modules: {
  }
})
