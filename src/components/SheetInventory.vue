<template>
  <v-container>
    <v-row>
      <v-container>
        <v-row>
          <span class="text-h6">Equipped</span>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              control-variant="hidden"
              hide-details="auto"
              label="Slot 1"
              :model-value="findItem(sheet.inventory.equipped.wearing.slot1)"
              variant="outlined"
            />
          </v-col>
          <v-col>
            <v-text-field
              control-variant="hidden"
              hide-details="auto"
              label="Slot 2"
              :model-value="findItem(sheet.inventory.equipped.wearing.slot2)"
              variant="outlined"
            />
          </v-col>
          <v-col>
            <v-text-field
              control-variant="hidden"
              hide-details="auto"
              label="Slot 3"
              :model-value="findItem(sheet.inventory.equipped.wearing.slot3)"
              variant="outlined"
            />
          </v-col>
          <v-col>
            <v-text-field
              control-variant="hidden"
              hide-details="auto"
              label="Slot 4"
              :model-value="findItem(sheet.inventory.equipped.wearing.slot4)"
              variant="outlined"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              control-variant="hidden"
              hide-details="auto"
              label="Left Hand"
              :model-value="findItem(sheet.inventory.equipped.wielding.left)"
              variant="outlined"
            />
          </v-col>
          <v-col>
            <v-text-field
              control-variant="hidden"
              hide-details="auto"
              label="Right Hand"
              :model-value="findItem(sheet.inventory.equipped.wielding.right)"
              variant="outlined"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-divider class="my-5" />
    </v-row>
    <v-row>
      <span class="text-h6">Inventory</span>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-number-input
          control-variant="hidden"
          hide-details="auto"
          label="T$"
          :model-value="sheet.inventory.money"
          variant="outlined"
        />
      </v-col>
      <v-col cols="4">
        <v-number-input
          control-variant="hidden"
          hide-details="auto"
          label="Inventory Sell Value"
          :model-value="sheet.inventory.itemPriceTotal"
          variant="outlined"
        />
      </v-col>
      <v-col cols="4">
        <v-number-input
          control-variant="hidden"
          hide-details="auto"
          label="Slots"
          :model-value="sheet.inventory.slotTotal"
          :suffix="`${sheet.inventory.slotMax}`"
          variant="outlined"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="[
            {title: 'Nome', key:'name'},
            {title: 'Price', key:'price', maxWidth: '1em', align: 'end'},
            {title: 'Slots', key:'slotCost', maxWidth: '1em', align: 'end'},
            {title: '', key: 'effect.description', maxWidth: '3em'},
          ]"
          hide-default-footer
          :items="sheet.inventory.itemList"
          :items-per-page="-1"
        >
          <template #item.effect.description="{ item }">
            <v-btn
              elevation="0"
              @click="() => {
                dialog = true
                dialogText = item.description
              }"
            >Description</v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-dialog v-model:model-value="dialog" width="auto">
      <v-card class="pa-8" width="50em">{{ dialogText }}</v-card>
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

const findItem = (index: number | null) => index === null
	? ''
	: sheet.inventory.itemList[index].name

</script>
