<template>
  <div>
    <v-app-bar class="toolbar-color" theme="dark" fixed>
      <v-btn
          @click="backbutton"
          :icon="showBackButton ? 'mdi-arrow-left' : 'mdi-home-outline' "
      />
      <v-toolbar-title class="lab-name-font" to="/"><NuxtLink to="/">Tojal Lab</NuxtLink></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/publications/list">Publications</v-btn>
      <v-btn to="/software/list">Software</v-btn>
      <v-btn to="/news/list">News</v-btn>
      <v-btn to="/team">Team</v-btn>
      <v-btn to="/joinus">Join us</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "full",
  data() {
    return {
      showBackButton: false
    }
  },
  methods: {
    backbutton() {
      if (this.showBackButton) {
        this.$router.go(-1);
      } else {
        this.$router.go("/");
      }
    }
  },
  mounted() {
    this.showBackButton = window.history.length > 0;
  }
}
</script>

<style scoped>
.toolbar-color {
  background: rgb(59, 49, 219);
  background: linear-gradient(132deg, rgba(59, 49, 219, 1) 0%, rgba(140, 14, 163, 1) 35%, rgba(0, 21, 84, 1) 100%);
}


.lab-name-font {
  font-family: 'Lobster', Arial, serif;

}

a{
  color: white;
  text-decoration: none;
}
</style>
