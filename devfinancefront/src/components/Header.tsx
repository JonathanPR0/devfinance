import Logo from "../assets/Logo.svg"
const Header = () => {
  return (
    <header className="flex justify-center bg-primaryColor w-full pt-8 pb-40">
      <img src={Logo} alt="Logo dev finance" className="max-h-6"/>
    </header>
  )
}

export default Header
