import mq from '../index';

describe('#mediaQuery', () => {
  test('media', () => {
    expect(`${mq.custom(1400)}`).toEqual('@media (min-width: 1400px)');
    expect(`${mq.desktop}`).toEqual('@media (min-width: 1220px)');
    expect(`${mq.tablet}`).toEqual('@media (min-width: 768px)');
    expect(`${mq.bigMobile}`).toEqual('@media (min-width: 600px)');
    expect(`${mq.mobile}`).toEqual('@media (min-width: 414px)');
    expect(`${mq.smallMobile}`).toEqual('@media (min-width: 360px)');
  });
});
