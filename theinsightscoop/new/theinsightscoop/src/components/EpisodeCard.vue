<template>
    <div class="container shadow-sm rounded p-3">
        <div class="row justify-content-center align-items-center">
            <div class="col-2">
                <button class="btn">
                    <font-awesome-icon
                        @click="navigateToEpisode"
                        icon="headphones"
                    />
                </button>
            </div>
            <div class="col-10 text-left">
                {{ episode.title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["episode"],
    name: "EpisodeCard",
    methods: {
        navigateToEpisode() {
            window.open(this.episode.link);
        }
    }
};
</script>

<style scoped>
.container {
    background: #ffffff8c;
}
</style>