const o=new Promise(((o,e)=>{setTimeout((()=>{e("Error! Error passed to reject function")}),2e3)}));console.log("Before promise.then()"),o.then((o=>{console.log("onResolve call inside promise.then()"),console.log(o)}),(o=>{console.log("onReject call inside promise.then()"),console.log(o)})),console.log("After promise.then()");
//# sourceMappingURL=03-promises.e5195d94.js.map
