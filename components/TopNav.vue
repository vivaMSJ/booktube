<template>
    <div>
        <nav class="topnav">
            <img id="logo" src="~/assets/img/open-book.png" alt="">
            <h1 id="title">BookTube</h1>
            <ul class="navList">
                <li>
                    <button class="topbtn1"></button>
                </li>
                <li>
                    <button class="topbtn2"></button>
                </li>
                <li>
                    <button class="topbtn3"></button>
                </li>
                <li>
                    <button class="topbtn4"></button>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.topnav {
    display: flex;
    background-color: rgb(30, 30, 30);
    width: 100%;
    height: 50px;
}

#logo {
    width: 40px;
    height: 40px;
    margin-left: 10px;
}

#title {
    color: white;
    width: 30%;
    font-size: 20px;
    margin-right: 0;
    margin-left: 10px;
    margin-top: 15px;
}

.navList {
    margin-left: 20%;
    padding-top: 15px;
    width: 40%;
    display: flex;
    justify-content: space-around;
    padding-left: 0;
}

.navList li {
    list-style: none;
    width: 25px;
    height: 25px;
}

.topbtn1 {
    background-color:rgba(255, 255, 255, 0);
    padding: 0;
    border: none;
    width: 20px;
    height: 20px;
    background-image: url("../assets/img/link.png");
    background-size: cover;
}

.topbtn2 {
    background-color:rgba(255, 255, 255, 0);
    padding: 0;
    border: none;
    width: 20px;
    height: 20px;
    background-image: url("../assets/img/notification-bell.png");
    background-size: cover;
}

.topbtn3 {
    background-color:rgba(255, 255, 255, 0);
    padding: 0;
    border: none;
    width: 20px;
    height: 20px;
    background-image: url("../assets/img/search.png");
    background-size: cover;
}

.topbtn4 {
    background-color:rgba(255, 255, 255, 0);
    padding: 0;
    border: none;
    width: 20px;
    height: 20px;
    background-image: url("../assets/img/profile-user.png");
    background-size: cover;
}
</style>