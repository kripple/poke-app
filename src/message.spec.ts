import { BlisseyMessage, IvRaresMessage } from './test-messages';
import { getCoordinatesFromMessage } from './message';

describe('Message', () => {
  it('should find blissey string coordinates', () => {
      let coordinates = getCoordinatesFromMessage(BlisseyMessage);
      expect(coordinates).toBe('40.3853566197,-105.0393491128');
  });

  it('should find carp string coordinates', () => {
    let coordinates = getCoordinatesFromMessage(IvRaresMessage);
    expect(coordinates).toBe('39.0766976227,-77.1064013076');
  });

  it('should return dummy coordinates', () => {
    let coordinates = getCoordinatesFromMessage('this message doesn\'t have any coordinates');
    expect(coordinates).toBe('9.0000000000,0.0000000000');
  });
});