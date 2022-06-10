<template>
  <div class="navigation__main">
    <ul class="navigation">
      <li>
        <RouterLink to="/games">Игры</RouterLink>
      </li>
      <li>
        <a href="/">Библиотека</a>
      </li>
      <li>
        <a href="/">Акции</a>
      </li>
    </ul>
    <Search />
  </div>
</template>
<script>
import Search from "@/components/header/buttons/Search";
export default {
  components: { Search },
};
</script>
<style lang="scss">
.navigation__main {
  align-items: center;
  flex: 1 0 auto;
  display: flex;
}
.navigation {
  display: flex;
  width: calc(100% - 46px);
  justify-content: start;
  padding: 0;
  margin: 0;
  list-style: none;
  & a {
    text-decoration: none;
    color: #fff;
    padding: 8px 12px;
    font-size: 18px;
  }
}
@media (max-width: 690px) {
  .navigation {
    display: none;
  }
  .navigation__main {
    justify-content: end;
    padding: 0px 29px;
  }
}
</style>
