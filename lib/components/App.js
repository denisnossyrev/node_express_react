import React from 'react';
import ReactDOM from 'react-dom';

//jQuery
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

//boostrap & css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/css/style.css';

//component
class App extends React.Component {
    state = {
        locTime: '',
    };

    setTime = () => {
        setInterval(() => {
            this.setState({
                locTime: (new Date()).toLocaleTimeString('en-US')
            });
        }, 1000);
    };

    componentDidMount() {
        this.setTime();
    }

    render() {
        return(
            <div className="container">
                <h1 className="text-muted">Hello from React</h1>
                <p>Current time: <span className="text-muted">{this.state.locTime}</span></p>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));