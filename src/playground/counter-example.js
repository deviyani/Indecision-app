
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: props.count
        }
    }
    increase() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
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

Counter.defaultProps = {
    count: 0
}
ReactDOM.render(<Counter count={22}/>, document.getElementById('app'));