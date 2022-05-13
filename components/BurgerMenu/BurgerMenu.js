import ss from './BurgerMenu.module.scss';

const BurgerMenu = props => {

  	return (
      <header className={ss.toolbar}>
         <button className={ss.burgerIcon} onClick={props.drawerToggleClickHandler}>
            {burger}
         </button> 
      </header>
   )
}

export default BurgerMenu;



const burger = 
<svg viewBox="0 0 100 80" width="40" height="40" color="white">
    <rect width="85" height="7" fill="#595858"></rect>
    <rect y="25" width="85" height="7" fill="#595858"></rect>
    <rect y="50" width="85" height="7" fill="#595858"></rect>
</svg>