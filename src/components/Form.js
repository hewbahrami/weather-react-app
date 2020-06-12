import React from 'react'

const Form = props => {
    return (
        <form className="search-bar" onSubmit={props.getWeather}>
            <button type="submit" className="btn fa fa-search form-control-feedback shadow-none"></button>
            <input type="text" autocomplete="off" className="form-control shadow-none" name="city" placeholder="City"></input>
        </form>
    )
}

export default Form
