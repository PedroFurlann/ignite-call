import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  marginLeft: 'auto',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  overflowY: 'auto',

  '@media(max-width: 1200px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '$6',
    paddingBottom: '$6',
  },
})

export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`> ${Heading}`]: {
    '@media(max-width: 800px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },

  '@media(max-width: 1200px)': {
    marginTop: '$80',
  },

  '@media(max-width: 800px)': {
    marginTop: '$1',
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',

  '@media(max-width: 800px)': {
    display: 'none',
  },
})
