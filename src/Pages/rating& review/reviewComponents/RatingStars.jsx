import React, {Component} from "react";
import StarRatingComponent from "react-star-rating-component";

import moment from "moment";
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CRUD from "../CRUD";

export default class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: "",
            rating: 5,
            comment: {
                rate: "",
                message: ""
            }
        };

        // bind context to methods
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.editComment = this.editComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //creating a new instance of this class
    crud = new CRUD();

    /**
     * Handle form input field changes & update the state
     */


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
        console.log(this.props.placeId);
        this.crud.get(this.props.placeId).then(res => {
            let avgRate = 0;
            if (res) {
                res.forEach(c => (avgRate += c.rate));
            }
            avgRate = avgRate / res.length;
            this.setState({comments: res, avgRate});
        });
    }

    componentDidMount = async () => {
        setInterval(() => this.refreshData(), 10000);
        this.refreshData();
    }

    /**
     * Form submit handler
     */
    onSubmit(e) {
        // prevent default form submission
        e.preventDefault();
        const data = {
            comment: this.state.comment.message,
            rate: this.state.rating,
            elementId: this.props.movie
        };
        console.log(data);
        if (this.state.comment._id) {
            this.crud.put(this.state.comment._id, data).then(r => {
                console.log(r);
                this.refreshData();
                this.setState({
                    comment: {
                        rate: "",
                        message: ""
                    }
                });
            })
        } else {
            this.crud.post(data).then(r => {
                console.log(r);
                this.refreshData();
                this.setState({
                    comment: {
                        rate: "",
                        message: ""
                    }
                });
            });
        }
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

    renderError() {
        return this.state.error ? (
            <div className="alert alert-danger">{this.state.error}</div>
        ) : null;
    }

    deleteComment= (id) => {
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
            <React.Fragment>
                {this.state.comments &&
                this.state.comments.map(comment => (
                    <div>
                        <div>
                            {comment.author} commented {moment(comment.createdAt).fromNow()}
                        </div>
                        <div>{comment.comment}</div>
                        <div>
                            <StarRatingComponent starCount={5} value={comment.rate}/>
                        </div>
                        <div className={'buttons'}>
                            <button className={'btn'} name={comment._id} onClick={this.editComment}>
                                <EditIcon /></button>
                            <button className={'btn'} name={comment._id} onClick={this.deleteComment}>
                                <DeleteForeverIcon /></button>
                        </div>
                    </div>
                ))}
                <div>
                    <h5>Overall rating:</h5>
                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={this.state.avgRate}
                        onStarClick={this.onStarClick.bind(this)}
                    />
                </div>
                <div>
                    <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={this.state.rating}
                        onStarClick={this.onStarClick.bind(this)}
                    />
                    <form method="post" onSubmit={this.onSubmit}>

                        {this.renderError()}
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
