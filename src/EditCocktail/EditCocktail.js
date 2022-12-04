import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";

const EditCocktail = ({ cocktail }) => {
  console.log(cocktail);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Make it my own!</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Cocktail</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Cocktail</FormLabel>
              <Input ref={initialRef} placeholder={`${cocktail.name}`} />
            </FormControl>

            <FormControl mr={4}>
              <FormLabel>Ingredients</FormLabel>
              <Input placeholder={`${cocktail.ingredients}`} />
            </FormControl>
            <FormControl mr={4}>
              <FormLabel>Steps</FormLabel>
              <Input placeholder={`${cocktail.steps}`} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditCocktail;
