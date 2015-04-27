try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:soy-resources', location = 'soy/sidebar.soy' */
// This file was automatically generated from sidebar.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }


Confluence.Templates.Sidebar.headerStyles = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.sidebarWidth) ? '<style>.ia-fixed-sidebar, .ia-splitter-left {width: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.theme-default .ia-splitter #main {margin-left: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.ia-fixed-sidebar {visibility: hidden;}</style>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.sidebar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="acs-side-bar ia-scrollable-section"><div class="acs-side-bar-space-info tipsy-enabled" data-configure-tooltip="', soy.$$escapeHtml("Edit space details"), '"><div class="avatar"><div class="space-logo ', (false == 'true') ? 'project-shortcut-dialog-trigger' : '', '" data-key="', soy.$$escapeHtml(opt_data.space.key), '" data-name="', soy.$$escapeHtml(opt_data.space.name), '" data-entity-type="confluence.space"><div class="avatar-img-container"><div class="avatar-img-wrapper"><a href="', soy.$$escapeHtml(opt_data.space.homeUrl), '" title="', soy.$$escapeHtml(opt_data.space.name), '"><img class="avatar-img" src="', soy.$$escapeHtml(opt_data.space.logoUrl), '" alt="', soy.$$escapeHtml(opt_data.space.name), '"></a></div></div></div></div><div class="name"><a href="', soy.$$escapeHtml(opt_data.space.homeUrl), '" title="', soy.$$escapeHtml(opt_data.space.name), '">', soy.$$escapeHtml(opt_data.space.name), '</a></div><div class="flyout-handle icon"></div></div><div class="acs-side-bar-content"><div class="acs-nav-wrapper"><div class="acs-nav" data-has-create-permission="', soy.$$escapeHtml(opt_data.hasCreatePermission), '" data-quick-links-state="', soy.$$escapeHtml(opt_data.quickLinksState), '" data-nav-type="', soy.$$escapeHtml(opt_data.navType), '">');
  Confluence.Templates.Sidebar.renderLinks(opt_data, output);
  output.append('</div></div>');
  if (opt_data.contextualNav) {
    Confluence.Templates.Sidebar.contextualNav(opt_data, output);
  }
  output.append('</div><div class="hidden"><a href="', soy.$$escapeHtml(opt_data.space.browseSpaceUrl), '" id="space-pages-link"></a><script type="text/x-template" title="logo-config-content"><h2>', soy.$$escapeHtml("Space details"), '</h2>', (opt_data.space.personalSpaceBelongsToUser) ? '<div class="personal-space-logo-hint">' + AJS.format("Your profile picture is used as the logo for your personal space. \x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3eChange your profile picture\x3c/a\x3e.","" + '/users/editmyprofilepicture.action') + '</div>' : '', (! opt_data.space.personal) ? '<form id="crop-photo-form" class="aui" method="post" action="#"><div id="sidebar-logo-messages"></div><fieldset><div class="field-group"><label for="spaceName">' + soy.$$escapeHtml("Name") + '</label><input autocomplete="off" name="spaceName" id="spaceName" class="text" maxlength="255" value="{spaceName}"><input type="hidden" name="spaceKey" id="spaceKey" value="' + soy.$$escapeHtml(opt_data.space.key) + '"><input type="hidden" name="offsetX" id="avatar-offsetX" value="-1"><input type="hidden" name="offsetY" id="avatar-offsetY" value="-1"><input type="hidden" name="width" id="avatar-width" value="-1"><input type="hidden" name="logoType" id="logoType" value="' + ((opt_data.space.customLogo) ? 'custom' : 'default') + '" data-last-value="' + ((opt_data.space.customLogo) ? 'custom' : 'default') + '"></div></fieldset></form><form id="upload-logo-form" class="aui" method="POST" action="#" enctype="multipart/form-data"><fieldset class="group"><legend><span>' + soy.$$escapeHtml("Logo") + '</span></legend><div class="field-group"><input class="upload" type="file" id="upload-logo-input" name="upload-logo-input"></div><small ' + ((! opt_data.space.customLogo) ? 'class="hidden"' : '') + '><a href="#" id="reset-logo">' + soy.$$escapeHtml("Reset to default logo") + '</a></small><div id="image-holder" /></fieldset></form>' : '', '<div id="space-details-actions" class="buttons-container"><div class="buttons"><button class="aui-button save">', soy.$$escapeHtml("Save"), '</button><a href="#" class="aui-button aui-button-link cancel">', soy.$$escapeHtml("Cancel"), '</a></div></div><\/script></div></div>');
  Confluence.Templates.Sidebar.renderSpaceToolsSection({advancedLinks: opt_data.advancedLinks, hasConfigurePermission: opt_data.hasConfigurePermission, currentlyViewed: opt_data.collectorToHighlight == 'spacebar-advanced'}, output);
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.renderLinks = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="acs-nav-sections">');
  if (opt_data.mainLinks.length) {
    Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.mainLinks, sectionClass: 'main-links-section', collectorToHighlight: opt_data.collectorToHighlight}, output);
  }
  if (opt_data.quickLinksState != 'hide') {
    output.append('<div class="quick-links-wrapper">');
    if (opt_data.quickLinks.length) {
      output.append('<h5 class="ia-quick-links-header-title">', soy.$$escapeHtml("Space shortcuts"), '</h5>');
      Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.quickLinks, sectionClass: 'quick-links-section tipsy-enabled', collectorToHighlight: null}, output);
    } else if (opt_data.hasConfigurePermission) {
      output.append('<h5 class="ia-quick-links-header-title">', soy.$$escapeHtml("Space shortcuts"), '</h5><p class="tip">', AJS.format("Here you can add shortcut links to the most important content for your team or project. \x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3eConfigure sidebar\x3c/a\x3e.",'','configure-sidebar'), '</p>');
    }
    output.append('</div>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.renderLinksSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.links.length) {
    output.append('<div class="', soy.$$escapeHtml(opt_data.sectionClass), ' ', (opt_data.highlightSection) ? ' current-section' : '', '"><ul class="acs-nav-list">');
    var linkList138 = opt_data.links;
    var linkListLen138 = linkList138.length;
    for (var linkIndex138 = 0; linkIndex138 < linkListLen138; linkIndex138++) {
      var linkData138 = linkList138[linkIndex138];
      output.append('<li class="acs-nav-item ', soy.$$escapeHtml(linkData138.styleClass), (opt_data.collectorToHighlight && linkData138.collectorKey == opt_data.collectorToHighlight) ? ' current-item' : '', '"', (linkData138.collectorKey) ? 'data-collector-key="' + soy.$$escapeHtml(linkData138.collectorKey) + '"' : '', '><a class="acs-nav-item-link tipsy-enabled" href="', soy.$$escapeHtml(linkData138.url), '" data-collapsed-tooltip="', soy.$$escapeHtml(linkData138.tooltip), '"><span class="icon"></span><span class="acs-nav-item-label">', soy.$$escapeHtml(linkData138.title), '</span></a></li>');
    }
    output.append('</ul></div>');
  }
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.contextualNav = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ia-secondary-container tipsy-enabled" data-tree-type="', (opt_data.forBlogs) ? 'blogs' : (opt_data.forSettings) ? 'settings' : soy.$$escapeHtml(opt_data.navType), '">');
  if (opt_data.forBlogs) {
    output.append('<div class="ia-secondary-header"><h5 class="ia-secondary-header-title blog"><span class="icon"></span><span class="label">', soy.$$escapeHtml("Blog"), '</span></h5></div><div class="ia-secondary-content">');
    Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}, output);
    output.append('</div>');
  } else if (opt_data.forSettings) {
    output.append('<div class="ia-secondary-header"><h5 class="ia-secondary-header-title settings"><span class="label">', soy.$$escapeHtml("Advanced"), '</span></h5></div><div class="ia-secondary-content">');
    Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}, output);
    output.append('</div>');
  } else if (opt_data.navType == 'page-tree') {
    output.append('<div class="ia-secondary-header"><h5 class="ia-secondary-header-title page-tree"><span class="icon"></span><span class="label">', soy.$$escapeHtml("Page tree"), '</span></h5></div>', (opt_data.pageTreeEmpty) ? '<p class="tip">' + AJS.format("Get started by adding some pages to this space. \x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3eCreate page\x3c/a\x3e.","" + '/pages/createpage.action?spaceKey=' + opt_data.space.key,'page-tree-create-child-page-link') + '</p>' : '<div class="ia-secondary-content">' + opt_data.contextualNav + '</div>');
  } else {
    Confluence.Templates.Sidebar.Pages.renderPageContextualNav({pageContextualNav: opt_data.contextualNav, hasCreatePermission: opt_data.hasCreatePermission}, output);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.pagetreeList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="', (opt_data.isSubtree) ? 'ia-subpagetree' : 'ia-pagetree', '">');
  var itemList212 = opt_data.pagetree;
  var itemListLen212 = itemList212.length;
  for (var itemIndex212 = 0; itemIndex212 < itemListLen212; itemIndex212++) {
    var itemData212 = itemList212[itemIndex212];
    Confluence.Templates.Sidebar.pagetreeItem(itemData212, output);
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.throbber = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="content-container"><div class="throbber-container"><div class="throbber"><div class="spinner"></div><span>', soy.$$escapeHtml("Loading..."), '</span></div></div></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.treeThrobber = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<ul class="ia-subpagetree"><li class="acs-tree-item leaf"><span class="node-title">', soy.$$escapeHtml("Loading..."), '</span></li></ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.pagetreeItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="acs-tree-item', (opt_data.hasChildren) ? (opt_data.children.length) ? ' opened' : ' closed' : ' leaf', (opt_data.groupType) ? ' grouping' : '', (opt_data.active) ? ' current-item' : '', '"', (opt_data.pageId) ? ' data-page-id="' + soy.$$escapeHtml(opt_data.pageId) + '"' : '', (opt_data.groupType) ? ' data-group-type="' + soy.$$escapeHtml(opt_data.groupType) + '" data-group-value="' + soy.$$escapeHtml(opt_data.groupValue) + '"' : '', '>', (! opt_data.groupType) ? '<a href="' + soy.$$escapeHtml(opt_data.url) + '">' : '', '<span class="icon ', (opt_data.hasChildren) ? (opt_data.children.length) ? 'icon-section-opened' : 'icon-section-closed' : '', '"></span><span class="node-title navigation-pseudo-link">', soy.$$escapeHtml(opt_data.title), '</span>', (! opt_data.groupType) ? '</a>' : '');
  if (opt_data.children && opt_data.children.length > 0) {
    Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.children, isSubtree: true}, output);
  }
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.renderSpaceToolsSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="space-tools-section"><div id="space-tools-menu-additional-items" class="hidden">');
  var linkList282 = opt_data.advancedLinks;
  var linkListLen282 = linkList282.length;
  for (var linkIndex282 = 0; linkIndex282 < linkListLen282; linkIndex282++) {
    var linkData282 = linkList282[linkIndex282];
    output.append('<div data-label="', soy.$$escapeHtml(linkData282.title), '" data-class="', soy.$$escapeHtml(linkData282.styleClass), '" data-href="', soy.$$escapeHtml(linkData282.url), '">', soy.$$escapeHtml(linkData282.title), '</div>');
  }
  output.append((opt_data.hasConfigurePermission) ? '<div data-label="' + soy.$$escapeHtml("Configure sidebar") + '" data-class="configure-sidebar" data-href="">' + soy.$$escapeHtml("Configure sidebar") + '</div>' : '', '</div><div id="space-tools-dd-dummy"></div><a id="space-tools-menu-trigger" class="aui-button aui-button-subtle aui-dropdown2-trigger tipsy-enabled', (opt_data.currentlyViewed) ? ' current-item' : '', '" aria-owns="space-tools-dd-dummy"><span class="aui-icon aui-icon-small aui-iconfont-configure">Configure</span><span class="label">', soy.$$escapeHtml("Space tools"), '</span></a><a class="expand-collapse-trigger"></a></div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.spaceToolsMenu = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="space-tools-menu"><div class="aui-dropdown2-section"><ul class="space-tools-navigation">');
  var linkList309 = opt_data.spaceToolLinks;
  var linkListLen309 = linkList309.length;
  for (var linkIndex309 = 0; linkIndex309 < linkListLen309; linkIndex309++) {
    var linkData309 = linkList309[linkIndex309];
    output.append('<li><a href="', soy.$$escapeHtml(linkData309.href), '" title="', soy.$$escapeHtml(linkData309.label), '">', soy.$$escapeHtml(linkData309.label), '</a></li>');
  }
  output.append('</ul></div>');
  if (opt_data.spaceLinks.length > 0) {
    output.append('<div class="aui-dropdown2-section"><ul class="space-operations">');
    var linkList322 = opt_data.spaceLinks;
    var linkListLen322 = linkList322.length;
    for (var linkIndex322 = 0; linkIndex322 < linkListLen322; linkIndex322++) {
      var linkData322 = linkList322[linkIndex322];
      output.append('<li><a class="', soy.$$escapeHtml(linkData322.className), '" href="', soy.$$escapeHtml(linkData322.href), '" title="', soy.$$escapeHtml(linkData322.label), '">', soy.$$escapeHtml(linkData322.label), '</a></li>');
    }
    output.append('</ul></div>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.configure = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="acs-nav-sections"><table id="acs-nav-list-main" class="acs-nav-list"></table><div class="acs-nav-list-quick-section', (opt_data.quickLinksState == 'hide') ? ' hidden-section' : '', '"><div class="quick-links-header"><h5>', soy.$$escapeHtml("Space shortcuts"), '</h5><a href="#" class="aui-icon aui-icon-small toggle-link" data-tooltip="', soy.$$escapeHtml("Hide/Show space shortcuts"), '"/></div><table id="acs-nav-list-quick" class="acs-nav-list"></table><p class="tip">', soy.$$escapeHtml("Click \x22Add link\x22 to add links to the sidebar."), '</p><a class="acs-add-link" href="#"><span class="icon"></span><span class="label">', soy.$$escapeHtml("Add link"), '</span></a></div><h5>', soy.$$escapeHtml("Navigation display options"), '</h5><form class="aui"><div class="radio"><input class="radio acs-nav-type" type="radio" name="nav-type" value="pages" id="nav-type-pages" ', (! opt_data.pageTree) ? 'checked' : '', '><label for="nav-type-pages">', soy.$$escapeHtml("Child pages"), '</label></div><div class="radio"><input class="radio acs-nav-type" type="radio" name="nav-type" value="page-tree" id="nav-type-tree" ', (opt_data.pageTree) ? 'checked' : '', '><label for="nav-type-tree">', soy.$$escapeHtml("Page tree"), '</label></div></form><button class="aui-style aui-button acs-done-link">', soy.$$escapeHtml("Done"), '</button></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:soy-resources', location = 'soy/sidebar-pages.soy' */
// This file was automatically generated from sidebar-pages.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }
if (typeof Confluence.Templates.Sidebar.Pages == 'undefined') { Confluence.Templates.Sidebar.Pages = {}; }


Confluence.Templates.Sidebar.Pages.renderPageContextualNav = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ia-secondary-header"><h5 class="ia-secondary-header-title pages"><span class="label">', soy.$$escapeHtml("Child pages"), '</span></h5></div><div class="ia-secondary-parent-content">');
  Confluence.Templates.Sidebar.Pages.parentPage({parentPage: opt_data.pageContextualNav.parentPage}, output);
  output.append('</div><div class="ia-secondary-current-content">');
  Confluence.Templates.Sidebar.Pages.currentPage({currentPage: opt_data.pageContextualNav.currentPage}, output);
  output.append('</div><div class="ia-secondary-content">');
  Confluence.Templates.Sidebar.Pages.childPages({children: opt_data.pageContextualNav, createPermission: opt_data.hasCreatePermission}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.Pages.childPages = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="contextual-nav-child-pages">');
  if (opt_data.children.initialChildPages.length) {
    output.append('<ul class="children">');
    Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.initialChildPages}, output);
    output.append('</ul>');
    if (opt_data.children.remainingChildPages.length) {
      output.append('<ul class="more-children">');
      Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.remainingChildPages}, output);
      output.append('</ul><a class="more-children-link" href=""><span class="icon"></span><span class="label">', soy.$$escapeHtml(AJS.format("{0} more child pages",opt_data.children.remainingChildPages.length)), '</span></a>');
    }
  }
  output.append((opt_data.createPermission && opt_data.children.createLink) ? '<a class="create-child-page-link" href="' + soy.$$escapeHtml(opt_data.children.createLink) + '"><span class="icon"></span><span class="label">' + soy.$$escapeHtml("Create child page") + '</span></a>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.Pages.currentPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.currentPage) ? '<ul class="ia-secondary-currentPage-title wiki' + ((opt_data.currentPage.active) ? ' current-item' : '') + '"><li><span class="icon"></span><span class="label">' + soy.$$escapeHtml(opt_data.currentPage.title) + '</span></li></ul>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.Pages.parentPage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.parentPage) ? '<ul class="parent ia-secondary-header-title wiki' + ((opt_data.parentPage.active) ? ' current-item' : '') + '"><li class="parent-item"><a class="parent-item-link" href="' + soy.$$escapeHtml(opt_data.parentPage.url) + '" title="' + soy.$$escapeHtml(opt_data.parentPage.title) + '"><span class="icon"></span><span class="label">' + soy.$$escapeHtml(opt_data.parentPage.title) + '</span></a></li></ul>' : '');
  return opt_sb ? '' : output.toString();
};


Confluence.Templates.Sidebar.Pages.renderChildren = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var childList65 = opt_data.children;
  var childListLen65 = childList65.length;
  for (var childIndex65 = 0; childIndex65 < childListLen65; childIndex65++) {
    var childData65 = childList65[childIndex65];
    output.append('<li class="child-item" data-page-id="', soy.$$escapeHtml(childData65.pageId), '"><span class="icon"></span><a href="', soy.$$escapeHtml(childData65.url), '" title="', soy.$$escapeHtml(childData65.title), '"><span class="label">', soy.$$escapeHtml(childData65.title), '</span></a></li>');
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


