import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function load({ fetch }) {
	const tasks = await prisma.todo.findMany();

	// const data = await prisma.todo.findMany();
	// const res = await fetch('http://localhost:3001/tasks');
	return { tasks };
}
