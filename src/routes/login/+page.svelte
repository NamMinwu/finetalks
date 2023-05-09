<script lang="ts">
	import Form from '$lib/components/Form.svelte';
	import Label from '$lib/components/Label.svelte';

	function onKakaoLogin() {
		// 카카오 로그인 버튼을 눌렀을 때 동작하는 함수
		Kakao.Auth.authorize({
			redirectUri: 'http://localhost:5173/oauth' // 카카오 로그인 후 리다이렉트 될 주소
		});
	}
</script>

<Form>
	<div class="flex">
		<h1 class="font-mood text-2xl font-bold">로그인</h1>
	</div>

	<Label name="email" type="email" placeholder="Email" />
	<Label name="password" type="password" placeholder="Password" />

	<div class="flex flex-col items-center space-y-4 pt-10">
		<button
			class="border-2 border-neutral-50 w-80 h-16 rounded-3xl hover:border-amber-200"
			type="submit">로그인</button
		>
		<button
			class=" flex w-80 h-16 rounded-3xl justify-center items-center bg-yellow-400"
			on:click|preventDefault={onKakaoLogin}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-6 h-6 fill-black"
			>
				<path
					fill-rule="evenodd"
					d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z"
					clip-rule="evenodd"
				/>
			</svg>

			<p class="text-black font-extrabold">카카오 로그인</p>
		</button>
		<a class="pt-10 hover:text-amber-200" href="signup">회원가입</a>
	</div>
</Form>
