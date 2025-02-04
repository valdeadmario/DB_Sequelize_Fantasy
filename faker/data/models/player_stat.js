module.exports = function(orm, DataTypes) {
  const Player_stat = orm.define(
    'player_stat',
    {
      first_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      second_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      player_price: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      player_score: {
        allowNull: false,
        type: DataTypes.FLOAT
      },
      position: {
        allowNull: false,
        type: DataTypes.ENUM('forward', 'goalkeeper', 'defender', 'midfielder')
      },
      goals: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      successful_passes: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      missed_passes: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      goals_conceded: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      saves: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      yellow_cards: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      red_cards: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );

  return Player_stat;
};
