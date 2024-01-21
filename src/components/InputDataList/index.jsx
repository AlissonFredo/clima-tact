import { Form } from "react-bootstrap";

export const InputDataList = ({
  onChange,
  options,
  value,
  name,
  placeholder,
  size,
}) => {
  return (
    <>
      <Form.Control
        value={value}
        placeholder={placeholder}
        list={name}
        name={name}
        onChange={onChange}
        size={size}
        className="mb-3 mb-md-0"
      />
      <datalist id={name}>
        {options.map((option, index) => (
          <option key={index} value={option.description} />
        ))}
      </datalist>
    </>
  );
};
