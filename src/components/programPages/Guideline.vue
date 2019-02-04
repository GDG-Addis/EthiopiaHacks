<template>
  <v-card class="mx-auto">
    <v-card-title class="blue-grey white--text">
      <span class="title">Guidelines and Rules</span>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-text class="py-0">
      <v-timeline dense>
        
        <v-slide-x-reverse-transition>
          <v-timeline-item color="green lighten-3" fill-dot>
            <span slot="icon">1</span>
            <v-card>
              <v-card-title primary-title>
                <span class="title">Program Objective</span>
              </v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-slide-x-reverse-transition>

        <v-slide-x-reverse-transition>
          <v-timeline-item color="blue lighten-3" fill-dot>
            <span slot="icon">2</span>
            <v-card>
              <v-card-title primary-title>
                <span class="title">Code of Conduct</span>
              </v-card-title>
              <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-slide-x-reverse-transition>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>