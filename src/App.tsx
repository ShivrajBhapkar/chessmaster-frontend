
import "./themes.css";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Landing } from './screens/Landing'
import { Game } from './screens/Game'
import Login from './screens/Login'
import { RecoilRoot } from 'recoil'
import { Layout } from "./layout";
import { Suspense } from "react";
import { Loader } from "lucide-react";
function App() {

  return (
    <>
      <div className='h-auto bg-slate-900'>
        <BrowserRouter>
          <RecoilRoot>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Layout><Landing /></Layout>} />
                <Route
                  path="/login"
                  element={<Login />}
                />
                <Route
                  path="/game/:gameId"
                  element={<Layout><Game/></Layout>}
                />
              </Routes>
            </Suspense>
          </RecoilRoot>

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
