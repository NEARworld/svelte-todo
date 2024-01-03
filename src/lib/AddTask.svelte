<script>
	import Modal from '$lib/Modal.svelte';
	import Icon from '@iconify/svelte';
	import { invalidate } from '$app/navigation';

	let showModal = false;

	let newTaskValue = '';

	async function handleNewTaskSubmit(e) {
		e.preventDefault();

		const res = await fetch('/api/todos', {
			method: 'POST',
			body: JSON.stringify({ text: newTaskValue })
		});
		const data = await res.json();
		if (data) {
			newTaskValue = '';
			invalidate(() => true);
		}
	}
</script>

<div>
	<button class="btn btn-primary w-full" on:click={() => (showModal = true)}>
		Add new Task <Icon icon="mdi:plus" />
	</button>
	<Modal bind:showModal>
		<form on:submit={handleNewTaskSubmit}>
			<h3 class="font-bold text-lg">Add new task</h3>
			<div class="modal-action">
				<input
					type="text"
					value={newTaskValue}
					placeholder="Type here"
					class="input input-bordered w-full"
					on:input={(e) => (newTaskValue = e.target.value)}
				/>
				<button class="btn btn-primary" on:click={() => (showModal = false)}>submit</button>
			</div>
		</form>
	</Modal>
</div>
