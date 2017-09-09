import { getDistanceFromMe } from './distance';

describe('Distance', () => {
  it('should calculate distance', () => {
      let miles = getDistanceFromMe('38.958502,-77.387029');
      expect(miles).toBeLessThan(5);
      expect(miles).toBeGreaterThan(0.5);
  });
});