import React from 'react'

class UsernameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            username: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmit(this.state.username)
    }

    render() {
        const styles = {
            userForm: {
                fontFamily: 'Montserrat,sans-serif',
                backgroundColor: '#007272',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh',
                flexDirection: 'column',
            },
            userInput: {
                padding: 20,
                fontSize: '1.8em',
                fontFamily: 'Montserrat,sans-serif',
                border: 0,
                borderBottom: '1px solid #ccc',
                width: '510px',
                textAlign: 'center',
            },
            input: {
                Color: '#FFF',
                fontFamily: 'Montserrat,sans-serif',
                border: 0,
                background: 'none',
                boxShadow: 'none',
                borderRadius: '0px',
            },
        }
        return (
            <div>
                <form onSubmit={this.onSubmit} style={styles.userForm}>
                    <input
                        type="text"
                        placeholder="What is your username?"
                        onChange={this.onChange}
                        style={styles.userInput}
                    />
                    <input type="submit" value="Login" style={styles.input}/>
                </form>
            </div>
        )
    }
}

export default UsernameForm