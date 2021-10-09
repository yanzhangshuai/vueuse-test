<template>
	<div>
		<h1>123</h1>
		<router-view/>
	</div>
</template>

<script lang="ts">
import { useRoute } from '@/router';
import { defineComponent, ref, watch, watchEffect } from '@vue/composition-api';
import { useTitle } from '@vueuse/core';

export default defineComponent({
	name: 'App',
	setup() {
		// const route = useRoute();
		// watch(route, (newVal) => {
		// 	console.log('route', route.value);
		// });
		const title = useTitle();
		console.log('title', title);
		return {};
	},
});
</script>
