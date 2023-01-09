import React from "react";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Flex gap={20} padding={4}>
      <Link href="/">Tinkle</Link>
      <Link href="/project">Projects</Link>
    </Flex>
  );
};
