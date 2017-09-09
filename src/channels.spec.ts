import { RaidChannels, SightingsChannels, Channels } from './channels';

let raidChannels = {
  'lvl-4-raids': 340247989169815552,
  'level-5-raikou-herndon': 352802959320416258,
  'level-5-raikou-reston': 352924882947801109
};

let sightingsChannels = {
  '100iv_rares': 263032521325936642,
  '100iv_commons': 282403352199954432
};

let allChannels = {
  'lvl-4-raids': 340247989169815552,
  'level-5-raikou-herndon': 352802959320416258,
  'level-5-raikou-reston': 352924882947801109,
  '100iv_rares': 263032521325936642,
  '100iv_commons': 282403352199954432
}

describe('Channels', () => {
  it('should not mutate objects', () => {
      expect(Channels).toEqual(allChannels);
      expect(raidChannels).toEqual(RaidChannels);
      expect(sightingsChannels).toEqual(SightingsChannels);
  });
});

// TBD: add nicer test reporting
// TBD: add test coverage reports
