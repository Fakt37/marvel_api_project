import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class errorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error: true})
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return this.props.children;
    }
}

export default errorBoundary;