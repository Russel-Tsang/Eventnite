const MONTHS = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "June",
    7: "Jul",
    8: "Aug",
    9: "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec"
}

export const toMonth = (num) => {
    if (typeof num === 'number') return MONTHS[num];
    return "";
}

export const toMinutes = (timeStr) => {
    let hour = Number(timeStr.slice(0, timeStr.indexOf(":")));
    let pastNoon = timeStr[timeStr.length - 2] === "P" ? true : false;
    let halfHour = timeStr[timeStr.length - 5] === "3" ? true : false;
    let newTime;
    if (hour === 12 && !pastNoon) {
        newTime = 0;
    } else if (!pastNoon || hour === 12 && pastNoon) {
        newTime = hour * 60;
    } else {
        newTime = hour * 60 + 720;
    }
    if (halfHour) newTime += 30;
    return newTime;
}

export const toTime = (minutes) => {
    let hour = String(Math.floor(minutes / 60));
    let minute = minutes % 60 === 0 ? '00' : '30';
    let period = minutes < 720 ? "AM" : "PM";
    return `${hour}:${minute} ${period}`;
}