import { Container } from "@chakra-ui/react";
import React, { FC } from "react";

interface ICommonContainerProps {
  children: React.ReactNode;
}

export const CommonContainer: FC<ICommonContainerProps> = ({ children }) => {
  return <Container maxW={"8xl"}>{children}</Container>;
};
