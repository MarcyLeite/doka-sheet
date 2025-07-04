<template>
  <div>
    <span class="text-h3">Doka </span>
    <span class="text-subtitle-1">by Marcy</span>
  </div>
  <v-container>
    <v-container class="px-0">
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
                  :label="attribute.name"
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
              <div class="text-subtitle-2 bg-surface ml-2 px-2" style="position: absolute; margin-top: -0.75em; float: left">
                Classes
              </div>
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
                    hide-details="auto"
                    readonly
                    :suffix="`${pclass.level}`"
                    variant="underlined"
                  />
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-divider />

    <v-container class="px-0">
      <v-row>
        <v-col>
          <div class="d-flex flex-column  h-100">
            <v-container class="pa-0 ma-0">
              <v-row>
                <v-col>
                  <v-number-input
                    control-variant="hidden"
                    hide-details="auto"
                    label="HP"
                    :max="sheet.hp.max"
                    :model-value="sheet.hp.current"
                    :suffix="`${sheet.hp.max.toString()}+${sheet.hp.temp}`"
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
                    :suffix="`${sheet.mp.max}+${sheet.mp.temp}`"
                    variant="outlined"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-number-input
                    control-variant="hidden"
                    hide-details="auto"
                    label="Defesa"
                    :model-value="sheet.ca"
                    variant="outlined"
                  />
                </v-col>
              </v-row>
            </v-container>
            <div class="p-relative border-sm rounded mt-6 flex-grow-1">
              <div class="text-subtitle-2 bg-surface ml-2 px-2" style="position: absolute; margin-top: -0.75em; float: left">
                Proficiências
              </div>
              <div class="my-4">
                <div class="overflow-auto px-4 h-100" style="max-height: 8em;">
                  <v-list disabled :items="sheet.proficiencyList" />
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="h-100">
            <div class="p-relative border-sm rounded h-100">
              <div class="text-subtitle-2 bg-surface ml-2 px-2" style="position: absolute; margin-top: -0.75em; float: left">
                Perícias
              </div>
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
                      <v-checkbox-btn
                        v-model="item.trained"
                        readonly
                        :ripple="false"
                      />
                    </template>
                  </v-data-table>
                </div>
              </div>
            </div>
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
	{ title: 'Trained', key: 'trained', value: (item: any) => item.trained ?? false },
	{ title: 'Skill', value: 'name' },
	{ title: 'Total', key: 'total', value: (skill: any) => computeSkill(skill) },
]

type Props = {
	sheet: Sheet
}

const { sheet } = defineProps<Props>()
</script>
