import { Button, Card, Stack, Text } from "@mantine/core";
import React, { FC } from "react";

const HeroBlogCard: FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <Card padding="lg" radius="md" withBorder>
      <Stack h="100%" justify="space-between">
        <Stack gap="xs">
          <Text lineClamp={2} size="sm" fw={500}>
            {title}
          </Text>

          <Text lineClamp={3} size="xs" c="dimmed">
            {description}
          </Text>
        </Stack>

        <Button variant="default" size="xs" fullWidth radius="md">
          Read More
        </Button>
      </Stack>
    </Card>
  );
};

export default HeroBlogCard;
