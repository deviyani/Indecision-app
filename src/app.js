// const obj = {
//     name: 'xyz',
//     getName() {
//         return this.name;
//     }
// }

// const name = "deviyani";
// const blambdaG = obj.getName.bind(this);
// const ulambdaG = obj.getName;
// // const getName=obj.getName();
// // const getName = obj.getName.bind();
// console.log("Bounded lambdaG: ", blambdaG);
// console.log("Unbounded lambdaG ", ulambdaG);
// // console.log("Bounded & Executed lambdaG: ", blambdaG());
// console.log("Bounded & Executed lambdaG, binding while execution: ", blambdaG.bind(this));
// // console.log("Unbounded & Executed lambdaG: ", ulambdaG());
// console.log("Unbounded & Executed lambdaG, binding while execution: ", ulambdaG.bind(this));

// console.log("getname2: ");
// console.log(getname2());






class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
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
        const title = 'INDECISION';
        return (
            <div>
                <Header title={title} />
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

const Action = (props) => {
    return (
        <div>
            {/* depending on whether there are any options in the state variable options the button is enabled/disabled */}
            <button onClick={props.handlePick} disabled={!props.hasOption}>What should I do?</button>
        </div>
    )

}
 const Options=(props)=>{
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
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))



//demo for stateless functional component
/*
const User = (props) => {
    return (
        <div>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
        </div>
    )


}

ReactDOM.render(<User name="Jane Doe" age={26} />, document.getElementById('app'))
*/
