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
		{ name: 'car', value: 0 },
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
		money: 995,
		equipped: {
			wielding: {
				left: 1,
				right: 2,
			},
			wearing: {
				slot1: 12,
				slot2: 3,
				slot3: 4,
				slot4: 5,
			},
		},
		itemList: [
			{
				name: 'Mochila de Aventureiro',
				price: 50,
				slotCost: 0,
				effect: {
					having: (sheet: any) => {
						sheet.inventory.slotMax += 2
					},
				},
			},
			{
				name: 'Chakram Eletromagnético (Adaga Mental)',
				price: 100,
				slotCost: 1,
			},
			{
				name: 'Cubo Elemental (Criar elementos)',
				price: 100,
				slotCost: 1,
			},
			{
				name: 'Kit de aviação cromático (Leque cromático)',
				price: 100,
				slotCost: 1,
			},
			{
				name: 'Lançador de teias (Teia)',
				price: 100,
				slotCost: 1,
			},
			{
				name: 'Canhão de Spinners Gasosos (Névoa)',
				price: 100,
				slotCost: 1,
			},
			{
				name: 'Instrumento de Engenhoqueiro',
				price: 30,
				slotCost: 1,
			},
			{
				name: 'Instrumento de Armeiro',
				price: 30,
				slotCost: 1,
			},
			{
				name: 'Balas (20)',
				price: 20,
				slotCost: 1,
			},
			{
				name: 'Trobo',
				price: 60,
				slotCost: 0,

				description: 'Estas enormes aves também chamadas de pássaros-rouros, são parecidas com avestruzes com chifres, couro e cascos. Não têm asas. Possuem poucas penas, que servem apenas como ornamento. Muito dóceis, trobos são usados em áreas rurais como animais de cargas e tração, mas também podem ser usados como montaria.',
			},
			{
				name: 'Carruagem',
				price: 500,
				slotCost: 0,

				description: 'Veículo de quatro rodas, capaz de transportar até quatro pessoas em uma cabina fechada, mais dois condutores do lado de fora. é puxada por dois cavalos ou um trobo. Inclui os arreios necesários para controlar os animais. Deslocamento 9m, Defesa 8 + des do condutor, 50 PV e pode carregar até 4 criaturas médias ou 80 espaços.',

			},
			{
				name: 'Mosquete (Precisa) (Mitral)',
				price: 3800,
				slotCost: 2,
				metadata: {
					damage: {
						dice: '2d8',
						threat: 17,
						multiplier: 3,
					},
				},

				description: 'Uma arma de fogo de uso difícil, mas com poder devastador. Recarregar um mosquete é uma ação padrão. (Precisa) A margem de ameaça aumenta em 1 ponto. (Mitrial) A margem de ameaça aumenta em 1 ponto.',
			},
			{
				name: 'Couro Batido (Ajustada)',
				price: 335,
				slotCost: 2,
				effect: {
					wearing: (sheet: any) => {
						sheet.ca += 3
					},
				},

				description: 'Versão peada da armadura de couro, reforçada com rebites de metal.',
			},
		],
	},
	inventoryOther: {
		slotMax: 80,
		slotTotal: 0,
		itemPriceTotal: 0,
		money: 0,

		itemList: [
			{
				name: 'Ração de viagem (30)',
				price: 15,
				slotCost: 15,
			},
			{
				name: 'Barraca',
				price: 10,
				slotCost: 1,

				description: 'Esta barraca de lona conta como um saco de dormir para duas pessoas e fornece +2 em testes de sobrevivência para acampar.',
			},
			{
				name: 'Balas (40)',
				price: 40,
				slotCost: 2,
			},
		],
	},
	actionList: [
		{
			name: 'Foco em Ofício (engenhoqueiro)',
			action: 'free',
			category: 'power',
			from: 'Versátil',
			cost: {
				mana: 1,
			},
			effect: {
				description: 'Pode gastar 1 PM para rolar dois dados e usar o melhor resultado.',
			},
		},
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
				description: 'Você recebeaté 5 itens gerais que possa fabricar num valor total de até T$ 100.',
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
				description: 'Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).',
			},
		},
		{
			name: 'Adaga Mental',
			action: 'default',
			category: 'magic',
			from: 'Engenhoqueiro',
			range: 'short',
			duration: 'instant',
			cost: {
				mana: 1,
			},
			effect: {
				description: `Vontade parcial
 
Você manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano psíquico e fica atordoado por uma rodada. Se passar no teste de resistência, sofre apenas metade do dano e evita a condição. Uma criatura só pode ficar atordoada por esta magia uma vez por cena.

+1 PM: você lança a magia sem gesticular ou pronunciar palavras (o que permite lançar esta magia de armadura) e a adaga se torna invisível. Se o alvo falhar no teste de resistência, não percebe que você lançou uma magia contra ele.

+2 PM: muda a duração para um dia. Além do normal, você “finca” a adaga na mente do alvo. Enquanto a magia durar, você sabe a direção e localização do alvo, desde que ele esteja no mesmo mundo.

+2 PM: aumenta o dano em +1d6.`,
			},
		},
		{
			name: 'Criar elementos',
			action: 'default',
			category: 'magic',
			from: 'Engenhoqueiro',
			range: 'short',
			duration: 'instant',
			cost: {
				mana: 1,
			},
			effect: {
				description: `Você cria uma pequena porção de um elemento, a sua escolha. Os elementos criados são reais, não mágicos. Elementos físicos devem surgir em uma superfície. Em vez de um cubo, pode- -se criar objetos simples (sem partes móveis) feitos de gelo, terra ou pedra. Água: enche um recipiente de tamanho Minúsculo (como um odre) com água potável ou cria um cubo de gelo de tamanho Minúsculo. Ar: cria um vento fraco em um quadrado de 1,5m. Isso purifica a área de qualquer gás ou fumaça, ou remove névoa por uma rodada. Fogo: cria uma chama que ilumina como uma tocha. Você pode segurá-la na palma de sua mão sem se queimar, ou fazê-la surgir em um quadrado de 1,5m. Se uma criatura ou objeto estiver no quadrado, sofre 1d6 pontos de dano de fogo se falhar num teste de Reflexos, fica em chamas. Terra: cria um cubo de tamanho Minúsculo feito de terra, argila ou pedra.

+1 PM: aumenta a quantidade do elemento em um passo (uma categoria de tamanho para água ou terra, +1 quadrado de 1,5m para ar e fogo).

+1 PM: muda o efeito para alvo 1 criatura ou objeto e a resistência para Reflexos reduz à metade. Se escolher água ou terra, você arremessa o cubo ou objeto criado no alvo, causando 2d4 pontos de dano de impacto. Para cada categoria de tamanho acima de Minúsculo, o dano aumenta em um passo. O cubo se desfaz em seguida.

+1 PM: se escolheu fogo, aumenta o dano inicial de cada chama em +1d6.`,
			},
		},
		{
			name: 'Leque Cromático',
			action: 'default',
			category: 'magic',
			from: 'Engenhoqueiro',
			range: 'self',
			duration: 'instant',
			cost: {
				mana: 1,
			},
			effect: {
				area: 'cone 4.5',
				description: `Vontade parcial

Um cone de luzes brilhantes surge das suas mãos, deixando os animais e humanoides na área atordoados por 1 rodada (apenas uma vez por cena, Vontade anula) e ofuscados pela cena. Esta magia não afeta criaturas cegas.

+2 PM: além do normal, as criaturas afetadas ficam vulneráveis pela cena.

+2 PM: também afeta espíritos e monstros na área. Requer 2º círculo.

+5 PM: também afeta construtos, espíritos, monstros e mortos-vivos na área. Requer 3º círculo.`,
			},
		},
		{
			name: 'Teia',
			action: 'default',
			category: 'magic',
			from: 'Engenhoqueiro',
			range: 'short',
			duration: 'scene',
			cost: {
				mana: 1,
			},
			effect: {
				area: 'cube 6',
				description: `Reflexo parcial

Teia cria várias camadas de fibras entrelaçadas e pegajosas na área. Qualquer criatura na área que falhar na resistência fica enredada. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. A área ocupada por Teia é terreno difícil. A Teia é inflamável. Qualquer ataque que cause dano de fogo destrói as teias por onde passar, libertando as criaturas enredadas mas deixando-as em chamas.

+1 PM: além do normal, criaturas que falhem na resistência também ficam imóveis.

+2 PM: além do normal, no início de seus turnos a magia afeta novamente qualquer criatura na área, exigindo um novo teste de Reflexos. Requer 2º círculo.

+2 PM: aumenta a área em +1 cubo de 1,5m. `,
			},
		},
		{
			name: 'Névoa',
			action: 'default',
			category: 'magic',
			from: 'Engenhoqueiro',
			range: '6m raio 6 altura',
			duration: 'scene',
			cost: {
				mana: 1,
			},
			effect: {
				area: 'cube 6',
				description: `
Uma névoa espessa eleva-se de um ponto a sua escolha, obscurecendo toda a visão — criaturas a até 1,5m têm camuflagem leve e criaturas a partir de 3m têm camuflagem total. Um vento forte dispersa a névoa em 4 rodadas e um vendaval a dispersa em 1 rodada. Esta não funciona sob a água.

+1 PM: a magia também funciona sob a água, criando uma nuvem de tinta.

+2 PM: você pode escolher criaturas no alcance ao lançar a magia elas enxergam através do efeito. Requer 2º círculo.

+2 PM: a nuvem tem um cheiro horrível. No início de seus turnos, qualquer criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude. Se falhar, fica enjoada por uma rodada.

+2 PM: a nuvem tem um tom esverdeado e se torna cáustica. No início de seus turnos, criaturas dentro dela sofrem 2d4 pontos de dano de ácido.

+3 PM: aumenta o dano de ácido em +2d4.

+5 PM: além do normal, a nuvem fica espessa, quase sólida. Qualquer criatura dentro dela tem seu deslocamento reduzido para 3m (independentemente de seu deslocamento normal) e sofre –2 em testes de ataque e rolagens de dano. `,
			},
		},
	],
}

