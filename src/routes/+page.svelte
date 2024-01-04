<script>
	import '../app.css';
	import AddTask from '$lib/AddTask.svelte';
	import TodoList from '$lib/TodoList.svelte';

	export let data;

	console.log('page.svelte');
</script>

<main class="max-w-4xl mx-auto mt-4">
	<div class="text-center my-5 flex flex-col gap-4">
		<h1 class="text-2xl font-bold">Svelte Todo App</h1>
		<AddTask />
		<TodoList tasks={data.todos} />
	</div>
</main>
