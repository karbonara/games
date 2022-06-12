<template>
  <aside>
    <div class="selection__block">
      <h3>Подборки игр</h3>
      <ul>
        <li v-for="item in items" :key="item">
          <RouterLink to="/">{{ item.title }}</RouterLink>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-cart2"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
              />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { img: "", title: "Новинки" },
        { img: "", title: "Новинки" },
        { img: "", title: "Новинки" },
        { img: "", title: "Новинки" },
      ],
    };
  },
};
</script>

<style lang="scss">
aside {
  position: relative;
  z-index: 5;
  float: left;
  margin-bottom: 60px;
  width: 240px;
}
.selection__block {
  margin-bottom: 20px;
  & h3 {
    margin-bottom: 10px;
    font-size: 20px;
    line-height: normal;
    letter-spacing: 0.1px;
    color: #f5f5f7;
  }
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 1.75;
    & li {
      position: relative;
      padding-left: 30px;
      & a {
        color: #16a7ff;
        text-decoration: none;
        &:hover {
          color: #72bef4;
        }
      }
      & svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 22px;
        height: 22px;
        background: no-repeat;
        background-size: 100%;
      }
    }
  }
}
@media (max-width: 980px) {
  aside {
    display: none;
  }
}
</style>