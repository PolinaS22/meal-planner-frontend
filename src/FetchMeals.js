import axios from 'axios';

const myUrl = 'https://meal-planner-backend-zxp3.onrender.com';

const getAllMeals = (setMeal) => {
    axios.get(`${ myUrl }`)
    .then(({data}) => {console.log(data)
        setMeal(data)
    })
}

const addMeal = (setMeal, title, setTitle) => {
    axios.post(`${ myUrl }/saveMeal`, { title })
    .then(() => {
        setTitle("")
        getAllMeals(setMeal)
    })
}

const editMeal = (setMeal, title, setTitle, mealId, setEditing) => {
    axios.post(`${ myUrl }/editMeal`, { _id: mealId, title })
    .then(() => {
        setTitle("")
        setEditing(false)
        getAllMeals(setMeal)
        
    })
}

const deleteMeal = ( _id, setMeal) => {
    axios.post(`${ myUrl }/deleteMeal`, { _id })
    .then(() => {
        getAllMeals(setMeal)
    })
}

export { getAllMeals, addMeal, editMeal, deleteMeal }