import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <>
      <Box sx={style.container}>
        <Typography variant="h2">{t('page_name_Home')}</Typography>
        <Typography variant="h6">
          Start to edit home page from modules/app/home
        </Typography>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Go Back
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
export default Dashboard
