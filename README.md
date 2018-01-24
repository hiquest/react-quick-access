# react-quick-access
A quick-access (or a launch bar) component inspired by productivity tools like Alfred

![](/img/screen.png?raw=true)

# Usage

```jsx
import { QuickAccess } from 'react-quick-access'

<QuickAccess
  placeholder='Please, select your country'
  source={this.source}
  selected={this.selected}
>
  <button>Select a Country</button>
</QuickAccess>
```

# Options

- *placeholder*
A placeholder for the input field

- *source*
A function to invoke with typed query. It should return a promise.

- *selected*
A callback function which is invoked when some item is selected.

# TODO

- More options: typing debounce period
- Tests
- Proper transitions

I will appreciate any help with that 🙏.
