<template>
  <header>
    <nav class="header__wrapper">
      <Logo />
      <Navigation />
      <Authorization />
    </nav>
  </header>
</template>
<script>
import Navigation from "@/components/Header/Navigation";
import Logo from "@/components/Header/Logo";
import Authorization from "@/components/Header/buttons/Authorization";

export default {
  components: { Navigation, Logo, Authorization },
};
</script>
<style lang="scss">
header {
  background: rgba(216, 216, 216, 0.14);
}
.header__wrapper {
  width: 95vw;
  margin: 0 auto;
  padding: 13px 22px;
  display: flex;
  align-items: center;
}
@media (max-width: 980px) {
  .header__wrapper {
    padding: 13px 0;
  }
}
</style>
