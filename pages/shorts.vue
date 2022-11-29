<template>
  <div class="main-layout">
    <div class="video-container">
        <div class="video-content">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/iZjfnoF784k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>title</p>
        </div>
        <div class="video-content"><iframe width="560" height="315" src="https://www.youtube.com/embed/siow15Yn8r8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>title2</p>
        </div>
        <div class="video-content"><iframe width="560" height="315" src="https://www.youtube.com/embed/UDkPQ7uYi8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>title2</p>
        </div>
        <div class="video-content"><iframe width="560" height="315" src="https://www.youtube.com/embed/Ub-WjhYaiGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>title2</p>
        
        </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      videos: [],
    }
  },
  async fetch() {
    await this.getVideos()
  },
  methods: {
    async getVideos() {
      const videoRes = await this.$axios.get('/api2/?part=snippet&chart=mostPopular&maxResults=10&key=AIzaSyBFATVxKtiKEpQNzOlcBdMmE0B0K3sWkMc')
    //   return console.log(videoRes.data);

      const data = videoRes.data
      data.items.forEach((video) => {
        this.videos.push(video)
      })
    },
  },
}


</script>

<style>

.main-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: rgb(30, 30, 30);
    
}

/* 영상 컨테이너*/

.video-container {
    width: 100%;
    height: 100%;
    background-color: rgb(30, 30, 30);
}

.video-content {
    width: 100%;
}

.video-content p {
    color: white;

}
</style>

