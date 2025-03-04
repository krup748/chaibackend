require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData =  {
  "login": "ivey",
  "id": 6,
  "node_id": "MDQ6VXNlcjY=",
  "avatar_url": "https://avatars.githubusercontent.com/u/6?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ivey",
  "html_url": "https://github.com/ivey",
  "followers_url": "https://api.github.com/users/ivey/followers",
  "following_url": "https://api.github.com/users/ivey/following{/other_user}",
  "gists_url": "https://api.github.com/users/ivey/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ivey/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ivey/subscriptions",
  "organizations_url": "https://api.github.com/users/ivey/orgs",
  "repos_url": "https://api.github.com/users/ivey/repos",
  "events_url": "https://api.github.com/users/ivey/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ivey/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false

}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('krupadotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github'),(req,res)=>{
  res.json(githubData)
}

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
