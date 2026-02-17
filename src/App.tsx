import { useState, lazy, Suspense } from 'react'
import styled from 'styled-components';
import type { WidgetConfig } from './main'
import StartScreen from '@/client/components/start-screen/StartScreen'
import LoadingOverlay from '@/client/UI/loading-overlay/LoadingOverlay';

const MainApp = lazy(() => import('@/client/MainApp'))

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
`

function App({ config }: { config: WidgetConfig }) {
  const [isStarted, setIsStarted] = useState<boolean>(false)

  const handleStart = () => {
    setIsStarted(true)
  }

  return (
    <AppContainer className="cx-naming-tool">
      {!isStarted && <StartScreen onStart={handleStart} />}
      {isStarted && (
        <Suspense fallback={<LoadingOverlay />}>
          <MainApp {...config} />
        </Suspense>
      )}
    </AppContainer>
  )
}

export default App
