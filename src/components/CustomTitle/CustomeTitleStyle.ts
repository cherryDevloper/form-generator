import { css } from '@emotion/react';

export const CustomTitleStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  > input {
    width: 100%;
    font-size: 14px;
    border-radius: 4px;
    font-size: 1rem;
    margin-bottom: 5px;
    padding: 10px 1px;
  }

  input:focus {
    background: #f1f1f1;
    border-round: 10px;
  }
`;
