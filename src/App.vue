<template>
  <v-app :dark="isDark">
    <v-navigation-drawer :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" fixed app>
      <v-list>
        <v-list-tile avatar>
          <v-btn icon @click.native.stop="miniVariant = !miniVariant">
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
          </v-btn>

          <v-btn icon @click.native.stop="clipped = !clipped">
            <v-icon>web</v-icon>
          </v-btn>
        </v-list-tile>
        <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in items" exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app :clipped-left="clipped" dense>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-switch hide-details label="Dark theme" v-model="isDark"></v-switch>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat block @click="scroll('#home')">Home</v-btn>
        <v-btn flat block @click="scroll('#why')">Why</v-btn>
        <v-btn flat block @click="scroll('#about')">About</v-btn>
        <v-btn flat block @click="scroll('#timeline')">Timeline</v-btn>
        <v-btn flat block @click="scroll('#faq')">FAQ</v-btn>
        <v-btn flat block @click="scroll('#contact')">Contact</v-btn>
      </v-toolbar-items>

      <v-btn icon @click.native.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>

      <v-container fluid></v-container>
    </v-content>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed>
     
     <v-layout justify-center>
       <h2 class="heading" justify-center> Annoucement </h2>
     </v-layout>

     <v-layout>
        <v-flex xs12>
          
          <v-card>
            <v-card-text>
              <p>Registration for Hackathon v2.0 is now open! </p>
            </v-card-text>

            <v-card-actions>
              <v-btn flat color="orange">More</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
  </v-layout>

  <v-layout>
        <v-flex xs12>
          
          <v-card>
            <v-card-text>
              <p>Team selection for Hackathon v2.0 is under going </p>
            </v-card-text>

            <v-card-actions>
              <v-btn flat color="orange">More</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
  </v-layout>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span
        class="ma-3"
      >Google Developers Group Addis (GDG Addis). All Rights are reserved &copy; {{currentDate}}.</span>
    </v-footer>
  </v-app>
</template>

<script>
import * as easings from "vuetify/es5/util/easing-patterns";

export default {
  computed: {
    target() {
      const value = this[this.type];
      if (!isNaN(value)) return Number(value);
      else return value;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    }
  },
  data() {
    return {
      type: "selector",
      selector: "#faq",
      duration: 300,
      offset: -200,
      easing: "easeInOutCubic",
      easings: Object.keys(easings),

      isDark: false,
      currentDate: new Date().getFullYear(),
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "apps",
          title: "Home",
          to: "/"
        },
        {
          icon: "bubble_chart",
          title: "Programs",
          to: "/programs"
        },
        {
          icon: "home",
          title: "Gallery",
          to: "/gallery"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Ethiopia Hacks"
    };
  },
  methods: {
    btnClicked: function() {
      this.isDark = !this.isDark;
    },

    scroll: function(dest) {
      this.selector = dest;
      this.$vuetify.goTo(this.target, this.options);
    }
  }
};
</script>
