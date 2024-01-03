<script>
	import Icon from '@iconify/svelte';

	export let task;
</script>

<tr>
	<th>{task.id}</th>
	<td>{task.text}</td>
	<td class="flex gap-3">
		<Icon icon="bx:edit" class="scale-150 cursor-pointer text-blue-600" />
		<Icon icon="mdi:trash-outline" class="scale-175 cursor-pointer text-red-600" />
	</td>
</tr>
