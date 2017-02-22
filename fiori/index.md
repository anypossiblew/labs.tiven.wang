---
layout: laboratory
title: SAP Fiori Laboratory by Tiven
excerpt: "A Laboratory for Fiori usage by Tiven"
tags: [SAP, Fiori, UI5, ERP]
laboratory:
  title: "SAP Fiori Laboratory"
  description: "SAP Fiori Developer With 7 Years experience on web development."
projects:
  - title: "My Fiori Resume"
    description: "my resume developed using SAP Fiori"
    page: "/fiori/cv"
    previewImage: "/images/thumb-fiori-cv.jpg"
  - title: "Baidu Map in Fiori App"
    description: "Create Baidu Map using Leaflet.js in Fiori App"
    page: "/fiori/cv"
    previewImage: "/images/thumb-fiori-baidumap.jpg"
  - title: "D3 Word Cloud plugin"
    description: "Use Word Cloud plugin of D3.js in Fiori"
    page: "/fiori/cv"
    previewImage: "/images/thumb-fiori-word-cloud.jpg"
  - title: "D3.js in Fiori App"
    description: "Use D3.js in Fiori App"
    page: "/fiori/cv"
    previewImage: "/images/thumb-fiori-d3.jpg"
---

```javascript
sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "QuickStartApplication/model/models"
], function(UIComponent, Device, models) {
  "use strict";

  return UIComponent.extend("QuickStartApplication.Component", {

    metadata: {
      manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function() {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      // set the device model
      this.setModel(models.createDeviceModel(), "device");
    }
  });

});
```
