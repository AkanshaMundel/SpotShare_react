import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';



function Layout(props){
return <div>
    <MainNavigation/>
   <main className={classes.main}>
   {props.children}
   </main>
</div>
}

export default Layout;

//this is like a custom comp as will usein app just 