const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')




// news api

newsRouter.get('/app/news', async(req,res)=>{
    try{
        const newsApi = await axios.get('https://newsapi.org/v2/top-headlines?country=ng&apiKey=d013c87fc74a40dbb05184c3fadad1be')
        // console.log((newsApi.data))
        res.render('news',{articles:newsApi.data})
    }catch(err){
            if(err.response){
                res.render('news', {articles:null})  //if there is mistake in link this handles it
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }else if(err.request){
                res.render('news', {articles:null}) 
                console.log(err.request);
            }else{
                res.render('news', {articles:null}) 
                console.error('Error', err.message)
            }
            
        }

})



module.exports = newsRouter;