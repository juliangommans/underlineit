import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SideMenu = (props) => {
  const { Item } = Menu
  const { Column } = Grid
  const { activeItem } = props

  return (
    <Column computer={4} tablet={5} mobile={6} className='side-menu-wrapper'>
      <Menu fluid vertical tabular className='side-menu'>
        <Item name='services' as={Link} to='/' active={activeItem === 'services'} onClick={props.handleItemClick} />
        <Item name='about' as={Link} to='/about' active={activeItem === 'about'} onClick={props.handleItemClick} />
        <Item name='contact' as={Link} to='/contact' active={activeItem === 'contact'} onClick={props.handleItemClick} />
      </Menu>
    </Column>
  )
}

export default SideMenu
