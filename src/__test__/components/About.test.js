import React from 'react';
import { mount } from 'enzyme';
import About from '../../components/About';
import data from '../../../data.json';

describe('<About />', () => {
  const about = mount(<About
    avatar={data.data.avatar}
    title={data.data.name}
    jobTitle={data.data.profession}
    phone={data.data.phone}
    email={data.data.email}
    website={data.data.website}
    address={data.data.address}
  />);

  test('About render', () => {
    expect(about.length).toEqual(1);
  });

  test('About title', () => {
    expect(about.find('.About-title').length).toEqual(1);
  });

  test('About haves 3 items', () => {
    expect(about.find('.About-item').length).toBeGreaterThan(2);
  });

});
