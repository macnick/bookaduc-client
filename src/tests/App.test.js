import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import App from '../components/App';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('Renders my Redux connected component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      auth: {
        token:
          'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0OCwiZXhwIjoxNjE2MzI0Njk3fQ.b5kw-uh4TqYdDizAHq3z_KMvZj3i-mjznMpmxN1fb1M',
        authStatus: true,
        userId: '48',
        loading: false,
        error: null,
      },
      book: {
        user_id: 48,
        bookings: [
          {
            id: 140,
            city: 'Athens',
            date: '17/03/2021',
            bike: {
              id: 1,
              name: 'Monster 1200S',
            },
          },
        ],
        loading: false,
        name: 'Batman',
      },
      bikes: {
        bikes: [
          {
            id: 1,
            name: 'Monster 1200S',
            displacement: '1198 cc',
            power: '145 hp',
            torque: '124 Nm',
            weight: '185 Kg',
            image:
              'https://media.ducati.com/images/previews/mon/m1200s/m1200s-gbg-light.png?resize=1024:*',
            bookings: [
              {
                id: 103,
                date: '2020-12-26',
                city: 'Athens',
                user: {
                  id: 47,
                  name: 'Test',
                },
              },
            ],
          },
          {
            id: 2,
            name: 'SuperSport',
            displacement: '937 cc',
            power: '110 hp',
            torque: '93 Nm',
            weight: '184 Kg',
            image:
              'https://media.ducati.com/images/previews/ss1/ss939s/ss939s-r-light.png?resize=1024:*',
            bookings: [
              {
                id: 94,
                date: '2020-10-31',
                city: 'Rome',
                user: {
                  id: 26,
                  name: 'Superman',
                },
              },
            ],
          },
        ],
        loading: true,
      },
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  afterEach(cleanup);

  it('should render the App', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  // it('should render the Header', () => {
  //   const { getByText } = render(<Header />);
  //   expect(getByText(/Book A Ducati/)).toBeInTheDocument();
  // });

  // it('should render the selection menu', () => {
  //   const { getByText } = render(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>
  //   );
  //   expect(getByText(/Select Country/)).toBeInTheDocument();
  // });
});
