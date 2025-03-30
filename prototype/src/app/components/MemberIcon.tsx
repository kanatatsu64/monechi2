export const MemberIcon = ({ name }: { name: string }) => {
  const initial = name.charAt(0);
  const colors = {
    太: "bg-blue-500",
    花: "bg-pink-500",
    次: "bg-green-500",
  };
  const bgColor = colors[initial as keyof typeof colors] || "bg-gray-500";

  return (
    <div
      className={`${bgColor} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold`}
    >
      {initial}
    </div>
  );
};
