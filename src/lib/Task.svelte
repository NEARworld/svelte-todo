<script>
	import Icon from '@iconify/svelte';
	import Modal from '$lib/Modal.svelte';
	import { invalidate } from '$app/navigation';

	export let task; // prop
	let showModalEdit = false; // state
	let editedTaskValue = ''; // state

	let showModalDelete = false;

	async function handleEditTask() {
		const res = await fetch('/api/todos', {
			method: 'PATCH',
			body: JSON.stringify({ id: task.id, text: editedTaskValue })
		});

		const data = await res.json();
		if (data) {
			editedTaskValue = '';
			invalidate(() => true);
		}
	}
	async function handleDeleteTask(e) {
		const res = fetch('/', {
			method: 'DELETE',
			body: JSON.stringify({ id: task.id })
		}).then((res) => res.json());

		showModalDelete = false;
		invalidate(() => true);
	}
</script>

<tr>
	<th>{task.id}</th>
	<td>{task.text}</td>
	<td class="flex gap-3">
		<button on:click={() => (showModalEdit = true)}>
			<Icon icon="bx:edit" class="scale-150 cursor-pointer text-blue-600" />
		</button>
		<Modal bind:showModal={showModalEdit} bind:inputValue={editedTaskValue}>
			<form on:submit={handleEditTask}>
				<h3 class="font-bold text-lg">Edit Task</h3>
				<div class="modal-action">
					<input
						type="text"
						value={editedTaskValue}
						placeholder="Type here"
						class="input input-bordered w-full"
						on:input={(e) => (editedTaskValue = e.target.value)}
					/>
					<button class="btn btn-primary" on:click={() => (showModalEdit = false)}>submit</button>
				</div>
			</form>
		</Modal>
		<button on:click={() => (showModalDelete = true)}>
			<Icon icon="mdi:trash-outline" class="scale-175 cursor-pointer text-red-600" />
		</button>
		<Modal bind:showModal={showModalDelete}>
			<form on:submit={handleDeleteTask}>
				<h3 class="font-bold text-lg">Delete Task</h3>
				<h3 class="font-bold text-lg">Are you sure, you want to delete this task?</h3>
				<div class="modal-action">
					<button class="btn"> Yes </button>
				</div>
			</form>
		</Modal>
	</td>
</tr>
