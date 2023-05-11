<script lang="ts">
	import axios from 'axios';

	let message = '';

	async function pushMessage() {
		const response = await axios.post('/api/chat', {
			message
		});
		console.log(response.data);
	}
</script>

<div class="bg-black">
	<input class="bg-black" bind:value={message} placeholder="content" />
	<button on:click={pushMessage}>submit</button>
</div>
