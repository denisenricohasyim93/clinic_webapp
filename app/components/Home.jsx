import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="route_section" id="home_route">
                <h2>To build:</h2>
                <br />
                <ul>
                    <li>Recent Activities (if admin: show recent activities for all users in the clinic)</li>
                    <li>Near upcoming appointments</li>
                    <li>Notifications for events (can be customized in settings)</li>
                    <li>Time and date</li>
                    <li>Add note functionality here => (new user) or (existing)</li>
                </ul>
            </div>
        );
    }
}

export default Home;