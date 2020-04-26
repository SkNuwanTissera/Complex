import React, {Component} from 'react';
import axios from 'axios';

class Fib extends Component {
    state = {
        seenIndexes: [],
        values: {},
        index: ''
    }

    componentDidMount(){
        this.fetchValues();
        this.fetchIndexes();
    }

    async fetchValues(){
        const values = await axios.get('/api/values/current');
        this.setState({values: values.data});
    }

    async fetchIndexes(){
        const seenIndexes = await axios.get('/api/values/all');
        this.setState({
            
        });
    }

    renderSeenIndexes(){
         return this.state.seenIndexes.map(({ number }) => number ).join(', ');
    }

    renderValues(){
        const entries = [];

        for(let key in this.state.values){
            entries.push(
                <div key={}>
                    For index {key} I Calculated {this.state.values[key]}
                </div>
            );
        }
    }

    render(){
        return (
            <div>
                <form>
                    <label>Enter your index:</label>
                    <input/> 
                    <button>Submit</button>
                </form>

                <h3>Indexes I have seen: </h3>
                {this.renderSeenIndexes()}

                <h3> =Calculated values</h3>
                {this.renderValues()}

            </div>
        );
    }
};