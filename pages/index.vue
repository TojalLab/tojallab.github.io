<template>
  <v-layout>
    <v-main>
      <v-responsive
          v-intersect="{handler: onIntersect,options: {threshold: [.1, 1.0]}}"
          :aspect-ratio="16/7" max-height="1080"
          style="max-height: 1080px" class="header theme-color">
        <div class="d-flex align-center justify-center header-img"
             style="position: absolute; top:0;bottom:0;left:0;right:0;">
          <div>
            <h1 class="text-center lab-name-header lab-name-font">Tojal Lab</h1>
            <span class="text-center" style="color: antiquewhite">
              Bioinformatics &bullet; Genomics &bullet; Machine learning &bullet; Imaging
            </span>
          </div>
        </div>
        <div style="position: absolute; top:0;bottom:0;left:0;right:0;" id="particles-js">

        </div>


        <!--          <v-row justify="center" align="center">-->
        <!--            <v-col cols="12" sm="12">-->
        <!--              Centered both vertically and horizontally-->
        <!--            </v-col>-->
        <!--          </v-row>-->
      </v-responsive>

      <v-card class="main-menu" elevation="3" border="0" :rounded="0">
        <v-card-title>Tojal Lab</v-card-title>
        <v-card-subtitle>AI-driven research applied to oncology</v-card-subtitle>
        <v-card-actions>

          <v-slide-group show-arrows>
            <v-btn color="primary" to="publications/list">Publications</v-btn>
            <v-btn color="primary" to="software/list">Software</v-btn>
            <v-btn color="primary" to="news/list">News</v-btn>
            <v-btn color="primary" to="team">Team</v-btn>
            <v-btn color="primary" to="/joinus">Join us</v-btn>
<!--            <v-btn color="primary" to="contact">Contact us</v-btn>-->
          </v-slide-group>
        </v-card-actions>
      </v-card>
      <v-container style="margin-top: 100px">
        <v-row class="mt-5 mb-5">
          <about-us-card/>
        </v-row>

        <latest v-for="meta in latest" :meta="meta"/>

      </v-container>
      <v-footer class="theme-color" theme="dark">
        <v-row justify="center" no-gutters>
          <!--            <v-btn-->
          <!--                v-for="link in links"-->
          <!--                :key="link"-->
          <!--                color="white"-->
          <!--                variant="text"-->
          <!--                class="mx-2"-->
          <!--                rounded="xl"-->
          <!--            >-->
          <!--              {{ link }}-->
          <!--            </v-btn>-->
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong class="lab-name-font">Tojal Lab</strong><br>
            <span class="font-weight-light" style="font-size: 12px; color: whitesmoke;"><a target="_blank"
                                                                                           href="https://github.com/luanvcmartins">@luanvcmartins</a></span>
          </v-col>
        </v-row>
        <!--        <v-row>-->
        <!--          <a href="https://github.com/luanvcmartins">luanvcmartins</a>-->
        <!--        </v-row>-->
      </v-footer>
    </v-main>
  </v-layout>
</template>
<script>
import AboutUsCard from "../components/aboutuscard";
import Latest from "../components/latest";

export default {
  name: "index.vue",
  components: {Latest, AboutUsCard},
  data() {
    return {
      latest: [
        {
          title: "Latest publications",
          subtitle: "Machine learning applied to the fields of bioinformatics, genetics and imaging.",
          source: "/publications"
        },
        {
          title: "Latest blog posts",
          subtitle: "Read our last published blog posts.",
          source: "/news"
        },
        {
          title: "Latest software",
          subtitle: "Open Source software made available",
          source: "/software"
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      particlesJS.load('particles-js', 'particles.json', function () {
      });
    })

  },
}
</script>

<style scoped>
.header-img {
  background-image: url("/img/sp_sergiosouza.jpg");
  background-position: center;
  background-size: cover;

}

@media (min-width: 720px) {
  .main-menu {
    margin-top: -60px;
    margin-left: 130px;
    max-height: 1080px;
    /*margin-right: 200px;*/
  }
}

.main-menu {
  margin-top: -60px;
  /*margin-right: 200px;*/
}

.lab-name-font {
  font-family: 'Lobster', Arial, serif;
  text-shadow: 2px 2px 8px #000000;
}

.lab-name-header {
  color: whitesmoke;
  font-size: 4.5em;
  letter-spacing: -1px;
}

.header {
  width: 100%;
  /*background-color: teal;*/
}

.theme-color {
  background: rgb(59, 49, 219);
  background: linear-gradient(132deg, rgba(59, 49, 219, 1) 0%, rgba(140, 14, 163, 1) 35%, rgba(0, 21, 84, 1) 100%);
}
</style>
