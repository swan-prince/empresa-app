import React, { FC, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { makeStyles } from '@material-ui/core'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { UploadedFile } from 'typings'

import FileUpload from 'assets/img/file-upload.png'
import RemoveFile from 'assets/img/delete-file.png'
import styles from 'assets/jss/components/fileDropzoneStyles'

const useStyles = makeStyles(styles)

interface Props {
  file?: UploadedFile;
  uploadFile: (file: UploadedFile) => void;
  removeFile: () => void;
  label: string;
  acceptType: string;
  maxSize: number;
}

const FileDropzone: FC<Props> = (props) => {

  const classes = useStyles()

  const { file, uploadFile, removeFile, label, acceptType, maxSize } = props

  const onDrop = useCallback((acceptedFiles) => {

    const reader = new FileReader()

    reader.onload = () => {
      uploadFile({
        name: acceptedFiles[0].name,
        fileType: acceptedFiles[0].type,
        preview: URL.createObjectURL(acceptedFiles[0])
      })
    }
    reader.readAsArrayBuffer(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: acceptType,
    maxSize: maxSize
  })

  return (
    <>
      {
        !!file ? (
          <Box className={classes.preview} position='relative'>
            <img src={file?.preview ?? ''} alt="Preview" />
            <Button className={classes.deleteBtn} onClick={removeFile}>
              <img src={RemoveFile} alt='Delete' />
            </Button>
          </Box>
        ) : (
          <Box {...getRootProps()} className={classes.dropzone} display='flex' alignItems='center' justifyContent='center'>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <Typography variant='body1' align='center'>Drop the files here ...</Typography> :
                <Box textAlign='center'>
                  <img src={FileUpload} alt="File Upload" />
                  <Typography variant='body1' align='center'>{ label }</Typography>
                </Box>
            }
          </Box>
        )
      }
    </>
  )
}

export default FileDropzone
