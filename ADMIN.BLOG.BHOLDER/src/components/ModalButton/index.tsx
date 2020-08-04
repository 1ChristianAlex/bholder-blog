import React, { FC, useState } from 'react';
import { Modal, ModalFooter } from 'react-bootstrap';
import { Button } from 'components';
import { ModalContainer } from './styled';

const ModalButton: FC = ({ children }) => {
  const [togle, setTogle] = useState<boolean>(false);

  const togleModal = () => setTogle(!togle);

  return (
    <>
      <Button color="primary" onClick={togleModal}>
        Upload
      </Button>
      <Modal show={togle} onHide={togleModal} size="lg" centered>
        <ModalContainer>{children}</ModalContainer>
        <ModalFooter>
          <Button color="primary" onClick={togleModal}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalButton;
