<template>
    <div class="container shadow-sm rounded p-2">
        <div class="row justify-content-center align-items-center">
            <div class="col-6">
                <img width="100%" v-bind:src="pictureurl" />
            </div>
            <div class="col-6">
                <div class="row">
                    <div style="font-size: 2.5em" class="col-12">
                        {{ name }}
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        {{ title }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["name", "title", "pictureurl"],
    name: "PersonCard"
};
</script>

<style scoped>
.container {
    background: #ffffff8c;
}

/* img { filter: grayscale(100%); } */

</style>