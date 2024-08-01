import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'bg-[#FBFCFE] border border-[#DDE4F0] text-[#354E95] shadow-[2px_2px_5px_1px_rgba(53,78,149,0.2)] rounded-md transition-transform duration-300 ease-in-out hover:scale-105',
        className,
      )}
    >
      {children}
    </button>
  );
}