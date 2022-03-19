const comp = require("../Models/com_model");
const abc = require("../Models/com_user");
const ref = require("../Models/com_ref");
const coin = require("../Models/com_coin");
const cRef = require("../Models/com_coinRef");
const login = require("../Models/login");
const request = require('request');
const bcrypt = require("bcrypt");
const age1 = require("../Models/com_age1");
const age2 = require("../Models/com_age2");
const khelaao = require("../Models/khelaao")
exports.listData = (req, res) => {
    comp.find({}, (err, pass) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(pass);
        }
    });
};
// { name: { $exists: true } }
exports.postData = async (req, res) => {
    const a = await comp.findOne({ model: req.body.model })
    if (a) {
        console.log("Already exists")
        return res.send(500, 'something went wrong')
    } else {
        let newTodo = new comp.create(req.body);
        res.status(201).json(todo);
        // newTodo.save((err, todo) => {
        //     if (err) {
        //         res.status(500).send(err);
        //     }
        //     res.status(201).json(todo);
        // });
    }
};
exports.equal = (req, res) => {
    const input1 = require("prompt-sync")();
    var a = input1("Enter Your Car Category: ");
    comp.find({ type: { $eq: a } }, (err, pass) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(pass)
        }
    });
};
exports.greater = (req, res) => {
    const input2 = require("prompt-sync")();
    var b = input2("Enter Your Car Year: ");
    comp.find({ year: { $gt: b } }, (err, pass) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(pass)
        }
    });
};
exports.greaterEqual = (req, res) => {
    const input3 = require("prompt-sync")();
    var c = input3("Enter Your Car Year: ");
    comp.find({ year: { $gte: c } }, (err, pass) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(pass)
        }
    });
};
exports.in = (req, res) => {
    const input4 = require("prompt-sync")();
    var d = input4("Enter Competitor :");
    comp.find({ competition: { $in: d } }, (err, pass) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(pass)
        }
    });
};
exports.less = (req, res) => {
    const input5 = require("prompt-sync")();
    var e = input5("Enter Year: ");
    comp.find({ year: { $lt: e } }, (err, pass) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(pass)
        }
    });
};
exports.equalless = (req, res) => {
    const input6 = require("prompt-sync")();
    var f = input6("Enter Year: ");
    comp.find({ year: { $lte: f } }, (err, pass) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(pass)
        }
    });
};
exports.notequal = (req, res) => {
    const input7 = require("prompt-sync")();
    var g = input7("Enter Competitor Which Is Not Equal To:");
    comp.find({ competition: { $ne: g } }, (err, pass) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json(pass)
        }
    });
};
exports.notpresent = (req, res) => {
    const input8 = require("prompt-sync")();
    var h = input8("Enter Competitor which is not present: ")
    comp.find({ competition: { $nin: h } }, (err, pass) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(pass)
        }
    });
};
exports.andopt = (req, res) => {
    const input9 = require("prompt-sync")();
    var i = input9("Enter Car Name: ")
    const input10 = require("prompt-sync")();
    var j = input10("Enter Car Type: ")
    comp.find({ $and: [{ name: { $eq: i } }, { type: { $eq: j } }] }, (err, pass) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(pass)
        }
    });
};
exports.notopt = (req, res) => {
    const input10 = require("prompt-sync")();
    var k = input10("Enter car name: ")
    comp.find({ name: { $not: k } }, (err, pass) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(pass)
        }
    });
};
exports.noropt = (req, res) => {    //returning an empty array
    const input11 = require("prompt-sync")();
    var l = input11("Enter car competitor: ")
    comp.find({ $nor: { competition: l } }, (err, pass) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(pass)
        }
    });
};
exports.oropt = (req, res) => {
    const input12 = require("prompt-sync")();
    var m = input12("Enter car name: ")
    const input13 = require("prompt-sync")();
    var n = input13("Enter car company: ")
    comp.find({ $or: [{ name: m }, { make: n }] }, (err, pass) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(pass)
        }
    });
};
exports.exists = (req, res) => {
    comp.find({ name: { $exists: true } }, (err, pass) => { //more RnD required
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(pass)
        }
    });
};
exports.type = (req, res) => {
    comp.find({ make: { $type: "string" } }, (err, pass) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(pass)
        }
    });
};
exports.expression = (req, res) => {
    comp.find({ $expr: { $gte: 2000, $lt: 2020 } }, (err, pass) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(pass)
        }
    });
    //it compares 2 fields data
    //not working
};
exports.regex = (req, res) => {
    const input14 = require("prompt-sync")();
    var o = input14("Enter car starting alphabets: ")
    comp.find({ name: { $regex: o } }, (err, pass) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(pass)
        }
    });
};
exports.text = (req, res) => {
    comp.find({ $text: { $search: "KIA", $caseSensitive: true } }, (err, pass) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(pass)
        }
    });
};
exports.all = (req, res) => {
    comp.find({ competition: { $all: ["HS", "X70"] } }, (err, pass) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(pass)
        }
    });
};
exports.elemMatch = (req, res) => { // not working code 2 error is obtained
    comp.find({ $elemMatch: { year: { $ne: "2021" } } }, (err, pass) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(pass)
        }
    });
};
exports.size = (req, res) => {
    comp.find({ competition: { $size: 2 } }, (err, pass) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).send(pass)
        }
    });
};
exports.rating = async (req, res) => {
    const aa = await comp.findOne({ _id: req.body._id })
    console.log(aa._id)
    let rate = new abc({
        name: req.body.name,
        rate: req.body.rate,
        car: aa._id
    });
    await rate.save((err, todo) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(todo);
        }
    });
};
exports.avgRate = async (req, res) => {
    const input15 = require("prompt-sync")();
    var p = input15("Enter car ID: ");
    // const p = 618bd06af1ea307cf8fe52b7;
    let axz = await abc.find({ car: { $eq: p } })
    console.log(axz.length);
    let aww = axz.length;
    let aabb = 0;
    for (i = 0; i < axz.length; i++) {
        aabb += axz[i].rate;
    };
    console.log(aabb)
    let result = aabb / aww;
    console.log(result)
};
exports.postRef = async (req, res) => {
    const aa = await comp.findOne({ _id: req.body.asd })
    const ab = await abc.findOne({ _id: req.body._id })
    console.log(aa._id)
    console.log(ab._id)
    let post = new ref({
        rate: req.body.rate,
        name: ab._id,
        car: aa._id
    });
    post.save((err, pass) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(pass);
    });
};
exports.coin = async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api.coinranking.com/v2/coins',
        headers: {
            'x-access-token': 'coinrankingf74a02dffa27750d95f4031ef9970c6abda8b88b56417a1b'
        }
    };
    request(options, (error, response) => {
        if (error) throw new Error(error);
        res.status(200).json(response)
    });
};
exports.coinid = async (req, res) => {
    const request = require('request');
    const options = {
        method: 'GET',
        url: 'https://api.coinranking.com/v2/coin/razxDUgYGNAdQ',
        headers: {
            'x-access-token': 'your-api-key'
        }
    };
    request(options, (error, response) => {
        if (error) throw new Error(error);
        res.status(200).json(response)
    });
};
exports.notcoin = async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api.coinranking.com/v2/coins',
        headers: {
            'x-access-token': 'coinrankingf74a02dffa27750d95f4031ef9970c6abda8b88b56417a1b'
        }
    };
    request(options, async (error, response) => {
        if (error) throw new Error(error);
        let data = JSON.parse(response.body);
        data = data.data.coins
        for (let i = 0; i < data.length; i++) {
            const newCoin = new coin();
            newCoin.name = data[i].name
            await newCoin.save();
        }
        res.send({ "status": "success" })
    });
};
exports.listCoin = async (req, res) => {
    const input16 = require("prompt-sync")();
    var q = input16("Enter coin Name: ");
    let a = await coin.find({ name: { $not: { $eq: q } } })
    res.send(a);
};
exports.CoinRef = async (req, res) => {
    const aaa = await coin.findOne({ name: req.body.name })
    console.log(aaa.name)
    await cRef.save((err, pass) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(pass);
    });
    await coin.find({ name: { $not: { $eq: aaa } } })
    res.send(a);
    await coin.deleteOne({ name: aaa });
};
exports.bcryptSignup = async (req, res) => {
    let loginSave = new login(req.body);
    loginSave.save((err, pass) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).json(pass);
        }
    });
};
exports.bcryptLogin = async (req, res) => {
    try {
        const user = await login.findOne({ userName: req.body.userName });
        console.log(user);
        console.log(req.body.password);
        if (user) {
            const cmp = await bcrypt.compare(req.body.password, (err, isMatch) => {
                if (!isMatch) {
                    res.status(201).send("Login Succesfully");
                } else {
                    res.status(201).send("Wrong Password");
                }
            });
        } else {
            res.send("Wrong UserName");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Catch-Block")
    }
};
exports.student = async (req, res) => {
    let newStd = new age1(req.body);
    newStd.save((err, todo) => {
        if (err) {
            res.status(500).send(err);
            console.log("err")
        } else {
            res.status(201).json(todo);
            console.log("Student Saved");
        }
    });
};
exports.stdRef = async (req, res) => {
    let abc = age1.find({ age: { $gte: 18 } })
    abc = new age2(req.body);
    await abc.save((fail, pass) => {
        if (fail) {
            res.status(500).send(fail);
            console.log(fail)
        } else {
            res.status(200).json(pass);
            console.log(pass)
        }
    });
};
exports.khelaaoapi = (req, res) => {
    let newTodo = new khelaao(req.body);
    newTodo.save((err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(todo);
    });
};
exports.listkhelaao = (req, res) => {
    khelaao.find({}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};