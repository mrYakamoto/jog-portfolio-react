
          window.__NEXT_REGISTER_PAGE('/person', function() {
            var comp = module.exports=webpackJsonp([7],{321:function(e,t,n){e.exports=n(322)},322:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(18),l=r(a),u=n(22),s=r(u),d=n(7),i=r(d),f=n(1),c=r(f),o=n(2),p=r(o),m=n(8),_=r(m),h=n(9),v=r(h),E=n(0),y=r(E),g=n(34),U=r(g),b=n(23),k=r(b),x=n(33),w=r(x),I=function(e){function t(){return(0,c.default)(this,t),(0,_.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this.props.person;return y.default.createElement(w.default,null,y.default.createElement("div",{className:"person"},y.default.createElement("div",{className:"person__header"},e.imageUrl&&y.default.createElement("img",{src:e.imageUrl+"?h=480"}),y.default.createElement("h2",null,e.name)),y.default.createElement("h3",null,"Acted in"),y.default.createElement("ul",{className:"list"},(e.actedIn||[]).map(function(e){return y.default.createElement("li",{key:e._id},y.default.createElement(U.default,{href:{pathname:"/movie",query:{id:e._id}}},y.default.createElement("a",null,e.posterUrl&&y.default.createElement("img",{src:e.posterUrl+"?h=240"}),y.default.createElement("div",null,e.title," (",e.releaseDate.substr(0,4),")"))))}))))}}],[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,s.default)(l.default.mark(function e(t){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.default.fetch('*[_type == "person" && _id == $id] {\n  _id,\n  name,\n  "imageUrl": image.asset->url,\n  "actedIn": *[_type == "movie" && references(^._id) && (^._id in castMembers[].person._ref)] {\n    _id,\n    title,\n    releaseDate,\n    "posterUrl": poster.asset->url\n  }\n}[0]\n',{id:t.query.id});case 2:return e.t0=e.sent,e.abrupt("return",{person:e.t0});case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(y.default.Component);t.default=I}},[321]);
            return { page: comp.default }
          })
        