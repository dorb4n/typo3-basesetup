config {
  doctype = html5
  xmlprologue = none
  xhtml_cleaning = all
  metaCharset = utf-8
  renderCharset = utf-8
  pageTitleFirst = 1
  index_enable = 1
  noPageTitle = 0
  sendCacheHeaders = 1
  inlineStyle2TempFile = 1
  disablePrefixComment = 1
  meaningfulTempFilePrefix = 50

  # Encrypt emails
  spamProtectEmailAddresses_atSubst = @
  spamProtectEmailAddresses = ascii
  
  # RealUrl settings
  prefixLocalAnchors = all
  baseURL < config.baseUrl
  tx_realurl_enable = 0
  
  # Language settings
  sys_language_overlay = hideNonTranslated
  sys_language_mode = content_fallback
  linkVars = L
  sys_language_uid = 0
  language = en
  locale_all = en_US
  htmlTag_langKey = en-US
  
  # Compress js and css files
  #concatenateJs = 1
  #concatenateCss = 1
  #compressJs = 1
  #compressCss = 1
}