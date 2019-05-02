(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(65)},35:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(26),l=a.n(r),i=a(27),c=a(6);a(35);var s=function(e){return o.a.createElement("nav",{className:"navbar fixed-top navbar-expand-sm bg-dark navbar-dark"},o.a.createElement("a",{className:"navbar-brand",href:"/"},o.a.createElement("img",{id:"nav-bar-image",alt:"logo",src:"/google.jpg"}),o.a.createElement("span",{className:"navbar-bar-text"},"Book Application")),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/search"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"/saved"},"Saved")))))},u=a(7),m=a(8),d=a(10),p=a(9),h=a(11),f=a(13),b=a.n(f),v={getBooks:function(e){var t=" https://www.googleapis.com/books/v1/volumes?q="+e.replace(" ","+");return b.a.get(t)},getBook:function(){return b.a.get("/api/books/")},deleteBook:function(e){return b.a.delete("/api/books/"+e)},saveBook:function(e){return b.a.post("/api/books",e)}},g={image:{float:"left",marginRight:5},title:{fontSize:25,fontWeight:500},author:{fontSize:20},description:{fontSize:18},button:{float:"right",marginTop:25,marginLeft:10},li:{listStyle:"none"},hr:{borderWidth:2,borderColor:"darkslategray"}},E=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("li",{key:this.props.id,style:g.li},o.a.createElement("hr",{style:g.hr}),o.a.createElement("p",null,o.a.createElement("span",{style:g.title},this.props.title)),o.a.createElement("p",null,o.a.createElement("span",{style:g.author},"Written by ",this.props.author)),o.a.createElement("img",{style:g.image,src:this.props.image,alt:"thumbnail"}),o.a.createElement("p",null,o.a.createElement("span",{style:g.description},this.props.description)),o.a.createElement("div",{className:"cfix"},o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"View",style:g.button})),o.a.createElement("input",{className:"btn btn-primary",type:"submit",value:this.props.buttonText,style:g.button,onClick:this.props.onSave}))))}}]),t}(n.Component),k={container:{marginTop:120,marginBottom:10,borderStyle:"solid",borderRadius:5,borderWidth:2,borderColor:"gdarkslategrayrey",paddingTop:5},header:{fontSize:30,fontWeight:500},button:{float:"right",marginTop:25,marginLeft:10},ul:{padding:0}},y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.loadBooks=function(){v.getBook().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.handleDelete=function(e){v.deleteBook(e).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}),a.loadBooks()},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"container",style:k.container},this.state.books.length?o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("span",{style:k.header},"Saved Books")),o.a.createElement("ul",{style:k.ul},this.state.books.map(function(t){return o.a.createElement(E,{key:t.id,title:t.title,author:t.author,description:t.description,image:t.image,link:t.link,buttonText:"Delete",onSave:function(){return e.handleDelete(t.id)}})}))):o.a.createElement("p",null,o.a.createElement("span",{style:k.header},"No results to display"))))}}]),t}(n.Component),S={topcontainer:{marginTop:100,marginBottom:10,borderStyle:"solid",borderRadius:5,borderWidth:2,borderColor:"darkslategray",paddingTop:5},container:{marginTop:50,marginBottom:10,borderStyle:"solid",borderRadius:5,borderWidth:2,borderColor:"darkslategray",paddingTop:5},header:{fontSize:30,fontWeight:500},button:{float:"right",marginTop:25,marginLeft:10},ul:{padding:0}},N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={searchValue:"",books:[]},a.loadBooks=function(e){v.getBooks(e).then(function(e){var t=[];if(e.data.items)for(var n=function(a){return t.find(function(t){return t.id===e.data.items[a].id})?"continue":e.data.items[a].id&&e.data.items[a].volumeInfo.title&&e.data.items[a].volumeInfo.description&&e.data.items[a].volumeInfo.authors&&e.data.items[a].volumeInfo.imageLinks&&e.data.items[a].volumeInfo.infoLink?void t.push(e.data.items[a]):"continue"},o=0;o<e.data.items.length;o++)n(o);a.setState({books:t})}).catch(function(e){return console.log(e)})},a.handleChange=function(e){e.preventDefault(),a.setState({searchValue:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.state.searchValue.length>0&&a.loadBooks(a.state.searchValue)},a.handleSave=function(e){var t=a.state.books.find(function(t){return t.id===e});if(t){var n={id:t.id,author:t.volumeInfo.authors[0],description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,link:t.volumeInfo.infoLink,title:t.volumeInfo.title};v.saveBook(n).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,">",o.a.createElement("div",{className:"topcontainer container",style:S.topcontainer},o.a.createElement("p",null,o.a.createElement("span",{style:S.header},"Search for book")),o.a.createElement("div",{className:"form form-group cfix"},o.a.createElement("input",{type:"text",className:"form-control",value:this.state.value,onChange:this.handleChange}),o.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Search",style:S.button,onClick:this.handleSubmit}))),o.a.createElement("div",{className:"container",style:S.container},this.state.books.length?o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("span",{style:S.header},"Search results")),o.a.createElement("ul",{style:S.ul},this.state.books.map(function(t){return o.a.createElement(E,{key:t.id,title:t.volumeInfo.title,author:t.volumeInfo.authors[0],description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,link:t.volumeInfo.infoLink,buttonText:"Save",onSave:function(){return e.handleSave(t.id)}})}))):o.a.createElement("p",null,o.a.createElement("span",{style:S.header},"No results to display"))))}}]),t}(n.Component);a(55);var B=function(e){var t=e.children;return o.a.createElement("div",{className:"jumbotron"},t)};var j=function(){return o.a.createElement(B,null,o.a.createElement("br",null),o.a.createElement("h1",null,"404 Page Not Found!"),o.a.createElement("h1",null,o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))};a(56);var x=function(){return o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/",component:N}),o.a.createElement(c.a,{exact:!0,path:"/saved",component:y}),o.a.createElement(c.a,{exact:!0,path:"/search",component:N}),o.a.createElement(c.a,{component:j}))))};l.a.render(o.a.createElement(x,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.5fee4e95.chunk.js.map