# How to use it guide

### Installation using NPM:
```bash
    npm install pip-webui-composite --save-dev
```

How run it:

- Create _index.html_ page with module dependencies:
    For more information use [Get Started guide](https://github.com/uharbachou/pip-get-started). Make sure that following dependent [modules](../readme#dependencies) included.
</br>
- Add CSS of Composite module on the page
```html
<link rel="stylesheet" href="lib/pip-webui-composite.css"/>
```
and 
```
<script src="lib/pip-webui-composite.js"></script>
```
Almost done. Right now Composite module must work.

Note: [**build.conf.js**](https://github.com/pip-webui/pip-webui/tree/master/doc/configjs-readme.md) and [**index.js**](https://github.com/pip-webui/pip-webui/tree/master/doc/indexjs-readme.md) must also created.

Folder structure will be:
<a href="images/folder-structure.png">
    <img src="doc/images/img-composite-summary.png"/>
</a>

## Browser support:

PIP.WEBUI has been thoroughly tested against all major browsers and supports:

 * IE11+
 * Edge
 * Chrome 47+
 * Firefox 43
 * Opera 35

# Using Pip.WebUI components on the page:

## <a name="composite_view"></a>Composite view
This component reproduced full information about composite controls. 
Also it allows action controls to manage list and components visibility.
[Online Example](http://webui.pipdevs.com/pip-webui-composite/index.html#/composite_view)

## Checklist editor/viewer control
This control provides a simple flexible checklist. User can create new item, sort those ones manually or remove anyone.
Description title is editable at any time. Also a checklist can be frozen and forbidden for editting.
[Online Example](http://webui.pipdevs.com/pip-webui-composite/index.html#/checklist)

## Composite summary
In general, this component has the same behavior as previous, but it removes any action controls over visibility. 
Mainly it as well as for representing info in tiles.
[Online Example](http://webui.pipdevs.com/pip-webui-composite/index.html#/composite_summary)

## Composite toolbar
Toolbar section provides controls arranged in a line to add new UI components(like text, checklist, picture, document,location or data).
[Online Example](http://webui.pipdevs.com/pip-webui-composite/index.html#/composite)
```html

```

## Content switch control
Allows to show/hide some content sections. At the left bottom corner there are located buttons worked like tabs approximately.
The icons have enabled and disabled states to notify user about section status.
[Online Example](http://webui.pipdevs.com/pip-webui-composite/index.html#/content_switch)
```html

```

## Mobile touch
This directive accept to attach a callback on any blocks invoked by the same name mobile event.
[Online example](http://webui.pipdevs.com/pip-webui-composite/index.html#/mobile_touch)
```html
<div class="touch-div"
     pip-mobile-mousedown="mouseDownCallBackFunction()"
     pip-mobile-mouseup="mouseUpCallBackFunction()">
</div>
```
