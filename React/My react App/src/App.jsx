// Part 1
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'



// This serves as root
function App() {
  
  return(
    // Part 1
    // Shorthand for writing the elements
    <>
      <Header/>
      <Food/>
      <Footer/>
    </>
    // JSX elements must be wrapped in an enclosing tag only one element can be written in shorthand for one return statement so we will enclose all the components within a fragment

  );
}

export default App
