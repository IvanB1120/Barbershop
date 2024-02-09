import './App.css';
import NavBar from './components/navBar';
import Main from './components/main';
import About from './components/about';
import HeroNumbers from './components/heroNumbers';
import Hero from './components/hero';
import Team from './components/team';
import Contact from './components/contact';
import Footer from './components/footer';
import Menu from './components/Menu';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyA3gPsxihEYePxCRd8qBt0AW2Rwx0O26ro",
    authDomain: "barbershop-e39f1.firebaseapp.com",
    projectId: "barbershop-e39f1",
    storageBucket: "barbershop-e39f1.appspot.com",
    messagingSenderId: "469574847212",
    appId: "1:469574847212:web:d4e4502f88115da74ef3c9",
    measurementId: "G-QZKGZWSF4C"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const perf = getPerformance(app);

  return (
    <div>
      <NavBar/>
      <Main/>
      <About/>
      <HeroNumbers/>
      <Hero/>
      <Team/>
      <Contact/>
      <Footer/>
      <Menu/>
    </div>
  );
}

export default App;
