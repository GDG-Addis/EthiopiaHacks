<template>
  <div>
    <v-toolbar tabs>

      <v-toolbar-title>Hackathon v1.0 <span class="subheading">Youth and Entrepreunership</span> </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>

      <v-tabs
        slot="extension"
        v-model="tabs"
        fixed-tabs
        icons-and-text
        centered

        dark
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab href="#tab-1">Introduction
          <v-icon>speaker_notes</v-icon>
        </v-tab>

        <v-tab href="#tab-2">Teams
          <v-icon>people</v-icon>
        </v-tab>

        <v-tab href="#tab-3">Schedule
          <v-icon>timer</v-icon>
        </v-tab>

        <v-tab href="#tab-4">Winners
          <v-icon>card_giftcard</v-icon>
        </v-tab>

        <v-tab href="#tab-5">Gallery
          <v-icon>collections</v-icon>
        </v-tab>
        <v-tab href="#tab-6">Discussion
          <v-icon>forum</v-icon>
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs" class="elevation-1">
      <v-tab-item v-for="i in 6" :id="'tab-' + i" :key="i">
        <v-container fluid>
          <intro v-if="i == 1"></intro>
          <team v-if="i == 2"></team>
          <schedule v-if="i == 3"></schedule>
          <winner v-if="i == 4"></winner>
          <gallery v-if="i == 5"></gallery>
          <discussion v-if="i == 6"></discussion>
        </v-container>
          
        </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>

import Introduction from './programs/Introduction.vue';
import Teams from './programs/Teams.vue';
import Schedules from './programs/Schedules.vue'
import Winners from './programs/Winners.vue'
import Gallery from './programs/Gallery.vue'
import Discussion from './programs/Discussion.vue'

//Mixins
import appMixins from "../mixins/appMixins.js";

export default {
  mixins: [appMixins],
  components:{
    "intro":Introduction,
    "team": Teams,
    "schedule": Schedules,
    "winner": Winners,
    "gallery": Gallery,
    "discussion": Discussion
  },
  data() {
    return {
      tabs: null,
      
    };
  }
};
</script>