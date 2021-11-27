export const timeFunctions = {
    getTimeData: () => {
        // UTC TIME
        let days = (new Date("2021-11-28").getTime() - new Date().getTime()) / 86400000 // convert to ms -> day
        let hour = (days % 1) * 24
        let min = (hour % 1) * 60
        let second = (min % 1) * 60
        let d = (Math.floor(days) < 10) ? `0${Math.floor(days)}` : Math.floor(days) 
        let h = (Math.floor(hour) < 10) ? `0${Math.floor(hour)}` : Math.floor(hour) 
        let m = (Math.floor(min) < 10) ? `0${Math.floor(min)}` : Math.floor(min) 
        let s = (Math.floor(second) < 10) ? `0${Math.floor(second)}` : Math.floor(second) 
        return {d,h,m,s}
    }
}