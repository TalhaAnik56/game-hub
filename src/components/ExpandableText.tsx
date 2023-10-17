import { Button, Box, Text } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 500;

  return (
    <>
      <Text textAlign={"justify"}>
        {expanded
          ? children+" "
          : children?.length> limit
          ? children.substring(0, limit)+" ... "
          : children+" " }

        <Button
          size={"xs"}
          fontWeight={"bold"}
          colorScheme="yellow"
          onClick={() => setExpanded(!expanded)}
        >
          Show {expanded ? "Less" : "More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
