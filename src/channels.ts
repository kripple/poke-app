import { clone, merge } from 'lodash';

// TBD: store channels in dynamo, make interface to add/remove channels

export const RaidChannels = {
  'lvl-4-raids': 340247989169815552,
  'level-5-raikou-herndon': 352802959320416258,
  'level-5-raikou-reston': 352924882947801109
};

export const SightingsChannels = {
  '100iv_rares': 263032521325936642,
  '100iv_commons': 282403352199954432
};

export const Channels = merge(clone(RaidChannels), clone(SightingsChannels));