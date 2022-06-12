<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ButtonUp from "@/components/buttons/ButtonUp";
export default {
  components: { Header, Footer, ButtonUp },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");

body {
  margin: 0;
  padding: 0;
  background: #000;
  font-family: "Montserrat", sans-serif;
}
</style>
