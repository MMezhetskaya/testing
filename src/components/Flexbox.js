import React from 'react';
import FlexboxItem from'./FlexboxItem.js';
import PropTypes from 'prop-types';

class Flexbox extends React.Component {
    render() {
        let itemsData = this.props.data,
            itemsTemplate = itemsData.map((item, idx) => {
                return (
                    <FlexboxItem data={item} key={idx} />
                )
            });

        return (
            <div className="flexbox">
                {!!itemsTemplate.length ? itemsTemplate : "Каталог товаров пуст"}
            </div>
        )
    }
}


Flexbox.propTypes = {
    data: PropTypes.array.isRequired
};

export default Flexbox;