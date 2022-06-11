// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import ColorsLayout from 'src/layouts/ColorsLayout'
import UnlockIconsLayout from 'src/layouts/UnlockIconsLayout'
import CardsLayout from 'src/layouts/CardsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ColorsLayout}>
        <Route path="/colors/new" page={ColorNewColorPage} name="newColor" />
        <Route path="/colors/{id:Int}/edit" page={ColorEditColorPage} name="editColor" />
        <Route path="/colors/{id:Int}" page={ColorColorPage} name="color" />
        <Route path="/colors" page={ColorColorsPage} name="colors" />
      </Set>
      <Set wrap={UnlockIconsLayout}>
        <Route path="/unlock-icons/new" page={UnlockIconNewUnlockIconPage} name="newUnlockIcon" />
        <Route path="/unlock-icons/{id:Int}/edit" page={UnlockIconEditUnlockIconPage} name="editUnlockIcon" />
        <Route path="/unlock-icons/{id:Int}" page={UnlockIconUnlockIconPage} name="unlockIcon" />
        <Route path="/unlock-icons" page={UnlockIconUnlockIconsPage} name="unlockIcons" />
      </Set>
      <Set wrap={CardsLayout}>
        <Route path="/cards/new" page={CardNewCardPage} name="newCard" />
        <Route path="/cards/{id:Int}/edit" page={CardEditCardPage} name="editCard" />
        <Route path="/cards/{id:Int}" page={CardCardPage} name="card" />
        <Route path="/cards" page={CardCardsPage} name="cards" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
