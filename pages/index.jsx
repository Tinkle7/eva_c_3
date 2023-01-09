import Head from "next/head";
import React from "react";
import {
  Avatar,
  Box,
  Text,
  Link,
  AvatarBadge,
  SimpleGrid,
  ListItem,
  OrderedList,
  Button,
} from "@chakra-ui/react";

const Page = ({ datas, datas2 }) => {
  return (
    <>
      <Head>
        <title>{datas.name}</title>
        <meta title="description" content="blogs, react, js, typescript"></meta>
        <link rel="icon" href={datas.avatar_url}></link>
      </Head>

      <Box display="flex">
        <Box
          display="flex"
          flexDirection="column"
          gap="20px"
          alignItems="center"
        >
          <Avatar size="xl" name="Christian Nwamba" src={datas.avatar_url}>
            <AvatarBadge boxSize="40%" bg="green.500" />
          </Avatar>
          <Text>{datas.name}</Text>
          <Text>@{datas.login}</Text>
          <Text w="85%" textAlign="center">
            Full-stack Developer | JavaScript | Typescript | NodeJS | ReactJS |
            HTML | CSS | Chakra-UI
          </Text>
          <Box display="flex" gap={5}>
            <Link
              href="https://drive.google.com/file/d/1dOu0OJaATk0CQDiEp7-M3-xNgBPfYgAy/view?usp=sharing"
              isExternal
              style={{ textDecoration: "none" }}
            >
              <Button> RESUME</Button>
            </Link>
            <Link
              href={datas.html_url}
              isExternal
              style={{ textDecoration: "none" }}
            >
              <Button>FOLLOW</Button>
            </Link>
          </Box>
          <SimpleGrid
            columns={3}
            gap="4px"
            backgroundColor="#B9B4A6"
            borderRadius={20}
            padding="5%"
          >
            <Text>HTML</Text>
            <Text>CSS</Text>
            <Text>JavaScript</Text>
            <Text>React.JS</Text>
            <Text>Next.JS</Text>
            <Text>Typescript</Text>
          </SimpleGrid>
          <Box backgroundColor="#B9B4A6" borderRadius={5} padding="5px">
            <OrderedList>
              <ListItem>
                <Box>
                  <Text fontSize="2xl">Full-stack Developer-Masai School</Text>
                  <Text>2022-present</Text>
                </Box>
              </ListItem>
              <ListItem>
                <Box>
                  <Text fontSize="2xl">B.Tech-G.I.E.T</Text>
                  <Text>2014-2018</Text>
                </Box>
              </ListItem>
            </OrderedList>
          </Box>
        </Box>
        <Box>
          <Text textAlign="center" fontSize="3xl">
            Projects
          </Text>
          <Box w="80%" margin="auto">
            <SimpleGrid columns={2} gap="15px">
              {datas2.items.map((el) => (
                <Link key={el.id} href={el.html_url} isExternal>
                  <SimpleGrid columns={2} gap="4px" backgroundColor="#B9B4A6">
                    <Box>{el.name}</Box>
                    <Box>{el.language}</Box>
                    <Box>forks: {el.forks_count}</Box>
                    <Box>stars: {el.stargazers_count}</Box>
                  </SimpleGrid>
                </Link>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export async function getStaticProps() {
  let response = await fetch(`https://api.github.com/users/Tinkle7`);
  let response2 = await fetch(
    `https://api.github.com/search/repositories?q=user:Tinkle7+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  let data = await response.json();
  let data2 = await response2.json();
  return {
    props: {
      datas: data,
      datas2: data2,
    },
  };
}

export default Page;
