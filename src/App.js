
import './App.css';
import { useState } from 'react';
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Error from "./pages/Error"
import Post from "./pages/Post"
import People from "./pages/People"
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

function App() {

  const [login, setLogin] = useState(false)


  return (<>
  <BrowserRouter basename = "/tour">
    <div className="App">
      <Header/>
    
    <button onClick={()=> setLogin(!login)}>{login ? "log out": "log in"}</button>
    {/* ternary operator for html : cool😲 */}
    <Switch>
    <Route path= "/" component = {Home} exact/>
    <Route path = "/about" component={About}/>
    {/* useHistory */}
      {/* <Route path ="/profile"/> */}
      {/* Instead of passing the component in component prop we can also pass it between Route tags */}
      {/* <Profile login = {login}/> */}
      {/* login is the prop , {login is value} */}
     {/* <Route/> */}
    {/* match */}
    <Route path ="/post/:id"component = {Post}/>
    {/* useParams, Redirect */}
    <Route path = "/people"> { login ? <People/>: <Redirect to ="/" />}</Route>

    <Route component={Error}></Route>
    </Switch>
    </div>
  </BrowserRouter>
    </>

  );
}

// Notes
//Route can use self closing tag
//Route by default shows all pages having same path. if the pages path overlap each other than it will show both the pages
//If we make a path "exact" for ex:- we make "/"i.e home path exact than route will render the page having the exact path.
//<Switch> Component :
//For all the routes wrapped inside a Switch component , the path that is found first will be shown
//so if we not use "exact" for home path then all the route will render the home page. so need to use "exact" for home page

//LINK
//If we use a tag like in normal html, our pages will refresh.
//So we need to use Link component/tag provided by react routed which does not refresh the page.
//Link componet uses to prop which takes the path of the page
//syntax : <Link to = "path name" > Page name </Link>

//basename
//basename prop creates a base route (sub-directory) structure  for our app
//for example : if we want url path to be facebook.com/tours/check-availablity
//then tours should be passed as value to basename prop
//basename should have a leading slash, but no trailing slash.

//Refresh webpage
//use "forceRefreah" as a keyword for BrowserRouter to force react-router to refresh the page

//if our pages content are long and we need to scroll then if we move to some other page content will be shown from that scroll position
//we need to use useEffect() in our pages to stop this issue

//Default Page : Page shown if url not valid or page does not exist
//This route will not take any path
//syntax : <Route component = "component-name"> </Route>

//Pass id to path
//suppose we are displaying 10 peaople having id 1 to 10. In order to create a path we need to pass this id to path so that path looks something like /people/4
//for this we can use two hooks match & useParams
//syntax : path = "/pathname/:id"

//match.params.id
//gets the id that is passed to the path

//useParams() 
//retruns an object which contains an id key whose value is the one that is passed to the path


//useLocation hook
//helps us get  data from the path
//useLocation() returns an object with pathname , search , hash and state keys
//pathname : conatins the path after root domain
//search : contains everything after ? 
//has : (doubt)
//state : (doubt)

//access searchParams
//URLSearchParams is an inbuilt API of browser that helps us get the searched values
//first initialize the URLSearchParams and store it in a variable\
// const query = new URLSearchParams(useLocation().search)
//then access the values using variable.get("search-parmater")
//{query.get("first")

//<Redirect> component
//react router gives us  Redirect component to redirect to a certain path if certain values are not satisfied
//syntax: <Route path = "/people"> { expression ? <component name if true/>: <Redirect to ="/path name if false" />}</Route>

//useHistory
//allows us to redirect based on certain values passed to the component



export default App;
