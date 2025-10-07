"use client";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div className="p-4 flex items-center justify-center h-screen w-full bg-[#f54a00]">
      {children}
    </div>
  );
};

export default layout;
