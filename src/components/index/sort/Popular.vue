<template>
  <div class="popular__categories">
    <h2>Популярные категории</h2>
    <div class="popular__categories-items">
      <a href="/" v-for="item in items" :key="item">
        <span>{{ item.img }}</span>
        <div>{{ item.title }}</div>
      </a>
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
    min-height: 98px;
    font-size: 18px;
    line-height: 1.33;
    font-weight: 600;
    letter-spacing: 0.2px;
    text-align: center;
    background-color: rgba(50, 50, 54, 0.9);
    border-radius: 8px;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    &:hover {
      background-color: hsla(0, 0%, 100%, 0.27);
    }
    & span {
      width: 42px;
      height: 42px;
      opacity: 0.8;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
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