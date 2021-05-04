<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <page-header />
        <episodes-list class="mt-3 mb-4" />
        <!-- <podcast-people class="mb-5" /> -->
        <page-footer class="mb-5" />
    </div>
</template>

<script>
import EpisodesList from "./components/EpisodesList.vue";
import PageFooter from "./components/PageFooter.vue";
import PageHeader from "./components/PageHeader.vue";
// import PodcastPeople from "./components/PodcastPeople.vue";

export default {
    name: "App",
    components: {
        EpisodesList,
        PageHeader,
        PageFooter,
        // PodcastPeople
    },
    beforeCreate() {
        document.title = "The Insight Scoop";
    }
};
</script>

<style>
#app {
    font-family: "Gotham Medium";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: url("assets/background-text.png");
    /* color: #2c3e50; */
    margin-top: 60px;
}
</style>
