import React from "react";
import {Link} from 'react-router-dom';
import NavBarComponent from "../Component/NavBarComponent";

export default class ProfilesContainer extends React.Component {

    state = {
        users: [],
        repos: []
    }

    componentDidMount = () => {
        this.findAllUser()
    }

    findAllUser = () => {
        fetch("https://group-32-node-server.herokuapp.com/codebook/profile/all")
            .then(response => response.json())
            .then(results => this.setState({
                users: results
            }))
    }

    render() {
        return (
            <div>
                <NavBarComponent/>
                <div className="container">

                    <div className="row find-user">
                        <button
                            onClick={this.findAllUser}
                            className="btn btn-warning find-all-users-button">Find All Users</button>
                        <input type="text" placeholder="Search for user" className="form-control search-geeks"
                               width="100"/>
                        <button className="btn btn-info search-geek-button">Search</button>


                    </div>

                    <div className="profile-grid bg-secondary">


                        <div className="col-sm-1 dp">
                            <img src="../images/sajag_dp.jfif" alt="" width="250" height="250"/>
                        </div>

                        {
                            this.state.users.map(user =>
                                <div key={user.user._id} className="col-sm-6">
                                    <div className="row">
                                        <h2 className="geek-name"><b>{user.user.name}</b></h2>
                                    </div>
                                    <div className="row">
                                        <p className="geek-bio">
                                            {user.bio}
                                        </p>
                                    </div>
                                    <div className="row">
                                        <p className="geek-bio">
                                            Quincy, MA
                                        </p>
                                    </div>
                                    <div className="row">
                                        <Link to={`/profiles/${user.user._id}`}>
                                            <span href="#" className="btn btn-danger">Open Profile</span>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }



                    </div>
                </div>
            </div>

        )
    }
}