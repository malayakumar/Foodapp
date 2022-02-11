async function handleGetData (url) {
    try {
        let res = await fetch(url) ;
        let data = await res.json() ;

        return data ;
    }
    catch (err) {
        console.log("err:", err)
    }
}

function handleDisplayMeals (data, location) {
    data.meals.forEach((el) => {
         
        let div = document.createElement("div") ;

        let image = document.createElement("img") ;
        image.src = el.strMealThumb ;

        let title = document.createElement("h3") ;
        title.innerText = el.strMeal ;

        let area = document.createElement("p") ;
        area.innerHTML = `<i class="fas fa-globe-europe" id="font"> ${el.strArea}</i>` ;

        div.append(image,title,area) ;
        location.append(div) ;
    })
}

export {handleGetData, handleDisplayMeals}