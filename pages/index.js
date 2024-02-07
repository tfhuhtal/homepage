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
          Hello, I&apos;m computer science student at University of Helsinki!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
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
          I am Tuomas, a student and freetime software engineer residing in Helsinki. 
            My passion lies in continuously expanding my knowledge and skills 
            in software engineering. While I haven&apos;t yet ventured into the realm 
            of professional software engineering, I&apos;m driven by my own projects 
            and coursework in computer science. Enthusiasm fuels my journey,
            despite the absence of real-world work experience in this field.
             Currently I am seeking my first job at IT.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              bg="#66ff00"
              as={NextLink}
              href="/works"
              //scroll="false"
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
            <BioYear>2000</BioYear>
            Born in Sipoo, Finland
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Started computer science studies at UoJ, Finland.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Transferred from UoJ to UoH
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Finishing my bachelor&apos;s of science
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
            Machine Learning
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
