import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from '@mui/material'
import { Link } from 'react-router-dom'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import BuildIcon from '@mui/icons-material/Build'
import SpeedIcon from '@mui/icons-material/Speed'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const Home = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  return (
    <>
      <Helmet>
        <title>{t('seo.homeTitle')}</title>
        <meta name="description" content={t('seo.homeDescription')} />
        <meta property="og:title" content={t('seo.homeTitle')} />
        <meta property="og:description" content={t('seo.homeDescription')} />
        <meta property="og:type" content="website" />
        <html lang={i18n.language} />
        <link rel="alternate" hreflang="en" href={`${baseUrl}?lang=en`} />
        <link rel="alternate" hreflang="es" href={`${baseUrl}?lang=es`} />
        <link rel="alternate" hreflang="x-default" href={baseUrl} />
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                {t('home.title')}
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                {t('home.subtitle')}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    '&:hover': { bgcolor: 'grey.100' },
                  }}
                >
                  {t('home.scheduleService')}
                </Button>
                <Button
                  component={Link}
                  to="/services"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' },
                  }}
                >
                  {t('home.ourServices')}
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/one.jpg"
                alt="Professional car mechanic service"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 6,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 700 }}>
          {t('home.whyChoose')}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <DirectionsCarIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {t('home.allMakes')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('home.allMakesDesc')}
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <BuildIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {t('home.expertTech')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('home.expertTechDesc')}
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <SpeedIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {t('home.fastService')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('home.fastServiceDesc')}
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={3} sx={{ height: '100%', textAlign: 'center', p: 2 }}>
              <CheckCircleIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                {t('home.qualityGuarantee')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t('home.qualityGuaranteeDesc')}
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Services Preview */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 700 }}>
            {t('home.ourServicesTitle')}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/two.jpg"
                  alt="Engine repair service"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {t('home.engineRepair')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('home.engineRepairDesc')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/three.jpg"
                  alt="Brake service"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {t('home.brakeService')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('home.brakeServiceDesc')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/four.jpg"
                  alt="Oil change service"
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {t('home.oilChanges')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t('home.oilChangesDesc')}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={Link}
              to="/services"
              variant="contained"
              size="large"
            >
              {t('home.viewAllServices')}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
          color: 'white',
          py: 6,
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            {t('home.readyToSchedule')}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            {t('home.contactToday')}
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': { bgcolor: 'grey.100' },
            }}
          >
            {t('home.getStarted')}
          </Button>
        </Container>
      </Box>
    </>
  )
}

export default Home
