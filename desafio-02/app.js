new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Alerta!')
        },
        guardar(e) {
            this.valor = e.target.value
        }
    }
})