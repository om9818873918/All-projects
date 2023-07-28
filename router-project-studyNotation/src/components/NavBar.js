import { toast } from "react-hot-toast";
import logo from "../assets/Logo.svg"
import { NavLink } from "react-router-dom";
function NavBar(props){
    const isLoggedIn=props.isLoggedIn;
    const setIsLoggedIn=props.setIsLoggedIn;
    return(<div className="m-[10px] text-white flex gap-6 relative">    
              <NavLink to ="/">
              <img src={logo} height={32} width={160} loading="lazy" ></img>
              </NavLink>

              <ul className=" ml-[300px] flex gap-7">
                <li><NavLink to="/">
                    Home
                    
                    </NavLink></li>
                    <li><NavLink to="/">
                    About
                    
                    </NavLink></li>
                    <li><NavLink to="/">
                    Support
                    
                    </NavLink></li>
              </ul>

              <div className="flex gap-8 absolute right-[20%] ">
                { !isLoggedIn&&
                    <NavLink to='/login' >
                        <button onClick={()=>{
                            setIsLoggedIn(true);
                            toast.success("Logged In")
                        }}>
                            Login
                        </button>

                    </NavLink>
                }
                { !isLoggedIn&&
                    <NavLink to='/signup'>
                        <button>
                           Signup
                        </button>

                    </NavLink>
                }
                { isLoggedIn&&
                    <NavLink to='/'>
                        <button onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out")
                        }}>
                         Log  Out
                        </button>

                    </NavLink>
                }
                { isLoggedIn&&
                    <NavLink to='/dashboard'>
                        <button>
                          Dashboard
                        </button>

                    </NavLink>
                }
              </div>
          </div>
    

        
       
    );
}
export default NavBar;