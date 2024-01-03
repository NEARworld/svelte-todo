import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
	try {
		const todos = await prisma.todo.findMany(); // return array

		return new Response(JSON.stringify({ todos }), {
			status: 200
		});
	} catch (e) {
		return new Response(
			JSON.stringify({
				message: 'Something went wrong while finding todos',
				error: e
			})
		);
	}
}

export async function POST({ request }) {
	try {
		const data = await request.json();

		const todos = await prisma.todo.create({ data }); // return created object

		return new Response(JSON.stringify({ todos }), {
			status: 200
		});
	} catch (e) {
		return new Response(
			JSON.stringify({
				message: 'Something went wrong while creating a todo',
				error: e
			})
		);
	}
}

export async function PATCH({ request }) {
	try {
		const data = await request.json();

		const todos = await prisma.todo.update({
			// return updated object
			where: {
				id: data.id
			},
			data: {
				text: data.text
			}
		});

		return new Response(JSON.stringify({ todos }), {
			status: 200
		});
	} catch (e) {
		return new Response(
			JSON.stringify({
				message: 'Something went wrong while updating a todo',
				error: e
			})
		);
	}
}
