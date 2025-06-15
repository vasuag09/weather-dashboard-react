import logoImg from "../assets/logo.png"
export default function Header(){
    return (
        <header>
            <img src={logoImg} alt="" />
            <h1>Weather Dashboard</h1>
        </header>
    )
}