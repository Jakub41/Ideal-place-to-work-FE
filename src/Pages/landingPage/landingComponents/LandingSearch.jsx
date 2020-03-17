
import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap'

class LandingSearch extends Component {
    render() {
        return (
            <div id="SearchDiv">

                <Form>
                    <Input className="searchInput" type="search" placeholder="wifi cafe near me" aria-label="Search"/>
                    <Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>
                </Form>


            </div>
        );
    }
}

export default LandingSearch;