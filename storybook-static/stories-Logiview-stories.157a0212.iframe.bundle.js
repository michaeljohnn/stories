"use strict";(self.webpackChunkstories=self.webpackChunkstories||[]).push([[248],{"./src/stories/Logiview.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Adivices:()=>Adivices,BigData:()=>BigData,DarkTheme:()=>DarkTheme,Grouping:()=>Grouping,LightTheme:()=>LightTheme,RightPanel:()=>RightPanel,TextSelection:()=>TextSelection,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Logiview_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@14.2.24_@babel+core@7.26.10_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/.pnpm/@savorui+logview@1.0.1_react-dom@18.3.1_react@18.3.1__react@18.3.1_typescript@5.8.2/node_modules/@savorui/logview/dist/index.mjs");const simple="2025-03-11 14:30:45 [INFO] [32m[Start] Initializing build environment...[0m\n2025-03-11 14:31:02 [STEP] [34m→ Checking out repository git@github.com:example/project.git (branch: main)[0m\n2025-03-11 14:31:15 [WARN] [33mDetected outdated dependency: lodash@4.17.15 (recommend upgrading to 4.17.21)[0m\n2025-03-11 14:32:10 [ERROR] [31m× Compilation failed: Syntax error at src/index.js line 45[0m\n2025-03-11 14:32:10 [ERROR] [31m   45 | const data = await fetchData();[0m\n2025-03-11 14:32:10 [ERROR] [31m       ^^^^^ Undefined async function[0m\n2025-03-11 14:33:25 [INFO] [32m✓ Successfully built test suite (duration: 2m40s)[0m\n".split("\n");var console=__webpack_require__("./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");let groupCount=0;console.time("MOCK_BIG_DATA");const logData=function generateLogs(count){return Array(count).fill("").map(((item,index)=>9e3===index?"this is test":function createRandomString(length){const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789      ";let result="";for(let i=0;i<length;i++)result+=chars.charAt(Math.floor(68*Math.random()));const isGroupStart=Math.random()<.1,isGroupEnd=!isGroupStart&&Math.random()<.1;return isGroupStart&&groupCount<6?(groupCount++,"::group::this is a group"):isGroupEnd?"::endgroup::":`[${["INFO","WARN","ERROR","DEBUG"][parseInt(""+4*Math.random())]}] ${result}`}(parseInt(""+300*Math.random()))))}(1e4);console.timeEnd("MOCK_BIG_DATA"),console.log("logData size:",parseInt(""+JSON.stringify(logData).length/1024/1024)+"M");const bigdata=logData,logview_advices=[{id:80,name:"optionsBuild",description:"The dependency version number is not configured",solution:"Please see https://github.com/michaeljohnn",type:"user",errTypeI18n:"dependency.version.is.missing",startRegex:"'dependencies.dependency.version' for .*:jar is missing..*/pom.xml, line .*, column .*|.*dependencies.dependency.version.* for .*:jar is missing..* line .*, column .*|Failed to execute goal on project .* Could not resolve dependencies for project|Malformed POM .*pom.xml: expected|Non-parseable POM .*Unrecognised tag|'dependencies.dependency.version' for .*:jar must be a valid version|.*ERROR.* The project .*pom.xml\\) has 1 error|.*FATAL.* Non-parseable POM .*pom.xml: Duplicated tag",endRegex:null,rangeMatch:!1,startLineNum:1,endLineNum:2,enableRag:!1},{id:165,name:"optionsBuild",description:"Invalid pom",solution:"Please see https://github.com/michaeljohnn",type:"user",errTypeI18n:"maven.pom.invalid",startRegex:"ERROR.* Some problems were encountered while processing the POMs",endRegex:null,rangeMatch:!1,startLineNum:7,endLineNum:-1,enableRag:!1}],Logiview_stories={title:"Example/Logview",component:dist.Z,parameters:{layout:"fullscreen"},tags:["autodocs"]},DarkTheme={args:{theme:"dark",logs:simple}},LightTheme={args:{theme:"light",logs:simple}},BigData={args:{theme:"dark",logs:bigdata}},Grouping={args:{theme:"dark",logs:["this is log 1","::group::this is log 2::1732772136194","this is log 3","::group::this is log 4::1732772136198","this is log 5","::endgroup::1732772136291","this is log 7","::endgroup::1732772136298","this is log 9","this is log 10"]}},Adivices={args:{theme:"dark",logs:simple,advices:logview_advices}},RightPanel={args:{theme:"dark",logs:simple,renderRightPanelContent:()=>(0,jsx_runtime.jsxs)("div",{className:"p-2",children:[(0,jsx_runtime.jsx)("h2",{children:"Custom Right Panel Title"}),(0,jsx_runtime.jsx)("p",{children:"This is a custom right panel content."})]})}},TextSelection={args:{theme:"dark",logs:simple,renderTextSelectionBubble:text=>(0,jsx_runtime.jsx)("div",{onClick:e=>e.stopPropagation(),className:"border-solid border-red-200 p-2 bg-slate-300 text-slate-900 cursor-pointer",children:"Text Selection Bubble"})}},__namedExportsOrder=["DarkTheme","LightTheme","BigData","Grouping","Adivices","RightPanel","TextSelection"];DarkTheme.parameters={...DarkTheme.parameters,docs:{...DarkTheme.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'dark',\n    logs: simple\n  }\n}",...DarkTheme.parameters?.docs?.source}}},LightTheme.parameters={...LightTheme.parameters,docs:{...LightTheme.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'light',\n    logs: simple\n  }\n}",...LightTheme.parameters?.docs?.source}}},BigData.parameters={...BigData.parameters,docs:{...BigData.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'dark',\n    logs: bigdata\n  }\n}",...BigData.parameters?.docs?.source}}},Grouping.parameters={...Grouping.parameters,docs:{...Grouping.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'dark',\n    logs: grouping\n  }\n}",...Grouping.parameters?.docs?.source}}},Adivices.parameters={...Adivices.parameters,docs:{...Adivices.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'dark',\n    logs: simple,\n    advices\n  }\n}",...Adivices.parameters?.docs?.source}}},RightPanel.parameters={...RightPanel.parameters,docs:{...RightPanel.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'dark',\n    logs: simple,\n    renderRightPanelContent: () => <div className=\"p-2\">\n        <h2>Custom Right Panel Title</h2>\n        <p>This is a custom right panel content.</p>\n      </div>\n  }\n}",...RightPanel.parameters?.docs?.source}}},TextSelection.parameters={...TextSelection.parameters,docs:{...TextSelection.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'dark',\n    logs: simple,\n    renderTextSelectionBubble: text => <div onClick={e => e.stopPropagation()} className=\"border-solid border-red-200 p-2 bg-slate-300 text-slate-900 cursor-pointer\">\n        Text Selection Bubble\n      </div>\n  }\n}",...TextSelection.parameters?.docs?.source}}}}}]);