import Image from "next/image";
import { SkillGroup, SkillList, SkillSingle } from "../types/skill";

type Props = {
  list: SkillList;
};

const Skill = ({ list }: Props) => {
  return (
    <>
      <h2 className="text-lg mb-3">Skills</h2>
      <ul className="flex flex-col gap-5">
        {list.map((skillGroup) => {
          return (
            <li key={skillGroup.name} className="ml-2">
              <SkillGroupContainer item={skillGroup} color={skillGroup.color} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

const SkillGroupContainer = ({
  item,
  color,
}: {
  item: SkillGroup;
  color: string;
}) => {
  return (
    <>
      <h3 className="mb-2 text-md font-bold">
        <span className="pr-4 my-1 border-b-2" style={{ borderColor: color }}>
          {item.name}
        </span>
      </h3>
      <div>
        <ul className="flex flex-col gap-2 items-stretch">
          {item.skillList.map((skillSingle) => {
            return (
              <li
                key={skillSingle.name}
                className="p-2"
                ref={(node) => {
                  if (!node) return;
                  // 直style指定の影響がないため特殊に設定
                  node.style.setProperty(
                    "background",
                    `color-mix(in srgb, ${color} 20%, transparent)`
                  );
                }}
              >
                <SkillSingleContainer item={skillSingle} color={color} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const SkillSingleContainer = ({
  item,
}: {
  item: SkillSingle;
  color: string;
}) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex w-16 h-16 p-2 justify-center items-center aspect-square">
        <Image
          src={item.image}
          width={64}
          height={64}
          alt=""
          className="h-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h4>
          <span className="md:text-[1.1rem] text-md">{item.name}</span>
          <span className="md:text-sm text-xs"> ({item.experience})</span>
        </h4>
        <p className="text-sm md:text-md">{item.content}</p>
      </div>
    </div>
  );
};

export default Skill;
