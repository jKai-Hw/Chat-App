<template>
    <v-flex>
        <v-list three-line class="pa-0">
            <TalkListBox v-for="uuid in getLastMsgId" :key=uuid :uuid="uuid" />
        </v-list>
    </v-flex>
</template>

<script>
import TalkListBox from "@/components/TalkListBox.vue";

export default {
    computed: {
        getLastMsgId() {
            return this.$store.getters['messages/getLatestMsgIdList'];
        },
    },
    components: {
        TalkListBox,
    }
}
</script>
