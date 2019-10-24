<template lang="pug">
  #app
    img(src="./assets/logo.png")
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
export default {
  name: 'App'
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
