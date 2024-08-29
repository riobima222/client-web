interface Props {
  type: string;
  placeholder: string;
  name: string;
  className?: string;
}

export const Input = ({ type, placeholder, className, name }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`focus:outline-none rounded-lg text-xs py-3 px-4 w-full text-black ${className}`}
      name={name}
    />
  );
};
