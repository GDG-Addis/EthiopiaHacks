<template>
  <div>
    <!-- First Parallex -->
    <section id="home">
      <v-parallax :src="getImageUrl('banner.jpg')" height="680" alt="banner image">
        <v-layout column align-center justify-center class="white--text">
          <img :src="getImageUrl('logo.png')" alt="Hackathon Logo" height="300">
          <h3 class="display-1 text-xs-center">U.S Embassy in Ethiopia presents</h3>
          <h3 class="white--text font-weight-bold mb-2 display-2 text-xs-center">
            Hackathon
            <span class="display-1">v2.0</span>
          </h3>
          <div class="title mb-4 text-xs-center">From Jan 11-13, 2018</div>
          <div class="subheading mb-3 text-xs-center">@ American Center, Addis Ababa</div>
          <v-btn class="blue lighten-2 mt-5" dark large href="https://goo.gl/HEa1i6" target="blank">Register Here</v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <!-- Featured Text -->
    <section id="why">
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">The best way to demonistrate your coding skill</h2>
            <span class="subheading">while solving potential problems</span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Design The Challenge</div>
                  </v-card-title>
                  <v-card-text>
                    Hackathon boosts your design skill and critical thinking towards solving the challenge. It gives you the opportunity to improve your
                    skill on how to understand the problem domain or the challenge topic, analze and come up with potential
                    ,feasible solution.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Build The Solution</div>
                  </v-card-title>
                  <v-card-text>
                    You will build digital solution that trully solves the problem. By collaboration with a team, you
                    will learn how to coordinate to build the designed solution. You will demonistrate your skill
                    within a short period of time. You will also learn new skills from the teams.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Win Big Prizes</div>
                  </v-card-title>
                  <v-card-text>
                    You will get big prizes for your outstanding solution/product. You will also get exposure to the
                    potential stakeholders to work on the winning project. This award is a complement for your passion.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <!-- Second Parallex -->
    <section>
      <v-parallax :src="getImageUrl('hacking.jpg')" height="380">
        <v-layout column align-center justify-center>
          <!-- <div
            class="headline white--text mb-3 text-xs-center"
          >Web development has never been easier</div>-->
          <em>“Whether we're fighting climate change or going to space,
            <br>everything is moved forward by computers, and we don't
            <br>have enough people who can code.”
            <br>- Richard Branson
          </em>
        </v-layout>
      </v-parallax>
    </section>

    <!-- Organizors -->
    <section id="about">
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline font-weight-medium">Organized by U.S Embassy in Ethiopia</h2>
            <span class="subheading">#USInvestsInEthiopians</span>
            <br>
            <a
              href="https://et.usembassy.gov/nofo-for-ethiopia-hacks/"
              target="blank"
            >NOFO for Ethiopia Hacks</a>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md3>
                <v-card
                  target="blank"
                  href="https://et.usembassy.gov/"
                  class="elevation-0 transparent"
                >
                  <v-card-text class="text-xs-center">
                    <img :src="getImageUrl('us_embassy.png')" alt="Hackathon Logo" height="150">
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="subheading text-xs-center">U.S. Embassy</div>
                  </v-card-title>
                </v-card>
              </v-flex>

              <v-flex xs12 md3>
                <v-card
                  class="elevation-0 transparent"
                  href="https://www.usaid.gov/ethiopia"
                  target="blank"
                >
                  <v-card-text class="text-xs-center">
                    <img :src="getImageUrl('usaid.png')" alt="Hackathon Logo" height="150">
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="subheading text-xs-center">USAID</div>
                  </v-card-title>
                </v-card>
              </v-flex>

              <v-flex xs12 md3>
                <v-card
                  class="elevation-0 transparent"
                  href="https://www.meetup.com/GDG-Addis"
                  target="blank"
                >
                  <v-card-text class="text-xs-center">
                    <img :src="getImageUrl('gdg_addis.png')" alt="Hackathon Logo" height="150">
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="subheading text-xs-center">GDG Addis</div>
                  </v-card-title>
                </v-card>
              </v-flex>

              <v-flex xs12 md3>
                <v-card
                  class="elevation-0 transparent"
                  href="http://cawee-ethiopia.com/"
                  target="blank"
                >
                  <v-card-text class="text-xs-center">
                    <img :src="getImageUrl('cawee.png')" alt="Hackathon Logo" height="150">
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="subheading text-xs-center">CAWEE</div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <!-- Time Line -->
    <section id="timeline">
      <v-layout justify-center>
        <v-flex xs12 md6>
          <v-timeline align-top>
            <v-timeline-item
              v-for="(timeline, key) in timelines"
              :key="key"
              :color="timeline.color"
              fill-dot
              :icon="timeline.icon"
            >
              <v-card :color="timeline.color" dark>
                <v-card-title class="title"> {{timeline.title}} </v-card-title>
                <v-card-text class="white text--primary">
                  <p>{{timeline.theme}}</p>
                  <p>{{timeline.description}}</p>
                  <v-btn v-if="timeline.isPassed" color="success" outline class="mx-0">Passed</v-btn>

                  <v-btn v-if="!timeline.isPassed && timeline.isNext" href="https://goo.gl/HEa1i6" target="blank" :color="timeline.color" outline>Register Now!</v-btn>
                </v-card-text>

              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>
      
    </section>

    <!-- Third Parallex -->
    <section>
      <v-parallax :src="getImageUrl('teams.jpg')" height="200">
        <v-layout column align-center justify-center></v-layout>
      </v-parallax>
    </section>

    <!-- FAQ -->
    <section id="faq">
      <br>
      <v-layout column align-center>
        <h4 class="display-1">FAQ</h4>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md6 lg6 v-for="(faq, key) in faqList" :key="key">
          <v-expansion-panel popout>
            <v-expansion-panel-content>
              <v-layout slot="header" align-center row spacer>
                <v-flex no-wrap xs15>
                  <p>{{faq.question}}</p>
                </v-flex>
              </v-layout>
              <v-card>
                <v-divider></v-divider>
                <v-card-text v-text="faq.answer"></v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
    </section>

    <!-- Contact -->
    <section id="contact">
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Program Objective</div>
              </v-card-title>
              <v-card-text>
                Ethiopia is the second most-populous country in Africa with more than 70% of its population
                under the age of 35. This population of youth faces enormous challenges in terms of education,
                employment, access to technology and opportunities to create and innovate.
                Hackathon participants are between the of 18-25 thus hosting a Hackathon allows to understand
                how best to inspire Ethiopian youth to imagine, plan, design, compose, invent, create, innovate,
                build and construct. The program aims to make the most diverse hackathon sessions with a goal
                of 35% participation from women in each session.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>Do you want to contact the organizers? Please don't hesitate to contact through the following addresses.</v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>+251-910331122</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>American Centers in Ethiopia</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>gdgaddis.et@gmail.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>


