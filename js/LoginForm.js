"use strict";
class PersonForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {sex: 'female', firstName: '', lastname: '', email: '', phone: ''};
      this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(event) {
      const name = event.target.name;
      this.setState({[name]: value});
    }

    render() {
      return (
        <form>
          <label>First Name: <input name="firstName"  type="text"
                               value={this.state.firstName} onChange={this.onChangeInput}/></label>
          <label> Last Name: <input name="lastName"  type="text"
                               value={this.state.lastName} onChange={this.onChangeInput}/></label>
          <label> Email: <input name="email"  type="email"
                               value={this.state.email} onChange={this.onChangeInput}/></label>
          <label> Phone: <input name="phone"  type="tel"
                               value={this.state.phone} onChange={this.onChangeInput}/></label>
          <label> Sex: <select name="sex"  value={this.state.sex} onChange={this.onChangeInput}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </form>
      );
    }
  }

  ReactDOM.render(<PersonForm />,  document.getElementById('root'));