import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core'

import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination';

import styles from 'assets/jss/components/paginationStyles'

const useStyles = makeStyles(styles)

interface Props {
  count: number,
  handleChange: (page: number) => void;
  page: number;
}

const CustomPagination: FC<Props> = (props) => {

  const classes = useStyles()

  const { count, handleChange, page } = props

  return (
    <Box>
      <Pagination 
        count={count} 
        defaultPage={1} 
        siblingCount={0} 
        className={classes.pagination} 
        onChange={(_, page) => handleChange(page)}
        page={page}
      />
    </Box>
  )
}

export default CustomPagination
