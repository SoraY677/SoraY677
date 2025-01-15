import Link from "next/link";
import MainTitle from "../components/MainTitle";

type Props = {
  title: string;
  children: React.ReactElement;
};

const ContentLayout = ({ title, children }: Props) => {
  return (
    <div className="absolute top-0 z-100 h-full w-full max-w-full max-h-full overflow-y-scroll px-2 pb-[150px] md:pb-[250px]">
      <div className="flex justify-end py-1 pr-1">
        <Link href="/">x Close</Link>
      </div>
      <section className="md:w-[80%] w-[95%] min-h-[90%] max-w-[640px] overflow-hidden mx-auto text-secondary bg-primary bg-opacity-80 rounded-md p-4 m-3 break-words">
        <div className="flex w-full mb-10 justify-center">
          <MainTitle text={title} />
        </div>
        {children}
      </section>
    </div>
  );
};

export default ContentLayout;
