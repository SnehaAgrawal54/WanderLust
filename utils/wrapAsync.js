//to control error of async function


// function asyncWrap(fn) {
//     return function (req,res,next) {
//         fn(req,res,next).catch((err) => next(err));
//     }
// }

// function asyncWrap(fn) {
//     return function (req,res,next) {
//         fn(req,res,next).catch(next);
//     }
// }

module.exports = (fn) => {
    return (req,res,next) => {
        fn(req,res,next).catch(next);
    }
}