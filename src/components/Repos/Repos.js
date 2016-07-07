import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import classes from './Repos.scss'

class Repos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount = () => {
    axios.get('https://api.github.com/repositories')
    .then((response) => {
      this.setState({repos: response.data})
    });
  }

  render () {
    return (
      <div>
        <h2 className={classes.counterContainer}>
          GitHub Repositories
        </h2>
        <table className={classes.repos}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            { this.state.repos.map((repo) => {
              return (
                <tr key={repo.id}>
                  <td>{repo.id}</td>
                  <td>
                    <Link to={repo.url}>
                      {repo.name}
                    </Link>
                  </td>
                  <td>
                    <Link to={repo.owner.html_url}>
                      {repo.owner.login}
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Repos
