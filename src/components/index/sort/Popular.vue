<template>
  <div class="popular__categories">
    <h2>Популярные категории</h2>
    <div class="popular__categories-items">
      <RouterLink to="/" v-for="item in items" :key="item">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 172 172"
            style="fill: #26e07f"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#1fb141">
                <path
                  d="M21.5,21.5v129h64.5v-32.25v-64.5v-32.25zM86,53.75c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25c-17.7805,0 -32.25,14.4695 -32.25,32.25zM118.25,86c-17.7805,0 -32.25,14.4695 -32.25,32.25c0,17.7805 14.4695,32.25 32.25,32.25c17.7805,0 32.25,-14.4695 32.25,-32.25c0,-17.7805 -14.4695,-32.25 -32.25,-32.25z"
                ></path>
              </g>
            </g>
          </svg>
        </span>
        <div>{{ item.title }}</div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { img: "", title: "Бесплатные игры" },
        { img: "", title: "Бесплатные игры" },
        { img: "", title: "Бесплатные игры" },
        { img: "", title: "Бесплатные игры" },
      ],
    };
  },
};
</script>

<style lang="scss">
.popular__categories {
  position: relative;
  z-index: 5;
  margin-bottom: 60px;
  max-width: 100%;
  & h2 {
    position: relative;
    z-index: 1;
    display: inline-block;
    margin-bottom: 0;
    margin-right: 16px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
    padding-right: 75px;
  }
}
.popular__categories-items {
  margin: 0 -10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  & a {
    margin: 0 10px;
    padding: 10px 5px 20px;
    width: 240px;
    text-decoration: none;
    min-height: 98px;
    font-size: 18px;
    line-height: 1.33;
    font-weight: 600;
    letter-spacing: 0.2px;
    text-align: center;
    background-color: rgba(50, 50, 54, 0.9);
    border-radius: 8px;
    transition: background-color 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: hsla(0, 0%, 100%, 0.27);
    }
    & span {
      width: 42px;
      height: 42px;
      opacity: 0.8;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & div {
      text-decoration: none;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
    }
  }
}
@media (max-width: 980px) {
  .popular__categories {
    & h2 {
      padding-right: 0;
    }
  }
  .popular__categories-items {
    flex-wrap: wrap;
    & a {
      width: 192px;
      margin: 18px 0;
      & div {
        font-size: 14px;
      }
    }
  }
}
@media (max-width: 690px) {
  .popular__categories {
    & h2 {
      font-size: 18px;
    }
  }
  .popular__categories-items {
    & a {
      width: 44%;
      margin: 12px auto;
    }
  }
}
</style>