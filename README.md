# react-respond-to

Responsive Component for React

## Basic Usage

```javascript
import {Respond, At} from 'react-respond-to';

<Respond to="min-width">
  <At default><p>Mobile</p></At>
  <At value="480px"><p>Tablet</p></At>
  <At value="850px"><p>Large Tablet, Small Computer</p></At>
  <At value="1024px"><p>Medium Computer</p></At>
  <At value="1400px"><p>Wide Computer</p></At>
</Respond>

<Respond to="orientation">
  <At value="landscape"><p>Landscape</p></At>
  <At value="portrait"><p>Portrait</p></At>
</Respond>
```
