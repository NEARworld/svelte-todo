<script>
	export let showModal;
</script>

<dialog id="my_modal_3" class={`modal ${showModal ? 'modal-open' : ''}`}>
	<div class="modal-box">
		<form method="dialog">
			<button
				on:click={() => (showModal = false)}
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
			>
		</form>
		<slot />
	</div>
</dialog>
