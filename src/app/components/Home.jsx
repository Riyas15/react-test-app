import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { downloadReportAction } from '../actions/admin_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Sidebar, Segment, Menu, Header, Icon, Dropdown } from 'semantic-ui-react';
import UserProductivityDetail from './UserProductivityDetail.jsx';
import Settings from './Settings.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuVisible: false,
            activeItem: "home"
        };
    }
    handleItemClick = (e, { name }) => this.setState({activeItem: name});

    toggleSidebar = () => {
        this.setState({ menuVisible: !this.state.menuVisible });
    }

    render() {
        var activeItem = this.state.activeItem;
        var pusherStyle = { height: "100%", overflow: "auto", width: "92%" }
        
        if (!this.state.menuVisible) {
            pusherStyle.width = "100%";
        }

        return (
            <div style={{ height: "100%" }}>
                <Segment raised style={{ backgroundColor: '#fafafa', height: 60 }}>
                    <div style={{ display: 'inline-block' }}>
                        <Icon style={{
                            display: 'inline-block',
                            cursor: "pointer",
                            float: "left",
                            color: "#606060",
                            marginTop: 4
                        }} onClick={this.toggleSidebar} size='big' name="bars" />

                        <img style={{
                            height: 120,
                            marginTop: -40,
                            float: "left"
                        }} src="../images/textLogo.png" />
                    </div>
                    <div style={{ display: 'inline-block', float: "right", paddingRight: 50 }}>
                        <Menu.Menu style={{ display: 'inline', float: 'right', marginTop: 8 }}>
                            <Dropdown pointing text="Riyas">
                                <Dropdown.Menu onClick={this.logout}>
                                    <Dropdown.Item>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Menu>
                    </div>
                </Segment>

                <Sidebar.Pushable as={Segment} attached="bottom" style={{ marginTop: -15, display: "flex", borderRadius: 0, height: 'calc(100% - 5px)' }}>
                    <Sidebar as={Menu} visible={this.state.menuVisible} activeIndex="0" style={{ flex: "0 0 150px", backgroundColor: '#2c3e50', paddingTop: 30 }} animation='slide along' width='thin' icon='labeled' vertical inline inverted>
                        <Menu.Item as='a' name="home" active={activeItem === 'home'} onClick={this.handleItemClick}>
                            <Icon name='home' />
                            Home
                        </Menu.Item >
                        <Menu.Item as='a' name="settings" active={activeItem === 'settings'} onClick={this.handleItemClick}>
                            <Icon name='gamepad' />
                            Games
                        </Menu.Item>
                        <Menu.Item as='a' name="settings" active={activeItem === 'settings'} onClick={this.handleItemClick}>
                            <Icon name='camera' />
                            Channels
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher style={pusherStyle}>
                        <Segment basic style={{ height: "100%", display: "flex", padding: "10px 0px 0px 0px" }} >
                            {activeItem === 'home' && <UserProductivityDetail />}
                            {activeItem === 'settings' && <Settings />}
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.home
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        downloadReport: downloadReportAction
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
