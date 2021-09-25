import './App.css';
import AssociateBrands from './components/AssociateBrands/AssociateBrands';
import Banner from './components/Banner/Banner';
import CopyRight from './components/CopyRight/CopyRight';
import FooterMenu from './components/FooterMenu/FooterMenu';
import Heroarea from './components/Heroarea/Heroarea';
import Navbar from './components/Navbar/Navbar';
import SelectionStatus from './components/SelectionStatus/SelectionStatus';
import SingleFreelancer from './components/SingleFreelancer/SingleFreelancer';

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
          <div className="row">
            <div className="col-12 col-lg-3">
              <SelectionStatus />
            </div>
            <div className="col-12 col-lg-9">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <SingleFreelancer />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-success bg-opacity-25 rounded-3">
          <Banner />
        </section>
      </main>

      <footer className="container">
        <section className="custom-gap">
          <FooterMenu />
        </section>

        <section className="d-flex justify-content-around border-top border-2 py-5">
          <CopyRight />
        </section>
      </footer>
    </div>
  );
}


export default App;
