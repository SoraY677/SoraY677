import { useState } from "react";
import useIntervalHook from "../hooks/useInterval.Hook";

type Props = {
  images: string[];
  imageFadeDuration: number;
  name: string;
  baseInfoMap: { [key: string]: string };
  content: string;
};

const Profile = ({
  images,
  imageFadeDuration,
  name,
  baseInfoMap,
  content,
}: Props) => {
  const [displayedImageIndex, setDisplayedImageIndex] = useState<number>(0);

  useIntervalHook(() => {
    setDisplayedImageIndex((displayedImageIndex + 1) % images.length);
  }, imageFadeDuration);

  return (
    <div>
      <div
        className={`flex gap-5 sm:flex-row flex-col sm:items-start items-center mb-3`}
      >
        <ul className="relative w-[256px] aspect-square overflow-hidden">
          {images.map((image) => {
            return (
              <li
                className={`absolute w-full  duration-300 ${
                  image === images[displayedImageIndex]
                    ? "opacity-1"
                    : "opacity-0"
                }`}
                style={{
                  transform:
                    image === images[displayedImageIndex]
                      ? `rotate3d(0,1,0,0deg)`
                      : `rotate3d(0,1,0,180deg)`,
                }}
                key={image}
              >
                <img
                  src={image}
                  width={64}
                  height={64}
                  key={image}
                  className="w-full"
                />
              </li>
            );
          })}
        </ul>
        <section className="flex-auto">
          <h2 className="text-xl border-b-2 border-b-black w-full mb-2 pb-3">
            {name}
          </h2>
          <h3 className="text-md pb-2 text-lg">基本情報</h3>
          <table className="w-full">
            <tbody>
              {Object.keys(baseInfoMap).map((key, index) => {
                return (
                  <tr
                    className={` ${
                      index % 2 === 1 ? "bg-white" : "bg-gray-200"
                    }`}
                  >
                    <th className="p-2 border-r-2 border-gray-400">{key}</th>
                    <td className=" p-2">{baseInfoMap[key]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
      <section className="max-w-full p-4 border-y-2 border-black my-10">
        <h2 className="text-md text-center w-full text-lg mb-3 font-bold">
          For You!
        </h2>
        <pre className="whitespace-pre-wrap text-center leading-6 text-md">
          {content}
        </pre>
      </section>
    </div>
  );
};

export default Profile;
