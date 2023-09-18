<template>
	<div class="applicationCommand">
		<img v-if="appCmd.icon" class="applicationCommandIcon" :src="appCmd.icon" alt="" />
		<div v-if="appCmd.name" class="applicationCommandName">
			<span>
				{{ appCmd.name }}
			</span>
		</div>
		<div class="optionPill">
				<span v-if="optionPillKey" class="optionPillKey">
					{{ optionPillKey }}
				</span>
				<span class="optionPillValue">
					{{ optionPillValue }}
				</span>
		</div>
		<div class="optionPill2">
			<span v-if="optionPillKey2" class="optionPillKey2">
				{{ optionPillKey2 }}
			</span>
			<span class="optionPillValue2">
				{{ optionPillValue2 }}
			</span>
		</div>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
	name: 'ApplicationCommands',
	props: {
		appCmdIcon: String,
		appCmdName: String,
		optionPillKey: String,
		optionPillValue: String,
		optionPillKey2: String,
		optionPillValue2: String,
	},
	setup(props, { slots }) {
		const { appCmdIcon, appCmdName } = toRefs(props)

		const appCmd = computed(() => ({
			icon: appCmdIcon?.value,
			name: appCmdName?.value,
		}))

		return {
			appCmd
		}
	},
})
</script>

<style src="@theme/custom.css"></style>