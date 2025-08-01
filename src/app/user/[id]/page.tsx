import { PrismaClient } from "@prisma/client";

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const prisma = new PrismaClient();
  const user = await prisma.user.findFirst({
    select: { name: true, email: true },
    where: { id: parseInt(id) },
  });

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="flex flex-col gap-4 items-center sm:items-start">
      <h1 className="text-3xl font-bold">{id}</h1>
      <p className="text-lg">User ID: {id}</p>
      <p className="text-lg">User Name: {user.name}</p>
      <p className="text-lg">User Email: {user.email}</p>
    </div>
  );
}
