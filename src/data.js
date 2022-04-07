/* 
 * A set of in-memory objects that our service can read/write.
 */

// An array of user objects.
const users = [
  {
    id: 1,
    name: 'Sarah'
  },
  {
    id: 2,
    name: 'Alejandro'
  }
];

//An array of user IDs mapped to information about the games they've played.
const userGames = [
  {
    '1': {
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
    }
  },
  {
    '2': {
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
  }
];

export { userGames };
