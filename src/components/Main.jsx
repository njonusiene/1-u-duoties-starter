import '../styles/Main.css';
import MainImage from './MainImage';
import Foto from './womenFoto'; 

const Main = () => {
  return (
    <>
      <main>
        <div className="container">
          <h1>Portfolio</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima ullam fugit dicta, voluptates odit voluptatum veritatis optio fugiat officia magni. Ullam aliquam dolores dolore animi, numquam quasi distinctio fugiat explicabo?</p>
          <div className="images">
            {Foto.map((x, index) => (
              <MainImage 
              women={x.src ? x.src : ''} alt={x.alt} title={x.src ? (x.title ? x.title: "Vieta Jūsų tekstui") : "Vieta Jūsų nuotraukai"} key={index}/>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
