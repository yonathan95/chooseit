import Link from "next/link";

interface IProps {
  id: number;
  name: string | null;
}
export const UserCard: React.FC<IProps> = ({ id, name }) => {
  return (
    <Link
      href={`user/${id}`}
      className="flex flex-col gap-4 items-center sm:items-start"
    >
      <h1 className="text-3xl font-bold">{name}</h1>
    </Link>
  );
};
