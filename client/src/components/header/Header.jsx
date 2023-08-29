import { useSelector } from 'react-redux'


import './header.scss'
const Header = () => {
    const data = useSelector((state) => {
        console.log(state)
        return state.auth.value
    })
    console.log("data", data);
    return (
        <div className='header'>
            <div className="logo"><h4>LOGO</h4></div>
            <nav className="navbar"><h4>SignIn with Gmail</h4></nav>
        </div>
    )
}

export default Header


