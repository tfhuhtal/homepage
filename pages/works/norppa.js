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

const Norppa = () => {
  return (
  <Layout title="Norppa">
      <Container>
      <Title>
        Norppa <Badge bg="#66ff00">2024</Badge>
        </Title>
        <P>
          Project description for Norppa will be added here.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <span>
              <Link href="https://github.com/tfhuhtal/norppa" target="_blank">
                github.com/tfhuhtal/norppa <ExternalLinkIcon mx="2px" />
              </Link>
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Technology stack details
            </span>
          </ListItem>
          </List>
      </Container>

    </Layout>
  )
}

export default Norppa
export { getServerSideProps } from '../../components/chakra'
