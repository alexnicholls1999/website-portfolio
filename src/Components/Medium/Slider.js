import React, {Component} from 'react';
import { Col, Row } from 'react-bootstrap';
import MediumCard from './MediumCard';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { itemRows: [], avatar: '', profileLink: ''};
    }
    mediumURL ='https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@azini_76170';

    componentDidMount() {
        fetch(this.mediumURL)
        .then(res => res.json())
        .then(data => {
            const avatar = data.feed.image;
            const profileLink = data.feed.link;
            const res = data.items;
            const posts = res.filter(item => item.categories.length > 0);

            this.setState({ avatar: avatar, profileLink: profileLink});
            const itemRows = [];
            posts.forEach((item, i) => {
                item['avatar'] = this.state.avatar;
                item['profilelink'] = this.state.profileLink;
                const row = Math.floor(i / 2);
                if (!itemRows[row]) itemRows[row] = [];
                    itemRows[row].push(item);
            });
            this.setState({ itemRows: itemRows});
            console.log(itemRows);
        });
    }

    render() {
        return (
            <div> 
                {this.state.itemRows.map((row, i) => (
                    <Row key={i}>
                        {row.map((item, j) => (
                            <Col style={{paddingBottom: "20px"}} key={j} lg="6" md="6" sm="12">
                                <MediumCard {...item} />
                            </Col>
                        ))}
                    </Row>
                ))}
            </div>
        );
    }
}


export default Slider;