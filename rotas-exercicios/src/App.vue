<template>
  <div id="app">
    <h1>Rotas com VueRouter</h1>
    <Menu />
    <transition mode="out-in" enter-active-class="animate__animated animate__swing" leave-active-class="animate__animated animate__bounce">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Menu from "./components/template/Menu";

export default {
  components: { Menu }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
