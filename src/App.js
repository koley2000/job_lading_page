import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Viewport from './components/Viewport';
import JobState from './context/JobState';


function App() {
  return (
    <>
      <JobState>
        <div className="container-fluid">
          <div className='row flex-nowrap'>
            <Sidebar />
            <div className='col'>
              <Navbar />
              <Viewport />
            </div>
          </div>
        </div>
      </JobState>
    </>
  );
}

export default App;
