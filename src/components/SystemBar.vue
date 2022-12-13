<template>
    <div>
        <v-system-bar app window dark class="horizontal-gradient">
            <span class="ps-2">Chats App</span>
            <v-spacer></v-spacer>
            <v-btn small text rounded class="text-center" href="https://github.com/jKai-Hw/chat-app#readme" target="_blank">
                Readme<v-icon class="ma-0 ps-1">mdi-github</v-icon>
            </v-btn>
        </v-system-bar>
    </div>
</template>

<script>
export default {

}
</script>
<style>
.horizontal-gradient {
    background: linear-gradient(to right, #EFBF1C, #EB8261);
}
</style>
