import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
//import jQuery from './js/vendor/jquery/jquery';
class Index extends Component
{
    intervalID;

    constructor(props)
    {
        super(props);
        this.state = 
        {
            loading     : true,
            dic_users   : {}
        }
    }

    componentDidMount() 
    {
        this.getData();
    }

    componentWillMount()
    {
        clearTimeout(this.intervalID); /* stop getData() from continuing to run even after unmounting this component. */
    }

    getData = () => 
    {
        this.setState({ isLoading: true });
        fetch('http://192.168.160.103:10080/')
            .then(response => response.json())
            .then(data => { 
                this.setState
                ({
                    dic_users: data,
                    isLoading: false 
                });
                this.intervalID = setTimeout(this.getData.bind(this), 1); // auto refresh
        });
    } 

    render()
    {
        const {loading, dic_users} = this.state;
        console.log("bro: "+ typeof(dic_users));
        return(
            <div>
                <div id="wrapper">
                    <div id="content-wrapper" class="d-flex flex-column">
                        <div id="content"> {/* main content*/}
                            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                                    <i class="fa fa-bars"></i>
                                </button> 
                                <ul  class="navbar-nav mx-auto">
                                    <li class="nav-item">
                                        <img src={require('./img/logo3.svg')} width="200"/>
                                    </li>
                                </ul>
                            </nav>
                            <div class="container-fluid">
                                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                                </div>
                                
                                {Object.keys(dic_users).map((key) => {
                                    return (
                                        <div class="row justify-content-right">
                                            <div class="col-xl-3 col-md-6 mb-4">
                                                <div class="card border-left-primary shadow h-100 py-2">
                                                    <div class="card-body">
                                                        <div class="row no-gutters align-items-center">
                                                            <div class="col mr-2">
                                                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Username</div>
                                                                <div class="h5 mb-0 font-weight-bold text-gray-800">{key}</div>
                                                            </div>
                                                            <div class="col-auto">
                                                                <i class="fas fa-user-circle fa-2x text-gray-300"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {Object.keys(dic_users[key]).map((key_func) => {
                                                
                                                if (new String("mouse").valueOf() == new String(key_func).valueOf()) {
                                                    return (
                                                            <div class="col-xl-3 col-md-6 mb-4">
                                                                <div class="card border-left-primary shadow h-100 py-2">
                                                                    <div class="card-body">
                                                                        <div class="row no-gutters align-items-center">
                                                                            <div class="col mr-2">
                                                                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">{key_func}</div>
                                                                                <div class="h5 mb-0 font-weight-bold text-gray-800">{dic_users[key][key_func]}</div>
                                                                            </div>
                                                                            <div class="col-auto">
                                                                                <i class="fas fa-mouse-pointer fa-2x text-gray-300"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    )
                                                }

                                                

                                                if (new String("mood").valueOf() == new String(key_func).valueOf()) {
                                                    
                                                    return (
                                                            <div class="col-xl-3 col-md-6 mb-4">
                                                                <div class="card border-left-primary shadow h-100 py-2">
                                                                    <div class="card-body">
                                                                        <div class="row no-gutters align-items-center">
                                                                            <div class="col mr-2">
                                                                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">{key_func}</div>
                                                                                <div class="h5 mb-0 font-weight-bold text-gray-800">{dic_users[key][key_func]}</div>
                                                                            </div>
                                                                            <div class="col-auto">
                                                                                {
                                                                                    (new String("stressed").valueOf() == new String(key_func["mood"]).valueOf()) ?
                                                                                        <span style={{color: "#e37f7f"}}><div><i class="fas fa-frown fa-2x" style={{color:"green"}}></i></div></span>
                                                                                    : (new String("normal").valueOf() == new String(key_func["mood"]).valueOf()) ?
                                                                                        <span style={{color: "#7fe39a"}}><i class="fas fa-smile fa-2x"></i></span>
                                                                                    : (new String("slow").valueOf() == new String(key_func["mood"]).valueOf()) ? 
                                                                                        <span style={{color: "#ebed85"}}><i class="fas fa-meh fa-2x"></i></span> 
                                                                                    :   <div><span style={{color: "#8ebbed"}}><i class="fas fa-meh fa-2x"></i></span> </div> 
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    )
                                                }

                                                if (new String("keys").valueOf() == new String(key_func).valueOf()) {
                                                    return (
                                                        <div class="col-xl-3 col-md-6 mb-4">
                                                            <div class="card border-left-primary shadow h-100 py-2">
                                                                <div class="card-body">
                                                                    <div class="row no-gutters align-items-center">
                                                                        <div class="col mr-2">
                                                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">{key_func}</div>
                                                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{dic_users[key][key_func]}</div>
                                                                        </div>
                                                                        <div class="col-auto">
                                                                            <i class="fas fa-keyboard fa-2x text-gray-300"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                            })}

                                        </div>
                                    )
                                })}
                                
                                
                                {/* <div class="row">
                                    <div class="col-xl-8 col-lg-7">
                                        <div class="card shadow mb-4">
                                            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                                <h6 class="m-0 font-weight-bold text-primary">Fatigue Levels</h6>
                                            </div>
                                            <div class="card-body">
                                                <h2> Feature Coming Soon </h2>
                                            </div>
                                        </div>
                                    </div>
                                <div class="col-xl-4 col-lg-5">
                                    <div class="card shadow mb-4">
                                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 class="m-0 font-weight-bold text-primary">Digital Wellbeing in a day</h6>
                                        </div>
                                        <div class="card-body">
                                            <h2> Feature Coming Soon </h2>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div class="row">
                                <div class="col-lg-6 mb-4">
                                    <div class="card shadow mb-4">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">Measures that weigh more in the diagnosis  </h6>
                                        </div>
                                        <div class="card-body">
                                            <h2> Feature Coming Soon</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card shadow mb-4">
                                        <div class="card-header py-3">
                                            <h6 class="m-0 font-weight-bold text-primary">Mental State</h6>
                                        </div>
                                        <div class="card-body">
                                            <h2> Feature Coming Soon</h2>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        </div>
                    </div>
                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>MoodPrism &copy; 2020</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(Index);


