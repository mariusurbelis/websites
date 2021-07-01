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
                :pictureurl="`https://urbelis.dev/media/tis-marius.jpg`"
            />
            <person-card
                class="col-md-5 col-11 mt-3 mt-md-0"
                :name="'Oskar'"
                :title="'Co-Host'"
                :pictureurl="`https://media-exp1.licdn.com/dms/image/C4D03AQEWvCD4DlSWZg/profile-displayphoto-shrink_800_800/0/1578870108869?e=1625702400&v=beta&t=zbCrOuKNAhUO_lhmqUUKZCAhV4_EM4eBjNEOgwUVGhI`"
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