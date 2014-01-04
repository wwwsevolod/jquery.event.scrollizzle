jquery.event.scrollizzle
========================

Event would fired when user scrolled more than setted percentage of page.
Availaible from bower, defined as Universal Module.

## Documentation
```js
    var $object = $('any scrollable element, like window, iframe or element with overflow:auto|scroll');
    $object.one('scrollizzle', {
        position: 50
    }, function() {
        console.log('user scrolled more then half of page');
    });
```

You can attach listener of ```scrollizzle``` to every scrollable element, like window, html element with css ```overflow:auto or scroll;``` or to an iframe. You need to pass object with 'position' property. Position must be Number from 0 to 100, position is number of percents of page user need to scroll to fire event.
