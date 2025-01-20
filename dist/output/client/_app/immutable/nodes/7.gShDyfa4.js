import"../chunks/Bg9kRutz.js";import"../chunks/S6wLSpnM.js";import{p as y,b as f}from"../chunks/CPz9NqMD.js";import{a as m,t as b}from"../chunks/CnZq424f.js";import{i as v}from"../chunks/CxZb-nwJ.js";import{o as C}from"../chunks/CTsj7Z0s.js";function c(){return c=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},c.apply(this,arguments)}var x={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(i){},onComplete:function(i){},preStringTyped:function(i,n){},onStringTyped:function(i,n){},onLastStringBackspaced:function(i){},onTypingPaused:function(i,n){},onTypingResumed:function(i,n){},onReset:function(i){},onStop:function(i,n){},onStart:function(i,n){},onDestroy:function(i){}},k=new(function(){function i(){}var n=i.prototype;return n.load=function(t,s,e){if(t.el=typeof e=="string"?document.querySelector(e):e,t.options=c({},x,s),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(p){return p.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(t.stringsElement.children),r=o.length;if(r)for(var a=0;a<r;a+=1)t.strings.push(o[a].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(e)}},n.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(e)}},i}()),h=new(function(){function i(){}var n=i.prototype;return n.typeHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var o=t.substring(s).charAt(0);if(o==="<"||o==="&"){var r;for(r=o==="<"?">":";";t.substring(s+1).charAt(0)!==r&&!(1+ ++s>t.length););s++}return s},n.backSpaceHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var o=t.substring(s).charAt(0);if(o===">"||o===";"){var r;for(r=o===">"?"<":"&";t.substring(s-1).charAt(0)!==r&&!(--s<0););s--}return s},i}()),T=function(){function i(t,s){k.load(this,s,t),this.begin()}var n=i.prototype;return n.toggle=function(){this.pause.status?this.start():this.stop()},n.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},n.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},n.destroy=function(){this.reset(!1),this.options.onDestroy(this)},n.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},n.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},n.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),r=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=h.typeHtmlChars(t,s,e);var a=0,u=t.substring(s);if(u.charAt(0)==="^"&&/^\^\d+/.test(u)){var p=1;p+=(u=/\d+/.exec(u)[0]).length,a=parseInt(u),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+p),e.toggleBlinking(!0)}if(u.charAt(0)==="`"){for(;t.substring(s+r).charAt(0)!=="`"&&(r++,!(s+r>t.length)););var l=t.substring(0,s),d=t.substring(l.length+1,s+r),g=t.substring(s+r+1);t=l+d+g,r--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,r),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},a)},o):this.setPauseStatus(t,s,!0)},n.keepTyping=function(t,s,e){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var o=t.substring(0,s+=e);this.replaceText(o),this.typewrite(t,s)},n.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,s)},this.backDelay))},n.backspace=function(t,s){var e=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=h.backSpaceHtmlChars(t,s,e);var r=t.substring(0,s);if(e.replaceText(r),e.smartBackspace){var a=e.strings[e.arrayPos+1];e.stopNum=a&&r===a.substring(0,s)?s:0}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},o)}else this.setPauseStatus(t,s,!1)},n.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},n.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s},n.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},n.humanizer=function(t){return Math.round(Math.random()*t/2)+t},n.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},n.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},n.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},n.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&t.el.value.length!==0||t.start()}))},n.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},i}(),w=b('<div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 md:p-8 svelte-oxsz3i"><div class="max-w-4xl mx-auto svelte-oxsz3i"><div class="space-y-8 svelte-oxsz3i"><div class="text-center animate-fade-in svelte-oxsz3i"><h1 class="text-4xl sm:text-5xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mb-2 font-display svelte-oxsz3i">Welcome to Group-14</h1> <p class="text-gray-400 text-lg sm:text-xl md:text-2xl font-light svelte-oxsz3i">Your Journey Begins Here</p></div> <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-xl border border-gray-700/50 svelte-oxsz3i"><div id="typed-text" class="text-gray-200 text-lg sm:text-xl md:text-2xl leading-relaxed font-light space-y-4 svelte-oxsz3i"></div></div></div></div></div>');function L(i,n){y(n,!1);let t;C(()=>{const e={strings:['This website is brought to you by <a class="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 underline decoration-dotted" href="https://www.facebook.com/TahcinKarimMycin/" target="_blank" rel="noopener noreferrer">Tahcin Ul Karim (Mycin)</a>, Roll - 12514013, a proud member of Notre Dame College, Dhaka.',"If you've made it here, it means you are now a Captain of Science Group-14—an achievement worth celebrating! 🎉","Let's go through some important guidelines for you:",'<span class="text-amber-400 font-semibold">📱 The Users Tab:</span> Connect with past Captains, share experiences, and build lasting connections.','<span class="text-emerald-400 font-semibold">👥 Adding New Captains:</span> Help maintain our legacy by adding verified Group-14 Captains.',"Remember: You're not just a captain—you're a guardian of Group-14's legacy. Lead with pride and honor! ✨"],typeSpeed:25,backSpeed:30,backDelay:2e3,startDelay:700,showCursor:!0,cursorChar:"▋",loop:!1,autoInsertCss:!0};return t=new T("#typed-text",e),()=>{t&&t.destroy()}}),v();var s=w();m(i,s),f()}export{L as component};
