import { Avatar, Burger, Container, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import ColorSchemeToggler from '../ColorSchemeToggler';

const links = [
  { link: '#', label: 'Home' },
  { link: '#about', label: 'About' },
  { link: '#projects', label: 'Projects' },
  { link: '#contact', label: 'Contact' },
  { link: '/blogs', label: 'Blogs' },
];

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const navigate = useNavigate()

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group onClick={() => navigate("/")}>
          <Avatar src="/public/avatar.png" size={36} />
          <Text size="md" fw={600}>Oğuzhan Koca</Text>
        </Group>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export default Header