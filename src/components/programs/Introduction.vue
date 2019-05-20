<template>
  <div>
    <v-layout row wrap>
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

            <h3 class="display-1">Problem Topic</h3>
            <em>
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
            </em>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 md4 lg4>
        <!-- Hackathon Information -->
        <v-card elevation-20 style="margin:5px">
          <v-card-title>Ethiopia Hacks v1.0</v-card-title>
          <v-card-text>
            <v-layout column>
              <h3 class="header">Theme</h3>
              <h4 class="subheading">"Youth and Entreprunership"</h4>

              <h3 class="header" style="margin-top:10px">@American Center</h3>
              <h4 class="subheading">Addis Ababa, Ethiopia</h4>

              <h3 class="header" style="margin-top:30px" pa-3>Program Schedule</h3>
              <v-layout row justify-space-between>
                <v-layout column>
                  <span class="caption">Start Date</span>
                  <h4>Nov 16, 2018</h4>
                </v-layout>

                <v-layout column>
                  <span class="caption">End Date</span>
                  <h4>Nov 18, 2018</h4>
                </v-layout>
              </v-layout>

              <p style="margin-top:40px">For for more information, please contact us here</p>
            </v-layout>
          </v-card-text>
        </v-card>

        <v-divider></v-divider>

        <!-- Statics -->
        <v-card elevation-20 style="margin:5px">
          <v-card-text>
            <v-layout row wrap justify-space-between>
              <h4>10 Teams</h4>
              <h4>50 Participants</h4>
              <h4>15 Women</h4>
              <h4>35 Men</h4>
            </v-layout>
          </v-card-text>
        </v-card>

        <!-- Feedbacks -->
        <v-card elevation-20 style="margin:5px">
          <v-card-media class="red--text" :src="getImageUrl('hackv1/image1.jpg')" height="200px"></v-card-media>
        </v-card>
        
        
        <v-card elevation-20 style="margin:5px">
            <v-card-title class="subheading">
                Participant Feedback
            </v-card-title>
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
        feedbacks: [
            'It was really great, it has motivated me to do more and help as much people as i can with my knowledge. And i was amazed with the staff they were 100% willing to help us. keep it up!!!👌👍👍',
            'The most exiting and interesting experience of my life in short',
            'I think it was great after all we learnt alot from each other and Networked well. The way I see it you can guys make it hard and testing not that this is not. I hope you will surprise us at the next event!'
        ]
    };
  }
};
</script>
