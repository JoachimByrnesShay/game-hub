import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, {
  Genre,
} from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({
  onSelectGenre,
  selectedGenre,
}: Props) => {
  const {
    data: genres,
    isLoading,
    error,
  } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading
        fontSize="2xl"
        marginBottom={3}
      >
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY="5px"
          >
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(
                  genre.image_background
                )}
                objectFit="cover"
              />
              <Button
                onClick={() =>
                  onSelectGenre(genre)
                }
                whiteSpace={"normal"}
                textAlign="left"
                fontSize="large"
                variant="link"
                fontWeight={
                  selectedGenre?.id ===
                  genre.id
                    ? "bold"
                    : "normal"
                }
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
