import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@mui/material'
import React from 'react'
import { GetLanguage, SetLanguage, userLogout } from '../../utils/helper'
import { useDispatch } from 'react-redux'
import i18n from '../../i18n'
import { withTranslation } from 'react-i18next'

const MainTemplateContainer = ({ children, toggleTheme }) => {
  const dispatch = useDispatch()
  const Logout = () => {
    userLogout()
  }

  const changeLanguage = (e) => {
    const { value } = e.target

    SetLanguage(dispatch, value)
    i18n.changeLanguage(value)
  }
  const lang = GetLanguage()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu/Logo
          </Typography>
          <Button color="inherit" onClick={() => toggleTheme()}>
            Theme toggle
          </Button>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
            label="Language"
            onChange={changeLanguage}
          >
            <MenuItem value={'en'}>En</MenuItem>
            <MenuItem value={'ja'}>Ja</MenuItem>
          </Select>
          <Button color="inherit" onClick={Logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  )
}
export default withTranslation()(MainTemplateContainer)
