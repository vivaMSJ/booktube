<template>
<div>
    <nav class="botnav">
        <nuxt-link to="/"><img class="uiImage" src="../assets/img/home.png" alt=""></nuxt-link>
        <nuxt-link to="/shorts"><img class="uiImage" src="../assets/img/file.png" alt=""></nuxt-link>
        <nuxt-link to="/upload"><img class="uiImageCenter" src="../assets/img/add.png" alt=""></nuxt-link>
        <nuxt-link to="/subs"><img class="uiImage" src="../assets/img/subscribe.png" alt=""></nuxt-link>
        <nuxt-link to="/bucket"><img class="uiImage" src="../assets/img/storage.png" alt=""></nuxt-link>
    </nav>
</div>
    
</template>

<script>
export default {
    
}
</script>

<style>
.botnav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: rgb(30, 30, 30);
    position: fixed;
    bottom: 0;
    height: 50px;
    padding-left: 5px;
    padding-right: 5px;
}

.uiImage {
    width: 30px;
    height: 30px;
}

.uiImageCenter {
    width: 40px;
    height: 40px;
    
}
</style>