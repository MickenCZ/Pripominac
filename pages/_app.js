import "../styles/arrows.css"
import "../styles/index.css"
import "../styles/MainSection.css"
import "../styles/Modal.css"
import "../styles/Reminder.css"
import "../styles/Rozvrh.css"
import "../styles/Tridy.css"
import "../styles/Header.css"
import "../styles/otherPages.css"
import Header from "../components/Header.js"
/*I know I should be using .module syntax, but this is a React App refactored into a next.js one and it is not worth it to rewrite it.*/

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Header />
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
