import React from 'react'
import * as React from '@types/react'

export type FCC<P = {}> = React.FC<PropsWithChildren<P>>

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null
  }
}
