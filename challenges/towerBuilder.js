const { floralwhite } = require("color-name")

function towerBuilder(nFloors) {
    let floors = 1
    let building = []
    while( floors <= nFloors ){
        building = [...building,'*'.repeat(floors)]
        floors++
    }
    return building
}

towerBuilder(4)

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).