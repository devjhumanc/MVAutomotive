import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  Avatar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import BuildIcon from '@mui/icons-material/Build'
import HomeIcon from '@mui/icons-material/Home'
import HandymanIcon from '@mui/icons-material/Handyman'
import InfoIcon from '@mui/icons-material/Info'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import LanguageIcon from '@mui/icons-material/Language'
import Divider from '@mui/material/Divider'
import Footer from './Footer'

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLang)
  }

  const getLanguageButtonText = () => {
    // When content is in English, show button in Spanish
    // When content is in Spanish, show button in English
    return i18n.language === 'en' ? 'Español' : 'English'
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
      if (isMobile) {
        setMobileOpen(false)
      }
    }
  }

  const navItems = [
    { label: t('nav.home'), section: 'home', icon: HomeIcon },
    { label: t('nav.services'), section: 'services', icon: HandymanIcon },
    { label: t('nav.about'), section: 'about', icon: InfoIcon },
    { label: t('nav.contact'), section: 'contact', icon: ContactMailIcon },
  ]

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #115293 100%)',
          color: 'white',
          p: 3,
          textAlign: 'center',
        }}
      >
        <Avatar
          sx={{
            bgcolor: 'rgba(255,255,255,0.2)',
            width: 64,
            height: 64,
            mx: 'auto',
            mb: 2,
          }}
        >
          <BuildIcon sx={{ fontSize: 40 }} />
        </Avatar>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
          MV Automotive
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          {i18n.language === 'en' ? 'Expert Auto Service' : 'Servicio Automotriz Experto'}
        </Typography>
      </Box>

      {/* Navigation Items */}
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.section
          return (
            <ListItem
              key={item.section}
              button
              onClick={() => scrollToSection(item.section)}
              sx={{
                mx: 1,
                mb: 0.5,
                borderRadius: 2,
                backgroundColor: isActive ? 'primary.main' : 'transparent',
                color: isActive ? 'white' : 'text.primary',
                '&:hover': {
                  backgroundColor: isActive ? 'primary.dark' : 'action.hover',
                  transform: 'translateX(4px)',
                  transition: 'all 0.2s ease-in-out',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              <ListItemIcon
                sx={{
                  color: isActive ? 'white' : 'primary.main',
                  minWidth: 40,
                }}
              >
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: isActive ? 600 : 500,
                  fontSize: '1rem',
                }}
              />
            </ListItem>
          )
        })}
      </List>

      <Divider />

      {/* Language Toggle */}
      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<LanguageIcon />}
          onClick={() => {
            toggleLanguage()
            handleDrawerToggle()
          }}
          sx={{
            textTransform: 'none',
            py: 1.5,
            borderRadius: 2,
            borderColor: 'primary.main',
            color: 'primary.main',
            '&:hover': {
              borderColor: 'primary.dark',
              backgroundColor: 'primary.light',
              color: 'white',
            },
          }}
        >
          {getLanguageButtonText()}
        </Button>
      </Box>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" elevation={2}>
        <Toolbar>
          <BuildIcon sx={{ mr: 2, fontSize: 32 }} />
          <Typography
            variant="h6"
            component="button"
            onClick={() => scrollToSection('home')}
            sx={{
              flexGrow: { xs: 1, md: 0 },
              fontWeight: 700,
              textDecoration: 'none',
              color: 'inherit',
              mr: { md: 4 },
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 'inherit',
            }}
          >
            MV Automotive
          </Typography>
          {isMobile ? (
            <>
              <Button
                color="inherit"
                onClick={toggleLanguage}
                sx={{ mr: 1, textTransform: 'none' }}
              >
                {getLanguageButtonText()}
              </Button>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2, ml: 'auto', alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  color="inherit"
                  sx={{
                    backgroundColor: activeSection === item.section ? 'rgba(255,255,255,0.1)' : 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                color="inherit"
                onClick={toggleLanguage}
                sx={{
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                {getLanguageButtonText()}
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            boxShadow: 4,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
