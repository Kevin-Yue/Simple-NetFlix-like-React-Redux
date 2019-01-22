import React from 'react';
import axios from 'axios';
import ClickableMyList from './container/ClickableMyList';
import FootContainer from './container/FootContainer';
import { store } from '..';
import { initializeMyList, initializeRecommendationList } from '../actions';
import ClickableRecommendationList from './container/ClickableRecommendationList';
import { Header } from './presentational/Header';
import { Row } from './presentational/Row';

class App extends React.Component {
  componentDidMount() {
    //mockdata.json is served on local dev server, use axios for asynchronous call
    axios.get(`/mockdata.json`).then(res => {
      const mockdata = res.data;
      store.dispatch(initializeMyList(mockdata.mylist));
      store.dispatch(initializeRecommendationList(mockdata.recommendations));
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div style={{marginLeft: '15px'}}>
          <Row rowName="My List">
            <ClickableMyList />
          </Row>
          <Row rowName="Recommendations">
            <ClickableRecommendationList />
          </Row>
          <FootContainer />
        </div>
      </div>
    );
  }
}

export default App;
