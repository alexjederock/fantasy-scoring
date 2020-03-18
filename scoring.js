

function passingPoints(player) {
    let ptsPeryard = player.stats.passing.yards / 25
    let ptsPertouch = player.stats.passing.touchdowns * 6
    let ptsPerinter = player.stats.passing.interceptions * -3
    return ptsPeryard + ptsPertouch + ptsPerinter
}

function receivingPoints(player) {

    let ptsPerrecp = player.stats.receiving.receptions
    let ptsPertouch = player.stats.receiving.touchdowns * 6
    let ptsPeryard = player.stats.receiving.yards / 10
    let ptsPerfumbles = player.stats.receiving.fumbles * -3
    return ptsPerrecp + ptsPertouch + ptsPeryard + ptsPerfumbles

}

function rushingPoints(player) {
    let ptsPeryard = player.stats.rushing.yards / 10
    let ptsPertouch = player.stats.rushing.touchdowns * 6
    let ptsPerfumbles = player.stats.rushing.fumbles * -3
    return ptsPertouch + ptsPeryard + ptsPerfumbles

}

function returnkickPoints(player) {
    let ptsPeryard = player.stats.return.kickreturn.yards / 15
    let ptsPertouch = player.stats.return.kickreturn.touchdowns * 6
    let ptsPerfumbles = player.stats.return.kickreturn.fumbles * -3


    return ptsPerfumbles + ptsPertouch + ptsPeryard

}

function returnpuntPoints(player) {
    let ptsPeryard = player.stats.return.puntreturn.yards / 15
    let ptsPertouch = player.stats.return.puntreturn.touchdowns * 6
    let ptsPerfumbles = player.stats.return.puntreturn.fumbles * -3


    return ptsPerfumbles + ptsPertouch + ptsPeryard
}



function calculateScore(player) {

    if (player.position === "QB") {
        return passingPoints(player) + rushingPoints(player)




    } else if (player.position === "RB") {
        return rushingPoints(player) + receivingPoints(player) + returnkickPoints(player) + returnpuntPoints(player)




    } else if (player.position === "WR") {
        return rushingPoints(player) + receivingPoints(player) + returnkickPoints(player) + returnpuntPoints(player)






    } else if (player.position === "TE") {
        return receivingPoints(player)



    } else {
        return 0;
    }



}
module.exports = calculateScore;