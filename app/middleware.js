const handleNoUserData = (res, userData) => {
    if (!userData) {
        res.statusCode = 404
        return res.json('can not get user')
    }

    return res.json({data: userData})
}

const handleNoUserDataTodayScore = (res, userData) => {
    if (!userData) {
        res.statusCode = 404
        return res.json('can not get user')
    }

    return res.json({todayScore: userData})
}

module.exports = {
    handleNoUserData,
    handleNoUserDataTodayScore
}
