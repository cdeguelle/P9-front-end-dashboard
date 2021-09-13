const express = require('express')
const idx = require('idx')

const router = express.Router()

const {
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserPerformance,
    getUserTodayScore, 
    getUserKeyData
} = require('./models')

const {
    handleNoUserData, handleNoUserDataTodayScore
} = require('./middleware')


router.get('/user/:id', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserById(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/user/:id/activity', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserActivityById(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/user/:id/average-sessions', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserAverageSession(Number(userId))

    return handleNoUserData(res, userData)
})


router.get('/user/:id/activities', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserPerformance(Number(userId))

    return handleNoUserData(res, userData)
})

router.get('/user/:id/today-score', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserTodayScore(Number(userId))

    return handleNoUserDataTodayScore(res, userData)
})

router.get('/user/:id/key-data', (req, res) => {
    const userId = idx(req, _ => _.params.id)
    const userData = getUserKeyData(Number(userId))

    return handleNoUserData(res, userData)
})


module.exports = router
