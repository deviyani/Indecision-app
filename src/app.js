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
    render() {
        const title = 'INDECISION';
        const options = ['thing one', 'thing two', 'thing three'];
        return (
            <div>
                <Header title={title} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}


class Header extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h1> {this.props.title}</h1>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlepick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}
class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.options);
        alert("some message");
    }
    render() {
        let arr = this.props.options;
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {arr.map((option) => <Option key={option} optionText={option} />)}

            </div>
        );
    }
}
class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }

}
class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'></input>
                    <button >Submit</button>
                </form>
            </div >
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))