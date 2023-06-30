/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { CloseIcon } from '@chakra-ui/icons';

// Animation variants for open and closed states
const drawerVariants = {
  open: {
    x: 0,
    transition: { duration: 0.3 },
  },
  closed: {
    x: '100%',
    transition: { duration: 0.3 },
  },
};

const drawerContainerStyles = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow-x: hidden;
  width: 220px;
`;

const drawerContentStyles = css`
  height: 100%;
  padding: 1rem;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const drawerHeaderStyles = css`
  text-align: right;
  width: 100%;
  padding: 1rem;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;
type CustomDrawerType = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};
const CustomDrawer: React.FC<CustomDrawerType> = ({
  children,
  isOpen,
  onClose,
}) => {
  return (
    <motion.div
      css={drawerContainerStyles}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={drawerVariants}
    >
      <h1 css={drawerHeaderStyles}>
        <button onClick={onClose}>x</button>
      </h1>
      <div css={drawerContentStyles}>{children}</div>
    </motion.div>
  );
};

export default CustomDrawer;
