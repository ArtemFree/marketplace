import {
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { CommonPage } from "src/common/components/page/common-page";
import { Heading } from '@chakra-ui/react'

export const UserProfileEditPage = () => {
  return (
    <>
      <CommonPage>
        <Heading mb={10}>Edit Profile</Heading>
        <Grid gridTemplateColumns={"1fr"} gap={16}>
          <Grid gap={"24px"}>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>About</FormLabel>
              <Textarea placeholder="Tell something about you..." />
            </FormControl>
          </Grid>
        </Grid>
      </CommonPage>
    </>
  );
};
