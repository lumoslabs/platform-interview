/* 
 * A set of in-memory objects that our service can read/write.
 */

// An array of games.
const games = [
  {
    id: 1,
    name: 'train-of-thought',
    description: 'Get the trains to their stations!'
  },
  {
    id: 2,
    name: 'penguin-pursuit',
    description: 'Flightless birds? Try fearless!'
  },
  {
    id: 3,
    name: 'highway-hazards',
    description: 'Better buckle up for this one.'
  },
  {
    id: 4,
    name: 'assist-ants',
    description: 'Social bugs'
  }
];

// An array of user objects.
const users = [
  {
    id: 1,
    name: 'Sarah'
  },
  {
    id: 2,
    name: 'Alejandro'
  },
  {
    id: 3,
    name: "Jean-Luc"
  }
];

//An array of user IDs mapped to information about the games they've played.
const userGamePlays = [
  {
    user_id: '1',
    gamesPlays: [
      {
        id: 'train-of-thought',
        playCount: 7
      },
      {
        id: 'penguin-pursuit',
        playCount: 3
      }
    ]
  },
  {
    user_id: '2',
    gamesPlays: [
      {
        id: 'train-of-thought',
        playCount: 13
      },
      {
        id: 'highway-hazards',
        playCount: 5
      },
      {
        id: 'assist-ants',
        playCount: 19
      }
    ]
  }
];

export { games, users, userGamePlays };
