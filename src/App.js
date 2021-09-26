import './App.css';
import AssociateBrands from './components/AssociateBrands/AssociateBrands';
import Banner from './components/Banner/Banner';
import CopyRight from './components/CopyRight/CopyRight';

import FreelancerArea from './components/FreelancerArea/FreelancerArea';
import Heroarea from './components/Heroarea/Heroarea';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="container">
        <Navbar />
        <Heroarea />
      </header>

      <main className="container">
        <section className="my-2 text-center">
          <AssociateBrands />
        </section>

        <section className="custom-gap">
          <FreelancerArea />
        </section>

        <section className="bg-success bg-opacity-25 rounded-3">
          <Banner />
        </section>
      </main>

      <footer className="container">
        <section className="custom-gap d-flex justify-content-around border-top border-2 py-5">
          <CopyRight />
        </section>
      </footer>
    </div>
  );
}


export default App;
