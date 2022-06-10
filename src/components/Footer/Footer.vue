<template>
  <section class="footer">
    <div class="footer__wrapper">
      <Logo />
      <ul>
        <li>
          <RouterLink to="/contacts">Контакты</RouterLink>
        </li>
        <li>
          <RouterLink to="/contacts">Контакты</RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import Logo from "@/components/header/Logo";
export default {
  components: { Logo },
};
</script>
<style lang="scss" scoped>
.footer {
  background: rgba(216, 216, 216, 0.14);
}
.footer__wrapper {
  width: 95vw;
  margin: 0 auto;
  padding: 13px 22px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  & ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    & a {
      display: flex;
      padding: 8px 16px;
      text-decoration: none;
      color: #fff;
      transition: 0.2s;
    }
    & a:hover {
      opacity: 0.7;
    }
  }
}
</style>