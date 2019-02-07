
const dfs = require('../lib/dfs');

exports['create data frame from data'] = function (test) {
    const df = dfs.df([ [ 'country', 'year', 'pop' ], [ 'Afganistan', 1980, 10200300 ]]);
    
    test.ok(df);
    test.equal(typeof df, 'object');
    test.deepEqual(df.shape(), [ 1, 3 ]);
};

exports['get column names'] = function (test) {
    const df = dfs.df([ [ 'country', 'year', 'pop' ], [ 'Afganistan', 1980, 10200300 ]]);
    
    test.deepEqual(df.columns(), [ 'country', 'year', 'pop' ]);
};

