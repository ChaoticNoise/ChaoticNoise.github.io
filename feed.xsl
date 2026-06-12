<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title><xsl:value-of select="/rss/channel/title"/></title>
        <style>
          body { background: #000; color: #e6f7ff; font-family: sans-serif; margin: 0; padding: 20px 40px; }
          h1 { color: #296bd6; }
          h2 { color: #e6f7ff; font-size: 1rem; margin: 0 0 4px 0; }
          a { color: #296bd6; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .intro { color: #aaa; margin-bottom: 2em; }
          .item { display: flex; gap: 1rem; align-items: flex-start; border-top: 1px solid #333; padding: 16px 0; }
          .item img { width: 120px; height: auto; border-radius: 4px; flex-shrink: 0; }
          .item-text { flex: 1; }
          .date { font-size: 0.85rem; opacity: 0.7; margin-top: 4px; }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="/rss/channel/title"/></h1>
        <p class="intro">
          <xsl:value-of select="/rss/channel/description"/>
          — <a href="{/rss/channel/link}">chaoticnoise.com</a>
        </p>
        <xsl:for-each select="/rss/channel/item">
          <div class="item">
            <div class="item-text">
              <h2><a href="{link}" target="_blank" rel="noopener"><xsl:value-of select="title"/></a></h2>
              <div class="date"><xsl:value-of select="pubDate"/></div>
            </div>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
