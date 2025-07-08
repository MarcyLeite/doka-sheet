<template>
  <div class="d-flex justify-center ma-16">
    <v-responsive max-width="60em">
      <v-sheet class="rounded pa-8">
        <div class="d-flex ga-4 flex-column">
          <div>
            <span class="text-h3">{{ sheet.name }}</span>
            {{ ' ' }}
            <span class="text-subtitle-1">by {{ sheet.creator }}</span>
          </div>

          <div>
            <v-tabs v-model:model-value="tab" class="d-flex w-100">
              <v-tab value="overview">
                Overview
              </v-tab>
              <v-tab value="inventory">
                Inventory
              </v-tab>
              <v-tab value="talent">
                Talent
              </v-tab>
            </v-tabs>
            <v-divider />
          </div>
        </div>

        <div class="pt-6">
          <v-tabs-window v-model:model-value="tab">
            <v-tabs-window-item value="overview">
              <sheet-overview :sheet="sheet" />
            </v-tabs-window-item>
            <v-tabs-window-item value="inventory">
              <sheet-inventory :sheet="sheet" />
            </v-tabs-window-item>
            <v-tabs-window-item value="talent">
              <sheet-talent :sheet="sheet" />
            </v-tabs-window-item>
          </v-tabs-window>
        </div>
      </v-sheet>
    </v-responsive>
  </div>
</template>

<script lang="ts" setup>
const tab = ref(null)
export type Sheet = typeof baseSheet

