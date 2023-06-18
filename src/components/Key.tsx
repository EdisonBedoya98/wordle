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
      className="bg-gray-key py-3 px-4 rounded-m hover:bg-gray active:bg-green"
      onClick={() => onClick(value)}
    >
      {children || <span>{value}</span>}
    </button>
  );
};
