import { motion } from 'motion/react';
import styled from 'styled-components';

import viteLogo from '../../../assets/loading-red.png';

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(43, 43, 43, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

const LoadingOverlay: React.FC = () => {
  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
    >
      <img src={viteLogo} alt="Loading..." />
    </Overlay>
  );
};

export default LoadingOverlay;
