<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuáro: <strong>{{ inverterNome() }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>
export default {
    props: ['nome'],
    methods: {
    	inverterNome() {
    		return this.nome.split('').reverse().join('')
    	},
    	reiniciarNome() {
    		this.nome = 'Ciso'
    		this.$emit('nomeMudou', this.nome) // comunicação do elemento filho com o pai
    	}
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
