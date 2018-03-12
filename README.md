# Simple MJML Server

## Installation

* Install dependencies
    * ```npm install```
* Run the server
    * ``node index.js``
* Configure a reverse proxy to 127.0.0.1:3000

## How to use the server?

```bash
curl -X POST "http://127.0.0.1:3000" --header "Content-Type: application/json" -d '{"mjml":"<mjml><mj-body><mj-container><mj-section><mj-column><mj-text>Hello World</mj-text></mj-column></mj-section></mj-container></mj-body></mjml>"}'
```