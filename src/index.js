import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMessege: '' };

    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessege: err.messege })
        );      
    }

    renderContent() {
        if (this.state.errorMessege && !this.state.lat) {
            return <div>Error: {this.state.errorMessege}</div>;
        }

        if (!this.state.errorMessege && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <div> <Spinner messege="Please, accept location request"/></div>;
    }

    // React says we have to define render!!
    render() {       
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));