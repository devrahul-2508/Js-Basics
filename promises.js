const users = [
    {id : 1, name : 'Rahul' },
    {id : 2, name : 'Biswajit'},
    {id : 3, name : 'Rupa'}
]

const articles = [
    {userId : 1,articles : ['one','two','three']},
    {userId : 2,articles : ['four','five','six']},
    {userId : 3,articles : ['seven','eight','nine']}
]

getUser('Rahul')
.then((user)=> getArticles(user.id).then((article)=> console.log(article)).catch((err)=> console.log(err)))
.catch((err)=> console.log(err))

function getUser(name){
    return new Promise((resolve,reject) =>{
        const user = users.find((user) => user.name === name)

        if(user){
                 resolve(user)
        }
        else{
                 reject("User not found")
        }
    })
}

function getArticles(userID){
    return new Promise((resolve,reject)=>{
        const article = articles.find(article => article.userId==userID)

        if(article){
            resolve(article)
        }
        else{
            reject("Article not found")
        }
    })
}

