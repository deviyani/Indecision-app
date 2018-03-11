'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }
    //used for seting the state variable options as empty array


    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
        //randomly chooses one of the options entered in the state variable options(array);

    }, {
        key: 'handlePick',
        value: function handlePick() {
            //randomly selects the index 
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            //random index element in options array is alerted
            var options = this.state.options[randomNum];
            alert(options);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid option';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Option already exists';
            } else {
                this.setState(function (prevState) {
                    return {
                        options: prevState.options.concat(option)
                    };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'INDECISION';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title }),
                React.createElement(Action, { hasOption: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options, handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            props.title
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handlePick, disabled: !props.hasOption },
            'What should I do?'
        )
    );
};
var Options = function Options(props) {
    var arr = props.options;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        arr.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        })
    );
};

//this function is used for rendering the options on screen
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState = {
                error: error //error:error
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

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
