import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ChakraBaseProvider,
  extendTheme,
  type ThemeConfig,
  // ColorModeScript,
  theme as base
} from '@chakra-ui/react'
import { CSSObject } from '@emotion/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const fonts = {
  heading: `Roboto Mono, ${base.fonts.heading}`
}

const theme = extendTheme({
  styles: {
    global: (props: CSSObject) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#0f172a' : 'white'
      }
    })
  },
  config,
  fonts
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />;
    </ChakraBaseProvider>
  )
}
