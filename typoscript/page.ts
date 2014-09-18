page = PAGE
page {
  typeNum = 0

  headerData {
    # Load favicon
    10 = TEXT
    10.value < config.baseUrl
    10.wrap = <link rel="shortcut icon" href="/fileadmin/templates/img/favicon.ico" type="image/x-icon">
  }

  # Load css files
  includeCSS {
    yuiReset  = http://yui.yahooapis.com/3.17.2/build/cssreset/cssreset-min.css
    yuiReset.extern = 1
    fonts     = fileadmin/templates/css/fonts.css
    layout    = fileadmin/templates/css/layout.css
    style     = fileadmin/templates/css/style.css
    print     = fileadmin/templates/css/print.css
    print.media = print
    ieonly    = fileadmin/templates/css/ie.css
    ieonly.allWrap = <!--[if IE]>|<![endif]-->
  }
  
  # Load javascript files in the top area (header)
  includeJSlibs {
    onload = fileadmin/templates/js/headerOnload.js
  }
  
  # Load javascript files in the bottom area (footer)
  includeJSFooterlibs {
    onload = fileadmin/templates/js/footerOnload.js
  }
  
  10 = FLUIDTEMPLATE
  10 {
    file = fileadmin/templates/layouts/layout-base.html
    
    layoutRootPath  = fileadmin/templates/layouts/
    partialRootPath = fileadmin/templates/partials/

    variables {
      # Content
      content < styles.content.get
      # Header
      header < styles.content.get
      header.select.where = colPos=1
      # Footer
      footer < styles.content.get
      footer.slide = -1
      footer.select.where = colPos=2
    }
  }
}

# Main navigation
lib.mainMenu = HMENU
lib.mainMenu {
  special = directory
  special.value = 1
  1 = TMENU
  1 {
    wrap = <ul>|</ul>
    NO.wrapItemAndSub = <li>|</li>
    ACT = 1
    ACT.wrapItemAndSub = <li class="active">|</li>
  }
}

# Sub Navigation
lib.subMenu = HMENU
lib.subMenu {
  entryLevel = 1

  1 = TMENU
  1 {
    wrap = <ul>|</ul>

    NO.wrapItemAndSub = <li>|</li>

    ACT = 1
    ACT.wrapItemAndSub = <li class="active">|</li>
  }
}
