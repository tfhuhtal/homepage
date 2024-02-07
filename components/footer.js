import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.3} fontSize="sm">
      &copy; {new Date().getFullYear()} Tuomas Huhtala. All Rights Reserved. This website is inspired by www.craftz.dog
    </Box>
  )
}

export default Footer
