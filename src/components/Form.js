import React from 'react'

const Form = props => {
    return (
        <form className="title-form" onSubmit={props.getWeather}>
            <button type="submit" className="btn fa fa-search form-control-feedback"></button>
            <input type="text" className="form-control" name="city" placeholder="City"></input>
        </form>
    )
}

export default Form
