<script>
	import Task from './Task.svelte';

	export let tasks;
</script>

<div class="overflow-x-auto">
	<table class="table">
		<thead>
			<tr>
				<th>id</th>
				<th>text</th>
				<th>actions</th>
			</tr>
		</thead>
		<tbody>
			{#each tasks as task}
				<Task {task} />
			{/each}
		</tbody>
	</table>
</div>
