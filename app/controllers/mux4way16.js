var def = require('./definitions/mux4way16-def.js');

exports.get = function(req, res){
    res.json({
        content: 'MUX4WAY16 page'
    });
};

exports.post = function(req, res){
    res.json({
        result: def.mux4way16(
            req.body.a1,
            req.body.a2,
            req.body.a3,
            req.body.a4,
            req.body.a5,
            req.body.a6,
            req.body.a7,
            req.body.a8,
            req.body.a9,
            req.body.a10,
            req.body.a11,
            req.body.a12,
            req.body.a13,
            req.body.a14,
            req.body.a15,
            req.body.a16,
            req.body.b1,
            req.body.b2,
            req.body.b3,
            req.body.b4,
            req.body.b5,
            req.body.b6,
            req.body.b7,
            req.body.b8,
            req.body.b9,
            req.body.b10,
            req.body.b11,
            req.body.b12,
            req.body.b13,
            req.body.b14,
            req.body.b15,
            req.body.b16,
            req.body.c1,
            req.body.c2,
            req.body.c3,
            req.body.c4,
            req.body.c5,
            req.body.c6,
            req.body.c7,
            req.body.c8,
            req.body.c9,
            req.body.c10,
            req.body.c11,
            req.body.c12,
            req.body.c13,
            req.body.c14,
            req.body.c15,
            req.body.c16,
            req.body.d1,
            req.body.d2,
            req.body.d3,
            req.body.d4,
            req.body.d5,
            req.body.d6,
            req.body.d7,
            req.body.d8,
            req.body.d9,
            req.body.d10,
            req.body.d11,
            req.body.d12,
            req.body.d13,
            req.body.d14,
            req.body.d15,
            req.body.d16,
            req.body.sel1, 
            req.body.sel2)
    });
};

