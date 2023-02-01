import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { FC } from "react";
import { CommonContainer } from "../../container/common-container";
import { CommonHeader } from "../../header/common-header";

interface ICommonPageProps {
  children: React.ReactNode;
}

export const CommonPage: FC<ICommonPageProps> = ({ children }) => {
  return (
    <>
      <CommonHeader />
      <CommonContainer>
        <PageContainer className="page__content">
            {children}
        </PageContainer>
      </CommonContainer>
    </>
  );
};

const PageContainer = styled.div`
    margin-top: 24px;
`
