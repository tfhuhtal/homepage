import NextLink from 'next/link'
import { forwardRef } from 'react'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? '#66ff00' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

MenuLink.displayName = 'MenuLink'

const NavBar = props => {
  const { path } = props

  return (
    <Box position="fixed"
    as="nav"
    w="100%"
    style={{backdropFilter: 'blur(10px)'}}
    zIndex={2}
    {...props}>
      <Container 
        display="flex" 
        p={3} 
        maxW="container.md" 
        wrap="wrap" 
        align="center"
        justify="space-between">
        <Flex align="center" mr={6}>
          <Heading size="lg" style={{ 'fontSize': '18px'}} letterSpacing={'tighter'}>
            / Tuomas Huhtala
          </Heading>
        </Flex>
        <Stack
        direction={{base: 'column', md: 'row'}}
        display={{base: 'none', md: 'flex'}}
        width={{base: 'full', md: 'auto'}}
        alignItems="center"
        flexGrow={2}
        mt={{base: 5, nmd: 0}}
        >
          <LinkItem href="/" path={path}>About</LinkItem>
          <LinkItem href="/works" path={path}>Works</LinkItem>
        </Stack>
        <Box flex={2} align="right">
          <ThemeToggleButton/>
          <Box ml={3} display={{base: 'inline-block', md: 'none'}}>
            <Menu>
              <MenuButton as={IconButton}
                icon={<HamburgerIcon/>}
                variant="outline"
                aria-label="Options">
              </MenuButton>
              <MenuList>
                <MenuItem as={MenuLink} href="/">About</MenuItem>
                <MenuItem as={MenuLink} href="/works">Works</MenuItem>
                <MenuItem as={MenuLink} href="https://github.com/tfhuhtal/">View source</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar
