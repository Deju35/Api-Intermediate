// The task is to get the number of games in a gien year that ended in a draw

    const axios = require('axios');

    let draws= 0;

    const response = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}`);
    const result = response.data
    let pages = result.total_pages;
    for(const count of Array.from({length:pages},(_,i)=>i+1)){
        const response = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&page=${count}`); // iterate over every page
    }
        const res = response.data
        for(const item of res){ // iterate over every game in a page
            if(item.teamgoals1 === item.teamgoals2){// if the score is a tie, add it to draws variable
              draws++;
            }
    }
    }
    return draw
}

  
