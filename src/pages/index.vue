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
	speed: 9,

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
			name: 'Algo',
			action: 'passive',
			category: 'ability',
			cost: {
				mana: 2,
			},
			range: 'mid',
			effect: {
				description: 'fazer algo',
				area: 'cone 8m',
			},
		},
		{
			name: 'Poder',
			action: 'passive',
			category: 'power',
			cost: {
				mana: 2,
			},
			range: 'mid',
			effect: {
				description: 'fazer algo',
				area: 'cone 8m',
			},
		},
	],
}

const sheet = reactive(baseSheet)

const updateInventory = () => {
	sheet.inventory.slotTotal = sheet.inventory.itemList.reduce((total, item) => total += item.slotCost, 0)
	sheet.inventory.itemPriceTotal = sheet.inventory.itemList.reduce((total, item) => total += item.price, 0)
}

watch([sheet.inventory.itemList], updateInventory, { deep: true })

onMounted(() => {
	updateInventory()
})

</script>
