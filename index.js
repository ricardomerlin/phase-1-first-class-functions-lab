const returnFirstTwoDrivers = function(array) {
    const newArray = [...array.slice(0,2)]
    return newArray;
}

const returnLastTwoDrivers = function(array) {
    const newArray = array.slice(-2)
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function(multiple) {
        return fare*multiple
    }
}



const fareDoubler = function(multiple) {
    return createFareMultiplier(2)(multiple)
}

const fareTripler = function(multiple) {
    return createFareMultiplier(3)(multiple)
}


function selectDifferentDrivers(array, func){
    return func(array);
}

