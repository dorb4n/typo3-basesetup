page = PAGE
page {
  typeNum = 0

  headerData {
    # Load favicon
    10 = TEXT
    10.value < config.baseUrl
    10.wrap = <link rel="shortcut icon" href="|/fileadmin/templates/images/favicon.ico" type="image/x-icon">
  }

  meta {
    viewport = width=device-width, initial-scale=1.0
  }

  # Load css files
  includeCSS {
    reset       = fileadmin/templates/css/reset.css
    base        = fileadmin/templates/css/base.css
    header      = fileadmin/templates/css/header.css
    content     = fileadmin/templates/css/content.css
    footer      = fileadmin/templates/css/footer.css
    print       = fileadmin/templates/css/print.css
    print.media = print
    ieonly      = fileadmin/templates/css/ie.css
    ieonly.allWrap = <!--[if IE]>|<![endif]-->
  }
  
  # Load javascript files in the top area (header)
  includeJSlibs {
    honload = fileadmin/templates/js/header-onload.js
  }
  
  # Load javascript files in the bottom area (footer)
  includeJSFooterlibs {
    fonload = fileadmin/templates/js/footer-onload.js
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
lib.main-menu = HMENU
lib.main-menu {
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

# Sub navigation
lib.sub-menu = HMENU
lib.sub-menu {
  entryLevel = 1

  1 = TMENU
  1 {
    wrap = <ul>|</ul>

    NO.wrapItemAndSub = <li>|</li>

    ACT = 1
    ACT.wrapItemAndSub = <li class="active">|</li>
  }
}
