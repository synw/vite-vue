/*! vite-vue 2017-05-09 */

const vvDebug=!1;var vvMixin={data:function(){return{active:[]}},methods:{flush:function(a){var b=[];for(i=0;i<this.active.length;i++)if(this.active[i]!=a){var c=typeOf(this.active[i]);if(isNaN(c))continue;if("string"===c)this.active[i]="";else if("array"===c)this.active[i]=[];else if("object"===c)this.active[i]={};else if("boolean"===c)this.active[i]=!1;else{if("number"!==c)continue;this.active[i]=0}b.push(this.active[i])}this.active=b},isActive:function(a){return this.active.indexOf(a)>-1},loadData:function(a,b,c){axios.get(a).then(function(a){b(a.data)}).catch(function(a){console.log(a)})},postForm:function(a,b,c,d,e){e||(e=csrftoken),axios.create({headers:{"X-CSRFToken":e}})({method:"post",url:a,data:b}).then(function(a){c(a)}).catch(function(a){d(a)})},query:function(a){var a=encodeURIComponent(a);return"/graphql?query="+a},str:function(a){return JSON.stringify(a,null,2)},get:function(a){return document.getElementById(a)}}};