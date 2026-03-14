<script setup lang="ts">

import api from "~/api/api";

const data = ref({
    name: "",
    phone: "",
    message: ""
});

function send() {
    const formData = new FormData();
    formData.append("name", data.value.name);
    formData.append("phone", data.value.phone);
    formData.append("message", data.value.message);

    api("/wp-json/public-api/v1/send", formData, "POST");
    alert("Заявка отправлена");
}
</script>

<template>
    <slot
            :data="data"
            :send="send"
    />
</template>

<style scoped lang="scss">

</style>