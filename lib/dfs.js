
function DataFrame(data, columns) {
    this.shape = function () {
        return [ data.length, data[0].length ];
    }
    
    this.columns = function () {
        return columns;
    }
}

function createDataFrame(data, columns) {
    return new DataFrame(data, columns);
}

module.exports = {
    df: createDataFrame
};