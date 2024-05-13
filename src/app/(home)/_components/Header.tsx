import Logo from './Logo'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="h-22 px-20 py-6">
      <Logo />
    </div>
  )
}

export default Header
