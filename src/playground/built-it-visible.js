class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handeToggleVisiblility = this.handeToggleVisiblility.bind(this);
        this.state = ({
            visible: false
        })
    }
    handeToggleVisiblility() {
        this.setState((prevState) => {
            return { visible: !prevState.visible }

        })
        console.log(this.state.visible);
    }
    render() {
        return (<div>
            <button onClick={this.handeToggleVisiblility}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
            {this.state.visible && (
                <div>Here are the details for you..</div>
            )}
        </div>)
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));