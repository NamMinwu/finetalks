<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	// 페이지가 로드 됐을 때 실행
	onMount(() => {
		if (Kakao.isInitialized()) return; // 이미 초기화가 되어있다면 실행하지 않음
		Kakao.init('efda2ba78b6aad21de302640af6b0496'); // 카카오 JS SDK를 초기화
	});
</script>

<slot />
