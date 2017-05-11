# Vite Vue

Vue.js mixin for http operations and state management

## Install

Import the libs in html header

   ```html
   <script type="text/javascript" src="/static/js/vue.min.js"></script>
   <script type="text/javascript" src="/static/js/vuex.js"></script>
   <script type="text/javascript" src="/static/js/page.js"></script>
   <script type="text/javascript" src="/static/js/axios.min.js"></script>
   <script type="text/javascript" src="/static/vv/vv.js"></script>
   <script type="text/javascript" src="/static/vv/vvstore.js"></script>
   ```
   
The file `vv.js` is the mixin. The filte ``vvstore.js`` if the store for state management

## Usage

Example with a basic app:

   ```javascript
   const app = new Vue({
   el: '#app',
   mixins: [vvMixin],
   data () {
      return {
         content: "",
      }
   },
   methods: {
      load: function() {
         var url = 'http://localhost:8080/some_endpoint';
         function action(data) {
            app.content = data.something;
         };
         function error(err) { 
            console.log("ERROR", err, url) 
         };
         // process network operation
         this.loadData(url, action, error);
         // update state
         this.activate(["content"]);
      },
    },
   });
   ```

## API

#### Network operations

`loadData(url, action, error)`:  load data from an url and process an action on it

`postForm(url, data, action, error, token)`:  posts a form and perform an action on response. The token is for csrf protection: 
provide it from your backend

#### State management

`activate(elements, replace)`:  set some elements active. The elements parameter must be an array. The replace parameter is optional: 
if set to true the active items will be replaced by the elements, otherwise the elements will be added to the active elements.

`deactivate(elements)`:  unset some element active

`isActive(element)`:  returns true or false

#### Utilities

`flush(preserve)`:  reset all active elements values depending on their type: an array will be set [], a string to "", a boolean
to false and so on. Optionaly pass an element if you want not to reset it.

`serializeForm(form)`:  pass a dom form element and receive the serialized json

#### Shortcuts

`get(nodeid)` : shortcut for docucment.getElementById

`str(jsondata)`:  prettify json for printing

`query(q)`:  urlencode a graphql query and returns `/graphql?query=`+ endcoded query



 
