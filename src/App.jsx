import styles from "./style"
import NavBar from "./component/NavBar"
import Hero from "./component/Hero"
function App() {
  return (
    <div className=" w-full bg-primary ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    </div>
  )
}

export default App