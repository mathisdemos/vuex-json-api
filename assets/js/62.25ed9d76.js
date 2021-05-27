(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{192:function(e,t,a){"use strict";a.r(t);var s=a(3),r=function(e){e.options.__data__block__={mermaid_382ee221:"sequenceDiagram\n  activate ResourcefulApi\n  Module-xResourcefulApi: Get me a `book.list` please?\n  activate Api\n  ResourcefulApi-xApi: Hey, can you do a `GET` on books?\n  deactivate Api\n  ResourcefulApi-xModule: Here's your data\n  deactivate ResourcefulApi"}},o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requests"}},[e._v("#")]),e._v(" Requests")]),e._v(" "),a("h2",{attrs:{id:"the-two-api-classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-two-api-classes"}},[e._v("#")]),e._v(" The two API classes")]),e._v(" "),a("p",[e._v('This library comes with two classes carrying "Api" in their name. One\nis simply called '),a("code",[e._v("Api")]),e._v(". That is a very basic wrapper around the\n"),a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("axios")]),e._v("-Library"),a("OutboundLink")],1),e._v(" which is concerned with request configuration\nand basic response and error handling. The second one listens to\n"),a("code",[e._v("ResourcefulApi")]),e._v(". This one is the main server communication interface\nused by the module's actions.")]),e._v(" "),a("h3",{attrs:{id:"resource-request-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resource-request-methods"}},[e._v("#")]),e._v(" Resource request methods")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Intention")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("get")]),e._v(" "),a("td",[e._v("Request a single resource")])]),e._v(" "),a("tr",[a("td",[e._v("list")]),e._v(" "),a("td",[e._v("Request a list of resources")])]),e._v(" "),a("tr",[a("td",[e._v("create")]),e._v(" "),a("td",[e._v("Create a new resource")])]),e._v(" "),a("tr",[a("td",[e._v("replace")]),e._v(" "),a("td",[e._v("Replace an existing resource")])]),e._v(" "),a("tr",[a("td",[e._v("update")]),e._v(" "),a("td",[e._v("Update an existing resource")])]),e._v(" "),a("tr",[a("td",[e._v("delete")]),e._v(" "),a("td",[e._v("Delete an existing resource")])])])]),e._v(" "),a("h2",{attrs:{id:"what-happens-during-an-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-happens-during-an-action"}},[e._v("#")]),e._v(" What happens during an action?")]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("Given a properly routed API Endpoint "),a("code",[e._v("api/book/")]),e._v(" which will return a list\nof books, in the "),a("code",[e._v("book")]),e._v(" module")]),e._v(" "),a("Mermaid",{attrs:{id:"mermaid_382ee221",graph:e.$dataBlock.mermaid_382ee221}})],1)}),[],!1,null,null,null);"function"==typeof r&&r(o);t.default=o.exports}}]);