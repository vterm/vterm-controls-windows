import { h }          from 'preact'
import Store          from 'vterm/store'
import { FOREGROUND } from 'vterm/variables'

const SVG_STYLES = {
  height: 10,
  width: 10,
  zIndex: -1
}

export const Maximize = (
  <svg x='0px' y='0px' viewBox='0 0 10.2 10.1' style={SVG_STYLES}>
    <path
      fill={Store.config.foreground || FOREGROUND}
      d='M0,0v10.1h10.2V0H0z M9.2,9.2H1.1V1h8.1V9.2z'
    />
  </svg>
)

export const Unmaximize = (
  <svg x='0px' y='0px' viewBox='0 0 10.2 10.2' style={SVG_STYLES}>
    <path
      fill={Store.config.foreground || FOREGROUND}
      d='M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z'
    />
  </svg>
)

export const Close = (
  <svg viewBox='0 0 10.2 10.2' style={SVG_STYLES}>
    <polygon
      fill={Store.config.foreground || FOREGROUND}
      points='10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1 '
    />
  </svg>
)

export const Minimize = (
  <svg x='0px' y='0px' viewBox='0 0 10.2 1' style={SVG_STYLES}>
    <rect
      fill={Store.config.foreground || FOREGROUND} 
      width='10.2' height='1'/>
  </svg>
)
