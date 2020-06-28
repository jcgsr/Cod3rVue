new Vue({
	el: "#app",
	data: {
		running: false,
		playerLife: 100,
		monsterLife: 100,
		logs: [],
		healQtd: 3
	},
	computed: {
		hasResult() {
			return this.playerLife == 0 || this.monsterLife == 0
		}
	},
	methods: {
		startGame() {
			this.running = true,
				this.playerLife = 100,
				this.monsterLife = 100,
				this.logs = []
		},
		attack(special) {
			this.hurt('monsterLife', 5, 10, special, 'Jogador', 'Monstro', 'player')
			if (this.monsterLife > 0) {
				this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
			}
		},
		hurt(prop, min, max, special, source, target, cls) {
			const plus = special ? 5 : 0
			const hurt = this.getRandom(min + plus, max + plus)
			this[prop] = Math.max(this[prop] - hurt, 0)
			this.registerLog(`${source} atingiu ${target} com ${hurt}.`, cls)
		},
		healAndHurt() {
			this.heal(10, 15)
			this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
		},
		heal(min, max) {
			const heal = this.getRandom(min, max)
			this.playerLife = Math.min(this.playerLife + heal, 100)
			this.registerLog(`Jogador ganhou força de ${heal}.`, 'player')

			if (this.healQtd) {
				--this.healQtd
				const heal = this.getRandom(min, max)
				this.playerLife = Math.min(this.playerLife + heal, 100)
				this.registerLog(`Jogador ganhou força de ${heal}. Restam ${this.healQtd} curas`, 'player')
			} else {
				this.registerLog('Você não possui mais curas 😬', 'player')
			}		
	},
	getRandom(min, max) {
		const value = Math.random() * (max - min) + min
		return Math.round(value)
	},
	registerLog(txt, cls) {
		this.logs.unshift({ txt, cls })
	},
	date() {

	}
},
	watch: {
	hasResult(value) {
		if (value) this.running = false
	}
}

})