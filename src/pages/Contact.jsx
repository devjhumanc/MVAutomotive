import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Card,
  CardContent,
} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ScheduleIcon from '@mui/icons-material/Schedule'

const Contact = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''

  return (
    <>
      <Helmet>
        <title>{t('seo.contactTitle')}</title>
        <meta name="description" content={t('seo.contactDescription')} />
        <meta property="og:title" content={t('seo.contactTitle')} />
        <meta property="og:description" content={t('seo.contactDescription')} />
        <html lang={i18n.language} />
        <link rel="alternate" hreflang="en" href={`${baseUrl}/contact?lang=en`} />
        <link rel="alternate" hreflang="es" href={`${baseUrl}/contact?lang=es`} />
        <link rel="alternate" hreflang="x-default" href={`${baseUrl}/contact`} />
      </Helmet>

      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
          color: 'white',
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" align="center" sx={{ fontWeight: 700 }}>
            {t('contact.title')}
          </Typography>
          <Typography variant="h6" align="center" sx={{ mt: 2, opacity: 0.9 }}>
            {t('contact.subtitle')}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
              {t('contact.getInTouch')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Card elevation={2}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                    <PhoneIcon color="primary" sx={{ fontSize: 32 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        {t('contact.phone')}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        (903) 917-1354
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('contact.phoneHours')}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card elevation={2}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                    <EmailIcon color="primary" sx={{ fontSize: 32 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        {t('contact.email')}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        marioescobedo1983@gmail.com
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('contact.emailResponse')}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card elevation={2}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                    <LocationOnIcon color="primary" sx={{ fontSize: 32 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        {t('contact.address')}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        1723 Peters Rd 443
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Irving, TX 75061
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card elevation={2}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                    <ScheduleIcon color="primary" sx={{ fontSize: 32 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        {t('contact.businessHours')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('contact.mondayFriday')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('contact.saturday')}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {t('contact.sunday')}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          {/* Google Maps Embed */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ overflow: 'hidden', borderRadius: 2 }}>
              <Box
                component="iframe"
                src="https://www.google.com/maps?q=1723+Peters+Rd+443,+Irving,+TX+75061&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sx={{
                  display: 'block',
                  width: '100%',
                  minHeight: 450,
                }}
                title={t('contact.mapLocation')}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Contact