const baseSheet = {
	name: 'Doka',
	creator: 'Marcy',

	race: 'Humano',
	origin: 'Artesão',
	divinity: '-',

	classList: [
		{
			name: 'Inventor',
			level: 5,
		},
	],
	attributeList: [
		{ name: 'for', value: 0 },
		{ name: 'des', value: 3 },
		{ name: 'con', value: 0 },
		{ name: 'int', value: 5 },
		{ name: 'sab', value: 3 },
		{ name: 'car', value: 1 },
	],
	hp: {
		current: 24,
		max: 20,
		temp: 0,
	},
	mp: {
		current: 20,
		max: 20,
		temp: 0,
	},
	ca: 0,
	speed: 9,

	proficiencyList: ['Armas Marciais (distância)', 'Armas de Fogo'],

	skillList: [
		{
			name: 'Acrobacia',
			attribute: 'des',
			penalty: true,
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
			trained: true,
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
			trained: true,
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
			trained: true,
		},
		{
			name: 'Nobreza',
			attribute: 'int',
			onlyTrained: true,
		},
		{
			name: 'Ofício (engenhoqueiro)',
			attribute: 'int',
			onlyTrained: true,
			trained: true,
		},
		{
			name: 'Ofício (armeiro)',
			attribute: 'int',
			onlyTrained: true,
			trained: true,
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
			trained: true,
		},
		{
			name: 'Pontaria',
			attribute: 'int',
			trained: true,
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
			trained: true,
		},
	],
	inventory: {
		slotMax: 0,
		slotTotal: 0,
		itemPriceTotal: 0,
		money: 0,
		equipped: {
			wielding: {
				left: 0,
				right: null,
			},
			wearing: {
				slot1: null,
				slot2: null,
				slot3: null,
				slot4: null,
			},
		},
		itemList: [
			{
				name: 'Adaga',
				price: 2,
				slotCost: 1,
				equippable: {
					wield: true,
				},
				metadata: {
					damage: {
						dice: '1d4',
						threat: 19,
					},
				},

				description: 'ABC',
			},
			{
				name: 'Couro Batido',
				price: 35,
				slotCost: 2,
				metadata: {
					defense: {
						value: 3,
						penalty: -1,
					},
				},

				description: 'DEF',
			},
		],
	},
	actionList: [
		{
			name: 'Engenhosidade',
			action: 'free',
			category: 'ability',
			from: 'Inventor 1',
			cost: {
				mana: 2,
			},
			effect: {
				description: 'Quando faz um teste de perícia, você pode gastar 2 PM para somar a sua inteligência no teste. Você não pode usar esta habilidade em testes de ataque.',
			},
		},
		{
			name: 'Protótipo',
			action: 'passive',
			category: 'ability',
			from: 'Inventor 1',
			effect: {
				description: 'Você começa o jogo com um item superior , com o preço total de até T$ 500.',
			},
		},
		{
			name: 'Fabricar Item Superior (1)',
			action: 'passive',
			category: 'ability',
			from: 'Inventor 2',
			effect: {
				description: 'Você recebe um item superior com preço de até T$ 2.000 e passa a poder fabricar item superiores com uma melhoria.',
			},
		},
		{
			name: 'Engenhoqueiro',
			action: 'passive',
			category: 'power',
			from: 'Inventor 2',
			effect: {
				description: 'Você pode fabricar engenhocas.',
			},
		},
		{
			name: 'Comerciante',
			action: 'free',
			category: 'ability',
			from: 'Inventor 3',
			effect: {
				description: 'Você pode vender itens 10% mais caro (não cumulativo com barganha).',
			},
		},
		{
			name: 'Autômato (Iniciante)',
			action: 'passive',
			category: 'power',
			from: 'Inventor 3',
			effect: {
				description: 'Você fabrica um autômato, um construto que obedece a seus comandos. Se o autômato for destruído, você pode fabricar um novo com uma semana de trabalho e T$ 100.',
			},
		},
		{
			name: 'Balística',
			action: 'passive',
			category: 'power',
			from: 'Inventor 4',
			effect: {
				description: 'Você recebe a proficiência com armas marciais de ataque à distância ou com armas de fogo. Quando usa uma arma de ataque à distância, pode usar sua inteligência em vez de Destreza nos testes de ataqeu (e, caso possua o poder Estilo de Disparo, nas rolagens de dano).',
			},
		},
		{
			name: 'Fabricar Item Superior (2)',
			action: 'passive',
			category: 'ability',
			from: 'Inventor 5',
			effect: {
				description: 'Substitui seu item superior por um item superior com duas melhorarias. Passa a poder fabricar itens superiores com duas melhorias.',
			},
		},
		{
			name: 'Chutes e palavrões',
			action: 'free',
			category: 'power',
			from: 'Inventor 5',
			cost: {
				mana: 1,
			},
			effect: {
				description: 'Uma vez por rodada, você pode pagar 1 PM para repitir um teste de Ofício (engenhoqueiro) recém realizado para ativar uma engenhoca.',
			},
		},
		{
			name: 'Frutos do Trabalho',
			action: 'passive',
			category: 'power',
			from: 'Artesão',
			effect: {
				description: 'Você recebeaté 5 itens gerais que possa fabricar num valor total de até T$ 100',
			},
		},
		{
			name: 'Sortudo',
			action: 'free',
			category: 'power',
			from: 'Artesão',
			cost: {
				mana: 3,
			},
			effect: {
				description: 'Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por test)',
			},
		},
	],
}

const sheet = reactive(baseSheet)

const updateInventory = () => {
	sheet.inventory.slotTotal = sheet.inventory.itemList.reduce((total, item) => total += item.slotCost, 0)
	sheet.inventory.itemPriceTotal = sheet.inventory.itemList.reduce((total, item) => total += item.price, 0)
}

const updateHP = () => {
	const con = sheet.attributeList.find(a => a.name === 'con')!.value
	sheet.hp.max = 12 + con + ((3 + con) * (sheet.classList[0].level - 1))
}
const updateMP = () => {
	sheet.mp.max = 4 * sheet.classList[0].level
}

watch([sheet.inventory.itemList], updateInventory, { deep: true })
watch([sheet.attributeList], () => {
	updateHP()
	updateMP()
}, { deep: true })

onMounted(() => {
	updateInventory()
	updateHP()
	updateMP()
})

</script>
