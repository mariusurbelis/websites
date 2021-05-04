<template>
    <div class="container">
        <div class="row">
            <div style="font-size: 2em" class="col-12 mb-2 mt-2 text-left">
                TEAM
            </div>

            <person-card
                class="col-5"
                :name="'Marius'"
                :title="'Host'"
                :pictureurl="`https://www.gravatar.com/avatar/7831c61828771490b20c4cded1b8dd7d?s=240&d=mp`"
            />
            <person-card
                class="col-5"
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