import { 
  Container, 
  Box, 
  Heading,
  Link,
  Button,
  List,
  ListItem,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'


const Home = () => {
  return (
    <Layout>
      <Container>
        <Box
        borderRadius="lg"
        mb={6}
        p={4}
        textAlign="center"
        css={{ backdropFilter: 'blur(10px)' }}
        >
        <Heading style={{ 'fontSize': '16px' }}>
          Hey, digital traveler! Get comfortable, because 
          your journey through my website is about to begin.
        </Heading>
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading style={{ 'fontSize': '24px' }} variant="page-title">
              Tuomas Huhtala
            </Heading>
            <p>software engineer / student</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center">
            <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            >
              <Image
                src="/images/profile.jpeg"
                alt="Profile image"
                width="100"
                height="100"/>
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
          I&apos;m Tuomas, a software engineer based in Helsinki, 
          just doing my thing in my free time. 
          I&apos;m all about expanding my skills in computer science, 
          especially loving full-stack development and DevOps right now.
          Currently, I&apos;m diving into a software engineering project course 
          where I get to play around with both roles.
          Oh, and I&apos;ve been tinkering with NeoVim lately. 
          Check out my configs on my GitHub dotfiles repo if you&apos;re curious!
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              bg="#66ff00"
              as={NextLink}
              href="/works"
              rightIcon={<ChevronRightIcon />}
              >
              My portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2019</BioYear>
            Wrote my first &apos;Hello World&apos; with Java
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Started computer science studies at University of Jyväskylä, Finland.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Transferred from University of Jyväskylä to University of Helsinki.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Finishing my bachelor&apos;s of science. Major computer science, minor mathematics.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Things that I love
          </Heading>
          <Paragraph>
            Art, Home decor, {' '}
            <Link href="https://open.spotify.com/user/qr1vukqdgfb35b8k0dist99bb?si=f176e9a51ffa4d05">
            Music
            </Link>
            , Running,
            Playing instruments,
            Algorithms
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/tfhuhtal" target="_blank">
                <Button
                  variant="ghost"
                  leftIcon={<IoLogoGithub />}>
                  @tfhuhtal
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/tuomas-huhtala-7409b6239/">
                <Button
                  variant="ghost"
                  leftIcon={<IoLogoLinkedin />}>
                  @tuomas-huhtala-7409b6239
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/tuomas.2">
                <Button
                  variant="ghost"
                  leftIcon={<IoLogoInstagram />}>
                  @tuomas.2
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Button
              variant="ghost"
              leftIcon={<EmailIcon />}>
                tuomas.huhtala@icloud.com
              </Button>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
 ) 
}

export default Home
export { getServerSideProps } from '../components/chakra'
