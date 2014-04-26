var sayHello = function (req, res) {
    var name = req.body.name;
    res.end('Hello, ' + name);
};

module.exports.sayHello = sayHello;