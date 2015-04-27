try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'templates/anchor.soy' */
// This file was automatically generated from anchor.soy.
// Please don't edit this file by hand.

if (typeof MyWork == 'undefined') { var MyWork = {}; }
if (typeof MyWork.Templates == 'undefined') { MyWork.Templates = {}; }
if (typeof MyWork.Templates.Anchor == 'undefined') { MyWork.Templates.Anchor = {}; }


MyWork.Templates.Anchor.tasksFeatureDiscovery = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p>', soy.$$escapeHtml("See the tasks assigned to you, or created by you, in the Tasks tab of your profile."), '</p><ul class="mw-tasks-discovery-controls"><li><a id="mw-tasks-discovery-view" href="', soy.$$escapeHtml(opt_data.tasksUrl), '" class="aui-button aui-style"><p>', soy.$$escapeHtml("View Tasks"), '</p></a></li><li><a id="mw-tasks-discovery-dismiss" href="#">', soy.$$escapeHtml("Dismiss"), '</a></li></ul>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/miniview-anchor.js' */
var MW=MW||{$:AJS.$||Zepto};
MW.MV={};
AJS.toInit(function(){if(AJS.Meta&&!AJS.Meta.get("remote-user")){return 
}MW.MV.AnchorManager=function(){var J=contextPath,I=J+"/plugins/servlet/notifications-miniview",N=[0,"0"],C={JIRA:"JIRA",CONFLUENCE:"Confluence"},O=/[?&]show-miniview/.test(window.location.search);
function R(T){T=T.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var S="[\\?\\#&]"+T+"=([^&#]*)";
var V=new RegExp(S);
var U=V.exec(window.location.search);
if(U!==null){return decodeURIComponent(U[1].replace(/\+/g," "))
}}var A=R("show-miniview");
if(A){I+="#notification/"+A
}function L(){if(typeof (Confluence)!="undefined"){return C.CONFLUENCE
}else{if(typeof (JIRA)!="undefined"){return C.JIRA
}}}function H(){var S="badge-i";
if(MW.$("#notifications-anchor").length===0){P()
}else{S+=" aui-icon aui-icon-small"
}MW.$("#notifications-anchor").html('<div class="'+S+'"><span class="badge-w"><span class="badge"></span></span></div>')
}function P(){var T=L(),S;
if(T==C.JIRA){S=MW.$("#header .global .secondary")
}else{if(T==C.CONFLUENCE){S=MW.$("#header-menu-bar")
}}S.children().each(function(){MW.$(this).find("a").click(function(){MW.Dialog.hide()
})
});
S.append("<a href='#' id='notifications-anchor' class='mw-anchor read'></a>")
}function Q(U){var T=false,S;
return function(){if(T){return S
}T=true;
S=U.apply(this,arguments);
return S
}
}var K=Q(function(){MW.Dialog.getOptions().closeOthers=false;
MW.Dialog.preload=true;
MW.Dialog.show();
MW.Dialog.hide();
MW.Dialog.getOptions().closeOthers=true
});
function D(S,W){var T=MW.$("#notifications-anchor"),U=T.find(".badge");
U.html(W);
var X=S>0?AJS.format("New Notifications: {0}",S):"Open Notifications",V=T.attr("title")||"";
T.attr("title",X+V.replace(/.*?\(/," ("));
T.toggleClass("unread",S!==0);
T.toggleClass("read",S===0);
N=[S,W];
if(S>0&&MW.$("#notifications-anchor:visible").length>0&&!O){K()
}}function E(){AJS.log("Creating iframes");
var S="gn";
if(C.CONFLUENCE==L()){S=S.split("")
}F("notifications",I,S);
M()
}function M(){MW.$(document).keydown(function(S){if(AJS.InlineDialog.current&&S.which==27&&!MW.$(S.target).is(":input")){AJS.InlineDialog.current.hide()
}})
}function B(){MW.$("#header-menu-bar").find(".ajs-drop-down").each(function(){this.hide()
})
}function F(Z,X,U){var Y;
var W=function(){Y=this
};
var T=function(){if(this.preload!==true){var a=JSON.stringify({markAllRead:true});
MW.$("#"+Z+"-miniview-iframe")[0].contentWindow.postMessage(a,"*")
}};
if(!window.addEventListener){window.attachEvent("onmessage",V)
}else{window.addEventListener("message",V,false)
}function V(c){function d(e){return e===location.protocol+"//"+location.host
}if("escKey"===c.data){Y.hide();
MW.$("#notifications-anchor").focus();
document.activeElement.blur()
}else{if("getParentConfig"===c.data&&d(c.origin)){var b=JSON.stringify({parentConfig:{parentUrl:location.href,preload:MW.Dialog.preload,unread:N[1]}}),a=MW.$("#"+Z+"-miniview-iframe")[0].contentWindow;
a.postMessage(b,"*");
if(MW.Dialog.preload){MW.Dialog.preload=false
}else{a.focus()
}}}}MW.Dialog=AJS.InlineDialog(MW.$("#"+Z+"-anchor"),Z+"-miniview",function(d,b,e){if(MW.$(d).children().length===0){MW.$(d).append(MW.$('<iframe id="'+Z+'-miniview-iframe" src="'+X+'" frameborder="0"></iframe>'))
}else{var c=JSON.stringify({unread:N[1]}),a=MW.$("#"+Z+"-miniview-iframe")[0].contentWindow;
a.postMessage(c,"*");
setTimeout(function(){a.focus()
},100)
}B();
e()
},{width:500,height:520,hideDelay:null,initCallback:W,hideCallback:T,noBind:true});
MW.Tasks=(function(){var d=300;
var c=20;
var e=16;
var k;
var g=AJS.$("#user-menu-link");
var f=AJS.$("#user-menu-link-content");
var b=f.find("#view-mytasks-link");
var h=function(n,l,o){var m=MyWork.Templates.Anchor.tasksFeatureDiscovery({tasksUrl:AJS.contextPath()+"/plugins/inlinetasks/mytasks.action"});
n.html(m);
n.find("#mw-tasks-discovery-dismiss").click(function(){k.hide()
});
o()
};
function a(){return"M0,0L8,8L0,16"
}function j(n,p,s,o){var q=p.target.offset();
var m=p.target.height();
var l={top:q.top+m/2-15,left:q.left-d-(2*c)-e,right:"auto"};
var r={top:9,right:-15};
return{displayAbove:false,popupCss:l,arrowCss:r}
}var i=function(){MW.Dialog.hide();
var n=function(){return f.is(":visible")
};
if(!n()){g.trigger("aui-button-invoke")
}var l=function(){k.hide()
};
f.one("aui-dropdown2-hide",l);
k=AJS.InlineDialog(b,"my-tasks-discovery",h,{hideCallback:function(){k.unbind("click focusin mousedown",m);
f.unbind("aui-dropdown2-hide",l);
if(n()){g.trigger("aui-button-invoke")
}MW.$("#inline-dialog-my-tasks-discovery").remove()
},getArrowPath:a,calculatePositions:j,useLiveEvents:true,width:d,noBind:true});
f.find(".user-item.active").removeClass("active");
b.addClass("active");
b.focus();
var m=function(o){o.stopPropagation()
};
k.on("click focusin mousedown",m);
k.show()
};
return{closeAndDiscoverMyTasks:i}
})();
MW.$("#"+Z+"-anchor").click(function(a){a.preventDefault();
if(MW.$("#"+Z+"-miniview-iframe").is(":visible")){MW.Dialog.hide()
}else{MW.Dialog.show()
}});
var S=function(){AJS.whenIType(U).click(("#"+Z+"-anchor"));
D(N[0],N[1])
};
if(window.Confluence){AJS.bind("initialize.keyboardshortcuts",S)
}else{S()
}if(O){MW.$("#"+Z+"-anchor").click()
}}function G(){H();
E()
}return{setupAnchors:G,updateNotificationCount:D}
}();
if(AJS.I18n&&AJS.I18n.keys){AJS.I18n.keys["com.atlassian.mywork.keyboard.shortcut.open.notifications.desc"]="Open Notifications"
}MW.MV.AnchorManager.setupAnchors();
anchorUtil=new MW.AnchorUtil(MW.$,contextPath,MW.MV.AnchorManager.updateNotificationCount);
anchorUtil.setupAnchors();
MW.$("#notifications-anchor").click(function(){MW.MV.AnchorManager.updateNotificationCount(0,"0")
});
MW.$(window).focus(function(){AJS.log("Focus - starting requests");
anchorUtil.startRequests()
});
MW.$("body").click(function(){anchorUtil.startRequests()
})
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/util/anchor-util.js' */
MW.AnchorUtil=function(D,K,E){var I=30000,S,P=K+"/rest/mywork/latest/status/notification/count";
var R=new Date().getTime();
var B=5*60*1000;
var T=1000*60*5;
var G=1.25;
var C=0;
function H(U){return U<=9?U:"9+"
}function Q(){window.clearInterval(S);
S=undefined
}function O(){return(new Date().getTime()-R)<T
}function M(){if(!O()||!S){L()
}R=new Date().getTime()
}function L(){if(S){clearTimeout(S)
}S=setTimeout(function(){F()
},C=N(C))
}function A(W,U){var V=W*1000;
B=U*1000||B;
if(V&&V!=I){I=V;
M()
}}function N(U){return Math.min(O()?I:U*G,B)
}function F(U){MW.$.getJSON(P+((U)?"?pageid="+U:""),function(W){A(W.timeout,W.maxTimeout);
var V=W.count;
E(V,H(V))
});
L()
}function J(){var U=AJS&&AJS.Meta&&AJS.Meta.get&&(AJS.Meta.get("content-type")==="page"||AJS.Meta.get("content-type")==="blogpost");
if(U){F(AJS.Meta.get("page-id"))
}else{F()
}M()
}return{setupAnchors:J,startRequests:M,stopRequests:Q,updateAnchors:F}
};
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


