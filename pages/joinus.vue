<template>
  <nuxt-layout name="full">
    <v-container>
      <v-row>
        <v-col md="3">
          <h3 class="text-right">Tojal lab</h3>
          <p class="text-right">Join us and be part of the next frontiers of cancer research.</p>
        </v-col>
        <v-col md="9">
          <div class="markdown">
            <ContentDoc path="/joinus"/>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </nuxt-layout>
</template>

<script>
export default {
  name: "joinus"
}
</script>

<style>
.markdown {
  margin: 16px;
}

.markdown img {
  width: 100%;
  max-width: 1080px;
}

.markdown h1 {
  font-family: 'Montserrat', sans-serif;
}

.markdown h2 {
  font-family: 'Montserrat', sans-serif;
}

.markdown h3 {
  margin-top: 16px;
  font-family: 'Montserrat', sans-serif;
}

.markdown p {
  font-family: 'Lora', serif;
  font-size: 16px;
  margin-top: 12px;
  margin-bottom: 12px;
}


.markdown li {
  /*list-style-position: inside;*/
  /*background: black;*/
  margin-left: 16px;
  font-family: 'Lora', serif;
  /*display: block;*/
}

.email-color {
  color: rgb(59, 49, 219);
}
</style>
