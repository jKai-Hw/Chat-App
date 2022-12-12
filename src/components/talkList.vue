<template>
    <v-flex>
        <v-list three-line class="pa-0">
            <TalkBox v-for="uuid in getLastMsgId" :key=uuid :uuid="uuid" />
        </v-list>
    </v-flex>
</template>

<script>
import personBox from "@/components/personBox.vue";
import TalkBox from "@/components/TalkBox.vue";

export default {
    computed: {
        getLastMsgId() {
            // return this.$store.getters.getLatestMessageById;
            return this.$store.getters['messages/getLatestMsgIdList'];
        },
    },
    components: {
        personBox,
        TalkBox,
    }
}
</script>

<style>
</style>
