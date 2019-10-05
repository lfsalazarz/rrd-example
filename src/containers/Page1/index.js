import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Page1 = () => {
    return (
        <div>
            Page 1
            <ul>
                <li><Link to="/" color="primary">Page1</Link></li>
                <li><Link to="/page2">Page2</Link></li>
                <li><Link to="/page3">Page3</Link></li>
                <li><Link to="/page4">Page4</Link></li>
                <li><Link to="/page5">Page5</Link></li>
                <li><Link to="/page6">Page6</Link></li>
                <li><Link to="/page6/subpage">Page6/SubPage</Link></li>
                <li><Link to="/error404">error404</Link></li>
            </ul>
        </div>
    );
};

export default withRouter(Page1);
