<form
	class="flex flex-col items-center w-screen h-screen bg-gradient-to-b from-black from 70% to-indigo-950 to 30% min-h-max"
	method="post"
>
	<div class="flex w-full justify-end p-10">
		<a href="/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-8 h-8 hover:fill-amber-200"
			>
				<path
					fill-rule="evenodd"
					d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</div>
	<div
		class="flex flex-col w-1/3 h-4/6 border-2 border-amber-200 rounded-xl p-12 max-lg:w-11/12 justify-between min-h-fit shrink-0 overflow-scroll my-10 items-center"
	>
		<slot />
	</div>
</form>
