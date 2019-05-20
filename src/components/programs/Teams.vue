<template>
  <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-space-between>
        <v-flex xs12 sm-6 md4 lg4 v-for="(team, key) in teams" :key="key">
          <v-card>
            <v-card-media class="red--text" :src="getImageUrl(team.image)" height="200px"></v-card-media>
            <v-card-title>
              <div>
                <span class="headline gray--text">{{team.name}}</span>
                <br>
                <v-layout row wrap justify-space-between>
                    <v-flex xs6 v-for="(memb, i) in team.members" :key="i">
                        <span class="caption"> {{memb}}</span>
                    </v-flex>
                </v-layout>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn flat color="primary">like</v-btn>
              <v-btn flat color="primary">share</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import appMixins from "../../mixins/appMixins.js";
export default {
  mixins: [appMixins],
  data() {
    return {
      teams: [
        {
          image: "hackv1/image1.jpg",
          name: "Trackly",
          likes: 4,
          members: ["Abebe Yohannes", "Selam Mulugeta", "Hillina Wubshet", "Abraham Mulugeta", "Sara Teshome"]
        },
        {
          image: "hackv1/image1.jpg",
          name: "Adwa",
          likes: 10,
          members: ["Abebe Yohannes", "Selam Mulugeta", "Hillina Wubshet", "Abraham Mulugeta", "Sara Teshome"]
        },
        {
          image: "hackv1/image1.jpg",
          name: "H.W.A",
          likes: 10,
          members: ["Abebe Yohannes", "Selam Mulugeta", "Hillina Wubshet", "Abraham Mulugeta", "Sara Teshome"]
        },
        {
          image: "hackv1/image1.jpg",
          name: "Team Addis",
          likes: 15,
          members: ["Abebe Yohannes", "Selam Mulugeta", "Hillina Wubshet", "Abraham Mulugeta", "Sara Teshome"]
        },
        {
          image: "hackv1/image1.jpg",
          name: "The SQUAD",
          likes: 15,
          members: ["Abebe Yohannes", "Selam Mulugeta", "Hillina Wubshet", "Abraham Mulugeta", "Sara Teshome"]
        },
        {
          image: "hackv1/image1.jpg",
          name: "Team Adrash",
          likes: 15,
          members: ["Abebe Yohannes", "Selam Mulugeta", "Hillina Wubshet", "Abraham Mulugeta", "Sara Teshome"]
        },
      ]
    };
  }
};
</script>
