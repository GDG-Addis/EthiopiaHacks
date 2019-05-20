<template>
  <div>
    <v-layout row wrap>

      <!-- Left Content -->
      <v-flex xs12 md8 lg8>
        <!-- Second Parallex -->
        <section>
          <v-parallax :src="getImageUrl('hackv1/image1.jpg')" height="380">
            <v-layout column align-center justify-center>
              <!-- <div
            class="headline white--text mb-3 text-xs-center"
              >Web development has never been easier</div>-->
              <!-- <em>“Whether we're fighting climate change or going to space,
            <br>everything is moved forward by computers, and we don't
            <br>have enough people who can code.”
            <br>- Richard Branson
              </em>-->
            </v-layout>
          </v-parallax>
        </section>
        <v-card>
          <v-card-title primary-title>Youth and Entrepreneurship</v-card-title>
          <v-card-text>
            <h3 class="headline">Hackathon v1.0</h3>
            <p>
              “Ethiopia Hack” Hackathon v1.0 is one of the 12 hackathon programs
              and it was conducted from Nov 16th to Nov 18 th, 2018 at American Center,
              inside NALA, Addis Ababa, Ethiopia.
            </p>

            <h3 class="display-1">Problem Statement</h3>
            <blockquote class="blockquote">
              <p>
                “In Ethiopia plenty of trucks (1.5 – 40.0 tons) are driving empty in one direction to reach
                their destination e.g. Djibouti. This increased cost and wear and tear of tires and
                equipment without generating revenue. On the same road potential customers are waiting
                for transport so that their goods will be transported to the next town, etc.
              </p>

              <p>
                A system should be developed that addresses the issue by which customers can call
                (USSD or call center) and ask for a transport service. This call will go out to drivers that
                are in the nearby area. The system will have registered about 5,000 certified truck
                drivers with their certified trucks incl. load capacity. If the driver agrees, he will receive
                further instructions and a contract will be signed using USSD. Distances and prices are
                calculated based on a standardized pricing system. After the customer and driver are
                satisfied (a feedback is given by the customer and the truck driver) with the agreed
                service the contract amount will be transferred via mobile money. The public can see the
                satisfaction of the customer with the driver and the delivery of goods. The application
                needs to be developed in at last three local languages.
              </p>

              <p>
                With this application the prices for the service can be reduced over time while the income
                for the truck drivers can increase. As truck drivers get regular information about
                potential clients they are better informed and can adequately make business decisions.”
              </p>
            </blockquote>
          </v-card-text>
        </v-card>
      </v-flex>

      <!-- Right Content -->
      <v-flex xs12 md4 lg4>
        <!-- Hackathon Information -->
        <v-card elevation-20 style="margin:5px">
          <v-card-title>{{mainSideInfo.title}}
            <v-spacer></v-spacer>
             <v-btn color="error" flat>passed!</v-btn>
             </v-card-title>
          <v-card-text>
            <v-layout column>
              <h3 class="header">Theme</h3>
              <h4 class="subheading">{{mainSideInfo.theme}}</h4>

              <h3 class="header" style="margin-top:10px">@{{mainSideInfo.venue}}</h3>
              <h4 class="subheading">{{mainSideInfo.city}}</h4>

              <h3 class="header" style="margin-top:30px" pa-3>Program Schedule</h3>
              <v-layout row justify-space-between ma-2>
                <v-layout column align-center>
                  <v-icon>mdi-calendar</v-icon>
                  <span class="caption">Start Date</span>
                  <h4>{{mainSideInfo.startDate}}</h4>
                </v-layout>

                <v-layout column align-center>
                  <v-icon>mdi-calendar-check</v-icon>
                  <span class="caption">End Date</span>
                  <h4>{{mainSideInfo.endDate}}</h4>
                </v-layout>
              </v-layout>
              <v-divider></v-divider>
              <p style="margin-top:40px">
                For for more information, please contact us
                <a href="/contact">here</a>
              </p>
            </v-layout>
          </v-card-text>
        </v-card>

        <!-- Statics -->
        <v-card elevation-20 style="margin:5px">
          <v-card-text>
            <v-layout row wrap justify-space-between>
              <v-layout
                column
                justify-start
                align-center
                v-for="(stat, key) in attendee_statistics"
                :key="key"
              >
                <v-icon>{{stat.icon}}</v-icon>
                <h4>{{stat.desc}}</h4>
              </v-layout>
            </v-layout>
          </v-card-text>
        </v-card>

        <!-- prize -->
        <v-card elevation-20 style="margin:5px">
          <v-card-title>
            <span class="display-1">Prize</span>
            <span class="subheading">for each winning team members</span>
          </v-card-title>
          <v-card-text>
            <v-sheet class="d-flex" color="cyan lighten-1">
              <v-layout row wrap justify-space-between style="margin:5px" elevation="12">
                <span class="display-1">1</span>
                <span class="caption">st</span>
                <v-layout column align-end>
                  <span class="subheading">1TB Hard Disk</span>
                  <span class="subheading">Backpack</span>
                </v-layout>
              </v-layout>
            </v-sheet>

            <v-divider></v-divider>

            <v-sheet class="d-flex" color="teal lighten-1">
              <v-layout row wrap justify-space-between style="margin:5px">
                <span class="display-1">2</span>
                <span class="caption">nd</span>
                <v-layout column align-end>
                  <span class="subheading">128 GB Flash Disk</span>
                  <span class="subheading">Backpack</span>
                  <span class="subheading">Power Bank: for mobile phones</span>
                </v-layout>
              </v-layout>
            </v-sheet>

            <v-divider></v-divider>

            <v-sheet class="d-flex" color="green lighten-3">
              <v-layout row wrap justify-space-between style="margin:5px">
                <span class="display-1">3</span>
                <span class="caption">rd</span>
                <v-layout column align-end>
                  <span class="subheading">Wireless Bluetooth Mouse</span>
                  <span class="subheading">Backpack</span>
                  <span class="subheading">Waterbottle with Stickers Branding</span>
                </v-layout>
              </v-layout>
            </v-sheet>
          </v-card-text>
        </v-card>

        <!-- Feedbacks -->
        <v-card elevation-20 style="margin:5px">
          <v-card-media class="red--text" :src="getImageUrl('hackv1/image1.jpg')" height="200px"></v-card-media>
        </v-card>

        <v-card elevation-20 style="margin:5px">
          <v-card-title class="subheading">Participant Feedback</v-card-title>
          <v-card-text v-for="(feedback, key) in feedbacks" :key="key">
            <em>{{feedback}}</em>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import appMixins from "../../mixins/appMixins.js";
export default {
  mixins: [appMixins],
  data() {
    return {
      //Main Side Information
      mainSideInfo: {
        isPassed: true,
        title: "Ethiopia Hacks v1.0",
        theme: "Youth and Entreprunership",
        venue: "American Center",
        city: "Addis Ababa, Ethiopia",
        startDate: "Nov 16, 2018",
        endDate: "Nov 18, 2018"
      },

      //Attendee statistics
      attendee_statistics: [
        {
          icon: "mdi-account-group",
          desc: "10 Teams"
        },
        {
          icon: "mdi-account",
          desc: "50 Participants"
        },
        {
          icon: "mdi-human-female-female",
          desc: "15 Women"
        },
        {
          icon: "mdi-human-male-male",
          desc: "35 Male"
        }
      ],
      feedbacks: [
        "It was really great, it has motivated me to do more and help as much people as i can with my knowledge. And i was amazed with the staff they were 100% willing to help us. keep it up!!!👌👍👍",
        "The most exiting and interesting experience of my life in short",
        "I think it was great after all we learnt alot from each other and Networked well. The way I see it you can guys make it hard and testing not that this is not. I hope you will surprise us at the next event!"
      ]
    };
  }
};
</script>
