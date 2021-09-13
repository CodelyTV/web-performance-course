module.exports = {
  ci: {
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        // Performance related
        "font-display": "warn",
        "unused-javascript": "warn",
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
