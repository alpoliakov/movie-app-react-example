(this["webpackJsonpreact-app-movies"]=this["webpackJsonpreact-app-movies"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),s=a.n(r);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(7),o=a(1),l=a(2),m=a(4),u=a(3),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).changeViewingDesires=function(){var t=e.props,a=t.addToWatchList,n=t.removeFromWatchList,c=t.item;e.state.watchWill?n(c):a(c),e.setState({watchWill:!e.state.watchWill})},e.state={watchWill:!1},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.item,t=this.state.watchWill;return c.a.createElement("div",{className:"card",style:{width:"100%"}},c.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(e.backdrop_path||e.poster_path),alt:e.title}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},e.title),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c.a.createElement("p",{className:"mb-0"},"Rating: ",e.vote_average),c.a.createElement("button",{type:"button",onClick:this.changeViewingDesires,className:"btn ".concat(t?"btn-success":"btn-secondary")},"Will Watch"))))}}]),a}(n.Component),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.addToWatchList,n=e.removeFromWatchList;return c.a.createElement("div",{className:"row"},t.map((function(e){return c.a.createElement("div",{key:e.id,className:"col-4 mb-4"},c.a.createElement(h,{item:e,addToWatchList:a,removeFromWatchList:n}))})))}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.arrMoviesWatch;return c.a.createElement("div",{className:"box--willwatch"},c.a.createElement("h4",null,"Will Watch: ",e.length," movies"),c.a.createElement("ul",{className:"list-group"},e.map((function(e){return c.a.createElement("li",{key:e.id,className:"list-group-item"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",null,e.title),c.a.createElement("div",null,e.vote_average)))}))))}}]),a}(n.Component),p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.changeSortingMethod;return c.a.createElement("form",{className:"mb-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"sort_by"},"Sort by:"),c.a.createElement("select",{className:"form-control",id:"sort_by",onChange:function(t){e(t.target.value)}},c.a.createElement("option",{value:"popularity.desc"},"Popular descending"),c.a.createElement("option",{value:"popularity.asc"},"Popular ascending"),c.a.createElement("option",{value:"revenue.desc"},"Rating descending"),c.a.createElement("option",{value:"revenue.asc"},"Rating ascending"))))}}]),a}(n.Component),g=function(e){var t=e.currentPage,a=e.totalPages,n=e.changeCurrentPage;return c.a.createElement("nav",{"aria-label":"\u0421\u0442\u0430\u0442\u044c\u0438 \u043f\u043e Bootstrap 4"},c.a.createElement("ul",{className:"pagination justify-content-center"},c.a.createElement("li",{className:"page-item ".concat(1===t?"disabled":""),role:"button",onClick:function(){1!==t&&n("previous")}},c.a.createElement("span",{className:"page-link"},"Previous")),c.a.createElement("li",{className:"page-item disabled"},c.a.createElement("span",{className:"page-link"},"Current page: ",t)),c.a.createElement("li",{className:"page-item disabled"},c.a.createElement("span",{className:"page-link"},"Total pages: ",a)),c.a.createElement("li",{className:"page-item ".concat(500===t?"disabled":""),role:"button",onClick:function(){500!==t&&n("next")}},c.a.createElement("span",{className:"page-link"},"Next"))))},b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).addToWatchList=function(t){e.setState({arrMoviesWatch:[].concat(Object(i.a)(e.state.arrMoviesWatch),[t])})},e.removeFromWatchList=function(t){e.setState({arrMoviesWatch:e.state.arrMoviesWatch.filter((function(e){return e.id!==t.id}))})},e.getMovies=function(){var t="".concat("https://api.themoviedb.org/3","/discover/movie?api_key=").concat("3f4ca4f3a9750da53450646ced312397","&sort_by=").concat(e.state.sortBy,"&language=en-US&page=").concat(e.state.currentPage);fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({totalPages:t.total_pages,movies:t.results})}))},e.changeSortingMethod=function(t){e.setState({sortBy:t})},e.changeCurrentPage=function(t){"next"===t?e.setState({currentPage:e.state.currentPage+1}):"previous"===t&&e.setState({currentPage:e.state.currentPage-1})},e.state={movies:[],arrMoviesWatch:[],sortBy:"popularity.desc",totalPages:null,currentPage:1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){t.sortBy===this.state.sortBy&&t.currentPage===this.state.currentPage||this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.arrMoviesWatch,n=e.currentPage,r=e.totalPages;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col-4 filter"},c.a.createElement("div",{className:"card",style:{width:"100%"}},c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",null,"Filters:"),c.a.createElement(p,{changeSortingMethod:this.changeSortingMethod})))),c.a.createElement("div",{className:"col-9"},c.a.createElement(d,{movies:t,addToWatchList:this.addToWatchList,removeFromWatchList:this.removeFromWatchList}),c.a.createElement(g,{currentPage:n,totalPages:r,changeCurrentPage:this.changeCurrentPage})),c.a.createElement("div",{className:"col-3"},c.a.createElement(v,{arrMoviesWatch:a}))))}}]),a}(n.Component);a(14);s.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f0f1b0b1.chunk.js.map