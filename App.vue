<template>
    <div id="mainpage">
        <ul>
            <router-link to="/">产品</router-link>
            <router-link to="/cart">购物车</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<style>
    html,
    body {
        background: burlywood;
        padding: 0;
        margin: 0;
        font: 25px 'Courier New', Courier, monospace;
    }

    ul li {
        display: inline-block;
        width: 45%;
        box-sizing: border-box;
        text-align: center;
        margin: 5px auto;
    }

    button {
        cursor: pointer;
        border-radius: 15%;
    }

    a {
        display:inline-block;
        text-decoration: none;
        width:45%;
        text-align:center;
    }

    .router-link-exact-active {
        background: gold;
    }
</style>