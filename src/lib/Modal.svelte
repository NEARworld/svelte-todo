<script>
	export let showModal;
	export let inputValue;

	function handleCloseModal() {
		showModal = false;
		inputValue = '';
	}
</script>

<dialog id="my_modal_3" class={`modal ${showModal ? 'modal-open' : ''}`}>
	<div class="modal-box">
		<form method="dialog">
			<button
				on:click={handleCloseModal}
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
			>
		</form>
		<slot />
	</div>
</dialog>
