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

export async function PATCH({ request }) {
	try {
		const data = await request.json();
		const res = await fetch(`http://localhost:3001/tasks/${data.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ text: data.text })
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
				message: 'Something went wrong while editing Todo',
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

export async function DELETE({ request }) {
	try {
		const data = await request.json();
		const res = await fetch(`http://localhost:3001/tasks/${data.id}`, {
			method: 'DELETE'
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
				message: 'Something went wrong while editing Todo',
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
