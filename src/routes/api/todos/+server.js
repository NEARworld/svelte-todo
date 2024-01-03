import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
	try {
		const todos = await prisma.todo.findMany();

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
