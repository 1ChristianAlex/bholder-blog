import React, { FC, useEffect, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useField } from '@unform/core';
import { FaFileImage } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { FileToBase } from 'helpers';
import { insertValue } from 'context/form/action';
import { useFormDispatch } from 'context/hooks';

import {
  DropZoneContainer,
  DropZonePreviewImage,
  DropZoneContent,
  DropZoneIcon,
  DropZoneText,
  ImagePreview
} from './styled';

interface IPFileDropable {
  name: string;
}

const FileDropable: FC<IPFileDropable> = ({ name }) => {
  const { registerField, fieldName } = useField(name);
  const [fileState, setFileState] = useState<File>();
  const [filePreview, setFilePreview] = useState<string>('');
  const dispatch = useFormDispatch();

  const onDrop = useCallback(async files => {
    const [file] = files as Array<File>;
    const mintypesAllowed = ['image/jpeg', 'image/png'];

    if (mintypesAllowed.includes(file.type)) {
      const fileReader = new FileToBase(file);
      setFileState(file);

      const baseUrl = await fileReader.toBase64();
      dispatch(insertValue({ name: fieldName, value: { file, baseUrl } }));
      setFilePreview(baseUrl);
    } else {
      toast.error('Invalid Image Type');
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]'
    });
  }, [fieldName, inputRef, registerField]);

  return (
    <>
      <DropZoneContainer
        {...getRootProps()}
        isDrag={fileState !== undefined || isDragActive}
      >
        <input {...getInputProps()} multiple={false} />
        <DropZoneContent>
          {fileState !== undefined ? (
            <>
              <DropZoneText>
                {fileState.name} - {fileState.size}
                bytes
              </DropZoneText>
              <DropZonePreviewImage>
                {filePreview && <ImagePreview src={filePreview} />}
              </DropZonePreviewImage>
            </>
          ) : (
            <DropZoneText>
              Drag drop some files here, or click to select files
              <DropZoneIcon hasFile={fileState !== undefined}>
                <FaFileImage />
              </DropZoneIcon>
            </DropZoneText>
          )}
        </DropZoneContent>
      </DropZoneContainer>
    </>
  );
};

export default FileDropable;
