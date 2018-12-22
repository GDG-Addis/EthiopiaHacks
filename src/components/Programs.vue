<template>
  <div>
    <v-toolbar tabs color="primary" dark>

      <v-toolbar-title>Hackathon v1.0</v-toolbar-title>

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

    <v-tabs-items v-model="tabs" class="white elevation-1">
      <v-tab-item v-for="i in 6" :id="'tab-' + i" :key="i">
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>