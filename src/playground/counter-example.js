
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        const str_count = localStorage.getItem('count');
        const count = parseInt(str_count, 10);
        if (!isNaN(count)) {
            this.setState(() => ({ count }))
        }
    }

    componentDidUpdate(prevState, prevProps) {
        if (prevState.count !== this.state.count) {
            const count = this.state.count;
            localStorage.setItem('count', count);
            console.log("updated")
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

ReactDOM.render(<Counter count={22} />, document.getElementById('app'));