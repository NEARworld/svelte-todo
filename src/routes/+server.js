export async function POST({ request }) {
	try {
		const data = await request.json();

		const res = await fetch('http://localhost:3001/tasks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const todo = await res.json();

		return new Response(JSON.stringify({ todo }), {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (e) {
		return new Response(
			JSON.stringify({
				message: 'Something went wrong while adding Todo',
				error: e
			}),
			{
				status: 500,
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
	}
}
