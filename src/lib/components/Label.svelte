<script lang="ts">
	export let name: string;
	export let type: string;
	export let placeholder: string;
</script>

<label class="w-full h-16">
	<input
		class="w-full h-full border-2 border-neutral-50 p-3 rounded-2xl bg-inherit focus:border-amber-200"
		{name}
		{type}
		{placeholder}
	/>
</label>
