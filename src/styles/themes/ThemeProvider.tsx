import { FCC } from '@/types/react'
import { ConfigProvider, theme } from 'antd'
import React from 'react'

const ThemeProvider: FCC = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryText: 'var(--primary-color)',
          borderRadius: 9,
          colorSuccessText: 'hsl(var(--success))',
          colorTextSecondary: 'var(--secondary-color)',
          colorTextTertiary: '#BED7FF',
          colorWarningText: 'hsl(var(--warning))',
          colorErrorText: 'hsl(var(--error))',
          colorInfoText: 'hsl(var(--info))',
          fontFamily: `Roboto, sans-serif`,
          fontSize: 16,
          colorText: 'var(--fg)',
          screenLG: 1280,
          screenLGMin: 1280,
          screenLGMax: 1440,
          screenXL: 1650,
          screenXLMin: 1650,
          screenXLMax: 1920,
          screenXXL: 2400,
          screenXXLMin: 2400
        },
        components: {
          Typography: {
            margin: 0,
            colorText: 'var(--fg)',
            colorSuccess: 'hsl(var(--success))',
            colorWarning: 'hsl(var(--warning))',
            colorError: 'hsl(var(--error))',
            colorInfo: 'hsl(var(--info))',
            colorTextSecondary: 'var(--secondary-color)'
          },
          Input: {},
          Modal: {},
          Button: {
            controlHeightLG: 48
          },
          Spin: {
            // colorPrimary: '#ffffff',
          }
        },
        algorithm: theme.defaultAlgorithm
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default ThemeProvider
