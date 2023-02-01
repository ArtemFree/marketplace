import { Box, Button, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { CommonPage } from "src/common/components/page/common-page";

export const UserProfilePage = () => {
  return (
    <CommonPage>
      <Heading mb={10}>Profile</Heading>
      <Flex justifyContent={"space-between"}>
        <Flex>
          <img src="" alt="User avatar" width={100} height={100} />
          <Stack ms={"24px"}>
            <Heading size={"lg"}>User name</Heading>
            <Text fontSize="xl">About</Text>
          </Stack>
        </Flex>
        <Link to={'/user/profile/edit'}><Button>Edit profile</Button></Link>
      </Flex>
      <Box mt={"56px"}>
        <Heading size={"md"} mb={6}>
          My NFTs
        </Heading>
        <Grid gap={'8px'} gridTemplateColumns={'1fr 1fr 1fr 1fr'}>
          <div>NFT</div>
          <div>NFT</div>
          <div>NFT</div>
          <div>NFT</div>
          <div>NFT</div>
          <div>NFT</div>
          <div>NFT</div>
          <div>NFT</div>
        </Grid>
      </Box>
      <Box mt={"56px"}>
        <Heading size={"md"} mb={6}>
          I sold NFTs
        </Heading>
        <Grid gap={'8px'} gridTemplateColumns={'1fr 1fr 1fr 1fr'}>
          <div>NFT</div>
          <div>NFT</div>
          <div>NFT</div>
          <div>NFT</div>
          <div>NFT</div>
          <div>NFT</div>
          <div>NFT</div>
          <div>NFT</div>
        </Grid>
      </Box>
    </CommonPage>
  );
};
