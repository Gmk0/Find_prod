import{_ as c}from"./ProfileSetting-4f324507.js";import{_ as p}from"./UserLayout-c7332478.js";import l from"./UpdatePasswordForm-0449bb9c.js";import{aL as _,s as e,c as r,f as s,b as o,h as d,o as i}from"./app-f0f8975c.js";import f from"./LogoutOtherBrowserSessionsForm-b9fa99f3.js";import"./MainSidebarUser-35159876.js";/* empty css                                                          */import"./userInfo-94d63046.js";import"./index-2630c011.js";import"./ActionMessage-1b2393a2.js";import"./FormSection-412a718b.js";import"./SectionTitle-8b6dbf4f.js";import"./PrimaryButton-bdff6f04.js";import"./DialogModal-538d48ad.js";import"./SecondaryButton-e406361e.js";import"./TextInput-651039f0.js";const u={class:"flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit"},g={class:"grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6"},h={class:"col-span-12 lg:col-span-8"},v={key:0},x={class:"col-span-12 mt-4 lg:col-span-8"},z=Object.assign({layout:p},{__name:"Security",props:["sessions"],setup(a){return _(),(t,B)=>{const m=e("BreadUser"),n=e("SectionBorder");return i(),r("div",u,[s(m,{title:"Securite",first_title:"Profile",first_url:t.route("profile.show"),second_title:"Securite"},null,8,["first_url"]),o("div",null,[o("div",g,[s(c),o("div",h,[t.$page.props.jetstream.canUpdatePassword?(i(),r("div",v,[s(l,{class:"mt-10 sm:mt-0"}),s(n)])):d("",!0),o("div",x,[s(f,{sessions:a.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"])])])])])])}}});export{z as default};