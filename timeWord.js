function timeWord(string){
    let hours = Number(string.slice(0,2))
    let minutes = Number(string.slice(3))

    let nums = [ "zero", "one", "two", "three", "four", 
        "five", "six", "seven", "eight", "nine", 
        "ten", "eleven", "twelve", "thirteen", 
        "fourteen", "fifteen", "sixteen", "seventeen", 
        "eighteen", "nineteen", "twenty", "twenty one", 
        "twenty two", "twenty three", "twenty four", 
        "twenty five", "twenty six", "twenty seven", 
        "twenty eight", "twenty nine", "thirty", "thirty one", "thirty two","thirty three","thirty four","thirty five","thirty six","thirty seven","thirty eight","thirty nine","forty", "forty one","forty two","forty three","forty four","forty five","forty six","forty seven","forty eight","forty nine","fifty", "fifty one","fifty two","fifty three","fifty four","fifty five","fifty six","fifty seven","fifty eight","fifty nine"]; 

    if (hours >= 24 || minutes > 59){
        return "please input valid military time"
    }
    if (minutes === 0 && hours === 0){
       return "midnight" 
    }
    else if(hours === 12 && minutes === 0){
        return "noon"
    }
    else if ( hours > 12 ){
        let regTime = hours - 12

        if(minutes === 0){
            return  nums[hours] + " " + " o' clock " + " " + "PM"
        }
        else if(minutes >0 && minutes < 10){
            return nums[regTime] + " " + "oh" + " " + nums[minutes] + " " + "PM"
        }else{
            return nums[regTime] + " " + nums[minutes] + " " + "PM"
        }
    }
    else if( hours === 0 ){
        return "twelve" + " " + nums[minutes] + " " + "AM"
    }
    else if(minutes === 0){
        return  nums[hours] + " " + " o' clock " + " " + "AM"
    }
    else if(minutes >0 && minutes < 10){
        return nums[hours] + " " + "oh" + " " + nums[minutes] + " " + "AM"
    }
    else{
        return nums[hours] + " " + nums[minutes] + " " + "AM"
    }
}

module.exports = {
    timeWord
}