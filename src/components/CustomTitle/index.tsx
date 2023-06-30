/** @jsxImportSource @emotion/react */
import { CustomTitleType } from './CustomTitle.types';
import { CustomTitleStyle } from './CustomeTitleStyle';

const CustomTitle = ({ onChange, value }: CustomTitleType) => {
  return (
    <div css={CustomTitleStyle}>
      {' '}
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Write your question..."
      />
    </div>
  );
};

export default CustomTitle;
