<template>
  <v-container>
    <v-row>
      <v-col>
        <div>
          <sheet-wrapper title="Habilidades">
            <div class="pa-4">
              <v-data-table
                :headers="[
                  {title: 'Type', align: 'center', width: '1rem', key: 'category', value: (item) => item.category === 'ability' ? '✨' : item.category === 'power' ? '⚡' : '🔮'},
                  {title: 'Nome', key: 'name'},
                  {title: 'Ação', key: 'action'},
                  {title: 'Mana', key: 'cost.mana'},
                  {title: 'Alcance', key: 'range'},
                  {title: 'Area', key: 'effect.area'},
                  {title: '', key: 'effect.description'}
                ]"
                hide-default-footer
                :items="sheet.actionList"
                :items-per-page="-1"
              >
                <template #item.effect.description="{ item }">
                  <v-btn
                    elevation="0"
                    @click="() => {
                      dialog = true
                      dialogText = item.effect.description
                    }"
                  >Description</v-btn>
                </template>
              </v-data-table>
            </div>
          </sheet-wrapper>
        </div>
      </v-col>
    </v-row>
    <v-dialog v-model:model-value="dialog" width="auto">
      <v-card class="pa-8" width="50em"><div v-for="(text, i) in dialogText.split('\n')" :key="i">{{ text }} <br></div></v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import type { Sheet } from '@/pages/index.vue'

type Props = {
	sheet: Sheet
}

const { sheet } = defineProps<Props>()

const dialogText = ref('')
const dialog = ref(false)
</script>
