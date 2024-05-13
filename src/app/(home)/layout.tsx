import Header from './_components/Header'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Header />
      <main className="h-full">{children}</main>
    </div>
  )
}

export default HomeLayout
