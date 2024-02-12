<template>
    <div class="container">
        <div class="row">
            <div style="font-size: 2em" class="col-12 mb-2 mt-2 text-left">
                TEAM
            </div>

            <person-card
                class="col-md-5 col-11"
                :name="'Marius'"
                :title="'Host'"
                :pictureurl="``"
            />
            <person-card
                class="col-md-5 col-11 mt-3 mt-md-0"
                :name="'Oskar'"
                :title="'Co-Host'"
                :pictureurl="``"
            />
        </div>
    </div>
</template>

<script>
import PersonCard from "./PersonCard.vue";
export default {
    name: "PodcastPeople",
    components: {
        PersonCard
    }
};
</script>
