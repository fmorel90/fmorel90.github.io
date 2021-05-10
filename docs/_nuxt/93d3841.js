(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5,6,7,8,9,11],{228:function(e,t,r){},236:function(e,t,r){"use strict";r(228)},260:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({name:"SectionHeader",props:{title:{type:String,default:"",required:!0}}}),o=r(55),l=r(223),c=r.n(l),d=r(290),v=r(291),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h3",[e._v(e._s(e.title))])])],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCol:d.a,VRow:v.a})},261:function(e,t,r){"use strict";r.r(t);r(232);var n=r(0).a.extend({name:"Reference",props:{site:{type:Object,required:!0}},methods:{mainClick:function(){window.open(this.$props.site.link,"_blank")}}}),o=r(55),l=r(223),c=r.n(l),d=r(297),v=r(259),m=r(222),h=r(292),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v(e._s(e.site.name))]),e._v(" "),r("v-card-subtitle",[e._v(e._s(e.site.description))]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"primary",outlined:""},on:{click:function(t){return e.mainClick()}}},[e._v("View")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardSubtitle:m.b,VCardTitle:m.d,VSpacer:h.a})},262:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({name:"Project",props:{project:{type:Object,required:!0}},methods:{mainClick:function(e){window.open(e,"_blank")}}}),o=(r(236),r(55)),l=r(223),c=r.n(l),d=r(297),v=r(259),m=r(222),h=r(292),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v(e._s(e.project.title))]),e._v(" "),r("v-card-subtitle",[e._v(e._s(e.project.subheading))]),e._v(" "),r("v-card-text",[r("p",{staticClass:"project-description"},[e._v(e._s(e.project.description))]),e._v(" "),r("p",{staticClass:"techs"},[r("span",{staticClass:"category"},[e._v("Technical environment")]),e._v(":\n      "),r("span",{staticClass:"tech-list"},[e._v(e._s(e.project.techs))])])]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),e._l(e.project.actions,(function(link){return r("v-btn",{key:link.url,attrs:{href:link.url,color:"primary",outlined:""},on:{click:function(t){return e.mainClick(link.url)}}},[e._v("\n      "+e._s(link.text)+"\n    ")])}))],2)],1)}),[],!1,null,"6490aa7e",null);t.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardSubtitle:m.b,VCardText:m.c,VCardTitle:m.d,VSpacer:h.a})},263:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({name:"Work",data:function(){return{notes:["Earned the Public Building Service Commissioner’s Award for my support of the national solid waste and recycling program.","Received FAC-P/PM Level 1 Certification (Federal Acquisition Certification for Program and Project Managers)","Monitor and troubleshoot devices in region-wide Advanced Metering program.","Built a dashboard for energy & water utility data on the branch’s Google Site based on a pre-existing Excel dashboard.","Built a set of spreadsheets with added features for easier Waste Diversion tracking.","Built an automated archival system for Waste Diversion reports using a custom-built email filter and a Google Group.","Built a server monitor as a Windows server using SQL queries to monitor an item that the server couldn’t do itself in order to decrease response time in case of failure.","Built a small scheduling component in LonMaker as a backup for the existing scheduling that failed.","Built a front-end to display and manage historical advanced metering data for the region."]}}}),o=r(55),l=r(223),c=r.n(l),d=r(259),v=r(222),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v("Work")]),e._v(" "),r("v-card-subtitle",[e._v("\n    Building Systems Analyst\n    "),r("small",[e._v("at General Services Administration")])]),e._v(" "),r("v-card-text",[r("ul",e._l(e.notes,(function(t){return r("li",{key:t},[e._v(e._s(t))])})),0)])],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:d.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d})},264:function(e,t,r){"use strict";r.r(t);var n=r(55),o=r(223),l=r.n(o),c=r(259),d=r(222),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v("Education")]),e._v(" "),r("v-card-subtitle",[e._v("Bachelor of Science in Software Engineering")]),e._v(" "),r("v-card-text",[r("p",[e._v("\n      With minors in Mathematics and Computer Science, from Southern\n      Polytechnic State University\n    ")]),e._v(" "),r("ul",[r("li",[e._v("User Centered Design")]),e._v(" "),r("li",[e._v("Software Project Management")]),e._v(" "),r("li",[e._v("Database Systems")]),e._v(" "),r("li",[e._v("Calculus I, II, III")]),e._v(" "),r("li",[e._v("Ordinary Differential Equations")])])])],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCard:c.a,VCardSubtitle:d.b,VCardText:d.c,VCardTitle:d.d})},265:function(e,t,r){"use strict";r.r(t);var n=r(55),o=r(223),l=r.n(o),c=r(259),d=r(222),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v("Downloads")]),e._v(" "),r("v-card-text",[r("a",{attrs:{href:"/Resume.docx"}},[e._v("Resume as Word document")])])],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCard:c.a,VCardText:d.c,VCardTitle:d.d})},266:function(e,t,r){"use strict";r.r(t);var n=r(55),o=r(223),l=r.n(o),c=r(259),d=r(222),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v("Contact Information ")]),e._v(" "),r("v-card-text",[e._v("\n    Email:\n    "),r("a",{attrs:{href:"mailto:webmaster@fmorel.net"}},[e._v("webmaster@fmorel.net")])])],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VCard:c.a,VCardText:d.c,VCardTitle:d.d})},296:function(e,t,r){"use strict";r.r(t);var n=[{link:"https://github.com/fjmorel",name:"GitHub",description:"My open source work and public projects"},{link:"https://www.linkedin.com/in/fredericmorel2",name:"LinkedIn",description:"My history and projects"},{link:"http://stackoverflow.com/users/1417591/fred",name:"StackOverflow",description:"My efforts at helping others"}],o=[{title:"Cosmic Companion",subheading:"(personal project)",description:"I built an unofficial companion app for the Cosmic Encounter board game to simplify game setup. It secretly assigns random character choices to each player based on what expansions and level of game you are playing. This was also an opportunity to experiment with Material Design for a simple, bold design. This project began as web page, migrated to a WebView-based Android app, and is now available as both a website and a native Android app.",techs:"HTML, JavaScript, AngularJS, CSS, Java, Android, Android Studio, XML, JSON",actions:[{url:"https://github.com/fjmorel/cosmic",text:"View Source"},{url:"cosmic/",text:"Open"}]},{title:"Hue Band Controls Android App",subheading:"(personal project, in private beta)",description:"I had smart light bulbs and a smart watch, so I built an Android app with a background service to receive commands from a Microsoft Band and send them to a Philips Hue lighting system. For now, it can control white color temperature and brightness levels. As this app is still in progress, I am keeping the app in a private beta for now.",techs:"Android, Java, Android Studio, XML",actions:[{url:"https://play.google.com/store/apps/details?id=net.fmorel.hueband",text:"View on Play Store"}]},{title:"Region 4 Energy & Water Dashboard",subheading:"(as Building System Analyst)",description:"I designed & built a system to let the organization view and analyze utility data in the region in an easy to use manner and facilitate reporting our energy status for the measure mandated by Executive Order 13423. The system imports utility data from national system and stores data in Google Drive to power a dashboard on a Google Site. It has been through several major revisions due to improvements to Google Apps Script and acquired experience with JavaScript. It initially used UI Service, a GWT-like framework for Google Site gadgets, then transitioned to a jQuery-powered page, and recently transitioned to an AngularJS application.",techs:"Google Apps, Google Apps Script, HTML, JavaScript, jQuery, AngularJS, CSS"},{title:"Building Automation System (BAS) Monitor Service",subheading:"(as Building System Analyst)",description:"I designed & built a script to check whether a server running InetSupervisor is working as intended based on several unique conditions not supported by the server application itself. It has been expanded over time with additional conditions and checks of the application. While it was initially a PowerShell scheduled task due to limited technical tools, I eventually built a more robust Windows service to restart the BAS as needed to resolve issues.",techs:"PowerShell, Microsoft SQL Server, InetSupervisor, LNS, C#"},{title:"Waste Diversion Tracker",subheading:"(as Building System Analyst)",description:"I enhanced a set of Google Spreadsheets with Apps Script to archive waste diversion reports, track data, and display the current waste diversion status of the region for the measure mandated by Executive Order 13514. The spreadsheets allow users to enter amount of materials disposed and diverted (recycled/reused) by container, which combine to show the diversion rate for at the building, service center, and regional levels. A separate script allows users to send in reports by email for automated archival in a Google Group by building and month.",techs:"Google Apps, Google Apps Script, HTML, JavaScript, CSS"},{title:"Advanced Metering Regional Data Collection Service",subheading:"(as Building System Analyst)",description:"I replaced a legacy third-party data collector with a more robust and efficient service. It eliminated instances of backlogging of uncollected data that frequently occurred with the older service.",techs:"C#, SQL, Microsoft SQL Server"}],l={name:"HomePage",data:function(){return{sites:n,projects:o}}},c=r(55),d=r(223),v=r.n(d),m=r(293),h=r(295),f=r(290),_=r(298),w=r(294),y=r(291),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{color:"blue",app:""}},[e._v("Fred Morel - Software Developer")]),e._v(" "),r("v-main",{staticClass:"grey lighten-3"},[r("v-container",{attrs:{fluid:""}},[r("SectionHeader",{attrs:{title:"Online Presence"}}),e._v(" "),r("v-row",e._l(e.sites,(function(e){return r("v-col",{key:e.name,attrs:{cols:"12",sm:"5",lg:"3",xl:"3"}},[r("Reference",{attrs:{site:e}})],1)})),1),e._v(" "),r("SectionHeader",{attrs:{title:"Projects"}}),e._v(" "),r("v-row",e._l(e.projects,(function(e){return r("v-col",{key:e.name,attrs:{cols:"12",sm:"6",lg:"4",xl:"3"}},[r("Project",{attrs:{project:e}})],1)})),1),e._v(" "),r("SectionHeader",{attrs:{title:"History"}}),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",xl:"4"}},[r("Education")],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",xl:"4"}},[r("Work")],1)],1),e._v(" "),r("SectionHeader",{attrs:{title:"Other"}}),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",xl:"4"}},[r("Downloads")],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",xl:"4"}},[r("Contact")],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{SectionHeader:r(260).default,Reference:r(261).default,Project:r(262).default,Education:r(264).default,Work:r(263).default,Downloads:r(265).default,Contact:r(266).default}),v()(component,{VApp:m.a,VAppBar:h.a,VCol:f.a,VContainer:_.a,VMain:w.a,VRow:y.a})}}]);