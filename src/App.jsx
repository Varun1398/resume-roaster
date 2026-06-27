import { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import FallbackLoader from "./Components/Loader/FallbackLoader";
import Layout from "./Components/Layout/Layout";
const RoastResult = lazy(() => import("./Components/RoastResults/RoastResult"));
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RoastHome from "./Components/RoastHome/RoastHome";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<FallbackLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<RoastHome />} />
            <Route path="/roast" element={<RoastResult />} />
          </Route>
        </Routes>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