const sheet = reactive(baseSheet)

const updateInventory = () => {
	sheet.inventory.slotTotal = sheet.inventory.itemList.reduce((total, item) => total += item.slotCost, 0)
	sheet.inventory.itemPriceTotal = sheet.inventory.itemList.reduce((total, item) => total += item.price, 0)

	sheet.inventoryOther.slotTotal = sheet.inventoryOther.itemList.reduce((total, item) => total += item.slotCost, 0)
	sheet.inventoryOther.itemPriceTotal = sheet.inventoryOther.itemList.reduce((total, item) => total += item.price, 0)
}

const updateHP = () => {
	const con = sheet.attributeList.find(a => a.name === 'con')!.value
	sheet.hp.max = 12 + con + ((3 + con) * (sheet.classList[0].level - 1))
}
const updateMP = () => {
	sheet.mp.max = 4 * sheet.classList[0].level
}
const updateMaxSlot = () => {
	sheet.inventory.slotMax = 10 + (sheet.attributeList.find(a => a.name === 'for')!.value * 2)
}
const udpateDefense = () => {
	sheet.ca = 10
}

watch([sheet.inventory.itemList], updateInventory, { deep: true })
watch([sheet.inventoryOther.itemList], updateInventory, { deep: true })

watch([sheet.attributeList], () => {
	updateHP()
	updateMP()
}, { deep: true })

onMounted(() => {
	updateInventory()
	updateHP()
	updateMP()
	updateMaxSlot()
	udpateDefense()

	for (const i in sheet.inventory.itemList) {
		const item = sheet.inventory.itemList[i]
		if (item.effect?.having) item.effect.having(sheet)
	}

	for (const index of Object.values(sheet.inventory.equipped.wearing)) {
		const item = sheet.inventory.itemList[index]
		if (item.effect?.wearing) item.effect.wearing(sheet)
	}
})

</script>
