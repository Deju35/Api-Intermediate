//In this challenge, the rest api contains information about football matches. The provided api allowys querying matches by teams and years. 
// Your task is to get the number of goals scored by a given team in a gien year


     const axios = require('axios');

    let sum = 0; // total goals cored

    const response = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}`); // matches where the team is playing at home
    const result = response.data
    let pages = result.total_pages;
    for(const count of Array.from({length:pages},(_,i)=>i+1)){
        const response = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=${count}`);// iterate over every game
        const result = response.data
        const { data } = result
        for(const item of data){ // add goals scored to sum
            sum = sum + Number(item.team1goals);
    }
    }

    const response2 = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}`) // matches where the team is playing away
    const result2 = response2.data
    const{ total_pages } = result2;
    for(const count of Array.from({length:total_pages},(_,i)=>i+1)){
        const response = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=${count}`); // iterate over every game
        const result = response.data
        const {data} = result
        for(const item of data){ // add goals to sum
           sum = sum + Number(item.team2goals);
    }
    }
    return sum;

    }

