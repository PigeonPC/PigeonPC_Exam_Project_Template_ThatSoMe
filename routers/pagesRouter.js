import { Router } from 'express';
import { dashboardPage, loginPage, profilePage } from '../templatingEngine/pages.js';

const router = Router();

router.get('/', (req, res) => {
    res.send(dashboardPage);
})

router.get('/login', (req, res) => {
    res.send(loginPage);
})

router.get('/profile', (req, res) => {
    res.send(profilePage);
})

export default router;