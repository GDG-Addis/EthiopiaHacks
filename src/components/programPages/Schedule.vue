<template>
  <div>
    <v-layout row wrap>
      <!-- Day-1 -->
      <v-flex xs12 sm12 md4 lg4 v-for="(sch, key) in schedules" :key="key">
        <v-card flat>
          <v-card dark flat>
            <v-card-text>
              <v-container fill-height>
                <v-layout align-center>
                  <strong class="display-4 font-weight-regular mr-4">{{sch.day}}</strong>
                  <v-layout column justify-end>
                    <div class="headline font-weight-light">{{sch.dayOfWeek}}</div>
                    <div class="text-uppercase font-weight-light">{{sch.month}} {{sch.year}}</div>
                  </v-layout>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
          <v-card-text class="py-0">
            <v-timeline align-top dense>
              <v-timeline-item
                :color="i%2 == 0?'pink': 'teal lighten-3'"
                small
                v-for="(agenda, i) in sch.agendas"
                :key="i"
              >
                <v-layout justify-space-between>
                  <v-flex xs3>
                    <strong>{{agenda.time}}:</strong>
                  </v-flex>
                  <v-flex>
                    <strong>{{agenda.agenda}}</strong>
                    <div class="caption">{{agenda.caption}}</div>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      schedules: [
        //Day 1
        {
          day: "16",
          dayOfWeek: "Friday",
          month: "November",
          year: "2018",
          agendas: [
            {
              time: "2:30pm",
              agenda: "Ethiopia Hack Launching Program",
              caption: "U.S. Embassy in Ethiopia & GDG Addis"
            },
            {
              time: "3:00pm",
              agenda: "Keynote Speech on Ethiopia Hacks v1.0 challenge topic",
              caption: "By Mr. Olaf Erz | Save the Children"
            },
            {
              time: "4:00pm",
              agenda: "Tea Break",
              caption: "Networking, group photo and small discussion"
            },
            {
              time: "4:15pm",
              agenda: "Team Formation and Introduction",
              caption: "Formal and informal way of team formation"
            },
            {
              time: "5:00pm",
              agenda: "End of Day-1",
              caption: "Meanwhile, teams start to explore problem topic"
            }
          ]
        },
        //Day 2
        {
          day: "18",
          dayOfWeek: "Saturday",
          month: "November",
          year: "2018",
          agendas: [
            {
              time: "8:30am",
              agenda: "Hackathon Day-2 Start",
              caption: "Teams arrive at the venue, prepare the materials & tools"
            },
            {
              time: "9am",
              agenda: "Teams Working - Problem Exploration",
              caption: "Domain experts help around"
            },
            {
              time: "10:30am",
              agenda: "Coffee Break",
              caption: "Convening moment, lighting talk, group photo, ..."
            },
            {
              time: "11am",
              agenda: "Teams Working - Idea generation and problem refinement",
              caption: "Design experts help around"
            },
            {
              time: "12:30pm",
              agenda: "Lunch Break",
              caption: ""
            },
            {
              time: "2pm",
              agenda: "Teams Working - Hacking Buiding",
              caption: "Developers help around"
            },
            {
              time: "3:30pm",
              agenda: "Coffee Break",
              caption: "Convening moment, lighting talk, group photo, ..."
            },
            {
              time: "4pm",
              agenda: "Teams Working - Hacking Buiding",
              caption: "Developers help around"
            },
            {
              time: "5:30pm",
              agenda: "End of Day-2",
              caption: ""
            },
          ]
        },
        //Day 3
        {
          day: "19",
          dayOfWeek: "Sunday",
          month: "November",
          year: "2018",
          agendas: [
            {
              time: "8:30am",
              agenda: "Hackathon Day-3 Start",
              caption: "Teams arrive at the venue, prepare the materials & tools"
            },
            {
              time: "9am",
              agenda: "Teams Working - Finalize the Hacking",
              caption: "Teams also start to prepare presentation materials"
            },
            {
              time: "10:30am",
              agenda: "Coffee Break",
              caption: "Convening moment, lighting talk, group photo, ..."
            },
            {
              time: "11am",
              agenda: "Teams Presenting",
              caption: "The first 5 teams present their solution to the judges."
            },
            {
              time: "12:30pm",
              agenda: "Lunch Break",
              caption: ""
            },
            {
              time: "2pm",
              agenda: "Teams Presenting",
              caption: "The last 5 teams present their solution to the judges"
            },
            {
              time: "3:30pm",
              agenda: "Awarding",
              caption: "Award ceremony"
            },
            {
              time: "4pm",
              agenda: "End of Ethiopia Hacks v1.0",
              caption: "Group photo, networking, feedback"
            }
          ]
        }
      ]
    };
  }
};
</script>

