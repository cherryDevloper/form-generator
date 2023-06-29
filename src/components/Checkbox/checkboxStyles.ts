import { css } from '@emotion/react';

export const checkboxContainerStyles = css`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 8rem;
  flex-direction: column;

  > label {
    display: flex;
    align-items: center;
  }

  input {
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
