import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type ColorLayoutProps = {
  children: React.ReactNode
}

const ColorsLayout = ({ children }: ColorLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.colors()}
            className="rw-link"
          >
            Colors
          </Link>
        </h1>
        <Link
          to={routes.newColor()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Color
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ColorsLayout
