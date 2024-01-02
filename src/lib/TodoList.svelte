<script>
	export let tasks;
	console.log('tasks:', tasks);
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
			<tr>
				{#each tasks as task}
					<th>{task.id}</th>
					<td>{task.text}</td>
					<td>Quality Control Specialist</td>
				{/each}
			</tr>
		</tbody>
	</table>
</div>
