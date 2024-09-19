export const Pill = ({ icon, title, subtitle, color, classNames }) => {
  return (
    <button
      className={`bg-white shadow-md absolute  z-30 p-2 flex items-center rounded-md ${classNames}`}
    >
      <div
        className="icon w-10 h-10 text-white rounded-full flex items-center justify-center"
        style={{ background: color }}
      >
        {icon}
      </div>
      <div className="text flex flex-col items-start px-4">
        <span className="text-sm text-black">{title}</span>
        <span className="text-[12px]">{subtitle}</span>
      </div>
    </button>
  );
};
