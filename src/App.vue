<template>
  <div>
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
export default {
  components: { Header, Footer },
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
