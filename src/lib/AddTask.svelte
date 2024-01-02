<script>
	import Modal from '$lib/Modal.svelte';
	import Icon from '@iconify/svelte';

	let showModal = false;
</script>

<div>
	<button class="btn btn-primary w-full" on:click={() => (showModal = true)}>
		Add new Task <Icon icon="mdi:plus" />
	</button>

	<Modal bind:showModal>
		<form>
			<h3 class="font-bold text-lg">Add new task</h3>
			<div class="modal-action">
				<input type="text" placeholder="Type here" class="input input-bordered w-full" />
				<button class="btn btn-primary">submit</button>
			</div>
		</form>
	</Modal>
</div>
