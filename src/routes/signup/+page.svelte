<script>
	import Form from '$lib/components/Form.svelte';
	import Label from '$lib/components/Label.svelte';
</script>

<Form>
	<Label name="email" type="email" placeholder="Email" />
	<Label name="password" type="password" placeholder="Password" />
	<Label name="confirmPassword" type="password" placeholder="ConfirmPassword" />
	<Label name="name" type="text" placeholder="name" />
	<button
		class="border-2 border-neutral-50 w-80 h-16 rounded-3xl hover:border-amber-100"
		type="submit">회원가입</button
	>
</Form>
