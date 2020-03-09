(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{216:function(t,s,a){t.exports=a.p+"assets/img/block_of_reverse-vmess.cd11ba0c.png"},294:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"reverse-proxy-ii"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reverse-proxy-ii"}},[t._v("#")]),t._v(" Reverse Proxy II")]),t._v(" "),n("p",[t._v("In the previous section, we talked about reverse proxy. We use a reverse proxy to access intranet services (e.g. private network drives) that do not have public IP. But this reverse proxy has a limitation, that is, only a limited port mapping can be assigned. For example, in the previous section, we mapped the 80 ports of the private network disk. If I have a lot of devices in my home, I run a lot of software (such as private network disk, NAS, personal blog, code warehouse, etc.), the reverse of the previous section. Agents can also be used, but there is a distribution port mapping, which is not very elegant, and the configuration is annoying to write. This section introduces another way to configure the reverse proxy, solves the problem just mentioned, and has a stronger universality, which is more practical for the majority of users.")]),t._v(" "),n("p",[t._v("The example above may not be easy to understand; we can easily understand with a few examples of actual usage scenarios. The reverse proxy described in this section can be implemented:")]),t._v(" "),n("ul",[n("li",[t._v("For overseas Chinese such as international students, sometimes they want to watch Chinese videos or listen to Chinese music. Because of copyright reasons, they can't directly watch on Chinese mainland websites. It is too expensive to buy a Chinese mainland VPS. If you build a V2Ray in your home in mainland China and buy an overseas VPS, you can use the reverse proxy to watch videos that the mainland can watch.")]),t._v(" "),n("li",[t._v("For university students, you can use the reverse proxy to access campus network resources outside the university, download papers, etc.")]),t._v(" "),n("li",[t._v("For programmers, you can view the company's code repository at home.")]),t._v(" "),n("li",[t._v("For home users, you can watch home monitoring from the outside.")])]),t._v(" "),n("h2",{attrs:{id:"mechanism"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mechanism"}},[t._v("#")]),t._v(" Mechanism")]),t._v(" "),n("p",[t._v("The principle is similar to the reverse proxy in the previous section. The difference is that B's dokodemo-door is changed to VMess, and then C needs to install V2Ray to connect B's VMess. The final result is that C connects to B through V2Ray, and B reverses proxy to A, which is equivalent to C using V2Ray to access the Internet through A proxy.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(216),alt:""}})]),t._v(" "),n("p",[t._v("(** Errata: The inbound of C in the figure should be Socks**)")]),t._v(" "),n("h2",{attrs:{id:"configuration-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example"}},[t._v("#")]),t._v(" Configuration Example")]),t._v(" "),n("p",[t._v("The specific configuration is given below, please understand the description together with the previous principle section.")]),t._v(" "),n("h3",{attrs:{id:"configuration-of-node-a"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-node-a"}},[t._v("#")]),t._v(" Configuration of Node A")]),t._v(" "),n("p",[t._v("The configuration of A is the same from the previous section.")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reverse"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is the reverse proxy setting for A, which must have the object of the following bridge")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bridges"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bridge"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The reverse proxy tag of A, used in routing")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private.cloud.com"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The domain name of the reverse proxy communication between A and B can be self-assigned. It may not be bought from the domain registry service provider, but it must be consistent with the reverse configured domain name in B below.")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbounds"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The outbound of A connecting to B  ")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tunnel"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The tag of outbound of A connecting to B, will be used in the following routing setting")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vnext"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serveraddr.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Address of B can be an IP or a domian")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16823")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"users"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b831381d-6324-4d53-ad4f-8cda48b30811"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n              "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Another outbound connect of the private cloud disk    ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"freedom"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"out"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routing"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Configure the routing rules for A connecting to B")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bridge"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"full:private.cloud.com"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tunnel"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The routing rules for reverse connection of private cloud disk")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("  \n          "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bridge"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"out"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("    \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"configuration-of-node-b"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-node-b"}},[t._v("#")]),t._v(" Configuration of Node B")]),t._v(" "),n("p",[t._v("The configuration of B has only changed in the inbound section.")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reverse"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is the reverse proxy setting for B and must have the following portals object")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"portals"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"portal"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"private.cloud.com"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// must be the same as the domain name set by A above")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbounds"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Accept C's inbound")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"external"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tag, used in routing")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Open port 80 for receiving external HTTP access ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a26efdb8-ef34-4278-a4e6-2af32cc010aa"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Another inbound that accepts a request initiated by A")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"interconn"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Tag will used in routing")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16823")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b831381d-6324-4d53-ad4f-8cda48b30811"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"routing"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Routing rules, sent to A after receiving a C request")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"interconn"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"portal"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Routing rules that let B recognize that this is a proactively initiated reverse proxy connection")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tunnel"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"full:private.cloud.com"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"portal"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("Tips")]),t._v(": In the configuration B, you can use the same VMess inbound to accept requests from A and C to simplify configuration.")]),t._v(" "),n("h3",{attrs:{id:"configuration-of-node-c"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-node-c"}},[t._v("#")]),t._v(" Configuration of Node C")]),t._v(" "),n("p",[t._v("Same as with normal client configuration, the connected server is B, which is omitted here.")]),t._v(" "),n("h2",{attrs:{id:"access"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#access"}},[t._v("#")]),t._v(" Access")]),t._v(" "),n("p",[t._v("A, B, and C are all running V2Ray, and any network accessed by C is equivalent to access through A (C routing is not specially configured).")]),t._v(" "),n("h4",{attrs:{id:"updates"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#updates"}},[t._v("#")]),t._v(" Updates")]),t._v(" "),n("ul",[n("li",[t._v("2018-11-01 Initial Version")]),t._v(" "),n("li",[t._v("2018-01-13 V4.0+ Adaptation")]),t._v(" "),n("li",[t._v("2019-07-15 Correction of "),n("code",[t._v("tag")]),t._v(" term in the configuration of server B")])])])}),[],!1,null,null,null);s.default=e.exports}}]);