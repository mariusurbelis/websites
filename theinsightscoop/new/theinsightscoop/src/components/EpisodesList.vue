<template>
    <div class="container">
        <div class="row">
            <div style="font-size: 2em" class="col-12 mb-2 mt-2 text-left">EPISODES</div>

            <div
                v-for="episode in episodes"
                v-bind:key="episode.title"
                class="col-12 col-md-6 col-lg-4 mb-2"
            >
                <episode-card :episode="episode" />
            </div>
        </div>
    </div>
</template>

<script>
import EpisodeCard from "./EpisodeCard.vue";
export default {
    components: { EpisodeCard },
    data() {
        return {
            episodes: null
        };
    },
    created() {
        this.getEpisodes();
    },
    methods: {
        getEpisodes() {
            let Parser = require("rss-parser");
            let parser = new Parser();

            (async () => {
                let feed = await parser.parseURL(
                    "https://cors.urbelis.dev/https://anchor.fm/s/43d5938/podcast/rss"
                );

                this.episodes = feed.items;
            })();
        }
    }
};
</script>