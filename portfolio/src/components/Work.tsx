import Link from "next/link";
import { WorkList, WorkSingle } from "../types/work";
import Image from "next/image";

type Props = {
  list: WorkList;
};

const Work = ({ list }: Props) => {
  return (
    <ul className="flex flex-col gap-3">
      {list.map((workSingle) => {
        return (
          <li key={workSingle.title}>
            <WorkSingleContainer item={workSingle} />
          </li>
        );
      })}
    </ul>
  );
};

const WorkSingleContainer = ({ item }: { item: WorkSingle }) => {
  return (
    <Link
      href={item.url}
      target="_blank"
      className="flex flex-col md:flex-row items-center gap-3 md:gap-4 shadow-lg p-2 rounded-md bg-white"
    >
      <div className="min-w-1/2 max-w-48 w-full md:min-w-24 md:w-px aspect-square">
        <Image
          src={item.path}
          width={64}
          height={64}
          alt=""
          className="w-full"
        />
      </div>
      <div className="flex-auto">
        <h2 className="flex justify-between pb-1 mb-2 border-b-2 border-black">
          <span className="text-lg font-bold">{item.title}</span>
          <span className="underline">🔗リンク</span>
        </h2>
        <p>{item.descritption}</p>
      </div>
    </Link>
  );
};

export default Work;
