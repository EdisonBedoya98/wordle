export const Key = ({
  value,
  onClick,
  children,
}: {
  value: string;
  onClick: (value: string) => void;
  children?: React.ReactNode;
}) => {
  return (
    <button
      className="bg-gray-key dark:bg-dark-key py-3 px-4 min-w-[2.5rem] rounded-m hover:bg-gray dark:hover:bg-[#818181] active:bg-green dark:active:bg-green"
      onClick={() => onClick(value)}
    >
      {children || <span>{value}</span>}
    </button>
  );
};
