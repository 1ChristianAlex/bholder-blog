import React, { FC } from "react";
import { Spinner, SpinnerProps } from "react-bootstrap";
import { SpinnerContainer } from "./styled";

const LoadingSpinner: FC<SpinnerProps> = ({
  animation,
  bsPrefix,
  role,
  size,
  variant
}) => (
  <SpinnerContainer>
    <Spinner
      animation={animation}
      bsPrefix={bsPrefix}
      role={role}
      size={size}
      variant={variant}
    />
  </SpinnerContainer>
);

export default LoadingSpinner;
