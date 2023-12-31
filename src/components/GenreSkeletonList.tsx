import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import apiClient from "../services.ts/api-client";


const GenreSkeletonList = () => {
  return (
    <HStack paddingY="7px">
      <Skeleton boxSize="42px"></Skeleton>
      <SkeletonText noOfLines={2} width="80px"></SkeletonText>
    </HStack>
  );
};

export default GenreSkeletonList;

