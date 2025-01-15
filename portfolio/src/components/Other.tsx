import Link from "next/link";
import { OtherGroup, OtherList, OtherSingle } from "../types/other";

type Props = {
  list: OtherList;
};

const Other = ({ list }: Props) => {
  return (
    <>
      <h2 className="text-lg mb-3">Other</h2>
      <ul className="flex md:flex-row flex-nowwrap flex-col divide-y-2 md:divide-x-2 md:divide-y-0">
        {list.map((otherGroup) => {
          return (
            <li
              key={otherGroup.name}
              className="ml-2 pt-1 pb-1 w-full border-secondary"
            >
              <OtherGroupContainer item={otherGroup} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

const OtherGroupContainer = ({ item }: { item: OtherGroup }) => {
  return (
    <div className="">
      <h3 className="font-bold w-full text-center">{item.name}</h3>
      <ul className="flex flex-col items-center justify-center text-center px-7">
        {item.example.map((otherSingle) => {
          return (
            <li key={otherSingle.name}>
              <OtherSingleContainer item={otherSingle} />
            </li>
          );
        })}
      </ul>
      <ul></ul>
    </div>
  );
};

const OtherSingleContainer = ({ item }: { item: OtherSingle }) => {
  return (
    <div className="w-fit">
      <Link href={item.url} target="_blank" className="underline">
        {item.name}
      </Link>
    </div>
  );
};

export default Other;
