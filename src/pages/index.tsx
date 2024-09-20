import { Carousel } from "@mantine/carousel";
import {
  Anchor,
  Avatar,
  Badge,
  Blockquote,
  Button,
  Card,
  Container,
  Divider,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  Timeline,
  Title,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconChevronRight,
  IconExternalLink,
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconInfoCircle,
  IconMessageDots,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import HeroBlogCard from "../components/HeroBlogCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section id="hero">
        <Container pt={72} size="md">
          <Stack mih="calc(100vh - 72px)" justify="center" align="center">
            <Avatar src="/public/avatar.png" size={100} mb={8} />
            <Badge color="green" variant="light">
              Fullstack Developer
            </Badge>
            <Title order={2} lh={1}>
              Hi! I'm Oğuzhan,
            </Title>
            <Text size="md" fw={500} lh={1} ta="center">
              I love building modern web applications and creating user-friendly
              solutions.
            </Text>
            <Button mt="md" component="a" href="#about">
              Learn More About Me
            </Button>

            <Divider w="100%" mt="xl" />

            <Stack>
              <Group justify="space-between">
                <Text size="sm" fw={600}>
                  Last Blogs
                </Text>
                <Button
                  onClick={() => navigate("/blogs")}
                  variant="subtle"
                  size="compact-xs"
                  rightSection={<IconChevronRight size={12} />}
                >
                  See all
                </Button>
              </Group>
              <SimpleGrid cols={3}>
                <HeroBlogCard
                  title="Getting Started with React: A Beginner’s Journey"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quisquam assumenda quaerat aspernatur tempore optio recusandae odio fugiat nobis nam, earum aliquam mollitia facilis cumque voluptatum architecto vero sint nemo?"
                />

                <HeroBlogCard
                  title="How to Start Learning Frontend Development: A Guide for
                    Beginners"
                  description="With Fjord Tours you can explore more of the magical fjord
                    landscapes with tours and activities on and around the
                    fjords of Norway"
                />
                <HeroBlogCard
                  title="
                    Understanding Node.js: A Beginner’s Perspective"
                  description="With Fjord Tours you can explore more of the magical fjord
                    landscapes with tours and activities on and around the
                    fjords of Norway"
                />
              </SimpleGrid>
            </Stack>
          </Stack>
        </Container>
      </section>
      <section id="about">
        <Paper bg="gray.0">
          <Container size="md">
            <Stack py={80}>
              <Title order={3}>About Me</Title>

              <Text>
                Hi, I'm <b>Oğuzhan</b>, a passionate Fullstack Developer with 3
                years of experience in the software industry. I started my
                journey with frontend development, where I honed my skills in
                building user-friendly and responsive interfaces. For 2 years, I
                worked as a frontend developer, mastering technologies like{" "}
                <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and modern
                frameworks such as <b>React</b>, <b>Vue</b>.
              </Text>
              <Text>
                Over time, my curiosity and love for learning led me to explore
                backend technologies. I’m now expanding my knowledge in areas
                like <b>Node.js</b>, <b>databases</b>, and{" "}
                <b>API development</b>, working towards becoming a well-rounded
                fullstack developer.
              </Text>
              <Text>
                I thrive on creating seamless and efficient web applications,
                and I'm constantly seeking new challenges to enhance my skills.
                Whether it's designing sleek user interfaces or optimizing
                server-side logic, I enjoy solving complex problems and
                delivering impactful solutions.
              </Text>
            </Stack>
          </Container>
        </Paper>
      </section>
      <section id="projects">
        <Container size="md">
          <Stack py={80}>
            <Title order={3}>Projects</Title>
            <Carousel
              withIndicators
              height={300}
              slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
              slideGap={{ base: 0, sm: "md" }}
              loop
              align="start"
            >
              <Carousel.Slide>
                <Paper h="100%" bg="blue.1"></Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper h="100%" bg="blue.1"></Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper h="100%" bg="blue.1"></Paper>
              </Carousel.Slide>
            </Carousel>
          </Stack>
        </Container>
      </section>
      <section id="contact">
        <Paper bg="gray.0">
          <Container size="md">
            <Stack py={80}>
              <Title order={3}>Contact Me</Title>
              <SimpleGrid cols={2}>
                <Stack align="flex-start" mt="md">
                  <Anchor
                    c="dark"
                    target="blank"
                    href="https://www.instagram.com/oguzhankoc.a/"
                  >
                    <Group gap={8}>
                      <IconBrandInstagram />
                      <Text size="sm" fw={600}>
                        oguzhankoc.a
                      </Text>
                      <IconExternalLink size={14} />
                    </Group>
                  </Anchor>
                  <Anchor c="dark" target="blank" href="https://x.com/oguzhnx">
                    <Group gap={8}>
                      <IconBrandTwitter />
                      <Text size="sm" fw={600}>
                        oguzhnx
                      </Text>
                      <IconExternalLink size={14} />
                    </Group>
                  </Anchor>
                  <Anchor
                    c="dark"
                    target="blank"
                    href="https://www.linkedin.com/in/oguzhankocatr/"
                  >
                    <Group gap={8}>
                      <IconBrandLinkedin />
                      <Text size="sm" fw={600}>
                        oguzhankocatr
                      </Text>
                      <IconExternalLink size={14} />
                    </Group>
                  </Anchor>
                  <Anchor
                    c="dark"
                    target="blank"
                    href="https://github.com/oguzhnd"
                  >
                    <Group gap={8} align="center" justify="center">
                      <IconBrandGithub />
                      <Text size="sm" fw={600}>
                        oguzhnd
                      </Text>
                      <IconExternalLink size={14} />
                    </Group>
                  </Anchor>
                </Stack>

                <Stack gap={4}>
                  <TextInput label="E-Mail" placeholder="Your E-Mail" />
                  <TextInput label="Title" placeholder="Message Title" />
                  <Textarea
                    rows={4}
                    label="Content"
                    placeholder="Message Content"
                  />
                  <Group justify="flex-end" mt="md">
                    <Button size="xs">Send</Button>
                  </Group>
                </Stack>
              </SimpleGrid>
            </Stack>
          </Container>
        </Paper>
      </section>
    </div>
  );
};

export default Home;
