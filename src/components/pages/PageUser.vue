<template lang="pug">
.pageTest
    h1 這是一個User頁面
    h3 YA`~`~`~`~`
    //- params.name在 index.js網址裡面
    h2 you are {{$route.params.name}}

    h2(v-if="user") 以id進入的頁面 {{user}}}
    div
        h3(v-for="todo in userTodos")  ID為：{{ todo.userId }} , Title為：{{todo.title}}
</template>

<script>
import { mapState , mapMutations , mapActions } from 'vuex'

export default {
    data(){
        return{
            users: [
                {id: 1, name: "AAAAAAAAAA"},
                {id: 2, name: "CCCCCCCCCC"},
            ]
        }
    },

    computed: {
        user(){
            return this.users.find(user=>user.id == this.$route.params.num)
            
        },

        ...mapState(['todos']),

        userTodos(){
            return this.todos.filter(todo=>todo.userId == this.$route.params.num)
        }
    }

}


</script>

<style lang="sass">

</style>