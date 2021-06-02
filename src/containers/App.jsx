import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

const App = () => {
  const API = 'http://localhost:3000/data';
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ data, setData ] = useState();

  useEffect(() => {
    getData(API).then(res => {
      setLoading(false);
      setData(res);
    }).catch(err => {
      console.error(err);
      setLoading(false);
      setError(err);
    });
  }, []);

  
  if (loading === true || !data) return <div className="No-info">Loading...</div>;

  if (error) return <div className="No-info">{`${error}`}</div>;

  return (
    <div className="App-container">
      <Header>
        <About
          avatar={data.avatar}
          title={data.name}
          jobTitle={data.profession}
          phone={data.phone}
          email={data.email}
          website={data.website}
          address={data.address}
        />
      </Header>
      <Profile profile={data.Profile} />
      <Experience experience={data.experience} />
      <div className="App-line">
        <Academic academic={data.Academic} />
        <Skills skills={data.skills} />
      </div>
      <div className="App-line">
        <Interest interest={data.interest} />
        <Languages languages={data.languages} />
      </div>
    </div>
  )
};

export default App;
