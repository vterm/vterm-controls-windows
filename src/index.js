import Store            from 'vterm/store'
import { decorate }     from 'vterm/extend'

import { remote }       from 'electron'
import { h, Component } from 'preact'

export default class Plugin {
  // In the constructor we do several things:
  //
  constructor() {

    @decorate('preTitleBar')
    class WindowControls extends Component {

      getStyles() {
        const styles = {
          float: 'right',
          height: '100%'
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
