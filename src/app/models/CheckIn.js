import Sequelize, { Model } from 'sequelize';

class CheckIn extends Model {
  static init(sequelize) {
    super.init(
      {
        student_id: Sequelize.INTEGER,
      },

      {
        sequelize,
      }
    );
    return this;
  }
}

export default CheckIn;
