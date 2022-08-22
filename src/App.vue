<template>
  <Navbar />
  <HomeView />
  <Footer />

  <RouterView />
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import Coba from "./components/icons/coba.vue";

export default {
  name: "App",
  components: { Footer, Navbar, Coba },
};
</script>
