import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap'

class LandingSearch extends Component {
    render() {
        return (
            <div id="SearchDiv">
                import React, {Component} from 'react';

                <Form>
                    <Input className="searchInput" type="search" placeholder="wifi cafe near me" aria-label="Search"/>
                    <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
                </Form>


            </div>
        );
    }
}

export default LandingSearch;

class LandingSearch extends Component {
    render() {
        return (
            <div>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default LandingSearch;