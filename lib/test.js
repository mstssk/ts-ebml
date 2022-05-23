'use strict';
var _PowerAssertRecorder1 = function () {
    function PowerAssertRecorder() {
        this.captured = [];
    }
    PowerAssertRecorder.prototype._capt = function _capt(value, espath) {
        this.captured.push({
            value: value,
            espath: espath
        });
        return value;
    };
    PowerAssertRecorder.prototype._expr = function _expr(value, source) {
        var capturedValues = this.captured;
        this.captured = [];
        return {
            powerAssertContext: {
                value: value,
                events: capturedValues
            },
            source: source
        };
    };
    return PowerAssertRecorder;
}();
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator['throw'](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function (thisArg, body) {
    var _ = {
            label: 0,
            sent: function () {
                if (t[0] & 1)
                    throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
    return g = {
        next: verb(0),
        'throw': verb(1),
        'return': verb(2)
    }, typeof Symbol === 'function' && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f)
            throw new TypeError('Generator is already executing.');
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [
                        op[0] & 2,
                        t.value
                    ];
                switch (op[0]) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2])
                        _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [
                    6,
                    e
                ];
                y = 0;
            } finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, '__esModule', { value: true });
var EBMLDecoder_1 = require('./EBMLDecoder');
var EBMLEncoder_1 = require('./EBMLEncoder');
var EBMLReader_1 = require('./EBMLReader');
var _1 = require('./');
var Buffer = _1.tools.Buffer;
var QUnit = require('qunitjs');
var empower = require('empower');
var formatter = require('power-assert-formatter');
var qunitTap = require('qunit-tap');
QUnit.config.autostart = true;
empower(QUnit.assert, formatter(), { destructive: true });
qunitTap(QUnit, function () {
    console.log.apply(console, arguments);
}, { showSourceOnFailure: false });
var WEBM_FILE_LIST = [
    '../matroska-test-files/test_files/test1.mkv',
    '../matroska-test-files/test_files/test2.mkv',
    '../matroska-test-files/test_files/test3.mkv',
    '../matroska-test-files/test_files/test5.mkv',
    '../matroska-test-files/test_files/test6.mkv',
    '../matroska-test-files/test_files/test8.mkv'
];
QUnit.module('ts-EBML');
QUnit.test('encoder-decoder', function (assert) {
    return __awaiter(void 0, void 0, void 0, function () {
        var file, res, buf, elms, buf2, elms2, tests, _i, tests_1, test;
        return __generator(this, function (_a) {
            switch (_a.label) {
            case 0:
                file = '../matroska-test-files/test_files/test1.mkv';
                return [
                    4,
                    fetch(file)
                ];
            case 1:
                res = _a.sent();
                return [
                    4,
                    res.arrayBuffer()
                ];
            case 2:
                buf = _a.sent();
                elms = new EBMLDecoder_1.default().decode(buf);
                buf2 = new EBMLEncoder_1.default().encode(elms);
                elms2 = new EBMLDecoder_1.default().decode(buf2);
                tests = [
                    {
                        index: 0,
                        test: function (elm) {
                            var _rec1 = new _PowerAssertRecorder1();
                            assert.ok(_rec1._expr(_rec1._capt(_rec1._capt(_rec1._capt(_rec1._capt(_rec1._capt(elm, 'arguments/0/left/left/left/object').name, 'arguments/0/left/left/left') === 'EBML', 'arguments/0/left/left') && _rec1._capt(_rec1._capt(_rec1._capt(elm, 'arguments/0/left/right/left/object').type, 'arguments/0/left/right/left') === 'm', 'arguments/0/left/right'), 'arguments/0/left') && _rec1._capt(_rec1._capt(_rec1._capt(elm, 'arguments/0/right/left/object').isEnd, 'arguments/0/right/left') === false, 'arguments/0/right'), 'arguments/0'), {
                                content: 'assert.ok(elm.name === "EBML" && elm.type === "m" && elm.isEnd === false)',
                                filepath: 'lib/test.js',
                                line: 83
                            }));
                        }
                    },
                    {
                        index: 4,
                        test: function (elm) {
                            var _rec2 = new _PowerAssertRecorder1();
                            assert.ok(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(_rec2._capt(_rec2._capt(elm, 'arguments/0/left/left/left/object').name, 'arguments/0/left/left/left') === 'EBML', 'arguments/0/left/left') && _rec2._capt(_rec2._capt(_rec2._capt(elm, 'arguments/0/left/right/left/object').type, 'arguments/0/left/right/left') === 'm', 'arguments/0/left/right'), 'arguments/0/left') && _rec2._capt(_rec2._capt(_rec2._capt(elm, 'arguments/0/right/left/object').isEnd, 'arguments/0/right/left') === true, 'arguments/0/right'), 'arguments/0'), {
                                content: 'assert.ok(elm.name === "EBML" && elm.type === "m" && elm.isEnd === true)',
                                filepath: 'lib/test.js',
                                line: 89
                            }));
                        }
                    },
                    {
                        index: 5,
                        test: function (elm) {
                            var _rec3 = new _PowerAssertRecorder1();
                            assert.ok(_rec3._expr(_rec3._capt(_rec3._capt(_rec3._capt(_rec3._capt(_rec3._capt(elm, 'arguments/0/left/left/left/object').name, 'arguments/0/left/left/left') === 'Segment', 'arguments/0/left/left') && _rec3._capt(_rec3._capt(_rec3._capt(elm, 'arguments/0/left/right/left/object').type, 'arguments/0/left/right/left') === 'm', 'arguments/0/left/right'), 'arguments/0/left') && _rec3._capt(_rec3._capt(_rec3._capt(elm, 'arguments/0/right/left/object').isEnd, 'arguments/0/right/left') === false, 'arguments/0/right'), 'arguments/0'), {
                                content: 'assert.ok(elm.name === "Segment" && elm.type === "m" && elm.isEnd === false)',
                                filepath: 'lib/test.js',
                                line: 95
                            }));
                        }
                    },
                    {
                        index: 24,
                        test: function (elm) {
                            var _rec4 = new _PowerAssertRecorder1();
                            assert.ok(_rec4._expr(_rec4._capt(_rec4._capt(_rec4._capt(_rec4._capt(_rec4._capt(elm, 'arguments/0/left/left/left/object').name, 'arguments/0/left/left/left') === 'Info', 'arguments/0/left/left') && _rec4._capt(_rec4._capt(_rec4._capt(elm, 'arguments/0/left/right/left/object').type, 'arguments/0/left/right/left') === 'm', 'arguments/0/left/right'), 'arguments/0/left') && _rec4._capt(_rec4._capt(_rec4._capt(elm, 'arguments/0/right/left/object').isEnd, 'arguments/0/right/left') === false, 'arguments/0/right'), 'arguments/0'), {
                                content: 'assert.ok(elm.name === "Info" && elm.type === "m" && elm.isEnd === false)',
                                filepath: 'lib/test.js',
                                line: 101
                            }));
                        }
                    },
                    {
                        index: 25,
                        test: function (elm) {
                            var _rec5 = new _PowerAssertRecorder1();
                            assert.ok(_rec5._expr(_rec5._capt(_rec5._capt(_rec5._capt(_rec5._capt(_rec5._capt(elm, 'arguments/0/left/left/left/object').name, 'arguments/0/left/left/left') === 'Duration', 'arguments/0/left/left') && _rec5._capt(_rec5._capt(_rec5._capt(elm, 'arguments/0/left/right/left/object').type, 'arguments/0/left/right/left') === 'f', 'arguments/0/left/right'), 'arguments/0/left') && _rec5._capt(_rec5._capt(_rec5._capt(elm, 'arguments/0/right/left/object').value, 'arguments/0/right/left') === 87336, 'arguments/0/right'), 'arguments/0'), {
                                content: 'assert.ok(elm.name === "Duration" && elm.type === "f" && elm.value === 87336)',
                                filepath: 'lib/test.js',
                                line: 107
                            }));
                        }
                    },
                    {
                        index: 26,
                        test: function (elm) {
                            var _rec6 = new _PowerAssertRecorder1();
                            assert.ok(_rec6._expr(_rec6._capt(_rec6._capt(_rec6._capt(_rec6._capt(_rec6._capt(elm, 'arguments/0/left/left/left/object').name, 'arguments/0/left/left/left') === 'MuxingApp', 'arguments/0/left/left') && _rec6._capt(_rec6._capt(_rec6._capt(elm, 'arguments/0/left/right/left/object').type, 'arguments/0/left/right/left') === '8', 'arguments/0/left/right'), 'arguments/0/left') && _rec6._capt(_rec6._capt(_rec6._capt(elm, 'arguments/0/right/left/object').value, 'arguments/0/right/left') === 'libebml2 v0.10.0 + libmatroska2 v0.10.1', 'arguments/0/right'), 'arguments/0'), {
                                content: 'assert.ok(elm.name === "MuxingApp" && elm.type === "8" && elm.value === "libebml2 v0.10.0 + libmatroska2 v0.10.1")',
                                filepath: 'lib/test.js',
                                line: 113
                            }));
                        }
                    },
                    {
                        index: 28,
                        test: function (elm) {
                            var _rec7 = new _PowerAssertRecorder1();
                            var _rec8 = new _PowerAssertRecorder1();
                            assert.ok(_rec7._expr(_rec7._capt(_rec7._capt(_rec7._capt(_rec7._capt(_rec7._capt(elm, 'arguments/0/left/left/left/object').name, 'arguments/0/left/left/left') === 'DateUTC', 'arguments/0/left/left') && _rec7._capt(_rec7._capt(_rec7._capt(elm, 'arguments/0/left/right/left/object').type, 'arguments/0/left/right/left') === 'd', 'arguments/0/left/right'), 'arguments/0/left') && _rec7._capt(_rec7._capt(_rec7._capt(elm, 'arguments/0/right/left/object').value, 'arguments/0/right/left') instanceof _rec7._capt(Date, 'arguments/0/right/right'), 'arguments/0/right'), 'arguments/0'), {
                                content: 'assert.ok(elm.name === "DateUTC" && elm.type === "d" && elm.value instanceof Date)',
                                filepath: 'lib/test.js',
                                line: 121
                            }));
                            assert.ok(_rec8._expr(_rec8._capt(_rec8._capt(_rec8._capt(_rec8._capt(elm, 'arguments/0/left/left/object').type, 'arguments/0/left/left') === 'd', 'arguments/0/left') && _rec8._capt(_rec8._capt(_rec8._capt(_rec8._capt(_rec8._capt(_1, 'arguments/0/right/left/callee/object/callee/object/object').tools, 'arguments/0/right/left/callee/object/callee/object').convertEBMLDateToJSDate(_rec8._capt(_rec8._capt(elm, 'arguments/0/right/left/callee/object/arguments/0/object').value, 'arguments/0/right/left/callee/object/arguments/0')), 'arguments/0/right/left/callee/object').getTime(), 'arguments/0/right/left') === _rec8._capt(_rec8._capt(new Date('2010-08-21T07:23:03.000Z'), 'arguments/0/right/right/callee/object').getTime(), 'arguments/0/right/right'), 'arguments/0/right'), 'arguments/0'), {
                                content: 'assert.ok(elm.type === "d" && _1.tools.convertEBMLDateToJSDate(elm.value).getTime() === new Date("2010-08-21T07:23:03.000Z").getTime())',
                                filepath: 'lib/test.js',
                                line: 124
                            }));
                        }
                    },
                    {
                        index: 29,
                        test: function (elm) {
                            var _rec9 = new _PowerAssertRecorder1();
                            var _rec10 = new _PowerAssertRecorder1();
                            assert.ok(_rec9._expr(_rec9._capt(_rec9._capt(_rec9._capt(_rec9._capt(elm, 'arguments/0/left/left/object').name, 'arguments/0/left/left') === 'SegmentUID', 'arguments/0/left') && _rec9._capt(_rec9._capt(_rec9._capt(elm, 'arguments/0/right/left/object').type, 'arguments/0/right/left') === 'b', 'arguments/0/right'), 'arguments/0'), {
                                content: 'assert.ok(elm.name === "SegmentUID" && elm.type === "b")',
                                filepath: 'lib/test.js',
                                line: 132
                            }));
                            if (elm.type === 'b') {
                                var buf_1 = new Uint8Array(new Buffer([
                                    146,
                                    45,
                                    25,
                                    50,
                                    15,
                                    30,
                                    19,
                                    197,
                                    181,
                                    5,
                                    99,
                                    10,
                                    175,
                                    216,
                                    83,
                                    54
                                ]));
                                var buf2_1 = new Uint8Array(elm.value);
                                assert.ok(_rec10._expr(_rec10._capt(_rec10._capt(buf_1, 'arguments/0/callee/object').every(function (val, i) {
                                    return buf2_1[i] === val;
                                }), 'arguments/0'), {
                                    content: 'assert.ok(buf_1.every(function (val, i) {return buf2_1[i] === val;}))',
                                    filepath: 'lib/test.js',
                                    line: 139
                                }));
                            }
                        }
                    }
                ];
                for (_i = 0, tests_1 = tests; _i < tests_1.length; _i++) {
                    test = tests_1[_i];
                    test.test(elms2[test.index]);
                }
                return [2];
            }
        });
    });
});
WEBM_FILE_LIST.forEach(function (file) {
    QUnit.test('encoder-decoder:' + file, create_encoder_decoder_test(file));
});
function create_encoder_decoder_test(file) {
    var _this = this;
    return function (assert) {
        return __awaiter(_this, void 0, void 0, function () {
            var res, buf, elms, buf2, elms2, i, elm, elm2;
            return __generator(this, function (_a) {
                var _rec11 = new _PowerAssertRecorder1();
                var _rec12 = new _PowerAssertRecorder1();
                var _rec13 = new _PowerAssertRecorder1();
                var _rec14 = new _PowerAssertRecorder1();
                var _rec15 = new _PowerAssertRecorder1();
                switch (_a.label) {
                case 0:
                    return [
                        4,
                        fetch(file)
                    ];
                case 1:
                    res = _a.sent();
                    return [
                        4,
                        res.arrayBuffer()
                    ];
                case 2:
                    buf = _a.sent();
                    elms = new EBMLDecoder_1.default().decode(buf);
                    buf2 = new EBMLEncoder_1.default().encode(elms);
                    elms2 = new EBMLDecoder_1.default().decode(buf2);
                    assert.ok(_rec11._expr(_rec11._capt(_rec11._capt(_rec11._capt(elms, 'arguments/0/left/object').length, 'arguments/0/left') === _rec11._capt(_rec11._capt(elms2, 'arguments/0/right/object').length, 'arguments/0/right'), 'arguments/0'), {
                        content: 'assert.ok(elms.length === elms2.length)',
                        filepath: 'lib/test.js',
                        line: 171
                    }));
                    i = 0;
                    _a.label = 3;
                case 3:
                    if (!(i < elms.length))
                        return [
                            3,
                            6
                        ];
                    elm = elms[i];
                    elm2 = elms2[i];
                    assert.ok(_rec12._expr(_rec12._capt(_rec12._capt(_rec12._capt(elm, 'arguments/0/left/object').name, 'arguments/0/left') === _rec12._capt(_rec12._capt(elm2, 'arguments/0/right/object').name, 'arguments/0/right'), 'arguments/0'), {
                        content: 'assert.ok(elm.name === elm2.name)',
                        filepath: 'lib/test.js',
                        line: 178
                    }));
                    assert.ok(_rec13._expr(_rec13._capt(_rec13._capt(_rec13._capt(elm, 'arguments/0/left/object').type, 'arguments/0/left') === _rec13._capt(_rec13._capt(elm2, 'arguments/0/right/object').type, 'arguments/0/right'), 'arguments/0'), {
                        content: 'assert.ok(elm.type === elm2.type)',
                        filepath: 'lib/test.js',
                        line: 179
                    }));
                    if (elm.type === 'm' || elm2.type === 'm') {
                        return [2];
                    }
                    if (elm.type === 'b' && elm2.type === 'b') {
                        assert.ok(_rec14._expr(_rec14._capt(_rec14._capt(_rec14._capt(_rec14._capt(elm, 'arguments/0/left/object/object').value, 'arguments/0/left/object').length, 'arguments/0/left') === _rec14._capt(_rec14._capt(_rec14._capt(elm2, 'arguments/0/right/object/object').value, 'arguments/0/right/object').length, 'arguments/0/right'), 'arguments/0'), {
                            content: 'assert.ok(elm.value.length === elm2.value.length)',
                            filepath: 'lib/test.js',
                            line: 184
                        }));
                        return [2];
                    }
                    assert.ok(_rec15._expr(_rec15._capt(_rec15._capt(_rec15._capt(elm, 'arguments/0/left/object').value, 'arguments/0/left') === _rec15._capt(_rec15._capt(elm2, 'arguments/0/right/object').value, 'arguments/0/right'), 'arguments/0'), {
                        content: 'assert.ok(elm.value === elm2.value)',
                        filepath: 'lib/test.js',
                        line: 187
                    }));
                    return [
                        4,
                        sleep(1)
                    ];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    i++;
                    return [
                        3,
                        3
                    ];
                case 6:
                    return [2];
                }
            });
        });
    };
}
QUnit.test('handwrite-encoder', function (assert) {
    return __awaiter(void 0, void 0, void 0, function () {
        var tagStream, binarized, buf, elms;
        return __generator(this, function (_a) {
            tagStream = [
                {
                    name: 'EBML',
                    type: 'm',
                    isEnd: false
                },
                {
                    name: 'EBMLVersion',
                    type: 'u',
                    value: 1
                },
                {
                    name: 'EBMLReadVersion',
                    type: 'u',
                    value: 1
                },
                {
                    name: 'EBMLMaxIDLength',
                    type: 'u',
                    value: 4
                },
                {
                    name: 'EBMLMaxSizeLength',
                    type: 'u',
                    value: 8
                },
                {
                    name: 'DocType',
                    type: 's',
                    value: 'webm'
                },
                {
                    name: 'DocTypeVersion',
                    type: 'u',
                    value: 4
                },
                {
                    name: 'DocTypeReadVersion',
                    type: 'u',
                    value: 2
                },
                {
                    name: 'EBML',
                    type: 'm',
                    isEnd: true
                },
                {
                    name: 'Segment',
                    type: 'm',
                    unknownSize: true,
                    isEnd: false
                },
                {
                    name: 'SeekHead',
                    type: 'm',
                    isEnd: false
                },
                {
                    name: 'SeekHead',
                    type: 'm',
                    isEnd: true
                },
                {
                    name: 'Info',
                    type: 'm',
                    isEnd: false
                },
                {
                    name: 'TimestampScale',
                    type: 'u',
                    value: 1000000
                },
                {
                    name: 'Info',
                    type: 'm',
                    isEnd: true
                },
                {
                    name: 'Duration',
                    type: 'f',
                    value: 0
                },
                {
                    name: 'Cluster',
                    type: 'm',
                    unknownSize: true,
                    isEnd: false
                },
                {
                    name: 'Timestamp',
                    type: 'u',
                    value: 1
                },
                {
                    name: 'SimpleBlock',
                    type: 'b',
                    value: new Buffer(1024)
                }
            ];
            binarized = tagStream.map(_1.tools.encodeValueToBuffer);
            buf = new EBMLEncoder_1.default().encode(binarized);
            elms = new EBMLDecoder_1.default().decode(buf);
            elms.forEach(function (elm, i) {
                var _rec16 = new _PowerAssertRecorder1();
                var _rec17 = new _PowerAssertRecorder1();
                var _rec18 = new _PowerAssertRecorder1();
                var _rec19 = new _PowerAssertRecorder1();
                var origin = tagStream[i];
                assert.ok(_rec16._expr(_rec16._capt(_rec16._capt(_rec16._capt(elm, 'arguments/0/left/object').name, 'arguments/0/left') === _rec16._capt(_rec16._capt(origin, 'arguments/0/right/object').name, 'arguments/0/right'), 'arguments/0'), {
                    content: 'assert.ok(elm.name === origin.name, "compare tag name")',
                    filepath: 'lib/test.js',
                    line: 229
                }), 'compare tag name');
                assert.ok(_rec17._expr(_rec17._capt(_rec17._capt(_rec17._capt(elm, 'arguments/0/left/object').type, 'arguments/0/left') === _rec17._capt(_rec17._capt(origin, 'arguments/0/right/object').type, 'arguments/0/right'), 'arguments/0'), {
                    content: 'assert.ok(elm.type === origin.type, "compare tag type")',
                    filepath: 'lib/test.js',
                    line: 230
                }), 'compare tag type');
                if (elm.type === 'm' || origin.type === 'm') {
                    return;
                }
                if (elm.type === 'b' && origin.type === 'b') {
                    assert.ok(_rec18._expr(_rec18._capt(_rec18._capt(_rec18._capt(_rec18._capt(elm, 'arguments/0/left/object/object').value, 'arguments/0/left/object').length, 'arguments/0/left') === _rec18._capt(_rec18._capt(_rec18._capt(origin, 'arguments/0/right/object/object').value, 'arguments/0/right/object').length, 'arguments/0/right'), 'arguments/0'), {
                        content: 'assert.ok(elm.value.length === origin.value.length, "compare tag value")',
                        filepath: 'lib/test.js',
                        line: 235
                    }), 'compare tag value');
                    return;
                }
                assert.ok(_rec19._expr(_rec19._capt(_rec19._capt(_rec19._capt(elm, 'arguments/0/left/object').value, 'arguments/0/left') === _rec19._capt(_rec19._capt(origin, 'arguments/0/right/object').value, 'arguments/0/right'), 'arguments/0'), {
                    content: 'assert.ok(elm.value === origin.value, "compare tag value")',
                    filepath: 'lib/test.js',
                    line: 238
                }), 'compare tag value');
            });
            return [2];
        });
    });
});
QUnit.module('Reader');
var MEDIA_RECORDER_WEBM_FILE_LIST = [
    './chrome101.webm',
    './chrome57.webm',
    './firefox55nightly.webm',
    './firefox53.webm'
];
MEDIA_RECORDER_WEBM_FILE_LIST.forEach(function (file) {
    QUnit.test('create_webp_test:' + file, create_webp_test(file));
});
function create_webp_test(file) {
    var _this = this;
    return function (assert) {
        return __awaiter(_this, void 0, void 0, function () {
            var res, webm_buf, elms, WebPs, _i, WebPs_1, WebP, src, img, err_1;
            return __generator(this, function (_a) {
                var _rec20 = new _PowerAssertRecorder1();
                var _rec21 = new _PowerAssertRecorder1();
                switch (_a.label) {
                case 0:
                    return [
                        4,
                        fetch(file)
                    ];
                case 1:
                    res = _a.sent();
                    return [
                        4,
                        res.arrayBuffer()
                    ];
                case 2:
                    webm_buf = _a.sent();
                    elms = new EBMLDecoder_1.default().decode(webm_buf);
                    WebPs = _1.tools.WebPFrameFilter(elms);
                    assert.ok(_rec20._expr(_rec20._capt(_rec20._capt(_rec20._capt(WebPs, 'arguments/0/left/object').length, 'arguments/0/left') > 0, 'arguments/0'), {
                        content: 'assert.ok(WebPs.length > 0)',
                        filepath: 'lib/test.js',
                        line: 276
                    }));
                    _i = 0, WebPs_1 = WebPs;
                    _a.label = 3;
                case 3:
                    if (!(_i < WebPs_1.length))
                        return [
                            3,
                            9
                        ];
                    WebP = WebPs_1[_i];
                    src = URL.createObjectURL(WebP);
                    _a.label = 4;
                case 4:
                    _a.trys.push([
                        4,
                        6,
                        ,
                        7
                    ]);
                    return [
                        4,
                        fetchImage(src)
                    ];
                case 5:
                    img = _a.sent();
                    assert.ok(_rec21._expr(_rec21._capt(_rec21._capt(_rec21._capt(_rec21._capt(img, 'arguments/0/left/left/object').width, 'arguments/0/left/left') > 0, 'arguments/0/left') && _rec21._capt(_rec21._capt(_rec21._capt(img, 'arguments/0/right/left/object').height, 'arguments/0/right/left') > 0, 'arguments/0/right'), 'arguments/0'), {
                        content: 'assert.ok(img.width > 0 && img.height > 0, "size:" + img.width + "x" + img.height)',
                        filepath: 'lib/test.js',
                        line: 289
                    }), 'size:' + img.width + 'x' + img.height);
                    return [
                        3,
                        7
                    ];
                case 6:
                    err_1 = _a.sent();
                    assert.notOk(err_1, 'webp load failre');
                    return [
                        3,
                        7
                    ];
                case 7:
                    URL.revokeObjectURL(src);
                    _a.label = 8;
                case 8:
                    _i++;
                    return [
                        3,
                        3
                    ];
                case 9:
                    return [2];
                }
            });
        });
    };
}
MEDIA_RECORDER_WEBM_FILE_LIST.forEach(function (file) {
    QUnit.test('create_convert_to_seekable_test:' + file, create_convert_to_seekable_test(file));
});
function create_convert_to_seekable_test(file) {
    var _this = this;
    return function (assert) {
        return __awaiter(_this, void 0, void 0, function () {
            var decoder, reader, res, webm_buf, elms, sec, refinedMetadataBuf, body, raw_webM, refinedWebM, raw_video_1, refined_video, wait, err_2, refinedBuf, refinedElms, _reader_1;
            return __generator(this, function (_a) {
                var _rec22 = new _PowerAssertRecorder1();
                var _rec23 = new _PowerAssertRecorder1();
                var _rec24 = new _PowerAssertRecorder1();
                var _rec25 = new _PowerAssertRecorder1();
                var _rec26 = new _PowerAssertRecorder1();
                var _rec27 = new _PowerAssertRecorder1();
                var _rec28 = new _PowerAssertRecorder1();
                var _rec29 = new _PowerAssertRecorder1();
                switch (_a.label) {
                case 0:
                    decoder = new EBMLDecoder_1.default();
                    reader = new EBMLReader_1.default();
                    return [
                        4,
                        fetch(file)
                    ];
                case 1:
                    res = _a.sent();
                    return [
                        4,
                        res.arrayBuffer()
                    ];
                case 2:
                    webm_buf = _a.sent();
                    console.info('analasis unseekable original ebml tree');
                    elms = decoder.decode(webm_buf);
                    elms.forEach(function (elm) {
                        reader.read(elm);
                    });
                    reader.stop();
                    console.info('convert to seekable file');
                    assert.ok(_rec22._expr(_rec22._capt(_rec22._capt(_rec22._capt(_rec22._capt(_rec22._capt(reader, 'arguments/0/left/object/object/object').metadatas, 'arguments/0/left/object/object')[0], 'arguments/0/left/object').name, 'arguments/0/left') === 'EBML', 'arguments/0'), {
                        content: 'assert.ok(reader.metadatas[0].name === "EBML")',
                        filepath: 'lib/test.js',
                        line: 331
                    }));
                    assert.ok(_rec23._expr(_rec23._capt(_rec23._capt(_rec23._capt(_rec23._capt(reader, 'arguments/0/left/object/object').metadatas, 'arguments/0/left/object').length, 'arguments/0/left') > 0, 'arguments/0'), {
                        content: 'assert.ok(reader.metadatas.length > 0)',
                        filepath: 'lib/test.js',
                        line: 332
                    }));
                    sec = reader.duration * reader.timecodeScale / 1000 / 1000 / 1000;
                    assert.ok(_rec24._expr(_rec24._capt(_rec24._capt(7 < _rec24._capt(sec, 'arguments/0/left/right'), 'arguments/0/left') && _rec24._capt(_rec24._capt(sec, 'arguments/0/right/left') < 11, 'arguments/0/right'), 'arguments/0'), {
                        content: 'assert.ok(7 < sec && sec < 11)',
                        filepath: 'lib/test.js',
                        line: 334
                    }));
                    refinedMetadataBuf = _1.tools.makeMetadataSeekable(reader.metadatas, reader.duration, reader.cues);
                    body = webm_buf.slice(reader.metadataSize);
                    assert.ok(_rec25._expr(_rec25._capt(_rec25._capt(_rec25._capt(_rec25._capt(refinedMetadataBuf, 'arguments/0/left/left/object').byteLength, 'arguments/0/left/left') - _rec25._capt(_rec25._capt(reader, 'arguments/0/left/right/object').metadataSize, 'arguments/0/left/right'), 'arguments/0/left') > 0, 'arguments/0'), {
                        content: 'assert.ok(refinedMetadataBuf.byteLength - reader.metadataSize > 0)',
                        filepath: 'lib/test.js',
                        line: 337
                    }));
                    assert.ok(_rec26._expr(_rec26._capt(_rec26._capt(_rec26._capt(webm_buf, 'arguments/0/left/object').byteLength, 'arguments/0/left') === _rec26._capt(_rec26._capt(_rec26._capt(reader, 'arguments/0/right/left/object').metadataSize, 'arguments/0/right/left') + _rec26._capt(_rec26._capt(body, 'arguments/0/right/right/object').byteLength, 'arguments/0/right/right'), 'arguments/0/right'), 'arguments/0'), {
                        content: 'assert.ok(webm_buf.byteLength === reader.metadataSize + body.byteLength)',
                        filepath: 'lib/test.js',
                        line: 338
                    }));
                    console.info('check duration');
                    raw_webM = new Blob([webm_buf], { type: 'video/webm' });
                    refinedWebM = new Blob([
                        refinedMetadataBuf,
                        body
                    ], { type: 'video/webm' });
                    _a.label = 3;
                case 3:
                    _a.trys.push([
                        3,
                        8,
                        ,
                        9
                    ]);
                    return [
                        4,
                        fetchVideo(URL.createObjectURL(raw_webM))
                    ];
                case 4:
                    raw_video_1 = _a.sent();
                    return [
                        4,
                        fetchVideo(URL.createObjectURL(refinedWebM))
                    ];
                case 5:
                    refined_video = _a.sent();
                    if (!/Firefox/.test(navigator.userAgent)) {
                        assert.ok(_rec27._expr(_rec27._capt(!_rec27._capt(_rec27._capt(Number, 'arguments/0/argument/callee/object').isFinite(_rec27._capt(_rec27._capt(raw_video_1, 'arguments/0/argument/arguments/0/object').duration, 'arguments/0/argument/arguments/0')), 'arguments/0/argument'), 'arguments/0'), {
                            content: 'assert.ok(!Number.isFinite(raw_video_1.duration), "media recorder webm duration is not finite")',
                            filepath: 'lib/test.js',
                            line: 354
                        }), 'media recorder webm duration is not finite');
                    }
                    assert.ok(_rec28._expr(_rec28._capt(_rec28._capt(Number, 'arguments/0/callee/object').isFinite(_rec28._capt(_rec28._capt(refined_video, 'arguments/0/arguments/0/object').duration, 'arguments/0/arguments/0')), 'arguments/0'), {
                        content: 'assert.ok(Number.isFinite(refined_video.duration), "refined webm duration is finite")',
                        filepath: 'lib/test.js',
                        line: 356
                    }), 'refined webm duration is finite');
                    return [
                        4,
                        sleep(100)
                    ];
                case 6:
                    _a.sent();
                    wait = new Promise(function (resolve, reject) {
                        raw_video_1.onseeked = resolve;
                        raw_video_1.onerror = reject;
                    });
                    raw_video_1.currentTime = 7 * 24 * 60 * 60;
                    return [
                        4,
                        wait
                    ];
                case 7:
                    _a.sent();
                    assert.ok(_rec29._expr(_rec29._capt(_rec29._capt(_rec29._capt(Math, 'arguments/0/left/callee/object').abs(_rec29._capt(_rec29._capt(_rec29._capt(raw_video_1, 'arguments/0/left/arguments/0/left/object').duration, 'arguments/0/left/arguments/0/left') - _rec29._capt(_rec29._capt(refined_video, 'arguments/0/left/arguments/0/right/object').duration, 'arguments/0/left/arguments/0/right'), 'arguments/0/left/arguments/0')), 'arguments/0/left') < 0.1, 'arguments/0'), {
                        content: 'assert.ok(Math.abs(raw_video_1.duration - refined_video.duration) < 0.1)',
                        filepath: 'lib/test.js',
                        line: 369
                    }));
                    return [
                        3,
                        9
                    ];
                case 8:
                    err_2 = _a.sent();
                    assert.notOk(err_2);
                    return [
                        3,
                        9
                    ];
                case 9:
                    if (!reader.logging)
                        return [
                            3,
                            11
                        ];
                    console.info('put seekable ebml tree');
                    return [
                        4,
                        readAsArrayBuffer(refinedWebM)
                    ];
                case 10:
                    refinedBuf = _a.sent();
                    refinedElms = new EBMLDecoder_1.default().decode(refinedBuf);
                    _reader_1 = new EBMLReader_1.default();
                    _reader_1.logging = true;
                    refinedElms.forEach(function (elm) {
                        return _reader_1.read(elm);
                    });
                    _reader_1.stop();
                    _a.label = 11;
                case 11:
                    return [2];
                }
            });
        });
    };
}
MEDIA_RECORDER_WEBM_FILE_LIST.forEach(function (file) {
    QUnit.test('create_recorder_helper_test:' + file, create_recorder_helper_test(file));
});
function create_recorder_helper_test(file) {
    var _this = this;
    return function (assert) {
        return __awaiter(_this, void 0, void 0, function () {
            var decoder, reader, last_sec, metadata_loaded, cluster_num, last_timecode, res, webm_buf, elms;
            return __generator(this, function (_a) {
                var _rec39 = new _PowerAssertRecorder1();
                var _rec40 = new _PowerAssertRecorder1();
                var _rec41 = new _PowerAssertRecorder1();
                var _rec42 = new _PowerAssertRecorder1();
                switch (_a.label) {
                case 0:
                    decoder = new EBMLDecoder_1.default();
                    reader = new EBMLReader_1.default();
                    last_sec = 0;
                    reader.addListener('duration', function (_a) {
                        var _rec30 = new _PowerAssertRecorder1();
                        var _rec31 = new _PowerAssertRecorder1();
                        var timecodeScale = _a.timecodeScale, duration = _a.duration;
                        var sec = duration * timecodeScale / 1000 / 1000 / 1000;
                        assert.ok(_rec30._expr(_rec30._capt(_rec30._capt(Number, 'arguments/0/callee/object').isFinite(_rec30._capt(sec, 'arguments/0/arguments/0')), 'arguments/0'), {
                            content: 'assert.ok(Number.isFinite(sec), "duration:" + sec + "sec")',
                            filepath: 'lib/test.js',
                            line: 409
                        }), 'duration:' + sec + 'sec');
                        assert.ok(_rec31._expr(_rec31._capt(_rec31._capt(sec, 'arguments/0/left') > _rec31._capt(last_sec, 'arguments/0/right'), 'arguments/0'), {
                            content: 'assert.ok(sec > last_sec)',
                            filepath: 'lib/test.js',
                            line: 410
                        }));
                        last_sec = sec;
                    });
                    metadata_loaded = false;
                    reader.addListener('metadata', function (_a) {
                        var _rec32 = new _PowerAssertRecorder1();
                        var _rec33 = new _PowerAssertRecorder1();
                        var _rec34 = new _PowerAssertRecorder1();
                        var metadataSize = _a.metadataSize, data = _a.data;
                        assert.ok(_rec32._expr(_rec32._capt(_rec32._capt(metadataSize, 'arguments/0/left') > 0, 'arguments/0'), {
                            content: 'assert.ok(metadataSize > 0)',
                            filepath: 'lib/test.js',
                            line: 416
                        }));
                        assert.ok(_rec33._expr(_rec33._capt(_rec33._capt(_rec33._capt(data, 'arguments/0/left/object').length, 'arguments/0/left') > 0, 'arguments/0'), {
                            content: 'assert.ok(data.length > 0)',
                            filepath: 'lib/test.js',
                            line: 417
                        }));
                        assert.ok(_rec34._expr(_rec34._capt(_rec34._capt(_rec34._capt(_rec34._capt(data, 'arguments/0/left/object/object')[0], 'arguments/0/left/object').name, 'arguments/0/left') === 'EBML', 'arguments/0'), {
                            content: 'assert.ok(data[0].name === "EBML")',
                            filepath: 'lib/test.js',
                            line: 418
                        }));
                        metadata_loaded = true;
                    });
                    cluster_num = 0;
                    last_timecode = -1;
                    reader.addListener('cluster', function (ev) {
                        var _rec35 = new _PowerAssertRecorder1();
                        var _rec36 = new _PowerAssertRecorder1();
                        var _rec37 = new _PowerAssertRecorder1();
                        var _rec38 = new _PowerAssertRecorder1();
                        var data = ev.data, timecode = ev.timecode;
                        assert.ok(_rec35._expr(_rec35._capt(_rec35._capt(Number, 'arguments/0/callee/object').isFinite(_rec35._capt(timecode, 'arguments/0/arguments/0')), 'arguments/0'), {
                            content: 'assert.ok(Number.isFinite(timecode), "cluster.timecode:" + timecode)',
                            filepath: 'lib/test.js',
                            line: 426
                        }), 'cluster.timecode:' + timecode);
                        assert.ok(_rec36._expr(_rec36._capt(_rec36._capt(_rec36._capt(data, 'arguments/0/left/object').length, 'arguments/0/left') > 0, 'arguments/0'), {
                            content: 'assert.ok(data.length > 0, "cluster.length:" + data.length)',
                            filepath: 'lib/test.js',
                            line: 427
                        }), 'cluster.length:' + data.length);
                        var assertion = data.every(function (elm) {
                            return elm.name === 'Cluster' || elm.name === 'Timecode' || elm.name === 'Timestamp' || elm.name === 'SimpleBlock';
                        });
                        assert.ok(_rec37._expr(_rec37._capt(assertion, 'arguments/0'), {
                            content: 'assert.ok(assertion, "element check")',
                            filepath: 'lib/test.js',
                            line: 434
                        }), 'element check');
                        assert.ok(_rec38._expr(_rec38._capt(_rec38._capt(timecode, 'arguments/0/left') > _rec38._capt(last_timecode, 'arguments/0/right'), 'arguments/0'), {
                            content: 'assert.ok(timecode > last_timecode)',
                            filepath: 'lib/test.js',
                            line: 435
                        }));
                        cluster_num += 1;
                        last_timecode = timecode;
                    });
                    return [
                        4,
                        fetch(file)
                    ];
                case 1:
                    res = _a.sent();
                    return [
                        4,
                        res.arrayBuffer()
                    ];
                case 2:
                    webm_buf = _a.sent();
                    elms = decoder.decode(webm_buf);
                    elms.forEach(function (elm) {
                        reader.read(elm);
                    });
                    reader.stop();
                    assert.ok(_rec39._expr(_rec39._capt(_rec39._capt(last_sec, 'arguments/0/left') > 0, 'arguments/0'), {
                        content: 'assert.ok(last_sec > 0)',
                        filepath: 'lib/test.js',
                        line: 450
                    }));
                    assert.ok(_rec40._expr(_rec40._capt(metadata_loaded, 'arguments/0'), {
                        content: 'assert.ok(metadata_loaded)',
                        filepath: 'lib/test.js',
                        line: 451
                    }));
                    assert.ok(_rec41._expr(_rec41._capt(_rec41._capt(cluster_num, 'arguments/0/left') > 0, 'arguments/0'), {
                        content: 'assert.ok(cluster_num > 0)',
                        filepath: 'lib/test.js',
                        line: 452
                    }));
                    assert.ok(_rec42._expr(_rec42._capt(_rec42._capt(last_timecode, 'arguments/0/left') > 0, 'arguments/0'), {
                        content: 'assert.ok(last_timecode > 0)',
                        filepath: 'lib/test.js',
                        line: 453
                    }));
                    return [2];
                }
            });
        });
    };
}
function sleep(ms) {
    return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
    });
}
function fetchVideo(src) {
    return new Promise(function (resolve, reject) {
        var video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.onloadeddata = function () {
            video.onloadeddata = null;
            resolve(video);
        };
        video.onerror = function (err) {
            video.onerror = null;
            reject(err);
        };
    });
}
function fetchImage(src) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.src = src;
        img.onload = function () {
            resolve(img);
        };
        img.onerror = function (err) {
            reject(err);
        };
    });
}
function readAsArrayBuffer(blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        reader.onloadend = function () {
            resolve(reader.result);
        };
        reader.onerror = function (ev) {
            reject(ev);
        };
    });
}
function waitEvent(target, ev, err) {
    if (err === void 0) {
        err = 'error';
    }
    return new Promise(function (resolve, reject) {
        target.addEventListener(ev, succ);
        target.addEventListener(err, fail);
        function succ(ev) {
            clean();
            resolve(ev);
        }
        function fail(ev) {
            clean();
            reject(ev);
        }
        function clean() {
            target.removeEventListener(ev, succ);
            target.removeEventListener(err, fail);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi90ZXN0LmpzIl0sIm5hbWVzIjpbIl9Qb3dlckFzc2VydFJlY29yZGVyMSIsIlBvd2VyQXNzZXJ0UmVjb3JkZXIiLCJjYXB0dXJlZCIsInByb3RvdHlwZSIsIl9jYXB0IiwidmFsdWUiLCJlc3BhdGgiLCJwdXNoIiwiX2V4cHIiLCJzb3VyY2UiLCJjYXB0dXJlZFZhbHVlcyIsInBvd2VyQXNzZXJ0Q29udGV4dCIsImV2ZW50cyIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuIiwidiIsIm9wIiwiVHlwZUVycm9yIiwiY2FsbCIsInBvcCIsImxlbmd0aCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsIkVCTUxEZWNvZGVyXzEiLCJyZXF1aXJlIiwiRUJNTEVuY29kZXJfMSIsIkVCTUxSZWFkZXJfMSIsIl8xIiwiQnVmZmVyIiwidG9vbHMiLCJRVW5pdCIsImVtcG93ZXIiLCJmb3JtYXR0ZXIiLCJxdW5pdFRhcCIsImNvbmZpZyIsImF1dG9zdGFydCIsImFzc2VydCIsImRlc3RydWN0aXZlIiwiY29uc29sZSIsImxvZyIsImFyZ3VtZW50cyIsInNob3dTb3VyY2VPbkZhaWx1cmUiLCJXRUJNX0ZJTEVfTElTVCIsIm1vZHVsZSIsInRlc3QiLCJmaWxlIiwicmVzIiwiYnVmIiwiZWxtcyIsImJ1ZjIiLCJlbG1zMiIsInRlc3RzIiwiX2kiLCJ0ZXN0c18xIiwiX2EiLCJmZXRjaCIsImFycmF5QnVmZmVyIiwiZGVmYXVsdCIsImRlY29kZSIsImVuY29kZSIsImluZGV4IiwiZWxtIiwiX3JlYzEiLCJvayIsIm5hbWUiLCJ0eXBlIiwiaXNFbmQiLCJjb250ZW50IiwiZmlsZXBhdGgiLCJsaW5lIiwiX3JlYzIiLCJfcmVjMyIsIl9yZWM0IiwiX3JlYzUiLCJfcmVjNiIsIl9yZWM3IiwiX3JlYzgiLCJEYXRlIiwiY29udmVydEVCTUxEYXRlVG9KU0RhdGUiLCJnZXRUaW1lIiwiX3JlYzkiLCJfcmVjMTAiLCJidWZfMSIsIlVpbnQ4QXJyYXkiLCJidWYyXzEiLCJldmVyeSIsInZhbCIsImkiLCJmb3JFYWNoIiwiY3JlYXRlX2VuY29kZXJfZGVjb2Rlcl90ZXN0IiwiX3RoaXMiLCJlbG0yIiwiX3JlYzExIiwiX3JlYzEyIiwiX3JlYzEzIiwiX3JlYzE0IiwiX3JlYzE1Iiwic2xlZXAiLCJ0YWdTdHJlYW0iLCJiaW5hcml6ZWQiLCJ1bmtub3duU2l6ZSIsIm1hcCIsImVuY29kZVZhbHVlVG9CdWZmZXIiLCJfcmVjMTYiLCJfcmVjMTciLCJfcmVjMTgiLCJfcmVjMTkiLCJvcmlnaW4iLCJNRURJQV9SRUNPUkRFUl9XRUJNX0ZJTEVfTElTVCIsImNyZWF0ZV93ZWJwX3Rlc3QiLCJ3ZWJtX2J1ZiIsIldlYlBzIiwiV2ViUHNfMSIsIldlYlAiLCJzcmMiLCJpbWciLCJlcnJfMSIsIl9yZWMyMCIsIl9yZWMyMSIsIldlYlBGcmFtZUZpbHRlciIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImZldGNoSW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsIm5vdE9rIiwicmV2b2tlT2JqZWN0VVJMIiwiY3JlYXRlX2NvbnZlcnRfdG9fc2Vla2FibGVfdGVzdCIsImRlY29kZXIiLCJyZWFkZXIiLCJzZWMiLCJyZWZpbmVkTWV0YWRhdGFCdWYiLCJyYXdfd2ViTSIsInJlZmluZWRXZWJNIiwicmF3X3ZpZGVvXzEiLCJyZWZpbmVkX3ZpZGVvIiwid2FpdCIsImVycl8yIiwicmVmaW5lZEJ1ZiIsInJlZmluZWRFbG1zIiwiX3JlYWRlcl8xIiwiX3JlYzIyIiwiX3JlYzIzIiwiX3JlYzI0IiwiX3JlYzI1IiwiX3JlYzI2IiwiX3JlYzI3IiwiX3JlYzI4IiwiX3JlYzI5IiwiaW5mbyIsInJlYWQiLCJzdG9wIiwibWV0YWRhdGFzIiwiZHVyYXRpb24iLCJ0aW1lY29kZVNjYWxlIiwibWFrZU1ldGFkYXRhU2Vla2FibGUiLCJjdWVzIiwic2xpY2UiLCJtZXRhZGF0YVNpemUiLCJieXRlTGVuZ3RoIiwiQmxvYiIsImZldGNoVmlkZW8iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIm9uc2Vla2VkIiwib25lcnJvciIsImN1cnJlbnRUaW1lIiwiTWF0aCIsImFicyIsImxvZ2dpbmciLCJyZWFkQXNBcnJheUJ1ZmZlciIsImNyZWF0ZV9yZWNvcmRlcl9oZWxwZXJfdGVzdCIsImxhc3Rfc2VjIiwibWV0YWRhdGFfbG9hZGVkIiwiY2x1c3Rlcl9udW0iLCJsYXN0X3RpbWVjb2RlIiwiX3JlYzM5IiwiX3JlYzQwIiwiX3JlYzQxIiwiX3JlYzQyIiwiYWRkTGlzdGVuZXIiLCJfcmVjMzAiLCJfcmVjMzEiLCJfcmVjMzIiLCJfcmVjMzMiLCJfcmVjMzQiLCJkYXRhIiwiZXYiLCJfcmVjMzUiLCJfcmVjMzYiLCJfcmVjMzciLCJfcmVjMzgiLCJ0aW1lY29kZSIsImFzc2VydGlvbiIsIm1zIiwic2V0VGltZW91dCIsInZpZGVvIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udHJvbHMiLCJvbmxvYWRlZGRhdGEiLCJlcnIiLCJJbWFnZSIsIm9ubG9hZCIsImJsb2IiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwid2FpdEV2ZW50IiwidGFyZ2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1Y2MiLCJmYWlsIiwiY2xlYW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQUFBLHFCQUFBO0FBQUEsYUFBQUMsbUJBQUE7QUFBQSxhQUFBQyxRQUFBO0FBQUE7QUFBQSxJQUFBRCxtQkFBQSxDQUFBRSxT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Q0FOMEM7QUFBQSxLQUF2QyxDQUFQLENBRDZCO0FBQUEsQ0F4ZWpDO0FBb2ZBLFNBQVNvQixTQUFULENBQW1CQyxNQUFuQixFQUEyQnJCLEVBQTNCLEVBQStCYyxHQUEvQixFQUFvQztBQUFBLElBQ2hDLElBQUlBLEdBQUEsS0FBUSxLQUFLLENBQWpCLEVBQW9CO0FBQUEsUUFBRUEsR0FBQSxHQUFNLE9BQU4sQ0FBRjtBQUFBLEtBRFk7QUFBQSxJQUVoQyxPQUFPLElBQUl2TixPQUFKLENBQVksVUFBVUQsT0FBVixFQUFtQkUsTUFBbkIsRUFBMkI7QUFBQSxRQUMxQzZOLE1BQUEsQ0FBT0MsZ0JBQVAsQ0FBd0J0QixFQUF4QixFQUE0QnVCLElBQTVCLEVBRDBDO0FBQUEsUUFFMUNGLE1BQUEsQ0FBT0MsZ0JBQVAsQ0FBd0JSLEdBQXhCLEVBQTZCVSxJQUE3QixFQUYwQztBQUFBLFFBRzFDLFNBQVNELElBQVQsQ0FBY3ZCLEVBQWQsRUFBa0I7QUFBQSxZQUNkeUIsS0FBQSxHQURjO0FBQUEsWUFFZG5PLE9BQUEsQ0FBUTBNLEVBQVIsRUFGYztBQUFBLFNBSHdCO0FBQUEsUUFPMUMsU0FBU3dCLElBQVQsQ0FBY3hCLEVBQWQsRUFBa0I7QUFBQSxZQUNkeUIsS0FBQSxHQURjO0FBQUEsWUFFZGpPLE1BQUEsQ0FBT3dNLEVBQVAsRUFGYztBQUFBLFNBUHdCO0FBQUEsUUFXMUMsU0FBU3lCLEtBQVQsR0FBaUI7QUFBQSxZQUNiSixNQUFBLENBQU9LLG1CQUFQLENBQTJCMUIsRUFBM0IsRUFBK0J1QixJQUEvQixFQURhO0FBQUEsWUFFYkYsTUFBQSxDQUFPSyxtQkFBUCxDQUEyQlosR0FBM0IsRUFBZ0NVLElBQWhDLEVBRmE7QUFBQSxTQVh5QjtBQUFBLEtBQXZDLENBQVAsQ0FGZ0M7QUFBQSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbXN0c3NrL0RvY3VtZW50cy9tc3Rzc2svdHMtZWJtbCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBFQk1MRGVjb2Rlcl8xID0gcmVxdWlyZShcIi4vRUJNTERlY29kZXJcIik7XG52YXIgRUJNTEVuY29kZXJfMSA9IHJlcXVpcmUoXCIuL0VCTUxFbmNvZGVyXCIpO1xudmFyIEVCTUxSZWFkZXJfMSA9IHJlcXVpcmUoXCIuL0VCTUxSZWFkZXJcIik7XG52YXIgXzEgPSByZXF1aXJlKFwiLi9cIik7XG52YXIgQnVmZmVyID0gXzEudG9vbHMuQnVmZmVyO1xudmFyIFFVbml0ID0gcmVxdWlyZShcInF1bml0anNcIik7XG52YXIgZW1wb3dlciA9IHJlcXVpcmUoXCJlbXBvd2VyXCIpO1xudmFyIGZvcm1hdHRlciA9IHJlcXVpcmUoXCJwb3dlci1hc3NlcnQtZm9ybWF0dGVyXCIpO1xudmFyIHF1bml0VGFwID0gcmVxdWlyZShcInF1bml0LXRhcFwiKTtcblFVbml0LmNvbmZpZy5hdXRvc3RhcnQgPSB0cnVlO1xuZW1wb3dlcihRVW5pdC5hc3NlcnQsIGZvcm1hdHRlcigpLCB7IGRlc3RydWN0aXZlOiB0cnVlIH0pO1xucXVuaXRUYXAoUVVuaXQsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xufSwgeyBzaG93U291cmNlT25GYWlsdXJlOiBmYWxzZSB9KTtcbnZhciBXRUJNX0ZJTEVfTElTVCA9IFtcbiAgICBcIi4uL21hdHJvc2thLXRlc3QtZmlsZXMvdGVzdF9maWxlcy90ZXN0MS5ta3ZcIixcbiAgICBcIi4uL21hdHJvc2thLXRlc3QtZmlsZXMvdGVzdF9maWxlcy90ZXN0Mi5ta3ZcIixcbiAgICBcIi4uL21hdHJvc2thLXRlc3QtZmlsZXMvdGVzdF9maWxlcy90ZXN0My5ta3ZcIixcbiAgICAvLyBcIi4uL21hdHJvc2thLXRlc3QtZmlsZXMvdGVzdF9maWxlcy90ZXN0NC5ta3ZcIiwgdGhpcyBmaWxlIGlzIGJyb2tlbiBzbyBub3QgcGFzcyBlbmNvZGVyX2RlY29kZXJfdGVzdFxuICAgIFwiLi4vbWF0cm9za2EtdGVzdC1maWxlcy90ZXN0X2ZpbGVzL3Rlc3Q1Lm1rdlwiLFxuICAgIFwiLi4vbWF0cm9za2EtdGVzdC1maWxlcy90ZXN0X2ZpbGVzL3Rlc3Q2Lm1rdlwiLFxuICAgIC8vIFwiLi4vbWF0cm9za2EtdGVzdC1maWxlcy90ZXN0X2ZpbGVzL3Rlc3Q3Lm1rdlwiLCB0aGlzIGZpbGUgaGFzIHVua25vd24gdGFnIHNvIGNhbm5vdCB3cml0ZSBmaWxlXG4gICAgXCIuLi9tYXRyb3NrYS10ZXN0LWZpbGVzL3Rlc3RfZmlsZXMvdGVzdDgubWt2XCIsXG5dO1xuUVVuaXQubW9kdWxlKFwidHMtRUJNTFwiKTtcblFVbml0LnRlc3QoXCJlbmNvZGVyLWRlY29kZXJcIiwgZnVuY3Rpb24gKGFzc2VydCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmlsZSwgcmVzLCBidWYsIGVsbXMsIGJ1ZjIsIGVsbXMyLCB0ZXN0cywgX2ksIHRlc3RzXzEsIHRlc3Q7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZmlsZSA9IFwiLi4vbWF0cm9za2EtdGVzdC1maWxlcy90ZXN0X2ZpbGVzL3Rlc3QxLm1rdlwiO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKGZpbGUpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmFycmF5QnVmZmVyKCldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGJ1ZiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBlbG1zID0gbmV3IEVCTUxEZWNvZGVyXzEuZGVmYXVsdCgpLmRlY29kZShidWYpO1xuICAgICAgICAgICAgICAgIGJ1ZjIgPSBuZXcgRUJNTEVuY29kZXJfMS5kZWZhdWx0KCkuZW5jb2RlKGVsbXMpO1xuICAgICAgICAgICAgICAgIGVsbXMyID0gbmV3IEVCTUxEZWNvZGVyXzEuZGVmYXVsdCgpLmRlY29kZShidWYyKTtcbiAgICAgICAgICAgICAgICB0ZXN0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoZWxtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGVsbS5uYW1lID09PSBcIkVCTUxcIiAmJiBlbG0udHlwZSA9PT0gXCJtXCIgJiYgZWxtLmlzRW5kID09PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soZWxtLm5hbWUgPT09IFwiRUJNTFwiICYmIGVsbS50eXBlID09PSBcIm1cIiAmJiBlbG0uaXNFbmQgPT09IHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoZWxtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGVsbS5uYW1lID09PSBcIlNlZ21lbnRcIiAmJiBlbG0udHlwZSA9PT0gXCJtXCIgJiYgZWxtLmlzRW5kID09PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogMjQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoZWxtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGVsbS5uYW1lID09PSBcIkluZm9cIiAmJiBlbG0udHlwZSA9PT0gXCJtXCIgJiYgZWxtLmlzRW5kID09PSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoZWxtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGVsbS5uYW1lID09PSBcIkR1cmF0aW9uXCIgJiYgZWxtLnR5cGUgPT09IFwiZlwiICYmIGVsbS52YWx1ZSA9PT0gODczMzYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IDI2LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVzdDogZnVuY3Rpb24gKGVsbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhlbG0ubmFtZSA9PT0gXCJNdXhpbmdBcHBcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0udHlwZSA9PT0gXCI4XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnZhbHVlID09PSBcImxpYmVibWwyIHYwLjEwLjAgKyBsaWJtYXRyb3NrYTIgdjAuMTAuMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiAyOCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soZWxtLm5hbWUgPT09IFwiRGF0ZVVUQ1wiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbS50eXBlID09PSBcImRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0udmFsdWUgaW5zdGFuY2VvZiBEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soZWxtLnR5cGUgPT09IFwiZFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8xLnRvb2xzLmNvbnZlcnRFQk1MRGF0ZVRvSlNEYXRlKGVsbS52YWx1ZSkuZ2V0VGltZSgpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoXCIyMDEwLTA4LTIxVDA3OjIzOjAzLjAwMFpcIikuZ2V0VGltZSgpKTsgLy8gdG9JU09TdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiAyOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChlbG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soZWxtLm5hbWUgPT09IFwiU2VnbWVudFVJRFwiICYmIGVsbS50eXBlID09PSBcImJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsbS50eXBlID09PSBcImJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnVmXzEgPSBuZXcgVWludDhBcnJheShuZXcgQnVmZmVyKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDB4OTIsIDB4MmQsIDB4MTksIDB4MzIsIDB4MGYsIDB4MWUsIDB4MTMsIDB4YzUsIDB4YjUsIDB4MDUsIDB4NjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAweDBhLCAweGFmLCAweGQ4LCAweDUzLCAweDM2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidWYyXzEgPSBuZXcgVWludDhBcnJheShlbG0udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soYnVmXzEuZXZlcnkoZnVuY3Rpb24gKHZhbCwgaSkgeyByZXR1cm4gYnVmMl8xW2ldID09PSB2YWw7IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIHRlc3RzXzEgPSB0ZXN0czsgX2kgPCB0ZXN0c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0ID0gdGVzdHNfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgIHRlc3QudGVzdChlbG1zMlt0ZXN0LmluZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuV0VCTV9GSUxFX0xJU1QuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgIFFVbml0LnRlc3QoXCJlbmNvZGVyLWRlY29kZXI6XCIgKyBmaWxlLCBjcmVhdGVfZW5jb2Rlcl9kZWNvZGVyX3Rlc3QoZmlsZSkpO1xufSk7XG5mdW5jdGlvbiBjcmVhdGVfZW5jb2Rlcl9kZWNvZGVyX3Rlc3QoZmlsZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhc3NlcnQpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcywgYnVmLCBlbG1zLCBidWYyLCBlbG1zMiwgaSwgZWxtLCBlbG0yO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChmaWxlKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy5hcnJheUJ1ZmZlcigpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGJ1ZiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZWxtcyA9IG5ldyBFQk1MRGVjb2Rlcl8xLmRlZmF1bHQoKS5kZWNvZGUoYnVmKTtcbiAgICAgICAgICAgICAgICAgICAgYnVmMiA9IG5ldyBFQk1MRW5jb2Rlcl8xLmRlZmF1bHQoKS5lbmNvZGUoZWxtcyk7XG4gICAgICAgICAgICAgICAgICAgIGVsbXMyID0gbmV3IEVCTUxEZWNvZGVyXzEuZGVmYXVsdCgpLmRlY29kZShidWYyKTtcbiAgICAgICAgICAgICAgICAgICAgLy9hc3NlcnQub2soYnVmLmJ5dGVMZW5ndGggPT09IGJ1ZjIuYnl0ZUxlbmd0aCwgXCJUaGlzIHByb2JsZW0gaXMgY2F1c2VkIGJ5IEpTIGJlaW5nIHVuYWJsZSB0byBoYW5kbGUgSW50NjQuXCIpO1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soZWxtcy5sZW5ndGggPT09IGVsbXMyLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIShpIDwgZWxtcy5sZW5ndGgpKSByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgZWxtID0gZWxtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgZWxtMiA9IGVsbXMyW2ldO1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soZWxtLm5hbWUgPT09IGVsbTIubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhlbG0udHlwZSA9PT0gZWxtMi50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsbS50eXBlID09PSBcIm1cIiB8fCBlbG0yLnR5cGUgPT09IFwibVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsbS50eXBlID09PSBcImJcIiAmJiBlbG0yLnR5cGUgPT09IFwiYlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soZWxtLnZhbHVlLmxlbmd0aCA9PT0gZWxtMi52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhlbG0udmFsdWUgPT09IGVsbTIudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzbGVlcCgxKV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xufVxuUVVuaXQudGVzdChcImhhbmR3cml0ZS1lbmNvZGVyXCIsIGZ1bmN0aW9uIChhc3NlcnQpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRhZ1N0cmVhbSwgYmluYXJpemVkLCBidWYsIGVsbXM7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB0YWdTdHJlYW0gPSBbXG4gICAgICAgICAgICB7IG5hbWU6IFwiRUJNTFwiLCB0eXBlOiBcIm1cIiwgaXNFbmQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiRUJNTFZlcnNpb25cIiwgdHlwZTogXCJ1XCIsIHZhbHVlOiAxIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiRUJNTFJlYWRWZXJzaW9uXCIsIHR5cGU6IFwidVwiLCB2YWx1ZTogMSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkVCTUxNYXhJRExlbmd0aFwiLCB0eXBlOiBcInVcIiwgdmFsdWU6IDQgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJFQk1MTWF4U2l6ZUxlbmd0aFwiLCB0eXBlOiBcInVcIiwgdmFsdWU6IDggfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJEb2NUeXBlXCIsIHR5cGU6IFwic1wiLCB2YWx1ZTogXCJ3ZWJtXCIgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJEb2NUeXBlVmVyc2lvblwiLCB0eXBlOiBcInVcIiwgdmFsdWU6IDQgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJEb2NUeXBlUmVhZFZlcnNpb25cIiwgdHlwZTogXCJ1XCIsIHZhbHVlOiAyIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiRUJNTFwiLCB0eXBlOiBcIm1cIiwgaXNFbmQ6IHRydWUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJTZWdtZW50XCIsIHR5cGU6IFwibVwiLCB1bmtub3duU2l6ZTogdHJ1ZSwgaXNFbmQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiU2Vla0hlYWRcIiwgdHlwZTogXCJtXCIsIGlzRW5kOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIlNlZWtIZWFkXCIsIHR5cGU6IFwibVwiLCBpc0VuZDogdHJ1ZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkluZm9cIiwgdHlwZTogXCJtXCIsIGlzRW5kOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIlRpbWVzdGFtcFNjYWxlXCIsIHR5cGU6IFwidVwiLCB2YWx1ZTogMTAwMDAwMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIkluZm9cIiwgdHlwZTogXCJtXCIsIGlzRW5kOiB0cnVlIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiRHVyYXRpb25cIiwgdHlwZTogXCJmXCIsIHZhbHVlOiAwLjAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogXCJDbHVzdGVyXCIsIHR5cGU6IFwibVwiLCB1bmtub3duU2l6ZTogdHJ1ZSwgaXNFbmQ6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiVGltZXN0YW1wXCIsIHR5cGU6IFwidVwiLCB2YWx1ZTogMSB9LFxuICAgICAgICAgICAgeyBuYW1lOiBcIlNpbXBsZUJsb2NrXCIsIHR5cGU6IFwiYlwiLCB2YWx1ZTogbmV3IEJ1ZmZlcigxMDI0KSB9LFxuICAgICAgICBdO1xuICAgICAgICBiaW5hcml6ZWQgPSB0YWdTdHJlYW0ubWFwKF8xLnRvb2xzLmVuY29kZVZhbHVlVG9CdWZmZXIpO1xuICAgICAgICBidWYgPSBuZXcgRUJNTEVuY29kZXJfMS5kZWZhdWx0KCkuZW5jb2RlKGJpbmFyaXplZCk7XG4gICAgICAgIGVsbXMgPSBuZXcgRUJNTERlY29kZXJfMS5kZWZhdWx0KCkuZGVjb2RlKGJ1Zik7XG4gICAgICAgIGVsbXMuZm9yRWFjaChmdW5jdGlvbiAoZWxtLCBpKSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gdGFnU3RyZWFtW2ldO1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKGVsbS5uYW1lID09PSBvcmlnaW4ubmFtZSwgXCJjb21wYXJlIHRhZyBuYW1lXCIpO1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKGVsbS50eXBlID09PSBvcmlnaW4udHlwZSwgXCJjb21wYXJlIHRhZyB0eXBlXCIpO1xuICAgICAgICAgICAgaWYgKGVsbS50eXBlID09PSBcIm1cIiB8fCBvcmlnaW4udHlwZSA9PT0gXCJtXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxtLnR5cGUgPT09IFwiYlwiICYmIG9yaWdpbi50eXBlID09PSBcImJcIikge1xuICAgICAgICAgICAgICAgIGFzc2VydC5vayhlbG0udmFsdWUubGVuZ3RoID09PSBvcmlnaW4udmFsdWUubGVuZ3RoLCBcImNvbXBhcmUgdGFnIHZhbHVlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydC5vayhlbG0udmFsdWUgPT09IG9yaWdpbi52YWx1ZSwgXCJjb21wYXJlIHRhZyB2YWx1ZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICB9KTtcbn0pOyB9KTtcblFVbml0Lm1vZHVsZShcIlJlYWRlclwiKTtcbnZhciBNRURJQV9SRUNPUkRFUl9XRUJNX0ZJTEVfTElTVCA9IFtcbiAgICBcIi4vY2hyb21lMTAxLndlYm1cIixcbiAgICBcIi4vY2hyb21lNTcud2VibVwiLFxuICAgIC8vIGxhc3QydGltZWNvZGUodmlkZW8sIGF1ZGlvKTogKCg3LjQ5M3MsIDcuNTUycyksICg3LjQ5M3MsIDcuNTUycykpXG4gICAgLy8gQ2hyb21lNTc6IDcuNjEycyB+PSA3LjYxMXMgPSA3LjU1MnMgKyAoNy41NTJzIC0gNy40OTNzKSAvLyA/Pz9cbiAgICAvLyBGaXJlZm94NTM6IDcuNTUycyA9IDcuNTUycyArICg3LjU1MnMgLSA3LjU1MnMpIC8vIHNoaXQhXG4gICAgLy8gUmVhZGVyOiA3LjYxMXMgPSA3LjU1MnMgKyAoNy41NTJzIC0gNy40OTNzKVxuICAgIFwiLi9maXJlZm94NTVuaWdodGx5LndlYm1cIixcbiAgICAvLyBsYXN0MnRpbWVjb2RlKHZpZGVvLCBhdWRpbyk6ICgoOC41NjdzLCA4LjU5MHMpLCAoOC42MjZzLCA4LjY0NnMpKSwgQ29kZWNEZWxheShhdWRpbyk6IDYuNTAwbXNcbiAgICAvLyBDaHJvbWU1NzogOC42NTlzIH49IDguNjU5NXMgPSA4LjY0NnMgKyAoOC42NDZzIC0gOC42MjZzKSAtIDYuNTAwbXNcbiAgICAvLyBGaXJlZm94NTM6IDguNjY2cyA9IDguNjQ2cyArICg4LjY0NnMgLSA4LjYyNnMpXG4gICAgLy8gUmVhZGVyOiA4LjY1OTVzID0gOC42NDZzICsgKDguNjQ2cyAtIDguNjI2cykgLSA2LjUwMG1zXG4gICAgXCIuL2ZpcmVmb3g1My53ZWJtXCIsXG5dO1xuTUVESUFfUkVDT1JERVJfV0VCTV9GSUxFX0xJU1QuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgIFFVbml0LnRlc3QoXCJjcmVhdGVfd2VicF90ZXN0OlwiICsgZmlsZSwgY3JlYXRlX3dlYnBfdGVzdChmaWxlKSk7XG59KTtcbmZ1bmN0aW9uIGNyZWF0ZV93ZWJwX3Rlc3QoZmlsZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhc3NlcnQpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcywgd2VibV9idWYsIGVsbXMsIFdlYlBzLCBfaSwgV2ViUHNfMSwgV2ViUCwgc3JjLCBpbWcsIGVycl8xO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChmaWxlKV07XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByZXMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlcy5hcnJheUJ1ZmZlcigpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHdlYm1fYnVmID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBlbG1zID0gbmV3IEVCTUxEZWNvZGVyXzEuZGVmYXVsdCgpLmRlY29kZSh3ZWJtX2J1Zik7XG4gICAgICAgICAgICAgICAgICAgIFdlYlBzID0gXzEudG9vbHMuV2ViUEZyYW1lRmlsdGVyKGVsbXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBgZmlsZWAgaXMgVlA5IGZvcm1hdCwgV2ViUEZyYW1lRmlsdGVyIGZ1bmMgcmV0dXJucyBlbXB0eSBhcnJheS5cbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKFdlYlBzLmxlbmd0aCA+IDApO1xuICAgICAgICAgICAgICAgICAgICBfaSA9IDAsIFdlYlBzXzEgPSBXZWJQcztcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2kgPCBXZWJQc18xLmxlbmd0aCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgICAgICBXZWJQID0gV2ViUHNfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgIHNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoV2ViUCk7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbNCwgNiwgLCA3XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoSW1hZ2Uoc3JjKV07XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBpbWcgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhpbWcud2lkdGggPiAwICYmIGltZy5oZWlnaHQgPiAwLCBcInNpemU6XCIgKyBpbWcud2lkdGggKyBcInhcIiArIGltZy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQubm90T2soZXJyXzEsIFwid2VicCBsb2FkIGZhaWxyZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHNyYyk7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gODtcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgIF9pKys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbn1cbk1FRElBX1JFQ09SREVSX1dFQk1fRklMRV9MSVNULmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICBRVW5pdC50ZXN0KFwiY3JlYXRlX2NvbnZlcnRfdG9fc2Vla2FibGVfdGVzdDpcIiArIGZpbGUsIGNyZWF0ZV9jb252ZXJ0X3RvX3NlZWthYmxlX3Rlc3QoZmlsZSkpO1xufSk7XG5mdW5jdGlvbiBjcmVhdGVfY29udmVydF90b19zZWVrYWJsZV90ZXN0KGZpbGUpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXNzZXJ0KSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZWNvZGVyLCByZWFkZXIsIHJlcywgd2VibV9idWYsIGVsbXMsIHNlYywgcmVmaW5lZE1ldGFkYXRhQnVmLCBib2R5LCByYXdfd2ViTSwgcmVmaW5lZFdlYk0sIHJhd192aWRlb18xLCByZWZpbmVkX3ZpZGVvLCB3YWl0LCBlcnJfMiwgcmVmaW5lZEJ1ZiwgcmVmaW5lZEVsbXMsIF9yZWFkZXJfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgZGVjb2RlciA9IG5ldyBFQk1MRGVjb2Rlcl8xLmRlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyID0gbmV3IEVCTUxSZWFkZXJfMS5kZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKGZpbGUpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmFycmF5QnVmZmVyKCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgd2VibV9idWYgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcImFuYWxhc2lzIHVuc2Vla2FibGUgb3JpZ2luYWwgZWJtbCB0cmVlXCIpO1xuICAgICAgICAgICAgICAgICAgICBlbG1zID0gZGVjb2Rlci5kZWNvZGUod2VibV9idWYpO1xuICAgICAgICAgICAgICAgICAgICBlbG1zLmZvckVhY2goZnVuY3Rpb24gKGVsbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlYWQoZWxtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcImNvbnZlcnQgdG8gc2Vla2FibGUgZmlsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKHJlYWRlci5tZXRhZGF0YXNbMF0ubmFtZSA9PT0gXCJFQk1MXCIpO1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2socmVhZGVyLm1ldGFkYXRhcy5sZW5ndGggPiAwKTtcbiAgICAgICAgICAgICAgICAgICAgc2VjID0gKHJlYWRlci5kdXJhdGlvbiAqIHJlYWRlci50aW1lY29kZVNjYWxlKSAvIDEwMDAgLyAxMDAwIC8gMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKDcgPCBzZWMgJiYgc2VjIDwgMTEpO1xuICAgICAgICAgICAgICAgICAgICByZWZpbmVkTWV0YWRhdGFCdWYgPSBfMS50b29scy5tYWtlTWV0YWRhdGFTZWVrYWJsZShyZWFkZXIubWV0YWRhdGFzLCByZWFkZXIuZHVyYXRpb24sIHJlYWRlci5jdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IHdlYm1fYnVmLnNsaWNlKHJlYWRlci5tZXRhZGF0YVNpemUpO1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2socmVmaW5lZE1ldGFkYXRhQnVmLmJ5dGVMZW5ndGggLSByZWFkZXIubWV0YWRhdGFTaXplID4gMCk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayh3ZWJtX2J1Zi5ieXRlTGVuZ3RoID09PSByZWFkZXIubWV0YWRhdGFTaXplICsgYm9keS5ieXRlTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiY2hlY2sgZHVyYXRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIHJhd193ZWJNID0gbmV3IEJsb2IoW3dlYm1fYnVmXSwgeyB0eXBlOiBcInZpZGVvL3dlYm1cIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVmaW5lZFdlYk0gPSBuZXcgQmxvYihbcmVmaW5lZE1ldGFkYXRhQnVmLCBib2R5XSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ2aWRlby93ZWJtXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzMsIDgsICwgOV0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaFZpZGVvKFVSTC5jcmVhdGVPYmplY3RVUkwocmF3X3dlYk0pKV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICByYXdfdmlkZW9fMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmV0Y2hWaWRlbyhVUkwuY3JlYXRlT2JqZWN0VVJMKHJlZmluZWRXZWJNKSldO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgcmVmaW5lZF92aWRlbyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEvRmlyZWZveC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKCFOdW1iZXIuaXNGaW5pdGUocmF3X3ZpZGVvXzEuZHVyYXRpb24pLCBcIm1lZGlhIHJlY29yZGVyIHdlYm0gZHVyYXRpb24gaXMgbm90IGZpbml0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soTnVtYmVyLmlzRmluaXRlKHJlZmluZWRfdmlkZW8uZHVyYXRpb24pLCBcInJlZmluZWQgd2VibSBkdXJhdGlvbiBpcyBmaW5pdGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNsZWVwKDEwMCldO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICB3YWl0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmF3X3ZpZGVvXzEub25zZWVrZWQgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmF3X3ZpZGVvXzEub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJhd192aWRlb18xLmN1cnJlbnRUaW1lID0gNyAqIDI0ICogNjAgKiA2MDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgd2FpdF07XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGR1cmF0aW9uIHNlYyBpcyBkaWZmZXJlbnQgZWFjaCBicm93c2Vyc1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soTWF0aC5hYnMocmF3X3ZpZGVvXzEuZHVyYXRpb24gLSByZWZpbmVkX3ZpZGVvLmR1cmF0aW9uKSA8IDAuMSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgZXJyXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5ub3RPayhlcnJfMik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWFkZXIubG9nZ2luZykgcmV0dXJuIFszIC8qYnJlYWsqLywgMTFdO1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgZGVidWdcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwicHV0IHNlZWthYmxlIGVibWwgdHJlZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVhZEFzQXJyYXlCdWZmZXIocmVmaW5lZFdlYk0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICByZWZpbmVkQnVmID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZWZpbmVkRWxtcyA9IG5ldyBFQk1MRGVjb2Rlcl8xLmRlZmF1bHQoKS5kZWNvZGUocmVmaW5lZEJ1Zik7XG4gICAgICAgICAgICAgICAgICAgIF9yZWFkZXJfMSA9IG5ldyBFQk1MUmVhZGVyXzEuZGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBfcmVhZGVyXzEubG9nZ2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlZmluZWRFbG1zLmZvckVhY2goZnVuY3Rpb24gKGVsbSkgeyByZXR1cm4gX3JlYWRlcl8xLnJlYWQoZWxtKTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIF9yZWFkZXJfMS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTE7XG4gICAgICAgICAgICAgICAgY2FzZSAxMTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbn1cbk1FRElBX1JFQ09SREVSX1dFQk1fRklMRV9MSVNULmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICBRVW5pdC50ZXN0KFwiY3JlYXRlX3JlY29yZGVyX2hlbHBlcl90ZXN0OlwiICsgZmlsZSwgY3JlYXRlX3JlY29yZGVyX2hlbHBlcl90ZXN0KGZpbGUpKTtcbn0pO1xuZnVuY3Rpb24gY3JlYXRlX3JlY29yZGVyX2hlbHBlcl90ZXN0KGZpbGUpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXNzZXJ0KSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkZWNvZGVyLCByZWFkZXIsIGxhc3Rfc2VjLCBtZXRhZGF0YV9sb2FkZWQsIGNsdXN0ZXJfbnVtLCBsYXN0X3RpbWVjb2RlLCByZXMsIHdlYm1fYnVmLCBlbG1zO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBkZWNvZGVyID0gbmV3IEVCTUxEZWNvZGVyXzEuZGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSBuZXcgRUJNTFJlYWRlcl8xLmRlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgbGFzdF9zZWMgPSAwO1xuICAgICAgICAgICAgICAgICAgICByZWFkZXIuYWRkTGlzdGVuZXIoXCJkdXJhdGlvblwiLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lY29kZVNjYWxlID0gX2EudGltZWNvZGVTY2FsZSwgZHVyYXRpb24gPSBfYS5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWMgPSAoZHVyYXRpb24gKiB0aW1lY29kZVNjYWxlKSAvIDEwMDAgLyAxMDAwIC8gMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhOdW1iZXIuaXNGaW5pdGUoc2VjKSwgXCJkdXJhdGlvbjpcIiArIHNlYyArIFwic2VjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKHNlYyA+IGxhc3Rfc2VjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3Rfc2VjID0gc2VjO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFfbG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRMaXN0ZW5lcihcIm1ldGFkYXRhXCIsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGFkYXRhU2l6ZSA9IF9hLm1ldGFkYXRhU2l6ZSwgZGF0YSA9IF9hLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2sobWV0YWRhdGFTaXplID4gMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soZGF0YS5sZW5ndGggPiAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhkYXRhWzBdLm5hbWUgPT09IFwiRUJNTFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhX2xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyX251bSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RfdGltZWNvZGUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLmFkZExpc3RlbmVyKFwiY2x1c3RlclwiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsdXN0ZXIgY2h1bmsgdGVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBldi5kYXRhLCB0aW1lY29kZSA9IGV2LnRpbWVjb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKE51bWJlci5pc0Zpbml0ZSh0aW1lY29kZSksIFwiY2x1c3Rlci50aW1lY29kZTpcIiArIHRpbWVjb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhkYXRhLmxlbmd0aCA+IDAsIFwiY2x1c3Rlci5sZW5ndGg6XCIgKyBkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXNzZXJ0aW9uID0gZGF0YS5ldmVyeShmdW5jdGlvbiAoZWxtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5uYW1lID09PSBcIkNsdXN0ZXJcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0ubmFtZSA9PT0gXCJUaW1lY29kZVwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5uYW1lID09PSBcIlRpbWVzdGFtcFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5uYW1lID09PSBcIlNpbXBsZUJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhhc3NlcnRpb24sIFwiZWxlbWVudCBjaGVja1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayh0aW1lY29kZSA+IGxhc3RfdGltZWNvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2x1c3Rlcl9udW0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfdGltZWNvZGUgPSB0aW1lY29kZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZldGNoKGZpbGUpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzLmFycmF5QnVmZmVyKCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgd2VibV9idWYgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGVsbXMgPSBkZWNvZGVyLmRlY29kZSh3ZWJtX2J1Zik7XG4gICAgICAgICAgICAgICAgICAgIGVsbXMuZm9yRWFjaChmdW5jdGlvbiAoZWxtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZChlbG0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVhZGVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGxhc3Rfc2VjID4gMCk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhtZXRhZGF0YV9sb2FkZWQpO1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soY2x1c3Rlcl9udW0gPiAwKTtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGxhc3RfdGltZWNvZGUgPiAwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTsgfTtcbn1cbmZ1bmN0aW9uIHNsZWVwKG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTsgfSk7XG59XG5mdW5jdGlvbiBmZXRjaFZpZGVvKHNyYykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcbiAgICAgICAgdmlkZW8uc3JjID0gc3JjO1xuICAgICAgICB2aWRlby5jb250cm9scyA9IHRydWU7XG4gICAgICAgIHZpZGVvLm9ubG9hZGVkZGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZpZGVvLm9ubG9hZGVkZGF0YSA9IG51bGw7XG4gICAgICAgICAgICByZXNvbHZlKHZpZGVvKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmlkZW8ub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHZpZGVvLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmZXRjaEltYWdlKHNyYykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcbiAgICAgICAgfTtcbiAgICAgICAgaW1nLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHJlYWRBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHJlamVjdChldik7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiB3YWl0RXZlbnQodGFyZ2V0LCBldiwgZXJyKSB7XG4gICAgaWYgKGVyciA9PT0gdm9pZCAwKSB7IGVyciA9IFwiZXJyb3JcIjsgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2LCBzdWNjKTtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXJyLCBmYWlsKTtcbiAgICAgICAgZnVuY3Rpb24gc3VjYyhldikge1xuICAgICAgICAgICAgY2xlYW4oKTtcbiAgICAgICAgICAgIHJlc29sdmUoZXYpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGZhaWwoZXYpIHtcbiAgICAgICAgICAgIGNsZWFuKCk7XG4gICAgICAgICAgICByZWplY3QoZXYpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFuKCkge1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXYsIHN1Y2MpO1xuICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXJyLCBmYWlsKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl19

