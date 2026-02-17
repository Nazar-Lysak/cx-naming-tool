import type { WidgetConfig } from '../main';

function MainApp(config: WidgetConfig) {
  console.log(config);

  return (
    <div className="main-app">
      <div className="main-app__header">
        <h1>Find the perfect name</h1>
      </div>
    </div>
  );
}

export default MainApp;
