import { Box, Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { path } from '../../../utils/constant'
import { useNavigate } from 'react-router-dom'
import { SetToken } from '../../../utils/helper'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const GetLoggedIn = () => {
    SetToken(dispatch, 'example')
    navigate(path.PLAYGROUND_PAGE)
  }
  return (
    <>
      <Box sx={style.container}>
        <Button onClick={GetLoggedIn} variant="contained">
          Click to login
        </Button>
      </Box>
    </>
  )
}
const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '99vh',
    flexDirection: 'column',
  },
}
export default Login
