import React, { useState } from 'react';
import {
  Text,
  SimpleGrid,
  CircularProgress,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Divider,
  CardFooter,
  Button,
} from '@chakra-ui/react';
import useFetch from '../utils/Hooks/useFetch';

function Home() {
  const [addCharacter, setAddCharacter] = useState();
  const { data, isLoading, error } = useFetch(
    `https://gateway.marvel.com/v1/public/characters?`
  );
  console.log(data);

  if (error) {
    return <div>Error occurred while fetching data.</div>;
  }

  // console.log(data.data.results);

  return (
    <SimpleGrid columns={4} spacing={10} minChildWidth="250px">
      {isLoading ? (
        <CircularProgress isIndeterminate color="purple" />
      ) : (
        data &&
        data.data.results.map(character => (
          <Card maxW="sm" key={character.id}>
            <CardBody>
              <Image
                src={character.thumbnail.path + '.jpg'}
                alt={character.name}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{character.name}</Heading>
                <Text>{character.description}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Button
                variant="ghost"
                colorScheme="red"
                onClick={() => {
                  setAddCharacter(character.stories.items);
                }}
              >
                Add character
              </Button>
            </CardFooter>
          </Card>
        ))
      )}

      {data && addCharacter ? (
        addCharacter.map((storie, index) => (
          // console.log(storie)
          <p key={`${index}-${storie.name}`}>{storie.name}</p>
        ))
      ) : (
        <p>rien</p>
      )}
    </SimpleGrid>
  );
}

export default Home;
