<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>
		<transition name="fade">
			<b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>		
		</transition>

		<transition name="slide">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>		
		</transition>

		<!-- Animated.css -->
		<transition 
		enter-active-class="animate__animated animate__bounce"
		leave-active-class="animate__animated animate__wobble">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>		
		</transition>
		<hr>
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>

		<transition :name="tipoAnimacao">
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>		
		</transition>
	</div>
</template>

<script>

export default {
	data() {
		return {
			msg: 'Uma mensagem de informação para o usuário',
			exibir: false,
			tipoAnimacao: 'fade'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.5rem;
}

.fade-enter, .fade-leave-to{
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 2s;
}

.fade-enter-to, .fade-leave {
	opacity: 1;
}

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}

@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in 2s ease;
}

.slide-leave-active {
	animation: slide-out 2s ease;
}
</style>
