class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        //getting it's default values from IndecisionApp.defaultProps if nothing is passed
        this.state = {
            options: props.options
        }
    }
    //used for seting the state variable options as empty array
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }

        })
    }
    //randomly chooses one of the options entered in the state variable options(array);
    handlePick() {
        //randomly selects the index 
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        //random index element in options array is alerted
        const options = this.state.options[randomNum];
        alert(options);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists'
        } else {
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat(option)
                }
            })
        }


    }
    render() {
        return (
            <div>
                <Header />
                <Action hasOption={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1> {props.title}</h1>
        </div>
    )
}
// if no title is passed as props then these defaultProps value of title is used
Header.defaultProps = {
    title: 'INDECISION'
}

const Action = (props) => {
    return (
        <div>
            {/* depending on whether there are any options in the state variable options the button is enabled/disabled */}
            <button onClick={props.handlePick} disabled={!props.hasOption}>What should I do?</button>
        </div>
    )

}
const Options = (props) => {
    let arr = props.options;
    return (
        <div>
            {/* onClick of button all the options are deleted */}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {arr.map((option) => <Option key={option} optionText={option} />)}

        </div>
    );
}

//this function is used for rendering the options on screen
const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
        this.setState = {
            error //error:error
        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'></input>
                    <button >Submit</button>
                </form>
            </div >
        );
    }
}

IndecisionApp.defaultProps = {
    options: ['eat', 'sleep', 'work']
}
ReactDOM.render(<IndecisionApp options={["Option one","Option two"]}/>, document.getElementById('app'))
