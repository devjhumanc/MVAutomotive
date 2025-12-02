import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const Services = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
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

  return (
    <>
      <Helmet>
        <title>{t('seo.servicesTitle')}</title>
        <meta name="description" content={t('seo.servicesDescription')} />
        <meta property="og:title" content={t('seo.servicesTitle')} />
        <meta property="og:description" content={t('seo.servicesDescription')} />
        <html lang={i18n.language} />
        <link rel="alternate" hreflang="en" href={`${baseUrl}/services?lang=en`} />
        <link rel="alternate" hreflang="es" href={`${baseUrl}/services?lang=es`} />
        <link rel="alternate" hreflang="x-default" href={`${baseUrl}/services`} />
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
            {t('services.title')}
          </Typography>
          <Typography variant="h6" align="center" sx={{ mt: 2, opacity: 0.9 }}>
            {t('services.subtitle')}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
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
    </>
  )
}

export default Services
