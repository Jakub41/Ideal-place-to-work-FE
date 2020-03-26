import React, {Component} from 'react';
import moment from "moment";
import Api from "../../../Api";


class UserReview extends Component {
    state = {
        loading: false,
        error: "",
        rating: 5,
        comment: {
            rate: "",
            message: ""
        }
    };
    // deleteComment = this.deleteComment.bind(this);
    // handleFieldChange = this.handleFieldChange.bind(this);
    // onSubmit = this.onSubmit.bind(this);
    // editComment = this.editComment.bind(this);

    handleFieldChange = event => {
        const {value, name} = event.target;

        this.setState({
            ...this.state,
            comment: {
                ...this.state.comment,
                [name]: value
            }
        });
    };

    refreshData() {
        // Api.fetch(this.props.places).then(res => {
        //     let avgRate = 0;
        //     if (res) {
        //         res.forEach(c => (avgRate += c.rate));
        //     }
        //     avgRate = avgRate / res.length;
        //     this.setState({comments: res, avgRate});
        // });
    }

    componentDidMount() {
        this.refreshData();
    }

    onSubmit(e) {
        // prevent default form submission
        e.preventDefault();
        const data = {
            comment: this.state.comment.message,
            rate: this.state.rating,
            elementId: this.props.places
        };
        console.log(data);
        if (this.state.comment._id) {
            this.crud.put(this.state.comment._id, data).then(r => {
                console.log(r);
                this.refreshData();
                this.setState({ comment: {
                        rate: "",
                        message: ""
                    }});
            });
        } else {
            this.crud.post(data).then(r => {
                console.log(r);
                this.refreshData();
                this.setState({ comment: {
                        rate: "",
                        message: ""
                    }});
            });
        }
    }
    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    }



    deleteComment(id) {
        console.log(id.currentTarget.name);
        this.crud.delete(id.currentTarget.name).then(result => {
            console.log(result);
            this.refreshData();
        });

    }

    editComment(id) {
        const c = this.state.comments.find((comment) => id.currentTarget.name === comment._id);
        if (c) {
            const editComment = JSON.parse(JSON.stringify(c));
            editComment.message = editComment.comment;
            this.setState({comment: editComment, rating: editComment.rate});
        }
    }

    render() {
        return (
            <div style={{'margin-top': '10px'}}>
                {this.state.comments &&
                this.state.comments.map(comment => (
                    <div key={comment._id} style={{'border': 'solid 1px black', 'border-radius': '5px'}}>
                        <div>
                            {comment.author} commented {moment(comment.createdAt).fromNow()}
                        </div>

                        <div>{comment.comment}</div>
                        <button className={'btn btn-sm'} name={comment._id} onClick={this.editComment}><i
                            className="material-icons">edit</i></button>
                        <button className={'btn btn-sm'} name={comment._id} onClick={this.deleteComment}><i
                            className="material-icons">delete</i></button>
                    </div>))
                }
            </div>)
    }
}
export default UserReview;
