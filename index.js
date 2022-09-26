// Code your solution in this file!
const returnFirstTwoDrivers =(driverArr) => {return driverArr.slice(0,2)}
const returnLastTwoDrivers = (driverArr) => {return driverArr.slice(-2)};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (ride) => {
    return (fare) => {
        return ride * fare;
    }
}
const fareDoubler = (fare) => {return fare *2}
const fareTripler = (fare) => {return fare *3}
const selectDifferentDrivers = (driver,func) => { return func(driver)}