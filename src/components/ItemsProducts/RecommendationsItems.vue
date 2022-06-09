<template>
  <div class="recommendations__items">
    <ul>
      <li v-for="item in items" :key="item.title">
        <!-- <a href="/"> -->
        <div>
          <div class="recommendations__picture">
            <img
              src="https://store.my.games/pre_240x145_crop/hotbox/showcase/gamelocaledraft/picture/56612309-e0b1-4254-8f5a-d98d6423d320.jpg"
              alt="Tom Clancy's Rainbow Six Siege онлайн"
              width="240"
              height="145"
            />
          </div>
          <Price />
        </div>
        <div class="recommendations__info">
          <div class="recommendations__info-top">
            <div class="recommendations__info-title">RAINBOWSIX SIEGE</div>
            <div class="recommendations__info-genre">Шутер</div>
          </div>
          <div class="recommendations__info-descr">
            Экшн-шутер в жанре зомби-апокалипсиса и с элементами строительства
            базы. Начните свой путь!
          </div>
          <div class="recommendations__info-button">
            <a href="/">Купить</a>
          </div>
        </div>
        <!-- </a> -->
      </li>
    </ul>
  </div>
</template>
<script>
import Price from "@/components/ItemsProducts/Price";
export default {
  components: { Price },
  data() {
    return {
      items: [{ title: "MMORPG" }, { title: "MMORPG" }],
    };
  },
};
</script>
<style lang="scss">
.recommendations__items {
  & ul {
    margin: 0;
    padding: 36px 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  & li {
    position: relative;
    display: block;
    float: left;
    text-align: left;
    margin: 0 10px 20px;
    width: 240px;
    height: 240px;
    border-radius: 6px;
    overflow: hidden;
    color: #f5f5f7;
    background-color: #323236;
  }
  & a {
    display: block;
    height: 100%;
    border-radius: 6px;
    overflow: hidden;
    text-decoration: none;
  }
}
.recommendations__picture {
  position: relative;
  margin: -1px -1px 0;
  height: 145px;
  overflow: hidden;
  -webkit-transition: -webkit-transform 0.15s;
  transition: -webkit-transform 0.15s;
  transition: transform 0.15s;
  transition: transform 0.15s, -webkit-transform 0.15s;
  & img {
    width: 100%;
  }
}
.recommendations__info {
  padding: 12px;
  transition: 0.3s;
  background-color: #323236;
  transform: translateY(10px);
  &:hover {
    transform: translateY(-145px);
    background-color: #323236;
    height: 100%;
  }
}
.recommendations__info-descr {
  font-size: 11px;
  line-height: 12px;
  overflow: hidden;
  color: #ffffff;
  margin-bottom: 23px;
  padding-top: 23px;
}
.recommendations__info-button {
  & a {
    padding: 9px 35px 10px;
    min-width: 100%;
    box-sizing: border-box;
    color: #323236;
    background-color: #ffca4d;

    position: relative;
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 600;
    text-align: center;
    text-overflow: ellipsis;
    border: none;
    outline: none;
    border-radius: 6px;
    transition: all 0.1s;
    &:hover {
      background-color: #faca5b;
    }
  }
}
.recommendations__info-title {
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.recommendations__info-genre {
  margin-bottom: 14px;
  width: 100%;
  max-width: 100%;
  font-size: 13px;
  color: #979797;
}
@media (max-width: 800px) {
  .recommendations__items {
    & li {
      width: calc(32vw - 28px);
      margin: 0 3px 10px;
    }
  }
}
@media (max-width: 455px) {
  .recommendations__items {
    & li {
      width: calc(50vw - 28px);
      margin: 0 3px 10px;
    }
  }
  .recommendations__info-title {
    margin-bottom: 0;
    font-size: 13px;
    line-height: 15px;
  }
  .recommendations__info-genre {
    font-size: 11px;
    line-height: 16px;
    width: 100%;
  }
  .recommendations__info-button {
    & button {
      min-width: 100%;
    }
  }
  .recommendations__info-descr {
    padding-top: 27px;
  }
}
</style>