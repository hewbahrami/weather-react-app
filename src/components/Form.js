import React from 'react'

const Form = props => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City"></input>
            <button type="submit">Get weather</button>
        </form>
    )
}

export default Form
