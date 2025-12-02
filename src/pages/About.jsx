import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Avatar,
  Paper,
} from '@mui/material'
import BuildIcon from '@mui/icons-material/Build'
import HistoryIcon from '@mui/icons-material/History'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import PeopleIcon from '@mui/icons-material/People'

const About = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  return (
    <>
      <Helmet>
        <title>{t('seo.aboutTitle')}</title>
        <meta name="description" content={t('seo.aboutDescription')} />
        <meta property="og:title" content={t('seo.aboutTitle')} />
        <meta property="og:description" content={t('seo.aboutDescription')} />
        <html lang={i18n.language} />
        <link rel="alternate" hreflang="en" href={`${baseUrl}/about?lang=en`} />
        <link rel="alternate" hreflang="es" href={`${baseUrl}/about?lang=es`} />
        <link rel="alternate" hreflang="x-default" href={`${baseUrl}/about`} />
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
            {t('about.title')}
          </Typography>
          <Typography variant="h6" align="center" sx={{ mt: 2, opacity: 0.9 }}>
            {t('about.subtitle')}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Story Section */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/six.jpg"
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
    </>
  )
}

export default About
