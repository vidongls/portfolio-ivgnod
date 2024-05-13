import Logo from './Logo'
import Navbar from './Navbar'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="flex h-22 items-center justify-between bg-primary px-20 py-6">
      <Logo />
      <Navbar />
    </div>
  )
}

export default Header
