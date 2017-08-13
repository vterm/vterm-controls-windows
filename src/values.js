import Store          from 'vterm/store'

export const DEFAULT_STYLES = {
  // Height, widths and general
  // meruaments
  width: 46,
  height: '100%',
  lineHeight: 0,
  float: 'right',

  // Children positioning values
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  // User interaction values
  userSelect: 'none',
  WebkitAppRegion: 'no-drag',
  cursor: 'default',

  // Transitions
  transition: 'background .1s',
}

export const LIST = [
  {
    style: DEFAULT_STYLES,
    defaultBackground: 'transparent',
    hoverBackground:  'rgba(232, 17, 35, .7)',
    foreground: Store.config.foreground || FOREGROUND,
    type: 'close',
    svg: Close
  },
  {
    style: DEFAULT_STYLES,
    defaultBackground: 'transparent',
    hoverBackground:  'rgba(0, 0, 0, .13)',
    foreground: Store.config.foreground || FOREGROUND,
    type: 'maximize',
    svg: Unmaximize,
    svg1: Maximize
  },
  {
    style: DEFAULT_STYLES,
    defaultBackground: 'transparent',
    hoverBackground:  'rgba(0, 0, 0, .13)',
    foreground: Store.config.foreground || FOREGROUND,
    type: 'minimize',
    svg: Minimize
  }
]
