<template>
  <div class="navigation__main">
    <ul class="navigation">
      <li>
        <RouterLink to="/goods">Игры</RouterLink>
      </li>
      <li>
        <RouterLink to="/goods">Библиотека</RouterLink>
      </li>
      <li>
        <RouterLink to="/goods">Акции</RouterLink>
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
  padding: 0 0 0 24px;
  margin: 0;
  list-style: none;
  & li {
    padding: 0 18px;
  }
  & a {
    text-decoration: none;
    color: #fff;
    padding: 8px 4px;
    font-size: 18px;
    position: relative;
    transition: 0.3s;
    &:hover {
      transition: 0.3s;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 4px;
        background-color: hsla(0, 0%, 100%, 0.8);
        border-radius: 1.5px;
        transition: opacity 0.1s;
      }
    }
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
