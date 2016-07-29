# Pip.WebUI.Settings User's Guide

## <a name="contents"></a> Contents
- [Installing](#install)
- [pip-composite-view](#composite_view)
- [pip-composite-summary](#composite_summary)
- [pip-composite-edit](#composite_edit)
- [pip-checklist-view](#checklist_view)
- [pip-checklist-edit](#checklist_edit)
- [pip-content-switch](#content_switch)
- [Questions and bugs](#issues)


## <a name="install"></a> Installing

Add dependency to **pip-webui** into your **bower.json** or **package.json** file depending what you use.
```javascript
"dependencies": {
  ...
  "pip-webui": "*"
  ...
}
```

Alternatively you can install **pip-webui** manually using **bower**:
```bash
bower install pip-webui
```

or install it using **npm**:
```bash
npm install pip-webui
```

Include **pip-webui** files into your web application.
```html
<link rel="stylesheet" href=".../pip-webui-lib.min.css"/>
...
<script src=".../pip-webui-lib.min.js"></script>
<script src=".../pip-webui-test.min.js"></script>
```

Register **pipComposite** module in angular module dependencies.
```javascript
angular.module('myApp',[..., 'pipComposite']);
```

## <a name="composite_view"></a> pip-composite-view

**pip-composite-view** controls shows read-only version of composite content. The content structured as blocks with hypertext, images, documents, locations, checklists. The only allowed action is to check/uncheck item in checklists.

This directive relies on **files** operation from standard REST API.
Todo: Add reference to pip-webui-rest module with protocol definition

### Usage
Todo: Add HTML snippet to demonstrate the directive

Todo: Add image of the composite view

### Attributes
Todo: Describe attributes of this directive


## <a name="composite_summary"></a> pip-composite-summary

This is a shorter version of **pip-composite-view** control for previews and tiles. It shows only first 3 blocks. Text and lists are truncated to keep it concise. **pip-composite-summary** does not support check/uncheck of checklist items.

This directive relies on **files** operation from standard REST API.
Todo: Add reference to pip-webui-rest module with protocol definition

### Usage
Todo: Add HTML snippet to demonstrate the directive

Todo: Add image of the composite summary

### Attributes
Todo: Describe attributes of this directive


## <a name="composite_edit"></a> pip-composite-edit

**pip-composite-edit** control allows to construct complex content using blocks with hypertext, images, documents, locations and checklists. Blocks can be added, moved up or down or removed. Hypertext is entered using popular markdown format.

This directive relies on **files** operation from standard REST API.
Todo: Add reference to pip-webui-rest module with protocol definition

### Usage
Todo: Add HTML snippet to demonstrate the directive

Todo: Add image of the composite edit control

### Attributes
Todo: Describe attributes of this directive


## <a name="checklist_view"></a> pip-checklist-view

**pip-checklist-view** control shows read-only version of checklist and only allows to check/uncheck items. This control is integrated inside **pip-composite-view** and **pip-composite-summary**, but it also can be used independently.

### Usage
Todo: Add HTML snippet to demonstrate the directive

Todo: Add image of the checklist view control

### Attributes
Todo: Describe attributes of this directive


## <a name="checklist_edit"></a> pip-checklist-edit

**pip-checklist-edit** control allows to edit checklist with textual items. It allows to append or insert new items, edit them, change their order or remove them. This control is integrated into **pip-composite-edit**, but it can also be used independently.

### Usage
Todo: Add HTML snippet to demonstrate the directive

Todo: Add image of the checklist edit control

### Attributes
Todo: Describe attributes of this directive


## <a name="content_switch"></a> pip-content-switch

**pip-content-switch** control helps to construct own vesion of a simple composite content. By clicking a button user can add or remove text, images, files or location elements.

### Usage
Todo: Add HTML snippet to demonstrate the directive

Todo: Add image of the content switch control

### Attributes
Todo: Describe attributes of this directive


## <a name="issues"></a> Questions and bugs

If you have any questions regarding the module, you can ask them using our 
[discussion forum](https://groups.google.com/forum/#!forum/pip-webui).

Bugs related to this module can be reported using [github issues](https://github.com/pip-webui/pip-webui-composite/issues).
