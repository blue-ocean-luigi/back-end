import React, { useState } from 'react';
import axios from 'axios';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Input,
  FormHelperText,
  useDisclosure,
  Button,
} from '@chakra-ui/react';

const IMGBB_API_KEY = 'c29851f6cb13a79e0ff41dd116782a2f';

function NewPost({ groupID, userID}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postContent, setPostContent] = useState('');
  const [postPhoto, setPostPhoto] = useState('');

  function handlePhoto(e) {
    const body = new FormData();
    body.set('key', IMGBB_API_KEY);
    body.append('image', e.target.files[0]);

    axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body,
    })
      .then((response) => {
        setPostPhoto(response.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSubmit() {
    const formBody = {
      user_id: userID,
      group_id: groupID,
      content: postContent,
      photo: postPhoto,
    };
    console.log(formBody);
    onClose();
  }

  return (
    <div>
      <Button onClick={onOpen}>New Post</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Post on *group Name*</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Comment</FormLabel>
              <Textarea onChange={(e) => { setPostContent(e.target.value); }} />
              <FormLabel>Add a photo</FormLabel>
              <Input type="file" onChange={(e) => { handlePhoto(e); }} />
              <FormHelperText>Optional</FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => { handleSubmit(); }}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default NewPost;
