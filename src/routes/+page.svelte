<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	let visible = false;
	let text = '이별로 인해 힘든 여러분들을 위해 \n작게 나마 하소연 할 공간을 마련해 봤습니다.';
	onMount(() => {
		visible = true;
	});
</script>

<div class="flex flex-col bg-gradient-to-b from-black from 70% to-indigo-950 to 30% h-screen p-10">
	<div class="flex w-full h-24 justify-between items-center px-10">
		<div>
			<p class="text-xl text-yellow-100 font-courgette p">fine talk</p>
		</div>
		<a class="text-white font-courgette text-xl" href="login">Login</a>
	</div>
	{#if visible}
		<div
			class="flex w-full h-full justify-center items-center"
			transition:fade={{ duration: 2500 }}
		>
			<p
				class="text-center leading-relaxed font-mood text-neutral-50 text-4xl max-2xl:whitespace-pre-line max-2xl:text-3xl transition-all"
				in:fly={{ y: 100, duration: 2500 }}
			>
				{text}
			</p>
		</div>
	{/if}
</div>
