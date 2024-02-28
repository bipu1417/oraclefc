import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import About from './components/About';
import SecondaryContainer from './components/SecondaryContainer';
import MainContainer from './components/MainContainer';
import TournamentList from './components/TournamentList';

function App() {

  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/tournament",
        element: <TournamentList />
      },
      {
        path: "/fixtureNresult",
        element: <SecondaryContainer />
      },
    ]
  }]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
