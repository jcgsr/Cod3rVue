<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <transition
          enter-active-class="animate__animated animate__slideInLeft"
          leave-active-class="animate__animated animate__slideOutRight"
          mode="out-in"
        >
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  components: { Header },
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>
