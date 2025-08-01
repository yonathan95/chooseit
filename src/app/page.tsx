import { Counter } from "./Counter";
import { PrismaClient } from "@prisma/client";
import { UserCard } from "./UserCard";

export default async function Home() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany({
    select: { id: true, name: true },
  });
  console.log(users);
  return (
    <>
      {users.map((user) => (
        <UserCard id={user.id} name={user.name} key={user.id} />
      ))}
    </>
  );
}
