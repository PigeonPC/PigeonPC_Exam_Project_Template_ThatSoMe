import { constructPage, readPage } from "./templatingEngine.js";

const dashboard = readPage('public/pages/dashboard/dashboard.html');
export const dashboardPage = constructPage(dashboard, {
    //cssLinks: `<link rel="stylesheet" href="/pages/frontpage/frontpage.css" />`,
    //jsLinks: `<script src="/assets/js/escapeHTML.js" />`
})

const login = readPage('public/pages/login/login.html');
export const loginPage = constructPage(login, {
    tabTitle: "ThatSoMe | Login"
})

const profile = readPage('public/pages/profile/profile.html');
export const profilePage = constructPage(profile, {
    tabTitle: "ThatSoMe | Profile"
})