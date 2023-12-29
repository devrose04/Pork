window.dataLayer = window.dataLayer || [], function (a) { var b = function (a) { for (var b, d = a + "=", e = document.cookie.split(";"), f = 0; f < e.length; f++) { for (b = e[f]; " " == b.charAt(0);)b = b.substring(1, b.length); if (0 == b.indexOf(d)) return b.substring(d.length, b.length) } return null }("userSessionID"), c = { login_status: "guest", type: "", account_id: "", employee_number: "", signup_date: "", ip_address: "", cms_user_id: "", no_of_applications: 0, session_id: b }; if (a) { var d = a.existingSession(); d.logged_in && (c.login_status = "member", c.type = "candidate", c.account_id = d.user_id, c.employee_number = d.user_id, c.signup_date = d.signup_date, c.no_of_applications = parseInt(d.no_of_applications)), c.ip_address = a.getCookie("ip_address"), c.cms_user_id = a.getCookie("cms_user_id") } window.dataLayer.push({ user: c }) }(window.myRandClient); function parseFormData(a) { for (var b, c = a.entries(), d = c.next(), e = []; !d.done;)b = d.value, e[b[0]] = b[1], d = c.next(); return e } window.addEventListener("formSubmitSuccess", function (a) { var b = parseFormData(a.detail.formdata), c = !1, d = "", e = ""; let f = !1, g = !1; b && 0 < Object.keys(b).length && "webform_id" in b && ("contact_us_global" === b.webform_id ? (f = "generic", g = "contact", "other" === b.type ? (c = "[H] General", d = "[H] Soft Conversion", e = "[H] Contact Form Submitted") : "job seeker" === b.type ? (f = "talent", g = "contact") : "employer" === b.type && (f = "client", g = "contact")) : "contact_us_branch" === b.webform_id ? (f = "generic", g = "contact", "other" === b.i_am_a ? (c = "[H] General", d = "[H] Soft Conversion", e = "[H] Contact Form Submitted") : "job seeker" === b.i_am_a ? (f = "talent", g = "contact") : "employer" === b.i_am_a && (f = "client", g = "contact")) : "submit_a_request" === b.webform_id ? (c = "[H] Client", d = "[H] Hard Conversion", e = "[H] Staffing Request Submitted", f = "client", g = "staffing request") : "join_randstad" === b.webform_id ? (c = "join randstad", d = "complete", e = "", f = !0, g = "join randstad") : "request_a_callback" === b.webform_id && (c = "[H] Client", d = "[H] Soft Conversion", e = "[H] Call-Me-Back Form Submitted", f = "client", g = "call me back")), c && dataLayer.push({ eventCategory: c, eventAction: d, eventLabel: e, event: "eventTracker" }), f && g && (window.dataLayer.push({ event_params: null }), window.dataLayer.push({ event: "interaction", event_params: { event_name: "form_submit", user_type: !0 === f ? "" : f, form_name: g, form_id: b.webform_id ? b.webform_id : "" } })) }), window.addEventListener("message", function (a) { if ("hsFormCallback" === a.data.type && "onFormSubmit" === a.data.eventName) { var b = !1, c = "", d = ""; let f = !1, g = !1; if ("7537de46-426b-4553-bd1e-3f78c27ff399" === a.data.id || "16bf8c85-e5bc-48b8-abbf-769dba1969c3" === a.data.id || "b2360b8b-941a-4ebe-b365-27c5d7880c8b" === a.data.id || "67ef13e9-87f1-4a8a-928b-e1c7378ddcca" === _e.data.id || "d42a3379-6de2-4b61-a46f-9463ba4f189a" === a.data.id) { var e; a.data.data.length && a.data.data.forEach(function (a) { "employer_job_seeker_employer_looking_to_hire_immediately" === a.name && (e = a.value) }), e ? "a job seeker" === e ? (b = "[H] Candidate", f = "talent", g = "contact") : "an employer" === e || "an employer looking to hire immediately" === e ? (b = "[H] Client", f = "client", g = "contact") : (b = "[H] General", f = "generic", g = "contact") : (b = "[H] General", f = "generic", g = "contact"), c = "[H] Soft Conversion", d = "[H] Contact Form Submitted" } b && window.dataLayer.push({ eventCategory: b, eventAction: c, eventLabel: d, event: "eventTracker" }), f && g && (window.dataLayer.push({ event_params: null }), window.dataLayer.push({ event: "interaction", event_params: { event_name: "form_submit", user_type: f, form_name: g } })) } }), document.addEventListener("DOMContentLoaded", function () { const a = document.querySelectorAll("input[type='email'], input[type='tel'], input[type='text']"); a.forEach(function (a) { a.addEventListener("focus", b => { if (a.hasAttribute("name")) { var c = "", d = a.closest("form") || []; if (0 < d.length) { let a = d.querySelectorAll("input[type='hidden']"); a.forEach(function (a) { ("form_id" === a.name || "webform_id" === a.name) && (c = a.value) }) } var e = ""; "contact_us_global" === c ? e = "contact" : "contact_us_branch" === c ? e = "contact" : "submit_a_request" === c ? e = "staffing request" : "join_randstad" === c ? e = "join randstad" : "request_a_callback" === c && (e = "call me back"), window.dataLayer.push({ event_params: null }), window.dataLayer.push({ event: "interaction", event_params: { event_name: "form_focus", form_name: e, form_id: c, field_focus: b.target.name } }) } }) }) });