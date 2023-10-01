<template>
  <v-app>
    <!--    <NuxtWelcome />-->
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </v-app>
</template>
<script>
export default {
  name: "app",
  head: {
    script: [
      // {src: "@materializecss/materialize/dist/js/materialize.min.js", body: true},
    ]
  }
}
</script>
