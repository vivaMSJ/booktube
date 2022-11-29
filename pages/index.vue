<template>
  <div class="main-layout">
    <div class="category">
      <ul class="cate-list">
        <li id="forBtn"><button></button></li>
        <li>전체</li>
        <li>뉴스</li>
        <li>게임</li>
        <li>음악</li>
        <li>실시간</li>
        <li>요리 프로그램</li>
        <li>액션 어드벤처 게임</li>
        <li>감상한 동영상</li>
      </ul>
    </div>
    <div class="main-container">
      <div class="contents-container" v-for="(movie, index) in movies" :key="index">
        <div class="main-img">
          <img :src="`${movie.image}`" alt="">
        </div>
        <p class="title">{{movie.title}}{{movie.userRating}}</p>
        <p>{{movie.suttitle}}</p>
        <p>{{movie.pubDate}}{{movie.director}}</p>
        <p>{{movie.actor}}</p>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      movies: [],
    }
  },
  async fetch() {
    await this.getMovies()
  },
  methods: {
    async getMovies() {
      const res = await this.$axios.get('/api/?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&genre=1"', 
      {headers: {
        'Accept': '*/*',
        'X-Naver-Client-Id': 'wpFpx1Q3xc7MyOlMa16r',
        'X-Naver-Client-Secret': 'KvtR7Y6dWY'
        }}
      )
      // return console.log(res)

      const data = res.data
      data.items.forEach((movie) => {
        this.movies.push(movie)
      })
    },
  },
}


</script>

<style>

.main-layout {
  height: 100%;
  background-color: rgb(30, 30, 30);
}

.category {
  width: 100%;
  height: 30px;
  background-color: rgb(30, 30, 30);
  
}

.cate-list {
  display: flex;
  height: 28px;
  padding-left: 0;
  white-space: nowrap;
  overflow-x: scroll;

  -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

.cate-list::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}

.cate-list button {
  width: 25px;  
  height: 25px;
  margin-right: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  background-image: url(../assets/img/compass.png);
  background-size: cover;
}

.cate-list li {
  margin: 0 2px 0 2px;
  padding: 4px 3px 0 3px;
  border: 1px solid gray;
  border-radius: 10%;
  font-size: 1rem;
  color: white;
}

.cate-list #forBtn {
  height: 25px;
  margin-left: 10px;
  margin-right: 20px;
  padding-top: 0;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  
}

.main-img img{
  width: 100%;
  height: auto;
}

/* 컨텐츠 목록 부분 */
.main-container { 
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  padding-bottom: 50px;
  white-space: nowrap;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  background-color: rgb(30, 30, 30);
  
}

.contents-container { 
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: rgb(30, 30, 30);
  border-bottom: 5px solid rgb(147, 147, 147);
  color: white;
  margin-right: 10px;
  border-radius: 1%;
}

p {
  margin-bottom: 10px;
}
</style>

