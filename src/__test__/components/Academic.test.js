import React from 'react';
import { mount } from 'enzyme';
import Academic from '../../components/Academic';
import data from '../../../data.json';

describe('<Academic />', () => {
  const academic = mount(<Academic academic={data.data.Academic}  />);

  test('Academic render', () => {
    expect(academic.length).toEqual(1);
  });

  test('Academic title', () => {
    expect(academic.find('.Academic-title').length).toEqual(1);
  });

  test('Academic has at least 1 items', () => {
    expect(academic.find('.Academic-item').length).toBeGreaterThan(0);
  });

});
