<template>
  <nuxt-layout name="full">
    <v-container>
      <v-row>
        <v-col md="3">

          <h3 class="text-right">Team</h3>
          <p class="text-right">Active team members.</p>
          <p class="text-right">We are looking for new talented people in the fields of <i>genomics</i>, <i>bioinformatics</i>,
            and <i>machine learning</i>.</p>
          <p class="text-right">
            <v-btn to="/joinus" flat="">Join us</v-btn>
          </p>
        </v-col>
        <v-col md="9">
          <v-row>
            <ContentList :query="team_query" v-slot="{ list }">
              <v-col sm="12" md="6" lg="4" xxl="2" v-for="member in list">
                <teamcard @click.prevent="openDetail(member)" :member="member"/>
              </v-col>
            </ContentList>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="ma-5"/>
      <v-row>
        <v-col md="3">
          <h3 class="text-right">Alumni</h3>
          <p class="text-right">Team members who have completed their studies or graduated</p>
        </v-col>
        <v-col md="9">
          <v-row>
            <ContentList :query="alumni_query">
              <template #not-found><p>Nothing here yet, check back soon!</p></template>
              <template #default="{ list }">
                <v-col sm="12" md="6" lg="4" xxl="2" v-for="member in list">
                  <teamcard @click.prevent="openDetail(member)" :member="member"/>
                </v-col>
              </template>
            </ContentList>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="ma-5"/>
      <v-row>
        <v-col md="3">
          <h3 class="text-right">Collaborators</h3>
          <p class="text-right">We are proud of our collaborators who have helped us create innovative solutions.</p>
        </v-col>
        <v-col md="9">
          <v-row>
            <ContentList :query="alumni_query">
              <template #not-found><p>Nothing here yet, check back soon!</p></template>
              <template #default="{ list }">
                <v-col sm="12" md="6" lg="4" xxl="2" v-for="member in list">
                  <teamcard @click.prevent="openDetail(member)" :member="member"/>
                </v-col>
              </template>
            </ContentList>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-navigation-drawer
        v-model="drawer"
        location="bottom"
        temporary
    >
      <v-container v-if="selected != null">
        <v-row>
          <v-col md="3">
            <div class="d-flex flex-row-reverse">
              <v-avatar size="120" class="right-block" :image="`https://github.com/${selected.github}.png`"
                        v-if="selected.github!=null && selected.github!==''"/>
            </div>
            <h3 class="text-right">{{ selected.title }}</h3>
            <p class="text-right">{{ selected.description }}</p>
          </v-col>
          <v-col md="9">
            <ContentDoc :head="false" :path="selected._path"/>
          </v-col>
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </nuxt-layout>
</template>

<script>
import Teamcard from "../components/teamcard";

export default {
  name: "team",
  components: {Teamcard},
  data() {
    return {
      drawer: false,
      selected: null
    }
  },
  methods: {
    openDetail(detail) {
      this.selected = detail
      this.drawer = true;
    }
  },
  computed: {
    alumni_query() {
      return {path: '/team', where: [{category: 'alumni'}]}
    },
    team_query() {
      return {path: '/team', where: [{category: 'team'}]}
    }
  }
}
</script>

<style scoped>

</style>
