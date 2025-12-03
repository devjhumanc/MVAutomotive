import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Link as MuiLink,
} from '@mui/material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import BuildIcon from '@mui/icons-material/Build'
import SpeedIcon from '@mui/icons-material/Speed'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import HistoryIcon from '@mui/icons-material/History'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import PeopleIcon from '@mui/icons-material/People'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ScheduleIcon from '@mui/icons-material/Schedule'

const HomePage = () => {
  const { t, i18n } = useTranslation()
  const baseUrl = import.meta.env.BASE_URL

  const services = [
    {
      titleKey: 'services.engineRepair.title',
      descriptionKey: 'services.engineRepair.description',
      featuresKey: 'services.engineRepair.features',
      image: `${baseUrl}five.jpg`,
    },
    {
      titleKey: 'services.brakeService.title',
      descriptionKey: 'services.brakeService.description',
      featuresKey: 'services.brakeService.features',
      image: `${baseUrl}six.jpg`,
    },
    {
      titleKey: 'services.oilChanges.title',
      descriptionKey: 'services.oilChanges.description',
      featuresKey: 'services.oilChanges.features',
      image: `${baseUrl}seven.jpg`,
    },
    {
      titleKey: 'services.transmission.title',
      descriptionKey: 'services.transmission.description',
      featuresKey: 'services.transmission.features',
      image: `${baseUrl}one.jpg`,
    },
    {
      titleKey: 'services.suspension.title',
      descriptionKey: 'services.suspension.description',
      featuresKey: 'services.suspension.features',
      image: `${baseUrl}two.jpg`,
    },
    {
      titleKey: 'services.acHeating.title',
      descriptionKey: 'services.acHeating.description',
      featuresKey: 'services.acHeating.features',
      image: `${baseUrl}three.jpg`,
    },
    {
      titleKey: 'services.electrical.title',
      descriptionKey: 'services.electrical.description',
      featuresKey: 'services.electrical.features',
      image: `${baseUrl}four.jpg`,
    },
    {
      titleKey: 'services.tireService.title',
      descriptionKey: 'services.tireService.description',
      featuresKey: 'services.tireService.features',
      image: `${baseUrl}five.jpg`,
    },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <Helmet>
        <title>{t('seo.homeTitle')}</title>
        <meta name="description" content={t('seo.homeDescription')} />
        <meta property="og:title" content={t('seo.homeTitle')} />
        <meta property="og:description" content={t('seo.homeDescription')} />
        <meta property="og:type" content="website" />
        <html lang={i18n.language} />
      </Helmet>

      {/* Hero Section */}
      <Box
        id="home"
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
                  onClick={() => scrollToSection('contact')}
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
                  onClick={() => scrollToSection('services')}
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
                src={`${baseUrl}one.jpg`}
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

      {/* Services Section */}
      <Box id="services" sx={{ bgcolor: 'background.default', py: 8, scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
              color: 'white',
              py: 6,
              mb: 6,
              borderRadius: 2,
            }}
          >
            <Typography variant="h3" component="h2" align="center" sx={{ fontWeight: 700 }}>
              {t('services.title')}
            </Typography>
            <Typography variant="h6" align="center" sx={{ mt: 2, opacity: 0.9 }}>
              {t('services.subtitle')}
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={service.image}
                    alt={t(service.titleKey)}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {t(service.titleKey)}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {t(service.descriptionKey)}
                    </Typography>
                    <List dense>
                      {t(service.featuresKey, { returnObjects: true }).map((feature, idx) => (
                        <ListItem key={idx} disablePadding>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: 8, scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
              color: 'white',
              py: 6,
              mb: 6,
              borderRadius: 2,
            }}
          >
            <Typography variant="h3" component="h2" align="center" sx={{ fontWeight: 700 }}>
              {t('about.title')}
            </Typography>
            <Typography variant="h6" align="center" sx={{ mt: 2, opacity: 0.9 }}>
              {t('about.subtitle')}
            </Typography>
          </Box>

          {/* Story Section */}
          <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={`${baseUrl}six.jpg`}
                alt="MV Automotive shop"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 4,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                {t('about.ourStory')}
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {t('about.story1')}
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {t('about.story2')}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {t('about.story3')}
              </Typography>
              <Box sx={{ mt: 4, p: 2, bgcolor: 'primary.light', borderRadius: 2, color: 'white' }}>
                <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
                  {t('about.owner')}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {t('about.ownerName')}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Values Section */}
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6, fontWeight: 700 }}>
            {t('about.ourValues')}
          </Typography>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3} sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 64, height: 64, mx: 'auto', mb: 2 }}>
                  <BuildIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {t('about.qualityWork')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('about.qualityWorkDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3} sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 64, height: 64, mx: 'auto', mb: 2 }}>
                  <HistoryIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {t('about.experience')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('about.experienceDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3} sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 64, height: 64, mx: 'auto', mb: 2 }}>
                  <EmojiEventsIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {t('about.excellence')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('about.excellenceDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3} sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 64, height: 64, mx: 'auto', mb: 2 }}>
                  <PeopleIcon sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {t('about.customerFirst')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('about.customerFirstDesc')}
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Why Choose Us */}
          <Paper elevation={3} sx={{ p: 4, bgcolor: 'primary.light', color: 'white' }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4, fontWeight: 700 }}>
              {t('about.whyChoose')}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {t('about.certifiedTech')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('about.certifiedTechDesc')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {t('about.warranty')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('about.warrantyDesc')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {t('about.competitivePricing')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('about.competitivePricingDesc')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {t('about.modernEquipment')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('about.modernEquipmentDesc')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {t('about.convenientLocation')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('about.convenientLocationDesc')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {t('about.allMakes')}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {t('about.allMakesDesc')}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ bgcolor: 'background.default', py: 8, scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
              color: 'white',
              py: 6,
              mb: 6,
              borderRadius: 2,
            }}
          >
            <Typography variant="h3" component="h2" align="center" sx={{ fontWeight: 700 }}>
              {t('contact.title')}
            </Typography>
            <Typography variant="h6" align="center" sx={{ mt: 2, opacity: 0.9 }}>
              {t('contact.subtitle')}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                {t('contact.getInTouch')}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Card
                  component="a"
                  href="tel:+19039171354"
                  elevation={2}
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      elevation: 4,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
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

                <Card
                  component="a"
                  href="mailto:marioescobedo1983@gmail.com"
                  elevation={2}
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      elevation: 4,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
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

                <Card
                  component="a"
                  href="https://www.google.com/maps/search/?api=1&query=1723+Peters+Rd+443,+Irving,+TX+75061"
                  target="_blank"
                  rel="noopener noreferrer"
                  elevation={2}
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      elevation: 4,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
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
      </Box>
    </>
  )
}

export default HomePage

