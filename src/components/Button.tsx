interface ButtonProps {
  content: string;
  className?: string;
}
export function Button({ content, className }: ButtonProps) {
  return (
    <button className={`bg-green rounded-m py-2 px-2 ${className}`}>
      {content}
    </button>
  );
}
