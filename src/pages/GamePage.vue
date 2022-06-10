<template>
  <section class="game__page">
    <Breadcrumbs />
    <GamePage />
  </section>
</template>

<script>
import GamePage from "@/components/game-page/GamePage";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export default {
  components: {
    GamePage,
    Breadcrumbs,
  },
};
</script>
<style lang="scss" scoped>
.game__page {
  width: 90vw;
  margin: 0 auto;
}
</style>