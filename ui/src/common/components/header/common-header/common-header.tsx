import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "src/common/assets/img/logo.svg";
import { CommonContainer } from "../../container/common-container";
import { Link } from "react-router-dom";

export const CommonHeader = () => {
  return (
    <Box bg={"#ccc"} padding={"20px 0"}>
      <CommonContainer>
        <Flex justifyContent={"space-between"}>
          <Link to="/">
            <img src={Logo} />
          </Link>
          <Flex gap={"8px"}>
            <Link to="/explore">
              <Button>Explore</Button>
            </Link>
            <Link to="/create">
              <Button>Create</Button>
            </Link>
          </Flex>
          <Link to="/user/profile">
            <Button>User</Button>
          </Link>
        </Flex>
      </CommonContainer>
    </Box>
  );
};
