<template>
  <div class="d-flex justify-center ma-8">
    <v-responsive max-width="60em">
      <v-sheet class="pa-4">
        <sheet-overview :sheet="sheet" />
      </v-sheet>
    </v-responsive>
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify'

export type Sheet = typeof sheet

const sheet = reactive({
	race: 'Humano',
	origin: 'Alguma',
	divinity: 'Nimb',

	classList: [
		{
			name: 'Inventor',
			level: 3,
		},
	],
	attributeList: [
		{ name: 'for', value: 1 },
		{ name: 'des', value: 1 },
		{ name: 'con', value: 2 },
		{ name: 'int', value: 3 },
		{ name: 'sab', value: 2 },
		{ name: 'car', value: 5 },
	],
	hp: {
		current: 15,
		max: 20,
		temp: 3,
	},
	mp: {
		current: 15,
		max: 20,
		temp: 3,
	},
	ca: 13,

	proficiencyList: ['Simples', 'Exótica'],

	skillList: [
		{
			name: 'Acrobacia',
			attribute: 'des',
			penalty: true,
			trained: true,
		},
		{
			name: 'Adestramento',
			attribute: 'car',
			onlyTrained: true,
		},
		{
			name: 'Atletismo',
			attribute: 'for',
		},
		{
			name: 'Atuação',
			attribute: 'car',
		},
		{
			name: 'Cavalgar',
			attribute: 'des',
		},
		{
			name: 'Conhecimento',
			attribute: 'int',
			onlyTrained: true,
		},
		{
			name: 'Cura',
			attribute: 'sab',
		},
		{
			name: 'Diplomacia',
			attribute: 'car',
		},
		{
			name: 'Enganação',
			attribute: 'car',
		},
		{
			name: 'Fortitude',
			attribute: 'con',
		},
		{
			name: 'Furtividade',
			attribute: 'des',
			penalty: true,
		},
		{
			name: 'Guerra',
			attribute: 'int',
			onlyTrained: true,
		},
		{
			name: 'Iniciativa',
			attribute: 'des',
		},
		{
			name: 'Intimidação',
			attribute: 'car',
		},
		{
			name: 'Intuição',
			attribute: 'sab',
		},
		{
			name: 'Investigação',
			attribute: 'int',
		},
		{
			name: 'Jogatina',
			attribute: 'car',
			onlyTrained: true,
		},
		{
			name: 'Ladinagem',
			attribute: 'des',
			penalty: true,
			onlyTrained: true,
		},
		{
			name: 'Luta',
			attribute: 'for',
		},
		{
			name: 'Misticismo',
			attribute: 'int',
			onlyTrained: true,
		},
		{
			name: 'Nobreza',
			attribute: 'int',
			onlyTrained: true,
		},
		{
			name: 'Ofício',
			attribute: 'int',
		},
		{
			name: 'Percepção',
			attribute: 'sab',
		},
		{
			name: 'Pilotagem',
			attribute: 'con',
			onlyTrained: true,
		},
		{
			name: 'Pontaria',
			attribute: 'des',
		},
		{
			name: 'Reflexos',
			attribute: 'des',
		},
		{
			name: 'Religião',
			attribute: 'sab',
		},
		{
			name: 'Sobreviência',
			attribute: 'sab',
		},
		{
			name: 'Vontade',
			attribute: 'sab',
		},
	],
})

const theme = useTheme()
console.log(theme)

</script>

<style scoped>
    .centered-input >>> input {
      text-align: center
    }
</style>
