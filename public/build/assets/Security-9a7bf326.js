import{_ as c}from"./ProfileSetting-afa46723.js";import{_ as p}from"./UserLayout-9ba2076b.js";import l from"./UpdatePasswordForm-a97f8df0.js";import{aL as _,s as e,c as r,f as s,b as o,h as d,o as i}from"./app-f175eda0.js";import f from"./LogoutOtherBrowserSessionsForm-363f0885.js";import"./MainSidebarUser-ca2f2fcb.js";/* empty css                                                          */import"./userInfo-bcdc7c94.js";import"./ActionMessage-a47e118f.js";import"./FormSection-a2f320aa.js";import"./SectionTitle-951e3812.js";import"./PrimaryButton-a79368f1.js";import"./DialogModal-5820e387.js";import"./SecondaryButton-fffc9e97.js";import"./TextInput-805942ce.js";const u={class:"flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit"},g={class:"grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6"},h={class:"col-span-12 lg:col-span-8"},v={key:0},x={class:"col-span-12 mt-4 lg:col-span-8"},q=Object.assign({layout:p},{__name:"Security",props:["sessions"],setup(a){return _(),(t,B)=>{const m=e("BreadUser"),n=e("SectionBorder");return i(),r("div",u,[s(m,{title:"Securite",first_title:"Profile",first_url:t.route("profile.show"),second_title:"Securite"},null,8,["first_url"]),o("div",null,[o("div",g,[s(c),o("div",h,[t.$page.props.jetstream.canUpdatePassword?(i(),r("div",v,[s(l,{class:"mt-10 sm:mt-0"}),s(n)])):d("",!0),o("div",x,[s(f,{sessions:a.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"])])])])])])}}});export{q as default};
