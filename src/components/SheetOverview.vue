<template>
  <v-container>
    <v-container class="pa-0">
      <v-row>
        <v-col>
          <v-container class="pa-0">
            <v-row>
              <v-col>
                <v-text-field
                  hide-details="auto"
                  label="Raça"
                  :model-value="sheet.race"
                  readonly
                  variant="outlined"
                />
              </v-col>
              <v-col>
                <v-text-field
                  hide-details="auto"
                  label="Origem"
                  :model-value="sheet.origin"
                  readonly
                  variant="outlined"
                />
              </v-col>
              <v-col>
                <v-text-field
                  hide-details="auto"
                  label="Divindade"
                  :model-value="sheet.divinity"
                  readonly
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col v-for="(attribute, i) in sheet.attributeList" :key="i">
                <v-text-field
                  v-model:model-value="attribute.value"
                  class="centered-input"
                  hide-details="auto"
                  :label="attribute.name.toUpperCase()"
                  readonly
                  variant="outlined"
                />
              </v-col>

            </v-row>
          </v-container>
        </v-col>
        <v-col cols="4">
          <div class="h-100">
            <div class="p-relative border-sm rounded h-100">
              <sheet-wrapper title="Classes">
                <div class="my-4">
                  <div class="px-4 d-flex justify-space-between w-100">
                    <span class="text-subtitle-2">Level</span>
                    <span>{{ computeLevel() }}</span>
                  </div>
                  <div class="overflow-auto px-4 h-100" style="max-height: 8em;">
                    <v-text-field
                      v-for="(pclass, i) in sheet.classList"
                      :key="i"
                      v-model:model-value="pclass.name"
                      disabled
                      hide-details="auto"
                      :suffix="`${pclass.level}`"
                      variant="underlined"
                    />
                  </div>
                </div>
              </sheet-wrapper>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="mt-4" />

    <v-container class="px-0">
      <v-row>
        <v-col>
          <div class="d-flex flex-column h-100">
            <v-container class="pa-0 ma-0">
              <v-row>
                <v-col>
                  <v-number-input
                    control-variant="hidden"
                    hide-details="auto"
                    label="HP"
                    :max="sheet.hp.max"
                    :model-value="sheet.hp.current"
                    :suffix="`${sheet.hp.max.toString()}${sheet.hp.temp ? `+${sheet.hp.temp}` : ''}`"
                    variant="outlined"
                  />
                </v-col>
                <v-col>
                  <v-number-input
                    control-variant="hidden"
                    hide-details="auto"
                    label="MP"
                    :max="sheet.mp.max"
                    :model-value="sheet.mp.current"
                    :suffix="`${sheet.mp.max.toString()}${sheet.mp.temp ? `+${sheet.mp.temp}` : ''}`"
                    variant="outlined"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="8">
                  <v-number-input
                    control-variant="hidden"
                    hide-details="auto"
                    label="Defesa"
                    :model-value="sheet.ca"
                    variant="outlined"
                  />
                </v-col>
                <v-col>
                  <v-number-input
                    control-variant="hidden"
                    hide-details="auto"
                    label="Velocidade (m)"
                    :model-value="sheet.speed"
                    readonly
                    :suffix="`${Math.floor(sheet.speed / 1.5)}`"
                    variant="outlined"
                  />
                </v-col>
              </v-row>
            </v-container>

            <div class="mt-6">
              <sheet-wrapper title="Proficiências">
                <div class="my-4">
                  <div class="overflow-auto px-4 h-100" style="max-height: 8em;">
                    <v-list disabled :items="sheet.proficiencyList" />
                  </div>
                </div>
              </sheet-wrapper>
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="h-100">
            <sheet-wrapper title="Perícias">
              <div class="mt-4">
                <div class="overflow-auto px-4 h-100" style="max-height: 16em;">
                  <v-data-table
                    :headers="skillTableHeaderList"
                    hide-default-footer
                    hide-default-header
                    :items="sheet.skillList"
                    :items-per-page="-1"
                  >
                    <template #item.trained="{ item }">
                      <span>
                        <v-checkbox-btn
                          v-model="item.trained"
                          readonly
                          :ripple="false"
                        />
                      </span>
                    </template>
                  </v-data-table>
                </div>
              </div>
            </sheet-wrapper>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import type { Sheet } from '@/pages/index.vue'

const computeLevel = () => sheet.classList.reduce((total, pclass) => total + pclass.level, 0)
const computeSkill = (skill: any) => skill.onlyTrained && !skill.trained ? '-' : Math.floor(computeLevel() / 2) + (sheet.attributeList.find(a => a.name === skill.attribute)?.value ?? 0)

const skillTableHeaderList = [
	{ title: 'Trained', maxWidth: 'fit-content', key: 'trained', value: (item: any) => item.trained ?? false },
	{ title: 'Skill', key: 'name' },
	{ title: 'Total', align: 'center' as const, key: 'total', value: (skill: any) => computeSkill(skill) },
]

type Props = {
	sheet: Sheet
}

const { sheet } = defineProps<Props>()

</script>
<style scoped>
    .centered-input >>> input {
      text-align: center
    }
</style>
