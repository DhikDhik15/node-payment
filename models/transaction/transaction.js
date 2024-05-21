'use strict';
module.exports = (sequelize, Sequelize) => {
    const payments = sequelize.define("payments", {
        order_id: {
            type: Sequelize.STRING
        },
            amount: {
            type: Sequelize.FLOAT(8,2)
        },
        
    },{
        freezeTableName: true
    })
    return payments;
}
