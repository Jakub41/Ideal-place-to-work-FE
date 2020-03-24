import React, { Component } from 'react';

class FavoritesPageIndex extends Component {
    state = {
        starredPlaces: []
    }
    render() {
        return (
            <div>
                <h2>Saved</h2>
                <h4>Here you can find the favorites you starred</h4>
                {/* {this.props.starredPlaces.length >= 1 && this.state.starredPlaces.map((starredPlaces, i) => <div>{this.state.starredPlaces.name}</div> )} */}
            </div>
        );
    }
}

export default FavoritesPageIndex;