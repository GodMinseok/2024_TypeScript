import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Signin from "./screens/signin";
import Signup from "./screens/signup";
import reset from "styled-reset";

// React-Router-Dom 을 활용해 사이트의 page 관리
// - Page : home, progile, signin, signup
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        // home
        path: "",
        element: <Home />,
      },
      {
        // profile
        path: "profile",
        element: <Profile />,
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
  return (
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
