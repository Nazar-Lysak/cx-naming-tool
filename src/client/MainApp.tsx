import type { WidgetConfig } from '../main';
import FilterComponent from './features/filter/FilterComponent';
import ViewComponent from './features/view/ViewComponent';

function MainApp(config: WidgetConfig) {
  console.log(config);

  return (
    <div className="main-app">
      <FilterComponent />
      <ViewComponent />
    </div>
  );
}

export default MainApp;
