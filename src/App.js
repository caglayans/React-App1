
import 'bulma/css/bulma.css';
import './App.css';
import Course from './Course';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Csharp from './images/ccsharp.png';
import Kompleweb from './images/kompleweb.jpg';


function App() {
  return (
    <div className="App">

      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">Kurslar</p>
        </div>
      </section>

      

      <div className='container'>

        <section className="section">
        <div className='columns'>
            <div className='column'>
              <Course 
              image={Angular}
              title="Angular Kursu"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, iste unde. Laboriosam, eligendi necessitatibus. Ut aperiam nemo iusto, provident quis, neque aspernatur voluptatem ab, consectetur nobis unde ad commodi modi."/>
            </div>
            <div className='column'>
              <Course 
              image={Bootstrap}
              title="Bootstrap5 Kursu" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, iste unde. Laboriosam, eligendi necessitatibus. Ut aperiam nemo iusto, provident quis, neque aspernatur voluptatem ab, consectetur nobis unde ad commodi modi."/>
            </div>
            <div className='column'>
              <Course 
              image={Csharp}
              title="Komple Web Kursu" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, iste unde. Laboriosam, eligendi necessitatibus. Ut aperiam nemo iusto, provident quis, neque aspernatur voluptatem ab, consectetur nobis unde ad commodi modi."/>
            </div>
            <div className='column'>
              <Course 
              image={Kompleweb}
              title="Yazılımcı Olma Kursu" 
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, iste unde. Laboriosam, eligendi necessitatibus. Ut aperiam nemo iusto, provident quis, neque aspernatur voluptatem ab, consectetur nobis unde ad commodi modi."/>
            </div>
          </div>
        </section> 
              
      </div>
    </div>
  );
}

export default App;
