import { remote }       from 'electron'
import { h, Component } from 'preact'
import Store            from 'vterm/store'
import {
  decorate,
  styleComponent }      from 'vterm/extend'
import { BORDER_COLOR } from 'vterm/variables'

export default class Plugin {
  // In the constructor we do several things:
  //
  constructor() {

    const changes = {
      TitleBar: {
        height: 64,
        WebkitAppRegion: 'drag'
      },

      Terminals: { top: 64 },

      CreateTab: { height: 32 },

      Tabs: {
        // Positioning
        position: 'absolute',
        left: 0, top: 32,
        right: 0, height: 30,

        // Borders
        borderBottom: `1px solid ${Store.config.borderColor || BORDER_COLOR}`,
        borderTop: `1px solid ${Store.config.borderColor || BORDER_COLOR}`,

        // No-drag!
        WebkitAppRegion: 'no-drag'
      }
    }

    for (var key in changes) {
      styleComponent(key, changes[key])
    }

    @decorate('preTitleBar')
    class WindowControls extends Component {

      getStyles() {
        const styles = {
          float: 'right',
          height: 32,
          WebkitAppRegion: 'no-drag'
        }

        return styles
      }

      render() {
        const styles = this.getStyles()

        // We don't need to import them 'cause babel
        // bundles all the files inside the src folder
        // and we can use the global variable!
        return(
          <div style={styles}>
            {Generate()}
          </div>
        )
      }
    }
  }
}
