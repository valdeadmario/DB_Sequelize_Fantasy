'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize
        .transaction(transaction => Promise.all([
            queryInterface.addColumn('player_stats', 'clubId', {
                type: Sequelize.UUID,
                references: {
                    model: 'football_clubs',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }, { transaction }),
            queryInterface.addColumn('games', 'hometeamId', {
                type: Sequelize.UUID,
                references: {
                    model: 'football_clubs',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }, { transaction }),
            queryInterface.addColumn('games', 'awayteamId', {
                type: Sequelize.UUID,
                references: {
                    model: 'football_clubs',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }, { transaction }),
            queryInterface.addColumn('games', 'game_eventId', {
                type: Sequelize.UUID,
                references: {
                    model: 'events',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }, { transaction }),
            queryInterface.addColumn('gameweeks', 'gameId', {
                type: Sequelize.UUID,
                references: {
                    model: 'games',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }, { transaction }),
            queryInterface.addColumn('gameweek_histories', 'gameweek_activeId', {
                type: Sequelize.UUID,
                references: {
                    model: 'gameweeks',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }, { transaction }),
            queryInterface.addColumn('gameweek_histories', 'team_playerId', {
                type: Sequelize.UUID,
                references: {
                    model: 'player_stats',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }, { transaction }),
            queryInterface.addColumn('gameweek_histories', 'team_captainId', {
                type: Sequelize.UUID,
                references: {
                    model: 'player_stats',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }, { transaction }),
            queryInterface.addColumn('events', 'playerId', {
                type: Sequelize.UUID,
                references: {
                    model: 'player_match_stats',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            }, { transaction }),
        ])),


  down: queryInterface => queryInterface.sequelize
  .transaction(transaction => Promise.all([
      queryInterface.removeColumn('player_stats', 'clubId', { transaction }),
      queryInterface.removeColumn('games', 'hometeamId', { transaction }),
      queryInterface.removeColumn('games', 'awayteamId', { transaction }),
      queryInterface.removeColumn('games', 'game_eventId', { transaction }),
      queryInterface.removeColumn('gameweeks', 'gameId', { transaction }),
      queryInterface.removeColumn('gameweek_histories', 'gameweek_activeId', { transaction }),
      queryInterface.removeColumn('gameweek_histories', 'team_playerId', { transaction }),
      queryInterface.removeColumn('gameweek_histories', 'team_captainId', { transaction }),
      queryInterface.removeColumn('events', 'playerId', { transaction }),
  ]))
};
