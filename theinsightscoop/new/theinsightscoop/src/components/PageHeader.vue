<template>
    <div class="container">
        <div class="row mb-5 mb-md-3 mb-lg-0">
            <div class="d-sm-block d-block d-md-none col-12 text-center">
                <img width="50%" src="../assets/the-insight-scoop.png" />
            </div>

            <div
                style="font-size: 5em"
                class="d-sm-none d-none d-md-block col-12"
            >
                The Insight Scoop
            </div>
        </div>

        <div class="row justify-content-center align-items-center">
            <button
                @click="
                    openLink(
                        `https://open.spotify.com/show/0JmeSuliHJ2bFIekH8wNLo`
                    )
                "
                class="btn col-3 col-md-2 col-lg-1"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"
                    />
                </svg>
            </button>

            <button
                @click="
                    openLink(
                        `https://www.youtube.com/channel/UCtOqoGxJhxf5Z1PeSG626xA`
                    )
                "
                class="btn col-3 col-md-2 col-lg-1"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"
                    />
                </svg>
            </button>

            <button
                @click="openLink(`https://www.facebook.com/tispodcast`)"
                class="btn col-3 col-md-2 col-lg-1"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageHeader",
    methods: {
        openLink(link) {
            window.open(link);
        }
    }
};
</script>

<style scoped>
.container {
    text-transform: uppercase;
}
</style>