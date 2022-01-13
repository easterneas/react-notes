import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './pages/Home';
import ReactConcepts from './pages/ReactConcepts';
import ReactFetching from './pages/ReactFetching';
import ReactHooks from './pages/ReactHooks';
import ReactRedux from './pages/ReactRedux';
import ReactRouter from './pages/ReactRouter';
import ReactStyling from './pages/ReactStyling';
import ReactTesting from './pages/ReactTesting';

function App() {
  const { title } = useSelector(({ base }) => base)

  useEffect(() => {
    document.title = title
  }, [ title ])

  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/concepts" element={<ReactConcepts />} />
              <Route path="/hooks" element={<ReactHooks />} />
              <Route path="/fetching" element={<ReactFetching />} />
              <Route path="/styling" element={<ReactStyling />} />
              <Route path="/router" element={<ReactRouter />} />
              <Route path="/redux/*" element={<ReactRedux />} />
              <Route path="/testing" element={<ReactTesting />} />

              <Route path="/*" element={ (<h1>Jackpot! Anda menemukan 404!</h1>) } />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
