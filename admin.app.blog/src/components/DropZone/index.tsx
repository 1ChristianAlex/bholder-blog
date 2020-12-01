import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { DropZoneContainer } from './styles';

interface DropZoneProps {
  setDropZoneBase(fileBase: string): void;
}

const DropZone: React.FC<DropZoneProps> = ({ setDropZoneBase }) => {
  const [dropZoneFile, setDropZoneFile] = useState<File>();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const fileRead = new FileReader();

      fileRead.onload = (resultRead) => {
        setDropZoneBase(resultRead.target?.result as string);
      };

      fileRead.readAsDataURL(acceptedFiles[0]);

      setDropZoneFile(acceptedFiles[0]);
    },
    [setDropZoneBase, setDropZoneFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <DropZoneContainer {...getRootProps()} $isDragActive={isDragActive}>
      <input {...getInputProps()} />
      <p>Solte seu arquivo aqui ou clique para selecionar</p>
      {dropZoneFile?.name && <p>{dropZoneFile?.name}</p>}
      {dropZoneFile?.size && <p>{(dropZoneFile?.size / 1024).toFixed(2)}</p>}
    </DropZoneContainer>
  );
};

export default DropZone;
