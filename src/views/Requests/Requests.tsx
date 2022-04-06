import React, { VFC, useState, useLayoutEffect } from 'react'
import clsx from 'clsx'
import { slice } from 'lodash'

import { makeStyles } from '@material-ui/core'

import Box from '@material-ui/core/Box'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography'

import Header from './components/Header'
import CustomInput from 'components/CustomInput'
import DataRow from './components/DataRow'
import CustomPagination from 'components/CustomPagination'
import ContactEmailDialog from 'components/ContactEmailDialog'
import MainLayout from 'components/MainLayout'

import SearchIcon from 'assets/img/search.png'

import { RequestItem } from 'typings'
import { dummyData } from 'assets/data/requests'

import styles from 'assets/jss/views/requestStyles'

const useStyles = makeStyles(styles)

const Requests: VFC = () => {

  const classes = useStyles()

  const [condition, setCondition] = useState('ALL')
  const [offer, setOffer] = useState('default')
  const [selectAll, setSelectAll] = React.useState(false);
  const [openContactForm, setOpenContactForm] = useState(false)

  const [pageSize, setPaseSize] = useState(10)
  const [page, setPage] = useState(1)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(pageSize)

  const [searchKeys, setSearchKeys] = useState({
    id: '',
    clientName: ''
  })

  const [searchResult, setSearchResult] = useState<Array<RequestItem>>(dummyData)

  const [selectedIds, setSelectedIds] = useState<Array<string>>([])

  const searchRequests = (idKey: string, clientNameKey: string, conditionKey: string, offerKey: string) => {
    const offerVal = offer === 'default' ? '' : offer
    setSearchResult(
      dummyData.filter((data) => data.id.includes(idKey) && data.clientName.toLowerCase().includes(clientNameKey) && (conditionKey === '' || conditionKey === 'ALL' ? true : data.condition === conditionKey) && data.offer.includes(offerVal))
    )
  }

  const handleChangeCondition = (event: React.ChangeEvent<{ value: unknown }>) => {

    searchRequests(searchKeys.id, searchKeys.clientName, event.target.value as string, offer)
    setCondition(event.target.value as string);
  };

  const handleSelectOffer = (event: React.ChangeEvent<{ value: unknown }>) => {
    searchRequests(searchKeys.id, searchKeys.clientName, condition, event.target.value as string)
    setOffer(event.target.value as string);
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedIds(
        searchResult.map((data) => data.id)
      )
    } else {
      setSelectedIds([])
    }

    setSelectAll(event.target.checked);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idKey = e.target.name === 'id' ? e.target.value : searchKeys.id
    const clientNameKey = e.target.name === 'clientName' ? e.target.value : searchKeys.clientName

    searchRequests(idKey, clientNameKey, condition, offer)

    setSearchKeys({
      ...searchKeys,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectOne = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    if (e.target.checked) {
      setSelectedIds([...selectedIds, id])
    } else {
      setSelectedIds(selectedIds.filter((data) => data !== id))
    }
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
    <MainLayout>
      <Box className={classes.wrapper}>
        <Header />
        <Box className={classes.contents}>
          <Box className={classes.tableSection}>
            <Box className={clsx(classes.dropdown, classes.groupAction)}>
              <Box className={classes.mobileSelectAll}>
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAll}
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Box>
              <Box className={classes.conditionDropdown}>
                <InputLabel>Acciones agrupadas</InputLabel>
                <FormControl variant="outlined">
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={condition}
                    onChange={handleChangeCondition}
                  >
                    <MenuItem value='ALL'>ALL</MenuItem>
                    <MenuItem value='APROBADO'>APROBADO</MenuItem>
                    <MenuItem value='PENDIENTE'>PENDIENTE</MenuItem>
                    <MenuItem value='RECHAZADO'>RECHAZADO</MenuItem>
                    <MenuItem value='CONTACTADO'>CONTACTADO</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Box className={classes.tableHeader} display='flex'>
              <Box className={clsx(classes.selectAll, classes.checkbox)} width='66px'>
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAll}
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Box>
              <Box width='calc((100% - 122px) * 0.15)' className={clsx(classes.headerCell)}>
                <CustomInput
                  name='id'
                  labelText='ID SOLICITUD'
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
              <Box width='calc((100% - 122px) * 0.20)' className={classes.headerCell}>
                <CustomInput
                  name='clientName'
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
              <Box width='calc((100% - 122px) * 0.12)' className={clsx(classes.dataLabel, classes.headerCell)}>
                <InputLabel>Fecha solicitud</InputLabel>
              </Box>
              <Box width='calc((100% - 122px) * 0.1)' className={clsx(classes.dataLabel, classes.headerCell)}>
                <InputLabel>ESTADO</InputLabel>
              </Box>
              <Box width='calc((100% - 122px) * 0.1)' className={clsx(classes.dataLabel, classes.headerCell)}>
                <InputLabel>Vence EN</InputLabel>
              </Box>

              <Box width='calc((100% - 122px) * 0.23)' className={clsx(classes.dropdown, classes.offerDropdown, classes.headerCell)}>
                <InputLabel>OFERTA</InputLabel>
                <FormControl variant="outlined">
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={offer}
                    onChange={handleSelectOffer}
                  >
                    <MenuItem value='default' style={{ display: 'none' }}>Seleccionar</MenuItem>
                    <MenuItem value='Oferta 1'>Oferta 1</MenuItem>
                    <MenuItem value='Oferta 2'>Oferta 2</MenuItem>
                    <MenuItem value='Oferta 3'>Oferta 3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Box className={classes.tableBody}>
              <Box className={classes.tableBodyContent}>
                {
                  searchResult.length === 0 ? (
                    <Box className={classes.dataRow} display='flex' justifyContent='center'>
                      <Typography variant='body1' align='center'>
                        There aren't any data
                      </Typography>
                    </Box>
                  ) : slice(searchResult, startIndex, endIndex).map((data) => (
                    <DataRow
                      request={data}
                      key={data.id}
                      selected={selectedIds.includes(data.id)}
                      handleSelectOne={handleSelectOne}
                      handleOpenContact={() => setOpenContactForm(true)}
                    />
                  ))
                }
              </Box>
            </Box>

            <Box className={classes.tableFooter} display='flex' justifyContent='center'>
              <CustomPagination
                count={Math.ceil(searchResult.length / pageSize)}
                handleChange={onChangePagination}
                page={page}
              />
            </Box>
          </Box>
        </Box>

        <ContactEmailDialog
          open={openContactForm}
          handleClose={() => setOpenContactForm(false)}
        />
      </Box>
    </MainLayout>
  )
}

export default Requests
