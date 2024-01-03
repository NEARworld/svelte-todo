export async function load({ fetch }) {
	const res = await fetch('/api/todos');
	return await res.json(); // must return a plain object.
}
