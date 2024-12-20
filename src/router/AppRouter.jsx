import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Dynamisk import av sider med lazy loading
const Home = lazy(() => import('../pages/home/Home'));
const Theory = lazy(() => import('../pages/theory/Theory'));
const CardGame = lazy(() => import('../pages/game/CardGame'));
const FlashCards = lazy(() => import("../pages/game/FlashCards"));
const DragAndDropCardGame = lazy(() => import('../pages/game/DragAndDropGame'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/cardgame" element={<CardGame />} />
        <Route path="/dragAndDropCardGame" element={<DragAndDropCardGame />} />
        <Route path="/FlashCards" element={<FlashCards />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

