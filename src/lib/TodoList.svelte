<script>
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
				<tr>
					<th>{task.id}</th>
					<td>{task.text}</td>
					<td>Quality Control Specialist</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