<script>
import * as easings from "vuetify/es5/util/easing-patterns";

export default {
  data() {
    return {
      title: '"Ethiopia Hacks" Hackathon v2.0',
      messages: [
        {
          avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
          name: "Melake Wubshet",
          title: "Welcome to Vuetify.js!",
          excerpt: "Thank you for joining our community..."
        },
        {
          color: "red",
          icon: "people",
          name: "Social",
          new: 1,
          total: 3,
          title: "Twitter"
        },
        {
          color: "teal",
          icon: "local_offer",
          name: "Promos",
          new: 2,
          total: 4,
          title: "Shop your way",
          exceprt: "New deals available, Join Today"
        }
      ],

      faqList: [
        {
          question: "What is Hackathon?",
          answer:
            "A hackathon is usually a day long (can be 36 hours, 48 hours, etc.) coding competition where software programmers, developers, designers, etc. come together to build and design something cool."
        },
        {
          question: "Who can attend ‘Ethiopia Hack’ hackathon?",
          answer:
            "Anyone who is interested in computer programming and loves to learn and build cool stuff can attend."
        },
        {
          question: "But isn’t hacking illegal? ",
          answer:
            "The word “hack” has so much negativity attached to it that most people think hackathons are a way to “hack” into something. NOOOO. Hacking is basically building something. It could be anything."
        },
        {
          question: "Do I need to have programming experience?",
          answer: "Basics of programming is enough."
        },
        {
          question: "How much do I have to pay to attend the hackathon? ",
          answer: "It’s FREE. :)"
        },
        {
          question: "Is it a team event?",
          answer:
            " Yes. So the whole point of forming teams and working on a project gives you the opportunity to work in a real life setting. I mean seriously, that’s how it works in the industry. You have to learn to work with people from different background, different skill set, etc. What better way than a hackathon to get used to it? Teams include a maximum of 5 people. Our hackathons have “Meet-and-Greet” events before the actual event where you get to talk to attendees and look for teammates."
        },
        {
          question: "What can I hack at the hackathon?",
          answer:
            "You can build anything. A website, a web app, Android/iOS App, Chrome extension, whatever you want to on a specific theme that will be given on the hackathon day."
        },
        {
          question: "What are the requirements to attend on the hackathon?",
          answer:
            "One requirement is your age must be between 18 to 25. Another requirement is you need to be willing to attend the hackathon for 48 hours."
        }
      ],

      timelines: [
        {
          title: "Hackathon v1.0",
          theme: '"Entreprunership and Youth"',
          description: "From Nov 16-8th, 2018 at American Center, Addis Ababa",
          isPassed: true,
          isNext: false,
          isLeft: false,
          color: "red lighten-2",
          icon: "check"
        },
        {
          title: "Hackathon v2.0",
          theme: "Comming Soon...",
          description: "From Jan 11-13th, 2018 at American Center, Addis Ababa",
          isPassed: false,
          isNext: true,
          isLeft: true,
          color: "purple darken-1",
          icon: "star"
        },
        {
          title: "Hackathon v3.0",
          theme: "Comming Soon...",
          description: "",
          isPassed: false,
          isNext: false,
          isLeft: false,
          color: "amber lighten-1",
          icon: "star"
        },
        {
          title: "Hackathon v4.0",
          theme: "Comming Soon...",
          description: "",
          isPassed: false,
          isNext: false,
          isLeft: true,
          color: "green lighten-1",
          icon: "star"
        },
        {
          title: "Hackathon v5.0",
          theme: "Comming Soon...",
          description: "",
          isPassed: false,
          isNext: false,
          isLeft: false,
          color: "indigo",
          icon: "star"
        }
      ]
    };
  },

  methods: {
    getImageUrl(img) {
      return require("../assets/images/" + img);
    }
  }
};
</script>
