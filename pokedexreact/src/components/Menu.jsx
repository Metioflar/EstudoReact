import { Link, Outlet } from "react-router-dom";
import '../assets/style/global.css'

function Menu(){
    return(
        <>
        <nav>
            <ul class="nav-links">
                <div className="menu">
                    <img src="https://cdn-icons-png.flaticon.com/512/188/188987.png" ></img>
                    <Link className='li-item' href="#">Início</Link>
                    <Link className='li-item' href="#">Sobre</Link>
                    <Link className='li-item' href="#">Serviços</Link>
                    <Link className='li-item' href="#">Preços</Link>
                    <Link className='li-item' href="#">Contato</Link>
                </div>
            </ul>
        </nav>
           <Outlet/>
        </>
            )    
    }
    export default Menu;