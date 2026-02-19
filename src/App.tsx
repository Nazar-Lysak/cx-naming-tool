import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import type { WidgetConfig } from './main';
import StartScreen from '@/client/components/start-screen/StartScreen';
import LoadingOverlay from '@/client/UI/loading-overlay/LoadingOverlay';
import { useApp } from '@/client/context/context';
import { deviceSizes, generalStyles } from './styles/variables';

const MainApp = lazy(() => import('@/client/MainApp'));

const AppContainer = styled.div`
  position: relative;
  max-width: ${deviceSizes.containerWidth}px;
  margin: 0 auto;
  padding: 16px;
  min-height: 200px;
  background-color: ${generalStyles.colors.lightGray};
  border-radius: 8px;

  * {
    box-sizing: border-box;
  }
`;

function App({ config }: { config: WidgetConfig }) {
  const { isStarted, setIsStarted } = useApp();

  return (
    <AppContainer className="cx-naming-tool">
      {!isStarted && <StartScreen onStart={() => setIsStarted(true)} />}
      {isStarted && (
        <Suspense fallback={<LoadingOverlay />}>
          <MainApp {...config} />
        </Suspense>
      )}
    </AppContainer>
  );
}

export default App;
