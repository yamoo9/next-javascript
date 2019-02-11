(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{330:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack","aria-hidden":"true"}},[t._v("#")]),t._v(" Webpack")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("웹팩(Webpack)"),s("OutboundLink")],1),t._v("은 모던 JavaScript 애플리케이션 개발에 사용되는 모듈 번들러(Module Bundler) 입니다.")]),t._v(" "),s("iframe-wrapper",{attrs:{src:"//slides.com/yamoo9/webpack/embed?style=dark#/0/1"}}),t._v(" "),s("h2",{attrs:{id:"실습"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#실습","aria-hidden":"true"}},[t._v("#")]),t._v(" 실습")]),t._v(" "),s("p",[t._v("실습을 위한 디렉토리를 생성한 후, 생성된 디렉토리로 이동합니다.")]),t._v(" "),s("h3",{attrs:{id:"_1-디렉토리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-디렉토리","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 디렉토리")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" webpack-babel-eslint "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-초기화"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-초기화","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 초기화")]),t._v(" "),s("p",[t._v("yarn 초기화(init) 명령을 사용해 "),s("code",[t._v("package.json")]),t._v(" 파일을 생성합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("yarn init -y\n")])])]),s("h3",{attrs:{id:"_3-webpack-설치"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-webpack-설치","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. Webpack 설치")]),t._v(" "),s("p",[s("code",[t._v("webpack")]),t._v(", "),s("code",[t._v("webpack-cli")]),t._v(" 패키지를 프로젝트에 설치합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ yarn add webpack webpack-cli -D\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[s("code",[t._v("webpack-cli")]),t._v(" 도구는 CLI 명령어 환경에서 "),s("code",[t._v("webpack")]),t._v(" 명령을 실행하는데 사용됩니다.")])]),t._v(" "),s("h3",{attrs:{id:"_4-테스트-파일"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-테스트-파일","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 테스트 파일")]),t._v(" "),s("p",[t._v("ES 모듈 번들링을 테스트 할 "),s("code",[t._v("src/index.js")]),t._v(", "),s("code",[t._v("src/components.js")]),t._v(" 파일을 만듭니다.")]),t._v(" "),s("blockquote",[s("p",[t._v("src/components.js")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" y9Button "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'버튼'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`\n    <div class="y9-button-wrapper">\n      <button\n        type="')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\n        class="y9-button"\n      >\n        ')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n      </button>\n    </div>\n  `")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("src/index.js")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" y9Button "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" htmlCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("y9Button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertAdjacentHTML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'afterbegin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" htmlCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_5-webpack-설정-파일"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-webpack-설정-파일","aria-hidden":"true"}},[t._v("#")]),t._v(" 5. Webpack 설정 파일")]),t._v(" "),s("p",[s("code",[t._v("webpack.config.js")]),t._v(" 파일을 만든 후, 아래와 같이 작성합니다.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_6-번들링"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-번들링","aria-hidden":"true"}},[t._v("#")]),t._v(" 6. 번들링")]),t._v(" "),s("p",[s("code",[t._v("webpack")]),t._v(" 명령을 실행하면 번들링이 수행됩니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npx webpack --config webpack.config.js")]),t._v("\n$ npx webpack\n")])])]),s("h3",{attrs:{id:"_7-bundle-명령"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-bundle-명령","aria-hidden":"true"}},[t._v("#")]),t._v(" 7. "),s("code",[t._v("bundle")]),t._v(" 명령")]),t._v(" "),s("p",[t._v("NPM 스크립트 명령 "),s("code",[t._v("bundle")]),t._v("을 "),s("code",[t._v("package.json")]),t._v(" 파일에 추가합니다.")]),t._v(" "),s("blockquote",[s("p",[t._v("package.json")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bundle"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("등록된 NPM 스크립트 명령을 명령창에서 실행해볼 수 있습니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ yarn bundle\n")])])]),s("h3",{attrs:{id:"_8-watch-명령"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-watch-명령","aria-hidden":"true"}},[t._v("#")]),t._v(" 8. "),s("code",[t._v("watch")]),t._v(" 명령")]),t._v(" "),s("p",[t._v("NPM 스크립트 명령 "),s("code",[t._v("watch")]),t._v("을 "),s("code",[t._v("package.json")]),t._v(" 파일에 추가합니다.")]),t._v(" "),s("blockquote",[s("p",[t._v("package.json")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bundle"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"watch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack -w"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("등록된 NPM 스크립트 명령 "),s("code",[t._v("watch")]),t._v("를 실행하면 지속적으로 파일의 변화를 감지하여, 변화가 감지되면 번들링을 수행합니다.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ yarn "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),t._v("\n")])])]),s("h2",{attrs:{id:"참고"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#참고","aria-hidden":"true"}},[t._v("#")]),t._v(" 참고")]),t._v(" "),s("p",[t._v("보다 자세한 사용법은 "),s("a",{attrs:{href:"https://webpack.js.org/concepts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack 문서"),s("OutboundLink")],1),t._v("를 참고하세요.")]),t._v(" "),s("iframe-wrapper",{attrs:{src:"https://webpack.js.org/concepts/"}})],1)},[],!1,null,null,null);a.default=e.exports}}]);