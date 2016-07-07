import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

export default class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    axios.get('https://api.github.com/repositories')
    .then((response) => {
      const {data} = response
      this.setState({
        data,
      })
    })
  }

  render () {
    const {data} = this.state

    return (
      <div>
        {
          JSON.stringify(data)
        }
      </div>
    )
  }
}
