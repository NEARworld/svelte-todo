<script>
	import Icon from '@iconify/svelte';
	import Modal from '$lib/Modal.svelte';

	export let task; // prop
	let showModalEdit = false; // state
	let editedTaskValue = ''; // state

	let showModalDelete = false;

	console.log(showModalEdit); // logged on server
	function handleEditTask() {
		editedTaskValue = '';
	}
	function handleDeleteTask(e) {
		e.preventDefault();
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
