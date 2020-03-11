

const checkOrCreate = function (model, where, addNew) {
    
    return model
        .findOne({ where: where })
        .then((found) => {
            console.log('found')
            if (!found) {
                return model
                    .create(addNew)
                    .then((item) => {
                        return {
                            item: item,
                            created: true
                        }
                })
            }
            if (found) {
                console.log('already in DB')
                return {
                    created: false
                };
            }
    })
}

module.exports = checkOrCreate;