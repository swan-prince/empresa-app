import React, { FC, useState, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { slice } from 'lodash'

import { makeStyles } from '@material-ui/core'

import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button'

import CustomInput from 'components/CustomInput'
import CustomPagination from 'components/CustomPagination'

import { dummyData } from 'assets/data/clients'
import { Client } from 'typings'
import SearchIcon from 'assets/img/search.png'

import styles from 'assets/jss/views/clientsStyles'

const useStyles = makeStyles(styles)

const Clients: FC = () => {

  const classes = useStyles()
  const navigate = useNavigate()

  const [searchKeys, setSearchKeys] = useState({
    sme: '',
    name: '',
    email: ''
  })

  const [pageSize, setPaseSize] = useState(10)
  const [page, setPage] = useState(1)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(pageSize)

  const [searchResult, setSearchResult] = useState<Array<Client>>(dummyData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const smeKey = e.target.name === 'sme' ? e.target.value : searchKeys.sme
    const nameKey = e.target.name === 'name' ? e.target.value : searchKeys.name
    const emailKey = e.target.name === 'email' ? e.target.value : searchKeys.email

    setSearchResult(
      dummyData.filter((data) => data.sme.includes(smeKey) && data.name.toLowerCase().includes(nameKey) && data.email.includes(emailKey))
    )

    setSearchKeys({
      ...searchKeys,
      [e.target.name]: e.target.value
    })
  }

  const onChangePagination = (pageNum: number) => {
    setPage(pageNum)
    setStartIndex((pageNum - 1) * pageSize)
    setEndIndex(pageNum * pageSize)
  }

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 960) {
        setStartIndex(0)
        setEndIndex(5)
        setPage(1)
        setPaseSize(5)
      } else {
        setStartIndex(0)
        setEndIndex(10)
        setPage(1)
        setPaseSize(10)
      }
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Box className={classes.wrapper}>
      <Typography variant='h1'>
        Clientes
      </Typography>
      <Box className={classes.contents}>
        <Box className={classes.dataTable}>
          <Box className={classes.filters} display='flex' mb={3}>
            <Box className={classes.filterInput} width='26%'>
              <CustomInput
                name='sme'
                labelText='RUT PYME'
                placeholder=''
                fullWidth
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <img src={SearchIcon} alt="Search" />
                  </InputAdornment>
                }
              />
            </Box>
            <Box className={classes.filterInput} width='30%'>
              <CustomInput
                name='name'
                labelText='Nombre cliente'
                placeholder=''
                fullWidth
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <img src={SearchIcon} alt="Search" />
                  </InputAdornment>
                }
              />
            </Box>
            <Box className={classes.filterInput} width='44%'>
              <CustomInput
                name='email'
                labelText='CORREO cliente'
                placeholder=''
                fullWidth
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <img src={SearchIcon} alt="Search" />
                  </InputAdornment>
                }
              />
            </Box>
          </Box>

          <Box className={classes.tableBody}>
            {
              searchResult.length === 0 ? (
                <Box className={classes.dataRow}>
                  <Typography variant='body1' align='center'>
                    There aren't any data
                  </Typography>
                </Box>
              ) :
                slice(searchResult, startIndex, endIndex).map((data) => (
                  <Box className={classes.dataRow} display='flex' alignItems='center' key={data.id}>
                    <Box className={classes.dataCell} width='26%'>
                      <Typography variant='body1'>
                        {data.sme}
                      </Typography>
                    </Box>
                    <Box className={classes.dataCell} width='30%'>
                      <Typography variant='body1'>
                        {data.name}
                      </Typography>
                    </Box>
                    <Box className={classes.dataCell} width='44%' display='flex' justifyContent='space-between' alignItems='center'>
                      <Typography variant='body1'>
                        {data.email}
                      </Typography>
                      <Button className={classes.detailBtn} onClick={() => navigate(`/admin/clients/${data.id}`)}>
                        <VisibilityOutlinedIcon />
                      </Button>
                    </Box>
                  </Box>
                ))
            }
          </Box>

          <Box className={classes.pagination} display='flex' justifyContent='center'>
            <CustomPagination
              count={Math.ceil(searchResult.length / pageSize)}
              handleChange={onChangePagination}
              page={page}
            />
          </Box>
        </Box>
      </Box>      
    </Box>
  )
}

export default Clients
