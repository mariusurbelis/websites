<template>
    <div id="app" class="pb-5 pt-5 m-0">
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <page-header class="mt-0" />
        <page-about class="mt-3" />
        <episodes-list class="mt-4" />
        <!-- <podcast-people class="mt-4 mb-5" /> -->
        <page-footer class="mt-5" />
    </div>
</template>

<script>
import EpisodesList from "./components/EpisodesList";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import PageAbout from "./components/PageAbout";
// import PodcastPeople from "./components/PodcastPeople.vue";

export default {
    name: "App",
    components: {
        EpisodesList,
        PageHeader,
        PageFooter,
        PageAbout,
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

::-webkit-scrollbar {
    background-color: #cccccc33;
    width: 0.5em;
}

::-webkit-scrollbar-thumb:window-inactive,
::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.452);
}
</style>
