
function DataFrame(data) {
    this.shape = function () {
        return [ data.length - 1, data[0].length ];
    }
}

function createDataFrame(data) {
    return new DataFrame(data);
}

module.exports = {
    df: createDataFrame
};