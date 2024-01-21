import { Button, Spinner } from "react-bootstrap";

export const ButtonCustom = ({
  onClick,
  className,
  size,
  title,
  isLoading,
}) => {
  return (
    <Button
      size={size}
      className={`${className} d-flex align-items-center justify-content-center`}
      onClick={onClick}
    >
      {title}
      {isLoading && <Spinner className="ms-2" animation="border" size="sm" />}
    </Button>
  );
};
