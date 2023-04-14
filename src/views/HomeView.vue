<template>
  <main-screen v-bind="mainScreenData" />

</template>

<script>
import MainScreen from "@/components/MainScreen.vue";

export default {
  name: "HomeView",
  components: {
    MainScreen,
  },
  data() {
    return {
      mainScreenData: {
        login: "Login",
        signup: "SignUp",
        spanText3: "Simplify Your Workflow <br /> and ",
        spanText4: "Enhance",
        spanText5: " Collaboration",
        ourWebsiteAlsoOff:
          "Our website also offers digital collections and search tools, <br />making it easy for your patrons to access a wide variety of projects online. <br />Whether you're a small community or a large academic institution, <br />our website can help you streamline your operations and better serve your patrons. <br />Explore our website to see how we can help you take your archive to the next level!",
        homescreenPic011: "homescreen-pic-01-1.png",
        exploreProjects: "Explore Projects",
      },
    };
  },
};
</script>

<style></style>
