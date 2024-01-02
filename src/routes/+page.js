export async function load({ fetch }) {
	const res = await fetch('http://localhost:3001/tasks');
	return { tasks: await res.json() };
}
