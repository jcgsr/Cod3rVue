<template>
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="adicionar" class="btn btn-success">+</button>
    <button @click="subtrair" class="btn btn-danger">-</button>
  </div>
</template>

<script>
export default{
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    adicionar() {
      this.contador++
    },
    subtrair() {
      this.contador--
    }
  }
}
</script>

<style>
.btn{
  margin-left: 1rem;
}
</style>