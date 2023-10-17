import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Box>
          <Heading color={"red.700"} fontSize={"7xl"} as={"h1"}>
            Oops!
          </Heading>
          <Text textAlign={"center"}>
            {isRouteErrorResponse(error)
              ? "This page doesn't exist"
              : "Something went wrong"}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ErrorPage;
