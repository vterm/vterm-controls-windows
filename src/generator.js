import { h, Component } from 'preact'
import { observer }     from 'mobx-preact'
import { bind }         from 'decko'

import Store            from 'vterm/store'
import { Window }       from 'vterm/actions'

export const Generate = () =>
  LIST.map(({
    style,
    defaultBackground,
    hoverBackground,
    foreground,
    type,
    svg,
    svg1
  }) => {


    @observer
    class Item extends Component {
      @bind
      handleMouseEnter(e) {
        e.stopPropagation()
        this.setState({ isHover: true })
      }

      @bind
      handleMouseOut(e) {
        e.stopPropagation()
        this.setState({ isHover: false })
      }

      render() {
        const { isHover, isFocused } = this.state
        let onClick       = null

        switch (type) {
          case 'maximize':
            onClick = Store.isMaximized ? Window.unmaximize : Window.maximize
          break
          case 'close':
            onClick = Window.close
          break
          case 'minimize':
            onClick = Window.minimize
          break;
        }

        return(
          <div
          style={{
            ...style,
            background: isHover
              ? hoverBackground
              : defaultBackground,
            color: foreground
          }}

          onMouseEnter={this.handleMouseEnter}
          onMouseOut={this.handleMouseOut}
          onClick={onClick}
          >
            {type == 'maximize' ?
              Store.isMaximized ? svg : svg1
            : svg}
          </div>
          )
      }
    }

    return <Item />
  })
