import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
vue.use(Vuex)

let store = new VueX.Store({
    state:{
        todos: []
    },

    mutation: {
        setTodos(state,value){
            state.todos = value
        }
    },

    action: {
        loadTodos(context){
            axios.get("https://jsonplaceholder.typicode.com/todos").then
            (res=>{
                context.commit("setTodos",res.data)
            })
        }
    }
})

export default store