import Layout from '../../components/layouts/article'
import {
  Container,
  List,
  ListItem,
  Badge,
  Link
} from '@chakra-ui/react'
import P from '../../components/paragraph'
import { Title, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Page = () => {
  return (
  <Layout title="Book Register">
      <Container>
        <Title>
          Book register <Badge bg="#66ff00">2022</Badge>
        </Title>
        <P>
        I developed this application as part of a computer science course at
          the University of Jyväskylä. It features a basic user 
          interface and functionality for saving book details to register. 
          The user interface was created using JavaFX.
          For more details, please visit the project&apos;s GitHub page.
       </P>
        <List ml={4} my={4}>
          <ListItem>
          <Meta>Github</Meta>
            <span>
            <Link href="https://github.com/tfhuhtal/kirjarekisteri/" target="_blank">
              github.com/tfhuhtal/kirjarekisteri/ <ExternalLinkIcon mx="2px" />
              </Link>
            </span>
          </ListItem>
          <ListItem>
          <Meta>Stack</Meta>
            <span>
            Java / JavaFx / ComTest 
            </span>
          </ListItem>
        </List>
      </Container>

    </Layout>
  )
}

export default Page
export { getServerSideProps } from '../../components/chakra'
