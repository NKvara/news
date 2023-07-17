import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

export const secondsToAgo = (seconds: number) =>{
    const ta = new TimeAgo('en-US')
    return ta.format(seconds * 1000)
}
