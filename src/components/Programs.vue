<template>
  <div>
    <v-toolbar tabs color="primary" dark>

      <v-toolbar-title>Hackathon v1.0 <span class="subheading">"Youth and Entrepreneurship"</span></v-toolbar-title>
      

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
        color="primary"
        icons-and-text
        centered

        dark
      >
        <v-tabs-slider></v-tabs-slider>

        <v-tab v-for="(tab, key) in tabList" :key="key" :href="'#tab-'+ key">
          {{tab.title}}
          <v-icon>{{tab.icon}}</v-icon>
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs" class="white elevation-1">
      <v-tab-item v-for="(tab, i) in tabList" :id="'tab-' + i" :key="i">
          <v-card flat>
            <v-card-text>
              <intro-page v-if="i == 0"></intro-page>
              <teams-page v-if="i == 1"></teams-page>
              
              </v-card-text>
          </v-card>
        </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>

import Intro from './programPages/Intro.vue';
import Teams from './programPages/Teams.vue';

export default {
  components: {
    'intro-page': Intro,
    'teams-page': Teams
  },
  data() {
    return {
      tabs: null,
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
          title: "Judging",
          icon: "how_to_vote"
        },
        {
          title: "Rules",
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
    };
  }
};
</script>