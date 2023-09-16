import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Posts from "./pages/Posts";

function AuthRoutes(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element ={<Menu/>}>
                <Route index element ={<Home/>}/>
                <Route path='/pokemon' element ={<Pokemon/>}/>
                <Route path='/posts' element ={<Posts/>}/>
                <Route path='/posts/:id' element ={<Posts/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
export default AuthRoutes;