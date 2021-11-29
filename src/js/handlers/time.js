// UTC TIME - or + difference UTC of the country
const end = new Date("2022-11-21").getTime() + new Date().getTimezoneOffset() * 60000;

const setFormat = num => {
    let numFloor = Math.floor(num);
    return (numFloor < 10) ? `0${numFloor}` : numFloor;
}

export const getTime = () => {
    let days = (end - new Date().getTime()) / 86400000, // convert to ms -> day
    hour = (days % 1) * 24,
    min = (hour % 1) * 60,
    second = (min % 1) * 60
    return{
        d:setFormat(days),
        h:setFormat(hour),
        m:setFormat(min),
        s:setFormat(second)
    }
}