import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Center,
  Input,
  FormControl,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

export default function ChatBar() {
  return (
    <Box marginBottom="8px" position="fixed" bottom="0" left="0" width="100%">
      <Center>
        <Flex flexAlign="stretch" w="80%">
          <Menu>
            <MenuButton w="20%"as={Button}>Chat Menu</MenuButton>
            <MenuList>
              <MenuItem>Friends</MenuItem>
              <MenuItem>Something Else...</MenuItem>
              <MenuItem>Lorem Ipsum</MenuItem>
            </MenuList>
          </Menu>
          <Center w="100%">
            <Input placeholder="send a message" variant='filled' w="90%"/>
          </Center>
        </Flex>
      </Center>
    </Box>
  )
}
