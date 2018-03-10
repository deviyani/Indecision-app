
class Counter extends React.Component {
    constructor() {
        super();
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }
    increase() {
        // let count = this.state.count;
        // this.setState({
        //     count: (count += 1)
        // })
        this.setState((prevState)=>{
            return{
                count:prevState.count+1
            }

        })
    }
    decrease() {
        let count = this.state.count;
        this.setState({
            count: (count -= 1)
        })
    }
    reset() {
        let count = this.state.count;
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div>
                <h1> COUNT:{this.state.count}</h1>
                <button onClick={this.increase}>+1</button>
                <button onClick={this.decrease}>-1</button>
                <button onClick={this.reset}>RESET</button>
            </div>
        )
    }

}
ReactDOM.render(<Counter />, document.getElementById('app'));