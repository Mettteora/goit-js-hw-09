!function(){var t=document.querySelector([data-start]),o=document.querySelector([data-stop]);t.addEventListener(click,(function(){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3)})),o.addEventListener(click,(function(){clearInterval(n),n=null,console.log("stopColorSwitch called")}));var n=null}();
//# sourceMappingURL=01-color-switcher.f951607f.js.map
