#Clock Signal
Useage of this is dead simple.  Pick a time in your app to call the update function with your clock instance.  This is intended to be done in your application's core update loop.

```javascript
var c = new ClockSignal

function update () {
  ClockSignal.update(c)

  console.log(c.dT) // ~16.66
}
```
