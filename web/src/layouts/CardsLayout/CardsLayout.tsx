import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type CardLayoutProps = {
  children: React.ReactNode
}

const CardsLayout = ({ children }: CardLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.cards()}
            className="rw-link"
          >
            Cards
          </Link>
        </h1>
        <Link
          to={routes.newCard()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Card
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default CardsLayout
