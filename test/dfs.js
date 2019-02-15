
const dfs = require('../lib/dfs');

exports['create data frame from columns and data'] = function (test) {
    const df = dfs.df([ [ 'Afganistan', 1980, 10200300 ] ], [ 'country', 'year', 'pop' ]);
    
    test.ok(df);
    test.equal(typeof df, 'object');
    test.deepEqual(df.shape(), [ 1, 3 ]);
};

exports['get column names'] = function (test) {
    const df = dfs.df([ [ 'Afganistan', 1980, 10200300 ] ], [ 'country', 'year', 'pop' ]);
    
    test.deepEqual(df.columns(), [ 'country', 'year', 'pop' ]);
};

exports['get index labels'] = function (test) {
    const df = dfs.df([ [ 'Afganistan', 1980, 10200300 ] ], [ 'country', 'year', 'pop' ]);
    
    test.deepEqual(df.index(), [ 0 ]);
};

