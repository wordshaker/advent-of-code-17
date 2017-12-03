var tap = require('tap'),
    captcha = require('../src/captcha')

tap.equal(captcha('./test/first.txt'), 3, 'the product of 1122 should be 3')
tap.equal(captcha('./test/second.txt'), 4, 'the product of 1111 should be 3')
tap.equal(captcha('./test/third.txt'), 0, 'the product of 1234 should be 0')
tap.equal(captcha('./test/fourth.txt'), 9, 'the product of 91212129 should be 9')
//tap.equal(captcha('./test/final.txt'), 1158, 'the product of the requested input should be 1158')