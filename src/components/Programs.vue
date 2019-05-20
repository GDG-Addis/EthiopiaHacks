<template>
  <div>
    <v-toolbar tabs>

<<<<<<< HEAD
      <v-toolbar-title>Hackathon v1.0 <span class="subheading">Youth and Entrepreunership</span> </v-toolbar-title>
=======
      <v-toolbar-title>Hackathon v1.0 <span class="subheading">"Youth and Entrepreneurship"</span></v-toolbar-title>
      
>>>>>>> a676acda3e5803158470e8d3babe98359202e349

      <v-spacer></v-spacer>

      <span class="caption">Nov 16 to 18, 2018 @American Center, Addis Ababa</span>
     

      <v-tabs
        slot="extension"
        v-model="tabs"
        fixed-tabs
        icons-and-text
        centered

      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab v-for="(tab, key) in tabList" :key="key" :href="'#tab-'+ key">
          {{tab.title}}
          <v-icon>{{tab.icon}}</v-icon>
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs" class="elevation-1">
<<<<<<< HEAD
      <v-tab-item v-for="i in 6" :id="'tab-' + i" :key="i">
        <v-container fluid>
          <intro v-if="i == 1"></intro>
          <team v-if="i == 2"></team>
          <schedule v-if="i == 3"></schedule>
          <winner v-if="i == 4"></winner>
          <gallery v-if="i == 5"></gallery>
          <discussion v-if="i == 6"></discussion>
        </v-container>
          
=======
      <v-tab-item v-for="(tab, i) in tabList" :id="'tab-' + i" :key="i">
          <v-card flat>
            <v-card-text>
              <intro-page v-if="i == 0"></intro-page>
              <teams-page v-if="i == 1"></teams-page>
              <schedule-page v-if="i == 2"></schedule-page>
              <guideline-page v-if="i == 3"></guideline-page>
              <winners-page v-if="i == 4"></winners-page>
              <gallery-page v-if="i == 5"></gallery-page>
              <discussion-page v-if="i == 6"></discussion-page>
              
              </v-card-text>
          </v-card>
>>>>>>> a676acda3e5803158470e8d3babe98359202e349
        </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>

<<<<<<< HEAD
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
=======
import Intro from './programPages/Intro.vue';
import Teams from './programPages/Teams.vue';
import Schedule from './programPages/Schedule.vue';
import Guideline from './programPages/Guideline.vue';
import Winners from './programPages/Winners.vue';
import Gallery from './programPages/Gallery.vue';
import Discussion from './programPages/Discussion.vue';

export default {
  components: {
    'intro-page': Intro,
    'teams-page': Teams,
    'schedule-page': Schedule,
    'guideline-page': Guideline,
    'winners-page': Winners,
    'gallery-page': Gallery,
    'discussion-page': Discussion
>>>>>>> a676acda3e5803158470e8d3babe98359202e349
  },
  data() {
    return {
      tabs: null,
<<<<<<< HEAD
      
=======
      tabList: [
        {
          title: "Introduction",
          icon: "speaker_notes"
        }, 
        {
          title: "Teams",
          icon: "people"
        },
        {
          title: "Schedule",
          icon: "timer",
        },
        {
          title: "Guideline",
          icon: "book"
        },
        {
          title: "Winners",
          icon: "card_giftcard"
        },
        {
          title: "Gallery",
          icon: "collections"
        },
        {
          title: "Discussion",
          icon: "forum"
        }
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
>>>>>>> a676acda3e5803158470e8d3babe98359202e349
    };
  }
};
</script>