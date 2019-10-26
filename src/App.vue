<template lang="pug">
  #app
    img(src="./assets/logo.png")
    br
    ul
      //- li(v-for="post in $store.state.todos") {{ post }}
      //- computed中加進去對應過來：...mapState(['todos'])
      li(v-for="post in todos") {{ post }}
    br
    //- setTodos向vuex提交修改資料
    button(@click="setTodos(['lonelykite','Tom', 'iPhone'])") 更新Todos
    button(@click="loadTodos") 載入全部資料
    br
    router-link(to="/PageTest") 到新的頁面
    br
    router-link(to="/PageUser/Tina") 到新的頁面Tina
    br
    router-link(to="/PageUser/lonelykite") 到新的頁面lonelykite
    br
    router-link(to="/PageUser/Tom") 到新的頁面Tom
    br
    br
    router-link(to="/PageUser/id/1") 到User1 (id:1)
    br
    router-link(to="/PageUser/id/2") 到User2 (id:2)
    //- out-in切換模式
    transition(name="page" mode="out-in")
      router-view(:key="$route.path")
</template>

<script>
// 從vuex的index.js那三個狀態import進來，各元件需要使用這行複製過去
import { mapState , mapMutations , mapActions } from 'vuex'

export default {
  name: 'App',

  methods: {
    ...mapMutations(['setTodos']),
    ...mapActions(['loadTodos'])
  },

  // 從這裡向vuex提交修改資料，預設進來頁面載入資料也是放這裡
  mounted() {
    // this.setTodos(['a','b','c'])
    // this.loadTodos()
  },

  computed: {
    ...mapState(['todos'])
  }

}
</script>

<style lang="sass">
#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px

// enter進頁面整個過程，與leave頁面的整個過程
.page-enter-active, .page-leave-active
  transition: 0.3s

// enter前，leave後
.page-enter, .page-leave-to
  opacity: 0

</style>
