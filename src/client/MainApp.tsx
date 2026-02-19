import { motion } from 'motion/react';

import type { WidgetConfig } from '../main';
import FilterComponent from './features/filter/FilterComponent';
import ViewComponent from './features/view/ViewComponent';

function MainApp(config: WidgetConfig) {
  console.log(config);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
    >
      <FilterComponent />
      <ViewComponent />
    </motion.div>
  );
}

export default MainApp;
