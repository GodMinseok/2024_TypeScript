import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Signin from "./screens/signin";
import Signup from "./screens/signup";

// React-Router-Dom 을 활용해 사이트의 page 관리
// - Page : home, progile, signin, signup
const router = createBrowserRouter([{
  path:"/",
  children:[{
    // home
    path:"",
    element: <Home/>
  },{
    // profile
    path:"profile",
    element: <Profile/>
  }]
},{
  // signin
  path:"/signin",
  element : <Signin/>
},{
  // signup
  path:"/signup",
  element : <Signup/>
}])


const Container = styled.div`
    background-color: forestgreen;
    height: 300px;
    width: 300px;
`;// backtick

const Title = styled.span``;

function App() {
  return (
    <Container className="App">
      <RouterProvider router={router} ></RouterProvider>
    </Container>
  );
}


export default App;
