// the fech Api provide and intraface for fachi resourese
// fechsend ing and recevering


// it used for requeverst and responce 

// syntax
// const promise = fetch("url")
// console.log(promise)


const myApi =async()=>{
    
    let mayPara =document.getElementById("mayPara")

    console.log("get... data")

    const res = await  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
    console.log(res)

    let data = await res.json()

    console.log(data.meals[0].strCategory)

    mayPara.innerHTML=data.meals[0].strCategory







}

// myApi()







