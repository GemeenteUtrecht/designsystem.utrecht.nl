try{
var e="storybook/measure-addon",l=`${e}/tool`;var E={RESULT:`${e}/result`,REQUEST:`${e}/request`,CLEAR:`${e}/clear`};var r=__REACT__,{Children:f,Component:h,Fragment:A,Profiler:g,PureComponent:I,StrictMode:L,Suspense:k,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:M,cloneElement:B,createContext:P,createElement:D,createFactory:N,createRef:x,forwardRef:v,isValidElement:H,lazy:F,memo:K,useCallback:i,useContext:W,useDebugValue:Y,useEffect:p,useImperativeHandle:U,useLayoutEffect:G,useMemo:$,useReducer:w,useRef:V,useState:q,version:z}=__REACT__;var J=__STORYBOOKAPI__,{ActiveTabs:X,Consumer:ee,ManagerContext:te,Provider:oe,addons:u,combineParameters:re,controlOrMetaKey:ae,controlOrMetaSymbol:se,eventMatchesShortcut:ne,eventToShortcut:le,isMacLike:ue,isShortcutTaken:ce,keyToSymbol:me,merge:ie,mockChannel:pe,optionOrAltSymbol:Se,shortcutMatchesShortcut:Te,shortcutToHumanString:_e,types:S,useAddonState:de,useArgTypes:be,useArgs:Oe,useChannel:Ee,useGlobalTypes:ye,useGlobals:T,useParameter:Ce,useSharedState:Re,useStoryPrepared:fe,useStorybookApi:_,useStorybookState:he}=__STORYBOOKAPI__;var Le=__STORYBOOKCOMPONENTS__,{A:ke,ActionBar:Me,AddonPanel:Be,Badge:Pe,Bar:De,Blockquote:Ne,Button:xe,Code:ve,DL:He,Div:Fe,DocumentWrapper:Ke,FlexBar:We,Form:Ye,H1:Ue,H2:Ge,H3:$e,H4:we,H5:Ve,H6:qe,HR:ze,IconButton:d,IconButtonSkeleton:Qe,Icons:b,Img:Ze,LI:je,Link:Je,Loader:Xe,OL:et,P:tt,Placeholder:ot,Pre:rt,ResetWrapper:at,ScrollArea:st,Separator:nt,Spaced:lt,Span:ut,StorybookIcon:ct,StorybookLogo:mt,Symbols:it,SyntaxHighlighter:pt,TT:St,TabBar:Tt,TabButton:_t,TabWrapper:dt,Table:bt,Tabs:Ot,TabsState:Et,TooltipLinkList:yt,TooltipMessage:Ct,TooltipNote:Rt,UL:ft,WithTooltip:ht,WithTooltipPure:At,Zoom:gt,codeCommon:It,components:Lt,createCopyToClipboardFunction:kt,getStoryHref:Mt,interleaveSeparators:Bt,nameSpaceClassNames:Pt,resetComponents:Dt,withReset:Nt}=__STORYBOOKCOMPONENTS__;var O=()=>{let[a,c]=T(),{measureEnabled:s}=a,m=_(),n=i(()=>c({measureEnabled:!s}),[c,s]);return p(()=>{m.setAddonShortcut(e,{label:"Toggle Measure [M]",defaultShortcut:["M"],actionName:"measure",showInMenu:!1,action:n})},[n,m]),r.createElement(d,{key:l,active:s,title:"Enable measure",onClick:n},r.createElement(b,{icon:"ruler"}))};u.register(e,()=>{u.add(l,{type:S.TOOL,title:"Measure",match:({viewMode:a})=>a==="story",render:()=>r.createElement(O,null)})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map