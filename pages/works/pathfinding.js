import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import picture2 from '../../public/images/works/pathfinding.png'


const Pathfinding = () => {
  return (
  <Layout title="Pathfinding App">
    <Container>
        <Title>
          Pathfinding App <Badge bg="#66ff00">2023</Badge>
        </Title>
        <P>
          During my Data Structures and Algorithms lab course, 
          I undertook the implementation of three shortest path 
          search algorithms: Jump Point Search, A* search, and Dijkstra&apos;s 
          shortest path algorithm. Subsequently, I conducted thorough testing 
          using unittests and performed analyses on their time complexities and Big O notations.
        </P>
        <P>
        The time complexity of Dijkstra&apos;s algorithm is O(n + m log n),
          where n is the number of nodes and m is the number of edges.
          The time complexity of the A* algorithm is 
          defined as f(n) = g(n) + h(n), where n is the next node 
          in the path, g(n) is the cost of the path from the starting 
          node to node n, and h(n) is the heuristic function that estimates 
          the cheapest path from node n to the goal.
          The time complexity of the Jump Point Search algorithm 
          is better than that of the A* algorithm because it 
          is an optimized variant of the A* algorithm.
        </P>
        <List ml={4} my={4}>
          <ListItem>
          <Meta>Github</Meta>
            <span>
            <Link href="https://github.com/tfhuhtal/pathfinding/" target="_blank">
              github.com/tfhuhtal/pathfinding/ <ExternalLinkIcon mx="2px" />
              </Link>
            </span>
          </ListItem>
          <ListItem>
          <Meta>Stack</Meta>
            <span>
            Python / Poetry / Unittest
            </span>
          </ListItem>
        </List>
        <SimpleGrid columns={1} gap={6}>
            <Image style={{ 'borderRadius': '12px'}} src={picture2} alt="pathfinding" mb={4} />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Pathfinding
export { getServerSideProps } from '../../components/chakra'
