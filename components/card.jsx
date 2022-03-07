import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

const DetailCard = ({
  imageSrc,
  imageAlt,
  description,
  title,
  buttonTitle,
  buttonClick,
  badge,
}) => {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Image src={imageSrc} height={200} alt={imageAlt || ""} />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{title}</Text>
          {badge && (
            <Badge color="pink" variant="light">
              {badge}
            </Badge>
          )}
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {description}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={buttonClick}
        >
          {buttonTitle}
        </Button>
      </Card>
    </div>
  );
};

export default DetailCard;
