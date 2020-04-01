import {parseHash} from '../index';

test('parse hash simple', () => {
  const urlStr = '#filters={%22TS%22:[6],%22CM%22:[0,1],%22D%22:0,%22Z%22:2,%22Q%22:%22%22,%22S%22:[0],%22P%22:%22GC52%22,%22AO%22:1,%22U%22:0}';

  expect(parseHash(urlStr)).toEqual({
      filters: {
        TS: [6],
        CM: [0, 1],
        D: 0,
        Z: 2,
        Q: '',
        S: [0],
        P: 'GC52',
        AO: 1,
        U: 0
      }
    }
  );
});

test('parse hash multiple', () => {
  const urlStr = '#filters={%22TS%22:[6],%22CM%22:[0,1],%22D%22:0,%22Z%22:2,%22Q%22:%22%22,%22S%22:[0],%22P%22:%22GC52%22,%22AO%22:1,%22U%22:0}'
    + '&path="QC"';

  expect(parseHash(urlStr)).toEqual({
      filters: {
        TS: [6],
        CM: [0, 1],
        D: 0,
        Z: 2,
        Q: '',
        S: [0],
        P: 'GC52',
        AO: 1,
        U: 0
      },
      path: 'QC'
    }
  );
});
