<template>
  <div>
    <v-toolbar tabs>
      <v-toolbar-title>
        Hackathon v1.0
        <span class="subheading">"Youth and Entrepreneurship"</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <span class="caption">Nov 16 to 18, 2018 @American Center, Addis Ababa</span>

      <v-tabs slot="extension" v-model="tabs" fixed-tabs icons-and-text centered>
        <v-tabs-slider></v-tabs-slider>

        <v-tab v-for="(tab, key) in tabList" :key="key" :href="'#tab-'+ key">
          {{tab.title}}
          <v-icon>{{tab.icon}}</v-icon>
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs" class="elevation-1">
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
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import Intro from "./programPages/Intro.vue";
import Teams from "./programPages/Teams.vue";
import Schedule from "./programPages/Schedule.vue";
import Guideline from "./programPages/Guideline.vue";
import Winners from "./programPages/Winners.vue";
import Gallery from "./programPages/Gallery.vue";
import Discussion from "./programPages/Discussion.vue";

export default {
  components: {
    "intro-page": Intro,
    "teams-page": Teams,
    "schedule-page": Schedule,
    "guideline-page": Guideline,
    "winners-page": Winners,
    "gallery-page": Gallery,
    "discussion-page": Discussion,
  },
  data() {
    return {
      tabs: null,

      tabList: [
        {
          title: "Introduction",
          icon: "speaker_notes",
        },
        {
          title: "Teams",
          icon: "people",
        },
        {
          title: "Schedule",
          icon: "timer",
        },
        {
          title: "Guideline",
          icon: "book",
        },
        {
          title: "Winners",
          icon: "card_giftcard",
        },
        {
          title: "Gallery",
          icon: "collections",
        },
        {
          title: "Discussion",
          icon: "forum",
        },
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>