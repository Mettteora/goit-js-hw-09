!function(){var o=new Promise((function(o,e){setTimeout((function(){e("Error! Error passed to reject function")}),2e3)}));console.log("Before promise.then()"),o.then((function(o){console.log("onResolve call inside promise.then()"),console.log(o)}),(function(o){console.log("onReject call inside promise.then()"),console.log(o)})),console.log("After promise.then()")}();
//# sourceMappingURL=03-promises.d590c0e7.js.map
