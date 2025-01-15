type Props = {
  text: string;
};

const MainTitle = ({ text }: Props) => {
  return (
    <h1 className="text-2xl bg-secondary text-primary min-w-[30%] text-center p-2">
      {text}
    </h1>
  );
};

export default MainTitle;
