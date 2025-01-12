type Props = {
  children: React.ReactElement;
};

const ContentLayout = ({ children }: Props) => {
  return (
    <div className="absolute z-100 h-full w-full flex justify-center items-center color-black">
      <div className="min-w-[80%] min-h-[90%] bg-white bg-opacity-80 rounded-md p-4">
        {children}
      </div>
    </div>
  );
};

export default ContentLayout;
