import { useTranslation } from 'react-i18next'
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              MV Automotive
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {t('footer.description')}
            </Typography>
            <Box>
              <IconButton sx={{ color: 'white' }} aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }} aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }} aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              {t('footer.quickLinks')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" underline="hover">
                {t('nav.home')}
              </Link>
              <Link href="/services" color="inherit" underline="hover">
                {t('nav.services')}
              </Link>
              <Link href="/about" color="inherit" underline="hover">
                {t('nav.about')}
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                {t('nav.contact')}
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              {t('footer.contactInfo')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">(903) 917-1354</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2">marioescobedo1983@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                <LocationOnIcon fontSize="small" sx={{ mt: 0.5 }} />
                <Typography variant="body2">
                  1723 Peters Rd 443<br />
                  Irving, TX 75061
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} MV Automotive. {t('footer.rights')}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
