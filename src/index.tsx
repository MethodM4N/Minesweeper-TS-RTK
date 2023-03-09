import ReactDOM from 'react-dom/client';
// need to change browserRouter to HashRouter for gh-pages
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import './index.scss';
import Favicon from 'react-favicon';
import favicon from './assets/img/bombIco.png';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';

import { store } from './Redux/Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <Favicon url={favicon} />
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/leaders" element={<LeaderBoard />} />
        </Routes>
      </Provider>
    </HashRouter>
  </>,
);
