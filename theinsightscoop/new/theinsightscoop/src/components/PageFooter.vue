<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                © 2019-{{ new Date().getFullYear() }}
                <a href="https://mariusurbelis.com">Marius Urbelis</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageFooter"
};
</script>

<style scoped>
a {
    color: black;
}

a:hover {
    color: gray;
    text-decoration: none;
}
</style>