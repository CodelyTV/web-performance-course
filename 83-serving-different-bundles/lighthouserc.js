module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        // Performance related
        "font-display": "off",
        "unsized-images": "off",
        "unused-css-rules": "off",
        "unused-javascript": "off",
        "uses-optimized-images": "off",
        "uses-responsive-images": "off",
        "unminified-css": "off",
        "third-party-facades": "off",
        "offscreen-images": "off",
        // Not performance related
        "tap-targets": "off",
        "non-composited-animations": "off",
        "button-name": "off",
        "color-contrast": "off",
        "csp-xss": "off",
        "errors-in-console": "off",
        "external-anchors-use-rel-noopener": "off",
        "heading-order": "off",
        "link-name": "off",
        "meta-description": "off",
        "uses-text-compression": "off",
      },
    },
  },
};
