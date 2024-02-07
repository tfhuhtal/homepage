import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const HomePage = () => {
  return (
  <Layout title="homepage">
      <Container>
      <Title>
        Homepage <Badge bg="#66ff00">2024</Badge>
        </Title>
        <P>
          I created this website as a project to showcase my frontend skills. 
          Its design is inspired by Dev as Life&apos;s homepage.
          Feel free to explore and navigate through the website.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <span>
              <Link href="https://github.com/tfhuhtal/homepage" target="_blank">
                github.com/tfhuhtal/homepage/ <ExternalLinkIcon mx="2px" />
              </Link>
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              React / NEXT.js / chakra-ui / THREE.js
            </span>
          </ListItem>
          </List>
      </Container>

    </Layout>
  )
}

export default HomePage
export { getServerSideProps } from '../../components/chakra'
