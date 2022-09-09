import "./Searchbar.css";

type SearchbarProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const Searchbar = ({
  value,
  handleChange,
  placeholder,
}: SearchbarProps) => {
  return (
    <input
      className="search"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
