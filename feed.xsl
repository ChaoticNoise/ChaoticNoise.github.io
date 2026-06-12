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
          body { background: #000; color: #e6f7ff; font-family: sans-serif; margin: 0; padding: 20px 40px; max-width: 900px; }
          h1 { color: #296bd6; }
          a { color: #296bd6; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .intro { color: #aaa; margin-bottom: 2em; }
          .item { display: flex; gap: 1rem; align-items: flex-start; border-top: 1px solid #333; padding: 16px 0; }
          .item img { width: 140px; height: auto; border-radius: 4px; flex-shrink: 0; object-fit: cover; }
          .item-text { flex: 1; }
          .item-title { font-size: 1.2rem; font-weight: bold; margin-bottom: 6px; }
          .item-title a { color: #296bd6; }
          .item-meta { font-size: 0.9rem; margin-bottom: 4px; }
          .date { font-size: 0.85rem; opacity: 0.7; margin-top: 6px; }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="/rss/channel/title"/></h1>
        <p class="intro">
          <xsl:value-of select="/rss/channel/description"/>
          — <a href="{/rss/channel/link}">chaoticnoise.com</a>
        </p>
        <xsl:for-each select="/rss/channel/item">
          <xsl:variable name="desc" select="description"/>
          <div class="item">
            <!-- extract image src from description if present -->
            <xsl:if test="contains(description, '&lt;img')">
              <xsl:variable name="afterSrc" select="substring-after(description, 'img src=&quot;')"/>
              <xsl:variable name="imgSrc" select="substring-before($afterSrc, '&quot;')"/>
              <img src="{$imgSrc}" alt="Event flier"/>
            </xsl:if>
            <xsl:if test="not(contains(description, '&lt;img'))">
              <img src="http://chaoticnoise.com/images/chaotic_logo.png" alt="Chaotic Noise"/>
            </xsl:if>
            <div class="item-text">
              <div class="item-title">
                <a href="{link}" target="_blank" rel="noopener"><xsl:value-of select="title"/></a>
              </div>
              <xsl:variable name="locAfter" select="substring-after(description, '&lt;a href=&quot;')"/>
              <xsl:variable name="locUrl" select="substring-before($locAfter, '&quot;')"/>
              <xsl:variable name="locLabel" select="substring-before(substring-after($locAfter, '&gt;'), '&lt;')"/>
              <div class="item-meta">
                📍 <a href="{$locUrl}" target="_blank" rel="noopener"><xsl:value-of select="$locLabel"/></a>
              </div>
              <div class="date">🗓 <xsl:value-of select="pubDate"/></div>
            </div>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
