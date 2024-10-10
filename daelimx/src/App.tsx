import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Signin from "./screens/signin";
import Signup from "./screens/signup";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import LoadingScreen from "./screens/loading-screen";
import ProtectedRouter from "./components/protected-router";

// React-Router-Dom 을 활용해 사이트의 page 관리
// - Page : home, progile, signin, signup
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        // home
        path: "",
        element: (
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>
        ),
      },
      {
        // profile
        path: "profile",
        element: (
          <ProtectedRouter>
            <Profile />
          </ProtectedRouter>
        ),
      },
    ],
  },
  {
    // signin
    path: "/signin",
    element: <Signin />,
  },
  {
    // signup
    path: "/signup",
    element: <Signup />,
  },
]);

// 중앙정렬 & 화면크기만큼
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`; // backtick

const Title = styled.span``;

function App() {
  // 로그인 여부 파악을 위한 로딩
  const [loading, setloading] = useState<boolean>(true);

  // Server(Firebase)를 통해 현재 로그인한지 안한지 확인
  // - Server API ... 속도의 차이 => 비동기형 함수
  const init = async () => {
    // 로딩 start (=이미 true 로딩이 시작 되어있음)
    // Firebase가 로그인 인증 여부 파악
    await auth.authStateReady();

    // 로딩 Finish
    setloading(false);
  };

  // 실행 : 페이지가 렌더링될 때(=접속했을 때) 실행되는 함수 *중요*
  useEffect(() => {
    // 로그인 여부 파악(1번만)
    init();
  }, []);

  // Page Rendering Area
  // - A.로그인을 한 경우 > Home화면으로 이동
  // - B.로그인을 안한 경우 > Login화면으로 이동
  // + C.로딩하는 동안 보여줄 loading-screen 필요

  // 삼항연산자 >> 조건문? 참 : 거짓;

  return loading ? (
    <LoadingScreen />
  ) : (
    <Container className="App">
      <GlobalStyle />
      <RouterProvider router={router}></RouterProvider>
    </Container>
  );
}

export default App;

// 공통적으로 전역에서 사용할 Global CSS Style
const GlobalStyle = createGlobalStyle`
${reset}
body{
  background-color: black;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
`;
