
function DataFrame(data, columns) {
    this.shape = function () {
        return [ data.length, data[0].length ];
    }
    
    this.columns = function () {
        return columns;
    }
    
    this.index = function () {
        const index = [];
        
        for (var k = 0; k < data.length; k++)
            index.push(k);
        
        return index;
    }
}

function createDataFrame(data, columns) {
    return new DataFrame(data, columns);
}

module.exports = {
    dataframe: createDataFrame
};