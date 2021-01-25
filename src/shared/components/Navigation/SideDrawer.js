import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import './SideDrawer.css'

const SideDrawer = ({ show, children, onClick }) => {
  const html = (
    <CSSTransition in={show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
      <aside className="side-drawer" onClick={onClick}>{children}</aside>
    </CSSTransition>
  )

  return ReactDOM.createPortal(html, document.getElementById('drawer'))
}

export default SideDrawer
