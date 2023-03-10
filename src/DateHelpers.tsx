import dayjs, { Dayjs } from "dayjs"

const timeConstant = 35 / 12;

const formatZero = (val: number) => {
    return val < 10 ? '0' + val.toString() : val.toString();
}

export const formatResult = (result: number | null) => {
  
    const resultValue = result ?? 0;

    const hour = Math.floor(resultValue / 60);
    const minute = Math.floor(resultValue - (hour * 60));

    const seconds = Math.floor((resultValue * 60) - (((hour * 60) + minute) * 60))

    console.log('seconds: ', seconds);
  
    return `${hour}:${formatZero(minute)}:${formatZero(seconds)}`;
}

export const convertEorzeanTime = (t: Dayjs | null):Dayjs | null  => {
    if(t === null) return null;

    const minutes = t.minute();
    const hours = t.hour();

    const totalMinutes = (hours * 60 + minutes);

    const scaledMinutes = (totalMinutes * timeConstant);
    const adjustedMinutes = scaledMinutes / 60;
    
    return dayjs().minute(adjustedMinutes);
}
