import Head from "next/head";
import React from "react";
import { Box, Text, Link, SimpleGrid } from "@chakra-ui/react";

const project = ({ datas, datas2 }) => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta title="description" content="blogs, react, js, typescript"></meta>
        <link rel="icon" href={datas.avatar_url}></link>
      </Head>
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
    </div>
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

export default project;
