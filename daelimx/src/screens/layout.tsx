import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 30px;
  width: 100%;
  padding: 20px;
`;

const Navigator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const MenuItem = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 40px;
    height: 40px;
  }
`;

export default () => {
  return (
    <Container>
      <Navigator>
        {/* 홈화면 메뉴 */}
        <Link to={"/"}>
          <MenuItem>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                clip-rule="evenodd"
              />
            </svg>
          </MenuItem>
        </Link>

        {/* 프로필 메뉴 */}
        <Link to={"/profile"}>
          <MenuItem>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                clip-rule="evenodd"
              />
            </svg>
          </MenuItem>
        </Link>
      </Navigator>
      <Outlet />
    </Container>
  );
};