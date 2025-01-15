import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  imageFadeDuration: number;
  name: string;
  baseInfoMap: { [key: string]: string };
};

const Profile = ({ images, imageFadeDuration, name, baseInfoMap }: Props) => {
  const [displayedImageIndex, setDisplayedImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(
      () => setDisplayedImageIndex((displayedImageIndex + 1) % images.length),
      imageFadeDuration || 0
    );
    return () => clearInterval(interval);
  }, [displayedImageIndex, images.length, imageFadeDuration]);

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
                <Image
                  src={image}
                  width={512}
                  height={512}
                  key={image}
                  alt=""
                  className="w-full"
                />
              </li>
            );
          })}
        </ul>
        <section className="flex-auto">
          <h2 className="text-xl border-b-2 border-b-secondary w-full mb-2 pb-3">
            {name}
          </h2>
          <table className="w-full">
            <tbody>
              {Object.keys(baseInfoMap).map((key, index) => {
                return (
                  <tr key={key}>
                    <th className="p-2 border-r-2">{key}</th>
                    <td className=" p-2">{baseInfoMap[key]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Profile;
